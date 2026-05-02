import { Link } from 'react-router-dom';
import { Monitor, Eye, PlayCircle } from 'lucide-react';

export default function VirtualTour() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-6">
            <Monitor className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Virtual Tour
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the Indonesian Heritage Museum and its associated historical sites from anywhere in the world.
            Our immersive 360° virtual tours allow you to explore our collections and ancient temples at your own pace.
          </p>
        </div>

        {/* Tour Options */}
        <div className="mb-16">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-8 text-center">
            Choose Your Virtual Experience
          </h2>

          {/* Preview Tour Section */}
          <div className="bg-[#E7DED0] rounded shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#8C6B3E] flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Preview Tour</h3>
            </div>
            <p className="text-[#5A5A5A] leading-relaxed mb-6">
              Get a quick overview of our museum and collections. Perfect for first-time visitors
              who want to plan their visit or get a taste of what we offer.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded p-6">
                <h4 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-3">What's Included:</h4>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• Main gallery highlights</li>
                  <li>• Featured exhibitions</li>
                  <li>• Quick navigation</li>
                  <li>• Estimated time: 10-15 minutes</li>
                </ul>
              </div>
              <div className="bg-white rounded p-6">
                <h4 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-3">Best For:</h4>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• First-time explorers</li>
                  <li>• Quick overview</li>
                  <li>• Mobile devices</li>
                  <li>• Planning your visit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Tour Section */}
          <div className="bg-white rounded shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#8C6B3E] flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Detailed Tour</h3>
            </div>
            <p className="text-[#5A5A5A] leading-relaxed mb-6">
              Immerse yourself in a comprehensive exploration of our entire collection. Includes detailed
              information, high-resolution images, and expert commentary on each artifact.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#F4EFE6] rounded p-6">
                <h4 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-3">What's Included:</h4>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• All gallery spaces</li>
                  <li>• Detailed artifact information</li>
                  <li>• Audio commentary</li>
                  <li>• Zoom functionality</li>
                  <li>• Estimated time: 45-60 minutes</li>
                </ul>
              </div>
              <div className="bg-[#F4EFE6] rounded p-6">
                <h4 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-3">Best For:</h4>
                <ul className="space-y-2 text-[#5A5A5A]">
                  <li>• In-depth exploration</li>
                  <li>• Educational purposes</li>
                  <li>• Desktop experience</li>
                  <li>• Research and study</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Available Virtual Tours */}
        <div>
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-8 text-center">
            Available Virtual Tours
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IHM Tour */}
            <Link
              to="/virtual-tour-ihm"
              className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-[#8C6B3E] flex items-center justify-center">
                <Monitor className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">
                  Indonesian Heritage Museum
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  Explore our main museum building and its extensive collection of artifacts from across the Indonesian archipelago.
                </p>
                <div className="text-[#8C6B3E] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start Tour
                  <PlayCircle className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Candi Jago Tour */}
            <Link
              to="/virtual-tour-candi-jago"
              className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-[#A47E4F] flex items-center justify-center">
                <Monitor className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">
                  Candi Jago
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  Visit the majestic Candi Jago temple, a 13th-century masterpiece of Majapahit architecture and stone carving.
                </p>
                <div className="text-[#8C6B3E] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start Tour
                  <PlayCircle className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Candi Kidal Tour */}
            <Link
              to="/virtual-tour-candi-kidal"
              className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-[#8C6B3E] flex items-center justify-center">
                <Monitor className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">
                  Candi Kidal
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  Discover Candi Kidal, an elegant temple known for its intricate reliefs and historical significance to the Singhasari kingdom.
                </p>
                <div className="text-[#8C6B3E] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start Tour
                  <PlayCircle className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* IHM 2023 Tour */}
            <Link
              to="/virtual-tour-ihm-2023"
              className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-[#A47E4F] flex items-center justify-center">
                <Monitor className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">
                  IHM 2023 Update
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  Experience our latest exhibition spaces and newly acquired collections showcased in the 2023 museum update.
                </p>
                <div className="text-[#8C6B3E] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start Tour
                  <PlayCircle className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Candi Jago 2023 Tour */}
            <Link
              to="/virtual-tour-candi-jago-2023"
              className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-[#8C6B3E] flex items-center justify-center">
                <Monitor className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">
                  Candi Jago 2023 Update
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  Explore the latest conservation work and archaeological discoveries at Candi Jago documented in 2023.
                </p>
                <div className="text-[#8C6B3E] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start Tour
                  <PlayCircle className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="mt-16 bg-white rounded shadow-lg p-8">
          <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-6 text-center">
            Technical Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">Browser Support</h3>
              <p className="text-[#5A5A5A] text-sm">
                Chrome, Firefox, Safari, Edge (latest versions)
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">Internet Connection</h3>
              <p className="text-[#5A5A5A] text-sm">
                Broadband connection recommended for optimal experience
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">Device Compatibility</h3>
              <p className="text-[#5A5A5A] text-sm">
                Desktop, tablet, and mobile devices supported
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
