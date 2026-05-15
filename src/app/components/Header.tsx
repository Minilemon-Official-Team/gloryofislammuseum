import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState("EN");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const languages = [
    "EN",
    "ID",
    "JP",
    "KR",
    "CN",
    "ES",
    "FR",
    "DE",
    "IT",
    "NL",
    "RU",
    "AR",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F4EFE6] shadow-md" : "bg-[#F4EFE6]/95"
      }`}
      style={{ borderBottom: "1px solid #C8B9A6" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/images/logo.png"
                alt="Glory of Islam Museum Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <div className="hidden md:block">
              <div className="font-['Cinzel'] text-lg text-[#2B2B2B] leading-tight">
                Glory of Islam
              </div>
              <div className="font-['Cinzel'] text-sm text-[#5A5A5A]">
                Museum
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/auto-guide"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              Auto Guide
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/news"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors"
            >
              News
            </Link>

            <Link
              to="/gallery"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E]"
            >
              Gallery
            </Link>

            <Link
              to="/visit"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E]"
            >
              Visit
            </Link>

            <Link
              to="/testimoni"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E]"
            >
              Testimoni
            </Link>

            {/* Education Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown("education")}
              >
                Education & Family
                <ChevronDown className="w-4 h-4" />
              </button>

              {openDropdown === "education" && (
                <div
                  className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded border border-[#C8B9A6] py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to="/education/general-family"
                    className="block px-4 py-2 hover:bg-[#E7DED0]"
                  >
                    General/Family
                  </Link>

                  <Link
                    to="/education/educational-institution"
                    className="block px-4 py-2 hover:bg-[#E7DED0]"
                  >
                    Educational Institution
                  </Link>

                  <Link
                    to="/education/educational-series"
                    className="block px-4 py-2 hover:bg-[#E7DED0]"
                  >
                    Educational Series
                  </Link>
                </div>
              )}
            </div>

            {/* Language */}
            <div className="relative group ml-2">
              <button className="px-3 py-2 text-[#8C6B3E] border border-[#8C6B3E] rounded hover:bg-[#8C6B3E] hover:text-white flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {language}
              </button>

              <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded border border-[#C8B9A6] py-2 hidden group-hover:block">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="block w-full text-left px-4 py-2 hover:bg-[#E7DED0]"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-[#8C6B3E] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F4EFE6] border-t border-[#C8B9A6]">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            <Link
              to="/"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              Home
            </Link>

            <Link
              to="/auto-guide"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              Auto Guide
            </Link>

            <Link
              to="/austronesia"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              Austronesia
            </Link>

            <Link
              to="/news"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              News
            </Link>

            <Link
              to="/gallery"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              Gallery
            </Link>

            <Link
              to="/visit"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              Visit
            </Link>

            <Link
              to="/testimoni"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              Testimoni
            </Link>

            {/* Education Mobile */}
            <div className="space-y-1">
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:bg-[#E7DED0] rounded"
                onClick={() => toggleDropdown("education-mobile")}
              >
                <span>Education & Family</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openDropdown === "education-mobile" ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === "education-mobile" && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/education/general-family"
                    className="block px-4 py-2 text-[#5A5A5A] hover:bg-[#E7DED0] rounded"
                  >
                    General/Family
                  </Link>
                  <Link
                    to="/education/educational-institution"
                    className="block px-4 py-2 text-[#5A5A5A] hover:bg-[#E7DED0] rounded"
                  >
                    Educational Institution
                  </Link>
                  <Link
                    to="/education/educational-series"
                    className="block px-4 py-2 text-[#5A5A5A] hover:bg-[#E7DED0] rounded"
                  >
                    Educational Series
                  </Link>
                </div>
              )}
            </div>

            {/* Language Selector Mobile */}
            <div className="pt-2 border-t border-[#C8B9A6]">
              <div className="px-4 py-2 text-[#8C6B3E] font-['Cinzel'] text-sm">
                Language
              </div>
              <div className="flex flex-wrap gap-2 px-4">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-2 text-sm font-['Cinzel'] rounded border ${
                      language === lang
                        ? "bg-[#8C6B3E] text-white border-[#8C6B3E]"
                        : "text-[#5A5A5A] border-[#C8B9A6] hover:bg-[#E7DED0]"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
