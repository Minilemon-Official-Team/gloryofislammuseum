import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor Sit Amet',
    category: 'Artifacts',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    title: 'Consectetur Adipiscing Elit',
    category: 'Artifacts',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+2',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    title: 'Sed Do Eiusmod Tempor',
    category: 'Artifacts',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+3',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 4,
    title: 'Incididunt Ut Labore',
    category: 'Artifacts',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+4',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    id: 5,
    title: 'Et Dolore Magna Aliqua',
    category: 'Artifacts',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+5',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  },
  {
    id: 6,
    title: 'Ut Enim Ad Minim Veniam',
    category: 'Artifacts',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+6',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
  },
  {
    id: 7,
    title: 'Quis Nostrud Exercitation',
    category: 'Documents',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+7',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
  },
  {
    id: 8,
    title: 'Ullamco Laboris Nisi',
    category: 'Artifacts',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+8',
    description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  },
  {
    id: 9,
    title: 'Aliquip Ex Ea Commodo',
    category: 'Sculpture',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+9',
    description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.',
  },
  {
    id: 10,
    title: 'Duis Aute Irure Dolor',
    category: 'Sculpture',
    image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=Gallery+10',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Sculpture', 'Pottery', 'Textiles', 'Architecture', 'Artifacts', 'Documents'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to the Glory of Islam Gallery, a space where the pages of history are not merely told, but vividly witnessed. Through a captivating visual curation—from ancient manuscripts and majestic architectural wonders across the globe, to the peaceful footprints of Islamic propagation in Nusantara—we invite you to immerse yourself in the grandeur of the past. Let every image and artifact on this page serve as a window through time, testifying to how the light of Islam wove harmony and culture, from the global stage to its deep roots in Indonesia.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded transition-all ${
                filter === category
                  ? 'bg-[#8C6B3E] text-white shadow-lg'
                  : 'bg-white text-[#2B2B2B] border border-[#C8B9A6] hover:bg-[#E7DED0]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="24px">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-[#8C6B3E] text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-['Cinzel'] text-xl mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-white text-center">
                <span className="inline-block px-4 py-2 bg-[#8C6B3E] rounded-full text-sm mb-3">
                  {selectedImage.category}
                </span>
                <h2 className="font-['Cinzel'] text-3xl mb-2">{selectedImage.title}</h2>
                <p className="text-white/80 text-lg">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
