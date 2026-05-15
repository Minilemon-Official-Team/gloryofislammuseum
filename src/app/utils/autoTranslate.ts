import type { UILang } from '../context/UILanguageContext';

const GTX_ENDPOINT = 'https://translate.googleapis.com/translate_a/single';

const TARGET_CODE: Record<UILang, string> = {
  id: 'id',
  en: 'en',
  zh: 'zh-CN',
};

// In-memory cache: key `${lang}::${text}` -> translated text
const cache = new Map<string, string>();

function cacheKey(lang: UILang, text: string) {
  return `${lang}::${text}`;
}

async function fetchTranslation(text: string, lang: UILang): Promise<string> {
  const url =
    `${GTX_ENDPOINT}?client=gtx&sl=auto&tl=${TARGET_CODE[lang]}&dt=t&q=` +
    encodeURIComponent(text);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`translate request failed: ${res.status}`);
  const data = await res.json();
  const segments: unknown = data?.[0];
  if (!Array.isArray(segments)) return text;
  const out = segments
    .map((seg) => (Array.isArray(seg) ? (seg[0] ?? '') : ''))
    .join('');
  return out || text;
}

async function translateOne(text: string, lang: UILang): Promise<string> {
  const key = cacheKey(lang, text);
  const cached = cache.get(key);
  if (cached !== undefined) return cached;
  try {
    const result = await fetchTranslation(text, lang);
    cache.set(key, result);
    return result;
  } catch {
    return text; // graceful fallback: keep original text
  }
}

// Translate a list of texts; returns a map original -> translated.
export async function translateMany(
  texts: string[],
  lang: UILang
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const unique = [...new Set(texts)].filter((t) => t.length > 0);
  const CONCURRENCY = 8;
  let cursor = 0;

  async function worker() {
    while (cursor < unique.length) {
      const text = unique[cursor++];
      result.set(text, await translateOne(text, lang));
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, unique.length) }, worker)
  );
  return result;
}
