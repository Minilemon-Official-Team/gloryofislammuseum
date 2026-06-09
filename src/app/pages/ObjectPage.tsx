import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Check, MapPin, Share2, Volume2 } from 'lucide-react';
import { useTranslationContext } from '../context/TranslationContext';
import { ContentLanguageSwitcher } from '../components/ui/ContentLanguageSwitcher';
import { AudioPlayer } from '../components/ui/AudioPlayer';
import { findZoneById, getZoneImage } from '../data/museumData';
import { findThematicByObjectId } from '../data/allZoneData';

export default function ObjectPage() {
    const { id } = useParams<{ id: string }>();
    const [copied, setCopied] = useState(false);
    const { currentLang, getDescription, prefetchTranslation } = useTranslationContext();

    const objectId = id ? parseInt(id, 10) : null;

    // Check if this is an All Zone thematic (IDs 15–73)
    const thematicResult = objectId && objectId >= 15 ? findThematicByObjectId(objectId) : null;

    // Otherwise fall back to museumData zones (IDs 1–14)
    const found = !thematicResult && objectId ? findZoneById(objectId) : null;

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

    // ── All Zone Thematic View (objectId 15–73) ──────────────────────────────
    if (thematicResult) {
        const { thematic, zone, floor } = thematicResult;

        return (
            <AllZoneThematicView
                thematic={thematic}
                zoneName={zone.name}
                floorLabel={floor.label}
                objectId={objectId!}
                copied={copied}
                onShare={handleShare}
            />
        );
    }

    // ── Object Not Found ──────────────────────────────────────────────────────
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

    // ── Auto Guide Zone View (objectId 1–14) ─────────────────────────────────
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
                    <div className="w-full h-[400px] md:h-[500px] bg-[#8C6B3E] overflow-hidden">
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

// ── Standalone All Zone Thematic View Component ───────────────────────────────
interface AllZoneThematicViewProps {
    thematic: { title: string; audioFile: string; textId: string; textEn: string; objectId?: number };
    zoneName: string;
    floorLabel: string;
    objectId: number;
    copied: boolean;
    onShare: () => void;
}

function AllZoneThematicView({ thematic, zoneName, floorLabel, objectId, copied, onShare }: AllZoneThematicViewProps) {
    const hasText = !!thematic.textId;

    return (
        <div className="bg-[#F4EFE6] min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-[#E7DED0] py-3 px-4 pt-20">
                <div className="max-w-[600px] mx-auto">
                    <div className="flex items-center gap-2 text-sm flex-wrap">
                        <Link to="/" className="text-[#8C6B3E] hover:underline">Home</Link>
                        <span className="text-[#5A5A5A]">/</span>
                        <Link to="/all-zone" className="text-[#8C6B3E] hover:underline">All Zone</Link>
                        <span className="text-[#5A5A5A]">/</span>
                        <span className="text-[#5A5A5A] truncate max-w-[200px]">{zoneName}</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="bg-[#8C6B3E] text-white py-8 px-4">
                <div className="max-w-[600px] mx-auto">
                    <div className="flex items-center gap-2 text-sm opacity-80 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{floorLabel} · {zoneName}</span>
                    </div>
                    <h1 className="font-['Cinzel'] text-2xl md:text-3xl leading-tight">{thematic.title}</h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[600px] mx-auto px-4 py-6">

                {/* Audio Player Card */}
                {thematic.audioFile && (
                    <div className="bg-white rounded-xl border border-[#C8B9A6] shadow-sm p-4 mb-4">
                        <div className="flex items-center gap-2 mb-3">
                            <Volume2 className="w-4 h-4 text-[#8C6B3E]" />
                            <span className="text-sm font-medium text-[#8C6B3E] font-['Cinzel']">Audio Narasi</span>
                        </div>
                        <audio
                            src={thematic.audioFile}
                            controls
                            className="w-full"
                            style={{ accentColor: '#8C6B3E' }}
                        />
                    </div>
                )}

                {/* Narrative Text Card */}
                {hasText && (
                    <div className="relative bg-white rounded-xl border border-[#C8B9A6] shadow-sm overflow-hidden mb-6">
                        <button
                            onClick={onShare}
                            className="absolute top-3 right-3 z-10 bg-[#8C6B3E] text-white p-2 rounded-full shadow-md hover:bg-[#7A5F36] transition-colors"
                            aria-label="Share"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                        </button>
                        <div className="p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <BookOpen className="w-4 h-4 text-[#8C6B3E]" />
                                <span className="text-sm font-medium text-[#8C6B3E] font-['Cinzel']">Teks Narasi</span>
                            </div>
                            <p className="text-sm text-[#2B2B2B] leading-relaxed pr-8">
                                {thematic.textId}
                            </p>
                        </div>
                    </div>
                )}

                {/* Share button (when no text) */}
                {!hasText && (
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={onShare}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8C6B3E] text-white rounded-lg hover:bg-[#7A5F36] transition-colors text-sm"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                            {copied ? 'Link Disalin!' : 'Bagikan'}
                        </button>
                    </div>
                )}

                {/* Back link */}
                <div className="flex gap-3">
                    <Link
                        to="/all-zone"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8C6B3E] text-white rounded-lg hover:bg-[#7A5F36] transition-colors text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke All Zone
                    </Link>
                </div>
            </div>
        </div>
    );
}
