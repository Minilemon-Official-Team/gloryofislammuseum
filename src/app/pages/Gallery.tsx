import { useState } from 'react';
import { X } from 'lucide-react';
import {
  galleryItems,
  GALLERY_ERAS,
  type GalleryEra,
  type GalleryItem,
} from '../data/gallery';

type FilterKey = 'all' | GalleryEra;

const eraLabel = (era: GalleryEra): string =>
  GALLERY_ERAS.find((e) => e.key === era)?.label ?? era;

const placeholderFor = (image: string): string => {
  const filename = image.split('/').pop() ?? 'photo';
  return `https://placehold.co/600x400?text=${encodeURIComponent(filename)}`;
};

const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement>,
  image: string
) => {
  const img = event.currentTarget;
  if (img.dataset.fallback) return;
  img.dataset.fallback = '1';
  img.src = placeholderFor(image);
};

export default function Gallery() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All' },
    ...GALLERY_ERAS,
  ];

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.era === filter);

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

        {/* Era Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`px-6 py-3 rounded transition-all ${
                filter === item.key
                  ? 'bg-[#8C6B3E] text-white shadow-lg'
                  : 'bg-white text-[#2B2B2B] border border-[#C8B9A6] hover:bg-[#E7DED0]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          key={filter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => handleImageError(e, item.image)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-[#8C6B3E] text-white text-xs rounded-full mb-3">
                  {eraLabel(item.era)}
                </span>
                <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              onError={(e) => handleImageError(e, selectedItem.image)}
              className="w-full max-h-[70vh] object-contain bg-[#2B2B2B]"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-[#8C6B3E] text-white text-xs rounded-full mb-3">
                {eraLabel(selectedItem.era)}
              </span>
              <h3 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
