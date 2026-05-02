import { useEffect, useRef, useState } from 'react';
import { ChevronUp, Share, Check, Loader2 } from 'lucide-react';
import { useTranslationContext } from '../context/TranslationContext';
import { ContentLanguageSwitcher } from '../components/ui/ContentLanguageSwitcher';
import { AudioPlayer } from '../components/ui/AudioPlayer';
import { buildings, getZoneImage, allZones, Zone } from '../data/museumData';

export default function AutoGuide() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const objectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const { currentLang, getDescription, prefetchTranslation, isLoading } = useTranslationContext();

    const isEn = currentLang === 'en';
    const isId = currentLang === 'id';

    useEffect(() => {
        const onScroll = () => setShowBackToTop(window.scrollY > 500);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const objectId = params.get('object');
        if (!objectId) return;
        const id = parseInt(objectId, 10);
        setTimeout(() => {
            const el = objectRefs.current[`object-${id}`];
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        allZones.forEach((zone) => prefetchTranslation(zone.name, zone.description));
    }, [currentLang, prefetchTranslation]);

    const handleShare = async (objectId: number) => {
        const shareUrl = `${window.location.origin}/object/${objectId}`;
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopiedId(objectId);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const renderDescription = (zone: Zone): string => {
        if (isId) return zone.description;
        if (isEn) return zone.descriptionEn;
        return getDescription(zone.name, zone.description);
    };

    const renderZoneName = (zone: Zone): string => (isEn ? zone.nameEn : zone.name);

    const heroTitle = 'The Glory of Islam Museum';
    const heroSubtitle = isEn
        ? 'Explore Building A: The Footsteps of Civilization & Building B: The Light of Islam in Nusantara'
        : 'Jelajahi Gedung A: Jejak Peradaban & Gedung B: Cahaya Islam di Nusantara';

    let zoneCounter = 0;

    return (
        <div className="bg-[#F4EFE6] min-h-screen">
            <div className="relative bg-[#8C6B3E] text-white py-20 px-4">
                <div className="max-w-[1200px] mx-auto text-center">
                    <div className="text-sm md:text-base uppercase tracking-[0.3em] mb-3 opacity-90">Auto Guide</div>
                    <h1 className="font-['Cinzel'] text-4xl md:text-5xl mb-4">{heroTitle}</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">{heroSubtitle}</p>
                </div>
            </div>

            <div className="sticky top-24 z-40 bg-white shadow-md py-3 px-4">
                <div className="max-w-[1200px] mx-auto flex items-center gap-4">
                    <ContentLanguageSwitcher />
                    {isLoading && (
                        <div className="flex items-center gap-2 text-sm text-[#8C6B3E]">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Loading...</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 py-12">
                {buildings.map((building) => (
                    <div key={building.code} className="mb-20">
                        <div className="border-b-2 border-[#8C6B3E] pb-4 mb-10">
                            <div className="text-sm uppercase tracking-widest text-[#8C6B3E] font-semibold mb-2">
                                {isEn ? `Building ${building.code}` : `Gedung ${building.code}`}
                            </div>
                            <h2 className="font-['Cinzel'] text-3xl md:text-4xl text-[#2B2B2B]">
                                {isEn ? building.titleEn : building.titleId}
                            </h2>
                        </div>

                        {building.zones.map((zone) => {
                            zoneCounter++;
                            const description = renderDescription(zone);
                            const zoneName = renderZoneName(zone);

                            return (
                                <section key={zone.id} className="mb-16">
                                    <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#8C6B3E] mb-6">{zoneName}</h3>

                                    <div
                                        id={`object-${zone.id}`}
                                        ref={(el) => {
                                            objectRefs.current[`object-${zone.id}`] = el;
                                        }}
                                        className="bg-white rounded shadow-md overflow-hidden relative"
                                    >
                                        <button
                                            onClick={() => handleShare(zone.id)}
                                            className="absolute top-3 right-3 z-10 bg-[#8C6B3E] text-white p-2 rounded-full shadow-md hover:bg-[#7A5F36] transition-colors"
                                            aria-label="Share"
                                        >
                                            {copiedId === zone.id ? <Check className="w-4 h-4" /> : <Share className="w-4 h-4" />}
                                        </button>

                                        <div className="grid md:grid-cols-2 gap-6 p-6">
                                            <div className="rounded overflow-hidden bg-[#8C6B3E] h-[320px]">
                                                <img
                                                    src={getZoneImage(zone)}
                                                    alt={zoneName}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div className="flex flex-col justify-center">
                                                <div className="text-sm text-[#8C6B3E] font-medium mb-2">
                                                    {isEn ? `Zone #${zoneCounter}` : `Zona #${zoneCounter}`}
                                                </div>
                                                <div className="text-[#2B2B2B] leading-relaxed mb-4">{description}</div>

                                                <AudioPlayer zoneName={zone.name} />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                ))}
            </div>

            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed left-4 bottom-6 z-40 bg-[#8C6B3E] text-white p-2 rounded shadow-lg"
                >
                    <ChevronUp className="w-5 h-5" />
                </button>
            )}
        </div>
    );
}
