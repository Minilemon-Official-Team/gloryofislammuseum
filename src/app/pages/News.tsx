import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { getPosts, type CmsPost } from '../../lib/cmsApi';

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState<CmsPost[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const articlesPerPage = 6;

  useEffect(() => {
    setLoading(true);
    getPosts(undefined, currentPage, articlesPerPage)
      .then((res) => {
        setArticles(res.data);
        setTotal(res.meta?.total ?? 0);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [currentPage]);

  const totalPages = Math.ceil(total / articlesPerPage);

  const getCategoryColor = (category: string | null) => {
    if (!category) return 'bg-[#8C6B3E]';
    const colors: Record<string, string> = {
      Exhibition: 'bg-[#8C6B3E]',
      Research: 'bg-[#A47E4F]',
      Education: 'bg-[#8C6B3E]',
      Conservation: 'bg-[#A47E4F]',
      Event: 'bg-[#8C6B3E]',
      Announcement: 'bg-[#A47E4F]',
      Technology: 'bg-[#8C6B3E]',
    };
    return colors[category] || 'bg-[#8C6B3E]';
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Museum News & Updates
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest exhibitions, events, research discoveries, and programs at the Glory of Islam Museum
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-[#5A5A5A]">Loading...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12 text-[#5A5A5A]">No articles yet</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.slug}`}
                className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden">
                  {article.cover_image_url ? (
                    <img
                      src={article.cover_image_url}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#E7DED0] flex items-center justify-center text-[#8C6B3E]">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {article.category && (
                      <span className={`px-3 py-1 ${getCategoryColor(article.category)} text-white text-xs rounded-full`}>
                        {article.category}
                      </span>
                    )}
                    <div className="flex items-center gap-1 text-[#8C6B3E] text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.published_at)}</span>
                    </div>
                  </div>
                  <h2 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  {article.excerpt && (
                    <p className="text-[#5A5A5A] text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded border border-[#C8B9A6] text-[#8C6B3E] hover:bg-[#E7DED0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded ${
                    currentPage === page
                      ? 'bg-[#8C6B3E] text-white'
                      : 'bg-white border border-[#C8B9A6] text-[#2B2B2B] hover:bg-[#E7DED0]'
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded border border-[#C8B9A6] text-[#8C6B3E] hover:bg-[#E7DED0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
