import { PlayCircle, ZoomIn, Info } from 'lucide-react';

export default function VirtualTourCandiKidal() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Virtual Tour - Candi Kidal
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto">
            Discover Candi Kidal, an elegant temple shrine dedicated to King Anusapati of Singhasari
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <div className="aspect-video bg-gradient-to-br from-[#8C6B3E] to-[#A47E4F] flex items-center justify-center">
            <div className="text-center text-white">
              <PlayCircle className="w-20 h-20 mx-auto mb-4" />
              <p className="text-xl font-['Cinzel']">360° Virtual Tour Player</p>
              <p className="text-sm mt-2 opacity-90">Explore Candi Kidal temple shrine</p>
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
                Temple History
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-lg p-8 mb-8">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-6">About Candi Kidal</h2>
          <p className="text-[#2B2B2B] leading-relaxed mb-4">
            Candi Kidal is a small but exquisitely crafted Hindu temple built around 1260 CE as a memorial shrine for 
            King Anusapati, the second ruler of the Singhasari kingdom. Located near Malang in East Java, this temple 
            exemplifies the refined architectural style of the Singhasari period.
          </p>
          <p className="text-[#5A5A5A] leading-relaxed">
            The temple is particularly notable for its elegant proportions and the quality of its relief carvings, which 
            depict scenes from the Garuda story and other Hindu mythological narratives. The craftsmanship displayed at 
            Candi Kidal represents the pinnacle of East Javanese temple art.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Temple Design</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Study the elegant proportions and refined architectural details that make Candi Kidal a masterpiece of Singhasari art.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Garuda Reliefs</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Examine the exceptional relief panels depicting the Garuda story and other mythological narratives.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Royal Heritage</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Learn about King Anusapati and the temple's significance as a royal memorial shrine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
