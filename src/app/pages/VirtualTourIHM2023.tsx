import { PlayCircle, ZoomIn, Info, Calendar } from 'lucide-react';

export default function VirtualTourIHM2023() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C6B3E] text-white rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Updated 2023</span>
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Virtual Tour - IHM 2023 Update
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto">
            Explore the latest additions to our museum collection and newly renovated exhibition spaces
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <div className="aspect-video bg-gradient-to-br from-[#8C6B3E] to-[#A47E4F] flex items-center justify-center">
            <div className="text-center text-white">
              <PlayCircle className="w-20 h-20 mx-auto mb-4" />
              <p className="text-xl font-['Cinzel']">360° Virtual Tour Player</p>
              <p className="text-sm mt-2 opacity-90">Latest museum updates and exhibitions</p>
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
                What's New
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-lg p-8 mb-8">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-6">2023 Updates & Additions</h2>
          <p className="text-[#2B2B2B] leading-relaxed mb-4">
            The Indonesian Heritage Museum underwent significant renovations and expansions in 2023, introducing new 
            exhibition spaces and acquiring important artifacts that enhance our representation of Indonesian cultural heritage.
          </p>
          <p className="text-[#5A5A5A] leading-relaxed">
            This updated virtual tour showcases our expanded galleries, improved lighting and display systems, and newly 
            acquired collections that provide deeper insights into Indonesia's rich historical tapestry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">New Exhibition Hall</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Explore our newly opened exhibition hall featuring rotating displays of contemporary interpretations of traditional art.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Digital Archives</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Access our new digital archive center where visitors can research manuscripts and historical documents.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Enhanced Displays</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Experience improved lighting, interactive displays, and detailed artifact information systems.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Conservation Lab</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              View our new conservation laboratory where visitors can observe artifact restoration in progress.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Education Center</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Discover our expanded education center with hands-on learning spaces for schools and families.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">New Acquisitions</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              View recently acquired artifacts and artworks that enrich our permanent collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
