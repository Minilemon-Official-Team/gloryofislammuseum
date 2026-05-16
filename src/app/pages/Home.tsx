import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const heroSlides = [
  '/images/hero/slide-1.jpg',
  '/images/hero/slide-2.jpg',
  '/images/hero/slide-3.jpg',
  '/images/hero/slide-4.jpg',
];

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-[#F4EFE6]">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(140, 107, 62, 0.4), rgba(140, 107, 62, 0.6)), url('${slide}')`,
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((slide, index) => (
            <button
              key={slide}
              type="button"
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                backgroundColor: currentSlide === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)',
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="font-['Cinzel'] text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide">
            Glory of Islam Museum
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
            Tracing the Islamic legacy from global civilization to the heart of Nusantara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/visit"
              className="px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >Download AR</Link>
            <Link
              to="/auto-guide"
              className="px-8 py-4 bg-white text-[#8C6B3E] rounded hover:bg-[#E7DED0] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Auto Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section
        id="welcome"
        className="fade-in-section py-20 md:py-28 px-4"
        style={{
          opacity: isVisible['welcome'] ? 1 : 0,
          transform: isVisible['welcome'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
              Welcome to Glory of Islam Museum
            </h2>
            <div className="w-24 h-1 bg-[#8C6B3E] mx-auto"></div>
          </div>
          <div className="text-center max-w-[900px] mx-auto">
            <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
              <span className="font-bold">Glory of Islam Museum</span> merupakan museum warisan budaya Indonesia yang mempunyai koleksi warisan budaya dari seluruh wilayah Indonesia, berdiri sejak tahun 2010, Glory of Islam Museum juga merupakan pelopor museum berteknologi Augmented Reality di Indonesia, terdapat 17 zona yang mewakili wilayah di Indonesia, yang menyimpan benda benda bersejarah dari seluruh suku di tanah air.
            </p>
          </div>
        </div>
      </section>

      {/* Two Feature Cards */}
      <section
        id="feature-cards"
        className="fade-in-section py-12 px-4"
        style={{
          opacity: isVisible['feature-cards'] ? 1 : 0,
          transform: isVisible['feature-cards'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* AR Card */}
            <div className="bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-80 grid grid-cols-3 gap-2 bg-[#E7DED0] p-2">
                <img
                  src="/images/home/ar-1.jpg"
                  alt="Augmented Reality"
                  className="w-full h-full object-contain"
                />
                <img
                  src="/images/home/ar-2.jpg"
                  alt="Augmented Reality"
                  className="w-full h-full object-contain"
                />
                <img
                  src="/images/home/ar-3.png"
                  alt="Augmented Reality"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-4">Augmented Reality</h3>
                <p className="text-[#5A5A5A] text-lg leading-relaxed mb-6">
                  Silakan mengunduh aplikasi Augmented Reality di link berikut ini dari Google Playstore di Android anda, untuk mempermudah para pengunjung dalam melihat 3 Dimensi.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dtopeng.ihmarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D97234] text-white rounded hover:bg-[#C0611D] transition-all shadow-lg hover:shadow-xl"
                >
                  Augmented Reality
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Auto Guide Card */}
            <div className="bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-80 overflow-hidden">
                <img
                  src="/images/home/auto-guide.png"
                  alt="Auto Self Guided Tour"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-4">Auto Self Guided Tour</h3>
                <p className="text-[#5A5A5A] text-lg leading-relaxed mb-6">
                  Silahkan akses Auto Self Guided Tour untuk memudahkan para pengunjung daalam memahami narasi per zona, sembari bermain dan belajar di dalam Glory of Islam Museum.
                </p>
                <Link
                  to="/auto-guide"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D97234] text-white rounded hover:bg-[#C0611D] transition-all shadow-lg hover:shadow-xl"
                >
                  Auto Self Guided Tour
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image 1 */}
      <section
        id="image-1"
        className="fade-in-section py-12 px-4"
        style={{
          opacity: isVisible['image-1'] ? 1 : 0,
          transform: isVisible['image-1'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <img
            src="/images/home/section-1.jpg"
            alt="Glory of Islam Museum"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Text Section 1 */}
      <section
        id="text-1"
        className="fade-in-section py-16 px-4"
        style={{
          opacity: isVisible['text-1'] ? 1 : 0,
          transform: isVisible['text-1'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[#2B2B2B] text-xl leading-relaxed">
            Glory of Islam Museum merupakan museum warisan budaya Indonesia yang mempunyai koleksi warisan budaya dari seluruh wilayah Indonesia, berdiri sejak tahun 2010, Glory of Islam Museum juga merupakan pelopor museum berteknologi Augmented Reality di Indonesia, terdapat 17 zona yang mewakili wilayah di Indonesia, yang menyimpan benda benda bersejarah dari seluruh suku di tanah air.
          </p>
        </div>
      </section>

      {/* Full Width Image 2 */}
      <section
        id="image-2"
        className="fade-in-section py-12 px-4"
        style={{
          opacity: isVisible['image-2'] ? 1 : 0,
          transform: isVisible['image-2'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <img
            src="/images/home/section-2.jpg"
            alt="Glory of Islam Museum"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Text Section 2 */}
      <section
        id="text-2"
        className="fade-in-section py-16 px-4 mb-12"
        style={{
          opacity: isVisible['text-2'] ? 1 : 0,
          transform: isVisible['text-2'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[#2B2B2B] text-xl leading-relaxed">
            Silakan kepada para pengunjung untuk dapat mengunduh aplikasi{' '}
            <span className="font-bold text-[#D97234]">Augmented Reality</span> di Google Play Store dan juga{' '}
            <span className="font-bold text-[#D97234]">Autoself Guided Tour</span> yang dapat diakses melalui website untuk dapat memudahkan para pengunjung selama berada di Glory of Islam Museum.
          </p>
        </div>
      </section>
    </div>
  );
}
