import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { getPostBySlug, type CmsPost } from "../../lib/cmsApi";

const HTML_CONTENT_PATTERN = /<\/?[a-z][\s\S]*>/i;
const ALLOWED_ARTICLE_TAGS = new Set([
  "A", "B", "BLOCKQUOTE", "BR", "EM", "H1", "H2", "H3", "H4", "HR", "I", "IMG", "LI", "OL", "P", "S", "SPAN", "STRONG", "U", "UL",
]);

function sanitizeArticleHtml(content: string) {
  if (!HTML_CONTENT_PATTERN.test(content)) return content;

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${content}</div>`, "text/html");
  const root = doc.body.firstElementChild;
  if (!root) return "";

  root.querySelectorAll("*").forEach((element) => {
    if (!ALLOWED_ARTICLE_TAGS.has(element.tagName)) {
      element.replaceWith(...Array.from(element.childNodes));
      return;
    }

    Array.from(element.attributes).forEach((attr) => {
      const name = attr.name.toLowerCase();
      const value = attr.value.trim();

      if (name.startsWith("on")) element.removeAttribute(attr.name);
      else if (name === "style") {
        const align = value.match(/text-align:\s*(left|right|center|justify)/i)?.[1];
        if (align) element.setAttribute("style", `text-align: ${align.toLowerCase()}`);
        else element.removeAttribute("style");
      } else if (element.tagName === "A" && name === "href") {
        if (/^javascript:/i.test(value)) element.removeAttribute("href");
      } else if (element.tagName === "IMG" && ["src", "alt", "title"].includes(name)) {
        if (name === "src" && /^javascript:/i.test(value)) element.removeAttribute("src");
      } else {
        element.removeAttribute(attr.name);
      }
    });

    if (element.tagName === "A" && element.getAttribute("href")) {
      element.setAttribute("target", "_blank");
      element.setAttribute("rel", "noopener noreferrer");
    }
  });

  return root.innerHTML;
}

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<CmsPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getPostBySlug(slug)
      .then((data) => {
        if (!data) setError("Article not found");
        else setPost(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-[#F4EFE6] min-h-screen flex items-center justify-center">
        <p className="text-[#5A5A5A]">Loading...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-[#F4EFE6] min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-[#5A5A5A] text-lg">{error || "Article not found"}</p>
        <Link to="/news" className="text-[#8C6B3E] hover:underline">
          Back to News
        </Link>
      </div>
    );
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[800px] mx-auto">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-[#8C6B3E] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>

        {post.cover_image_url && (
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        )}

        <div className="flex items-center gap-3 mb-4">
          {post.category && (
            <span className="px-3 py-1 bg-[#8C6B3E] text-white text-xs rounded-full">
              {post.category}
            </span>
          )}
          <div className="flex items-center gap-1 text-[#8C6B3E] text-sm">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.published_at)}</span>
          </div>
        </div>

        <h1 className="font-['Cinzel'] text-3xl md:text-4xl text-[#2B2B2B] mb-8">
          {post.title}
        </h1>

        {HTML_CONTENT_PATTERN.test(post.content) ? (
          <div
            className="max-w-none text-[#5A5A5A] leading-relaxed [&_a]:text-[#8C6B3E] [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-[#8C6B3E] [&_blockquote]:pl-4 [&_h1]:mb-4 [&_h1]:mt-8 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:mb-3 [&_h2]:mt-7 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_img]:my-6 [&_img]:rounded-lg [&_li]:mb-2 [&_ol]:mb-4 [&_ol]:ml-6 [&_ol]:list-decimal [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:ml-6 [&_ul]:list-disc"
            dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(post.content) }}
          />
        ) : (
          <div className="max-w-none text-[#5A5A5A] leading-relaxed">
            {post.content.split("\n").map((paragraph, i) => (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
