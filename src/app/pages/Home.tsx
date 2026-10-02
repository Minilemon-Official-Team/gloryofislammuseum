import { useEffect, useRef } from 'react';
import { ArrowDownRight, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  '/images/hero/slide-1.jpg',
  '/images/hero/slide-2.jpg',
  '/images/hero/slide-3.jpg',
  '/images/hero/slide-4.jpg',
];

const archiveImages = [
  { src: '/images/home/ar-1.jpg', alt: 'Augmented Reality di Glory of Islam Museum' },
  { src: '/images/home/ar-2.jpg', alt: 'Pengalaman digital museum' },
  { src: '/images/home/ar-3.png', alt: 'Koleksi digital museum' },
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>('[data-goi-reveal]'));
    const parallaxNodes = Array.from(root.querySelectorAll<HTMLElement>('[data-goi-parallax]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px 4% 0px' },
    );

    revealNodes.forEach((node) => observer.observe(node));

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      parallaxNodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const distance = (rect.top + rect.height / 2 - viewportCenter) / window.innerHeight;
        const shift = Math.max(-18, Math.min(18, distance * -18));
        node.style.setProperty('--goi-parallax', `${shift}px`);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={pageRef} className="goi-home">
      <section className="goi-hero" aria-labelledby="goi-hero-title">
        <div className="goi-hero-inner">
          <div className="goi-hero-copy" data-goi-reveal>
            <h1 id="goi-hero-title">
              <span className="goi-hero-title-line">Glory of</span>
              <em className="goi-hero-title-line goi-hero-title-accent">Islam Museum</em>
            </h1>
            <p className="goi-hero-lede">
              Tracing the Islamic legacy from global civilization to the heart of Nusantara.
            </p>
            <div className="goi-actions">
              <a
                href="https://play.google.com/store/apps/details?id=com.dtopeng.goiar"
                target="_blank"
                rel="noopener noreferrer"
                className="goi-button goi-button-primary"
              >
                Download AR
                <ExternalLink size={16} aria-hidden="true" />
              </a>
              <Link to="/auto-guide" className="goi-button goi-button-quiet">
                Start Auto Guide
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="goi-hero-meta" aria-label="Museum highlights">
              <span>17 zones</span>
              <span>AR + 3D</span>
              <span>Since 2010</span>
            </div>
          </div>

          <div className="goi-hero-media-wrap" data-goi-reveal style={{ transitionDelay: '120ms' }}>
            <div className="goi-hero-media">
              <video
                className="goi-hero-video"
                src="/videos/goi-banner.mp4"
                poster="/images/hero/slide-1.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Video banner Glory of Islam Museum"
              />
            </div>
          </div>
        </div>

        <div className="goi-hero-rail" aria-hidden="true">
          <span>PACIRAN · EAST JAVA</span>
          <span>ARCHIVE / 2010—NOW</span>
        </div>
        <a className="goi-scroll-cue" href="#goi-intro">
          <span>Scroll to enter</span>
          <ArrowDownRight size={17} aria-hidden="true" />
        </a>
      </section>

      <section id="goi-intro" className="goi-section goi-intro" data-goi-reveal>
        <div className="goi-section-shell">
          <div className="goi-intro-grid">
            <div className="goi-intro-copy">
              <h2>
                One museum. <em>Many ways</em> to enter.
              </h2>
              <p className="goi-section-lede">
                Glory of Islam Museum menyimpan warisan budaya dari seluruh Indonesia—dari sejarah peradaban Islam sampai pengalaman Augmented Reality yang membuat koleksi terasa dekat.
              </p>
            </div>
            <div className="goi-stat-board" aria-label="Museum facts">
              <div><strong>17</strong><span>zona cerita</span></div>
              <div><strong>3D</strong><span>lapisan digital</span></div>
              <div><strong>AR</strong><span>lihat koleksi hidup</span></div>
            </div>
          </div>

          <div className="goi-intro-gallery" data-goi-reveal style={{ transitionDelay: '140ms' }}>
            <figure className="goi-intro-gallery-main">
              <img src="/images/home/section-1.jpg" alt="Ruang sejarah dan perdagangan di Glory of Islam Museum" />
              <figcaption><span>01</span><span>Story rooms</span></figcaption>
            </figure>
            <figure className="goi-intro-gallery-detail">
              <img src="/images/home/ar-1.jpg" alt="Pengunjung melihat koleksi AR di museum" />
              <figcaption><span>02</span><span>Objects in motion</span></figcaption>
            </figure>
            <div className="goi-intro-gallery-note">
              <span className="goi-intro-gallery-rule" aria-hidden="true" />
              <p>From a quiet object to a living scene, enter at your own pace.</p>
              <span className="goi-intro-gallery-mark">GOI / INDEX 01</span>
            </div>
          </div>
        </div>
      </section>

      <section className="goi-section goi-routes" aria-labelledby="goi-routes-title">
        <div className="goi-section-shell">
          <div className="goi-section-head" data-goi-reveal>
            <div>
              <h2 id="goi-routes-title">Choose your route.</h2>
              <p>Mulai dari narasi, atau masuk lewat lapisan digital museum.</p>
            </div>
            <Link to="/all-zone" className="goi-inline-link">
              See all zones <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="goi-route-layout">
            <Link to="/auto-guide" className="goi-route-feature" data-goi-reveal style={{ transitionDelay: '100ms' }}>
              <div className="goi-route-media" data-goi-parallax>
                <img src="/images/home/auto-guide.png" alt="Auto Self Guided Tour" />
                <span className="goi-route-tag">01 / NARRATIVE</span>
              </div>
              <div className="goi-route-copy">
                <div>
                  <h3>Auto Self Guided Tour</h3>
                  <p>Ikuti narasi per zona sambil menjelajah ritme museum dengan cara kamu sendiri.</p>
                </div>
                <span className="goi-round-arrow"><ArrowRight size={18} aria-hidden="true" /></span>
              </div>
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.dtopeng.goiar"
              target="_blank"
              rel="noopener noreferrer"
              className="goi-route-digital"
              data-goi-reveal
              style={{ transitionDelay: '180ms' }}
            >
              <div className="goi-digital-collage">
                {archiveImages.map((image) => <img key={image.src} src={image.src} alt="" />)}
              </div>
              <div className="goi-route-copy goi-route-copy-compact">
                <div>
                  <h3>Augmented Reality</h3>
                  <p>Temukan objek 3D dan lapisan cerita di balik artefak.</p>
                </div>
                <ExternalLink size={19} aria-hidden="true" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="goi-section goi-story" aria-labelledby="goi-story-title">
        <div className="goi-section-shell goi-story-grid">
          <div className="goi-story-media" data-goi-reveal>
            <img data-goi-parallax src="/images/home/section-1.jpg" alt="Interior Glory of Islam Museum" />
            <span>Stories held in material</span>
          </div>
          <div className="goi-story-copy" data-goi-reveal style={{ transitionDelay: '120ms' }}>
            <h2 id="goi-story-title">History feels closer when you can walk through it.</h2>
            <p className="goi-section-note">A LIVING ARCHIVE</p>
            <p>
              Dari benda bersejarah sampai kisah perjalanan Islam ke Nusantara, setiap ruang museum membuka jalur yang berbeda untuk dibaca, didengar, dan dialami.
            </p>
            <Link to="/all-zone" className="goi-inline-link">Explore the zones <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="goi-section goi-archive" aria-labelledby="goi-archive-title">
        <div className="goi-section-shell goi-archive-grid">
          <div className="goi-archive-copy" data-goi-reveal>
            <h2 id="goi-archive-title">Technology opens the door. Stories make us stay.</h2>
            <p className="goi-section-note">DIGITAL LAYER</p>
            <p>
              Gunakan AR dan Auto Guide untuk membaca benda, ruang, serta hubungan antar-zona dengan cara yang lebih personal.
            </p>
            <div className="goi-actions goi-actions-left">
              <Link to="/meta-museum" className="goi-button goi-button-primary">Open Meta Museum <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link to="/gallery" className="goi-button goi-button-outline">View gallery</Link>
            </div>
          </div>
          <div className="goi-archive-media" data-goi-reveal style={{ transitionDelay: '120ms' }}>
            <img data-goi-parallax src="/images/home/section-2.jpg" alt="Digital layer at Glory of Islam Museum" />
            <div className="goi-archive-index">AR / 3D / GUIDE</div>
          </div>
        </div>
      </section>

      <section className="goi-final-cta" data-goi-reveal>
        <div className="goi-section-shell goi-final-cta-inner">
          <div className="goi-final-cta-copy">
            <h2>Start with <em>one room.</em></h2>
            <p>Datang langsung ke museum atau buka jalur digital dari mana saja.</p>
            <div className="goi-actions goi-actions-left">
              <Link to="/visit" className="goi-button goi-button-primary">Plan your visit <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link to="/auto-guide" className="goi-button goi-button-outline">Start Auto Guide</Link>
            </div>
          </div>
          <div className="goi-final-cta-visual">
            <img data-goi-parallax src="/images/home/section-2.jpg" alt="Ruang Walisongo di Glory of Islam Museum" />
            <div className="goi-final-cta-stamp">
              <span>GOI / 17 ZONES</span>
              <span>START ANYWHERE</span>
            </div>
            <span className="goi-final-cta-arrow" aria-hidden="true"><ArrowDownRight size={21} /></span>
          </div>
        </div>
        <div className="goi-final-cta-rail" aria-hidden="true">
          <span>ON-SITE</span><span>AR</span><span>AUDIO GUIDE</span><span>OPEN YOUR FIRST ROOM</span>
        </div>
      </section>

      <div className="goi-filmstrip" aria-hidden="true">
        {heroSlides.map((slide) => <img key={slide} src={slide} alt="" loading="lazy" />)}
      </div>
    </div>
  );
}
