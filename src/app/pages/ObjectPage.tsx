import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, MapPin, Share2 } from 'lucide-react';
import { useTranslationContext } from '../context/TranslationContext';
import { ContentLanguageSwitcher } from '../components/ui/ContentLanguageSwitcher';
import { AudioPlayer } from '../components/ui/AudioPlayer';
import { findZoneById, getZoneImage } from '../data/museumData';

export default function ObjectPage() {
    const { id } = useParams<{ id: string }>();
    const [copied, setCopied] = useState(false);
    const { currentLang, getDescription, prefetchTranslation } = useTranslationContext();

    const objectId = id ? parseInt(id, 10) : null;
    const found = objectId ? findZoneById(objectId) : null;

    const isEn = currentLang === 'en';
    const isId = currentLang === 'id';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (found) prefetchTranslation(found.zone.name, found.zone.description);
    }, [currentLang, found, prefetchTranslation]);

    const handleShare = async () => {
        const shareUrl = `${window.location.origin}/object/${objectId}`;
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (!found) {
        return (
            <div className="bg-[#F4EFE6] min-h-screen pt-24 pb-12">
                <div className="max-w-[1200px] mx-auto px-4 py-12 text-center">
                    <h1 className="font-['Cinzel'] text-3xl text-[#8C6B3E] mb-4">Object Not Found</h1>
                    <p className="text-[#5A5A5A] mb-8">The object with ID {id} was not found in our collection.</p>
                    <Link to="/auto-guide" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Auto Guide
                    </Link>
                </div>
            </div>
        );
    }

    const { zone, building, index } = found;
    const zoneName = isEn ? zone.nameEn : zone.name;
    const buildingTitle = isEn ? building.titleEn : building.titleId;
    const description = isId
        ? zone.description
        : isEn
        ? zone.descriptionEn
        : getDescription(zone.name, zone.description);

    return (
        <div className="bg-[#F4EFE6] min-h-screen pt-24 pb-12">
            <div className="bg-[#E7DED0] py-3 px-4">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-[#8C6B3E] hover:underline">Home</Link>
                        <span className="text-[#5A5A5A]">/</span>
                        <Link to="/auto-guide" className="text-[#8C6B3E] hover:underline">Auto Guide</Link>
                        <span className="text-[#5A5A5A]">/</span>
                        <span className="text-[#5A5A5A]">{zoneName}</span>
                    </div>
                </div>
            </div>

            <div className="relative bg-[#8C6B3E] text-white py-12 px-4">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm opacity-80">
                            <MapPin className="w-4 h-4" />
                            <span>{buildingTitle}</span>
                        </div>
                        <ContentLanguageSwitcher />
                    </div>
                    <h1 className="font-['Cinzel'] text-4xl md:text-5xl mb-2">{zoneName}</h1>
                    <p className="text-sm opacity-80">
                        {isEn ? `Zone #${index + 1}` : `Zona #${index + 1}`}
                    </p>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="w-full h-[400px] md:h-[500px] bg-[#8C6B3E] flex items-center justify-center p-8">
                        <img src={getZoneImage(zone)} alt={zoneName} className="w-full h-full object-cover" />
                    </div>

                    <div className="bg-[#F4EFE6] p-4 md:p-6 border-b border-[#E7DED0]">
                        <AudioPlayer zoneName={zone.name} />
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div>
                                <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-2">{zoneName}</h2>
                                <p className="text-[#8C6B3E] font-medium">{buildingTitle}</p>
                            </div>

                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Link Copied!
                                    </>
                                ) : (
                                    <>
                                        <Share2 className="w-4 h-4" />
                                        Share Link
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="prose max-w-none">
                            <p className="text-[#2B2B2B] leading-relaxed text-lg">{description}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <Link to="/auto-guide" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Auto Guide
                    </Link>
                </div>
            </div>
        </div>
    );
}
