import { PlayCircle, ZoomIn, Info, Calendar } from 'lucide-react';

export default function VirtualTourCandiJago2023() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C6B3E] text-white rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Updated 2023</span>
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Virtual Tour - Candi Jago 2023 Update
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto">
            Experience the latest conservation work and archaeological discoveries at Candi Jago
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <div className="aspect-video bg-gradient-to-br from-[#A47E4F] to-[#8C6B3E] flex items-center justify-center">
            <div className="text-center text-white">
              <PlayCircle className="w-20 h-20 mx-auto mb-4" />
              <p className="text-xl font-['Cinzel']">360° Virtual Tour Player</p>
              <p className="text-sm mt-2 opacity-90">Latest conservation and discoveries</p>
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
                Conservation Details
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-lg p-8 mb-8">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-6">2023 Conservation & Research</h2>
          <p className="text-[#2B2B2B] leading-relaxed mb-4">
            Significant conservation efforts were undertaken at Candi Jago in 2023, focusing on stabilizing the temple 
            structure and preserving its intricate relief carvings. Archaeological surveys also revealed new insights 
            into the temple's original construction and ceremonial purposes.
          </p>
          <p className="text-[#5A5A5A] leading-relaxed">
            This updated virtual tour documents the conservation process and highlights previously obscured relief panels 
            that have been carefully cleaned and stabilized, offering visitors a clearer view of the temple's artistic glory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Restored Reliefs</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              View newly restored relief panels that showcase the exceptional craftsmanship of 13th-century artisans.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Structural Stabilization</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Learn about the engineering techniques used to preserve the temple's structural integrity.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">New Discoveries</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Explore archaeological findings that provide new understanding of the temple's historical context.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Documentation Project</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Access detailed photographic documentation created as part of the 2023 conservation initiative.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Visitor Facilities</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Experience improved pathways and viewing platforms that enhance the visitor experience.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Educational Signage</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Read updated interpretive panels that explain the temple's history and significance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
