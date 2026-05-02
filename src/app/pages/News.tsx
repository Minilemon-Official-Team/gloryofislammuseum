import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: 'March 1, 2026',
    category: 'Exhibition',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=News+1',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    title: 'Sed ut perspiciatis unde omnis iste natus error sit',
    date: 'February 15, 2026',
    category: 'Research',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=News+2',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    id: 3,
    title: 'At vero eos et accusamus et iusto odio dignissimos',
    date: 'February 10, 2026',
    category: 'Education',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=News+3',
    excerpt: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
  },
  {
    id: 4,
    title: 'Neque porro quisquam est, qui dolorem ipsum quia dolor',
    date: 'January 28, 2026',
    category: 'Conservation',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=News+4',
    excerpt: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
  },
  {
    id: 5,
    title: 'Excepteur sint occaecat cupidatat non proident, sunt',
    date: 'December 20, 2025',
    category: 'Announcement',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=News+5',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
  },
  {
    id: 6,
    title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate',
    date: 'January 15, 2026',
    category: 'Exhibition',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=News+6',
    excerpt: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.',
  },
];

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
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

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Museum News & Updates
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest exhibitions, events, research discoveries, and programs at the Glory of Islam Museum
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 ${getCategoryColor(article.category)} text-white text-xs rounded-full`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[#8C6B3E] text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h2 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-[#5A5A5A] text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
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
