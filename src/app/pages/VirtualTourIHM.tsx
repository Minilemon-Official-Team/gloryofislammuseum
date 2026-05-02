import { PlayCircle, ZoomIn, Info } from 'lucide-react';

export default function VirtualTourIHM() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Virtual Tour - Indonesian Heritage Museum
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto">
            Explore the Indonesian Heritage Museum's main collection through an immersive 360° virtual experience
          </p>
        </div>

        {/* Virtual Tour Container */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <div className="aspect-video bg-gradient-to-br from-[#8C6B3E] to-[#A47E4F] flex items-center justify-center">
            <div className="text-center text-white">
              <PlayCircle className="w-20 h-20 mx-auto mb-4" />
              <p className="text-xl font-['Cinzel']">360° Virtual Tour Player</p>
              <p className="text-sm mt-2 opacity-90">Click to start the immersive tour</p>
            </div>
          </div>
          <div className="p-6 bg-[#E7DED0]">
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-colors flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Start Tour
              </button>
              <button className="px-6 py-3 bg-white text-[#8C6B3E] border border-[#8C6B3E] rounded hover:bg-[#F4EFE6] transition-colors flex items-center gap-2">
                <ZoomIn className="w-5 h-5" />
                Full Screen
              </button>
              <button className="px-6 py-3 bg-white text-[#8C6B3E] border border-[#8C6B3E] rounded hover:bg-[#F4EFE6] transition-colors flex items-center gap-2">
                <Info className="w-5 h-5" />
                Tour Info
              </button>
            </div>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Main Gallery</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Browse our extensive collection of Majapahit-era artifacts, sculptures, and ceremonial objects from across Java.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Sculpture Hall</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Admire the intricate stone carvings and religious statuary that showcase ancient Javanese artistry.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Textile Collection</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Discover traditional Indonesian textiles, batik patterns, and ceremonial garments from various regions.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Pottery & Ceramics</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              View rare pottery pieces and ceramic works that reflect centuries of Indonesian craftsmanship.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Historical Documents</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Examine ancient manuscripts, royal decrees, and historical documents from the archipelago's kingdoms.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Special Exhibitions</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Experience rotating special exhibitions featuring themed collections and contemporary interpretations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
