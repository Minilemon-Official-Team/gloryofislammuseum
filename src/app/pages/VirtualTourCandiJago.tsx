import { PlayCircle, ZoomIn, Info } from 'lucide-react';

export default function VirtualTourCandiJago() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Virtual Tour - Candi Jago
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto">
            Experience the grandeur of Candi Jago, a 13th-century Hindu-Buddhist temple known for its exceptional stone relief carvings
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <div className="aspect-video bg-gradient-to-br from-[#A47E4F] to-[#8C6B3E] flex items-center justify-center">
            <div className="text-center text-white">
              <PlayCircle className="w-20 h-20 mx-auto mb-4" />
              <p className="text-xl font-['Cinzel']">360° Virtual Tour Player</p>
              <p className="text-sm mt-2 opacity-90">Explore Candi Jago temple complex</p>
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
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-6">About Candi Jago</h2>
          <p className="text-[#2B2B2B] leading-relaxed mb-4">
            Candi Jago, also known as Candi Jajaghu, is a 13th-century Hindu-Buddhist temple located near Malang in East Java. 
            Built around 1280 CE during the reign of King Kertanegara of Singhasari, this temple is renowned for its unique 
            terraced design and exceptional narrative relief panels.
          </p>
          <p className="text-[#5A5A5A] leading-relaxed">
            The temple's relief carvings depict scenes from various Hindu epics and Buddhist Jataka tales, showcasing the 
            syncretic religious traditions of the Majapahit period. Despite centuries of weathering, the intricate artistry 
            remains a testament to the skilled craftsmen of ancient Java.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Temple Architecture</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Explore the unique terraced structure and architectural elements that distinguish Candi Jago from other Javanese temples.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Relief Carvings</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Examine the detailed stone reliefs depicting epic narratives and mythological scenes from Hindu and Buddhist traditions.
            </p>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Historical Significance</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Learn about the temple's role in the Singhasari kingdom and its importance to Indonesian cultural heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
