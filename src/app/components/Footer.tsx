import { Link } from 'react-router-dom';
import { MapPin, Phone, Facebook, Instagram, Youtube } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-[#E7DED0] border-t border-[#C8B9A6]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-4">Indonesian Heritage Museum</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              Preserving and celebrating Indonesia's rich cultural heritage through curated exhibitions and educational programs.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/indonesianheritagemu" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#8C6B3E] flex items-center justify-center text-white hover:bg-[#6F532F] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/indonesianheritagemuseum" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#8C6B3E] flex items-center justify-center text-white hover:bg-[#6F532F] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@indonesianheritagemuseum" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#8C6B3E] flex items-center justify-center text-white hover:bg-[#6F532F] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/auto-guide" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  Auto Guide
                </Link>
              </li>
              <li>
                <Link to="/virtual-tour" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  Virtual Tour
                </Link>
              </li>
              <li>
                <Link to="/news" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/visit" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  Visit
                </Link>
              </li>
              <li>
                <Link to="/meta-museum" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  Meta Museum
                </Link>
              </li>
              <li>
                <Link to="/education" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  Education & Family
                </Link>
              </li>
              <li>
                <Link to="/testimoni" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  Testimoni
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs - Removed */}
          <div className="hidden lg:block">
            {/* Empty column for spacing */}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#5A5A5A] text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#8C6B3E]" />
                <span>Jl. Kartika No.2, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65315</span>
              </li>
              <li className="flex items-center gap-3 text-[#5A5A5A] text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#8C6B3E]" />
                <span>+62 857-4840-5800</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C8B9A6] mt-12 pt-8 text-center">
          <p className="text-[#5A5A5A] text-sm">
            © 2026 Indonesian Heritage Museum | Privacy Policy IHM AR
          </p>
        </div>
      </div>
    </footer>
  );
}
