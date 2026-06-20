"""Export museum narration source text into worker/data/content.id.json.

The Worker translation pipeline uses this JSON as Indonesian source text:
  { content_key: source_text }

Keys intentionally match the frontend lookup rules:
- Auto Guide zone summaries: to_zone_key(zone.name)
- All Zone thematics: to_zone_key(thematic.title)
"""
from __future__ import annotations

import ast
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "worker" / "data" / "content.id.json"
MUSEUM_DATA = ROOT / "src" / "app" / "data" / "museumData.ts"
ALL_ZONE_DATA = ROOT / "src" / "app" / "data" / "allZoneData.ts"


def to_zone_key(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[()&]", "", value)
    value = re.sub(r"[^a-z0-9\s]", "", value)
    value = value.strip()
    value = re.sub(r"\s+", "_", value)
    return value


def parse_ts_string_literal(literal: str) -> str:
    # TypeScript string literals used in these data files are compatible enough
    # with Python literal parsing for the single/double-quoted cases here.
    return ast.literal_eval(literal)


def extract_property(block: str, prop: str) -> str | None:
    match = re.search(rf"\b{re.escape(prop)}\s*:\s*", block)
    if not match:
        return None
    i = match.end()
    if i >= len(block) or block[i] not in "'\"":
        return None
    quote = block[i]
    escaped = False
    for j in range(i + 1, len(block)):
        ch = block[j]
        if escaped:
            escaped = False
            continue
        if ch == "\\":
            escaped = True
            continue
        if ch == quote:
            return parse_ts_string_literal(block[i : j + 1])
    return None


def iter_object_blocks(source: str):
    """Yield every object-literal-like brace block in source.

    The data files contain nested arrays of plain object literals. We yield every
    brace block and later keep only blocks with the properties we need. Strings
    are tracked so braces inside narration text do not affect scanning.
    """
    stack: list[int] = []
    quote = None
    escaped = False
    for i, ch in enumerate(source):
        if quote:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == quote:
                quote = None
            continue
        if ch in "'\"":
            quote = ch
            continue
        if ch == "{":
            stack.append(i)
        elif ch == "}" and stack:
            start = stack.pop()
            yield source[start : i + 1]


def export_content() -> dict[str, str]:
    content: dict[str, str] = {}

    museum_source = MUSEUM_DATA.read_text(encoding="utf-8")
    for block in iter_object_blocks(museum_source):
        name = extract_property(block, "name")
        description = extract_property(block, "description")
        if name and description:
            content[to_zone_key(name)] = description

    all_zone_source = ALL_ZONE_DATA.read_text(encoding="utf-8")
    for block in iter_object_blocks(all_zone_source):
        title = extract_property(block, "title")
        text_id = extract_property(block, "textId")
        if title and text_id:
            content[to_zone_key(title)] = text_id

    return dict(sorted(content.items()))


def main() -> None:
    content = export_content()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(content, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(content)} content entries to {OUT}")


if __name__ == "__main__":
    main()
