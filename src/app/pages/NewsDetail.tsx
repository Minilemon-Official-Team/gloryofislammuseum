import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { getPostBySlug, type CmsPost } from "../../lib/cmsApi";

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

        <div className="prose prose-lg max-w-none text-[#5A5A5A] leading-relaxed">
          {post.content.split("\n").map((paragraph, i) => (
            <p key={i} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
