import { useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, Volume2, BookOpen, Share, Check } from 'lucide-react';
import { floors, Floor, AllZoneItem, ThematicNarration } from '../data/allZoneData';

type View = 'floors' | 'zones' | 'detail' | 'thematic-detail';
type TabType = 'zona' | 'thematic';
// type LangTab = 'id' | 'en'; // reserved for auto-translate feature

function SimpleAudioPlayer({ src }: { src: string }) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
    const audioRef = useRef<HTMLAudioElement>(null);

    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
                {status === 'loading' && (
                    <span className="text-xs text-amber-500 flex items-center gap-1">
                        <svg className="h-3 w-3 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Memuat...
                    </span>
                )}
                {status === 'error' && (
                    <span className="text-xs text-red-400">Audio tidak tersedia</span>
                )}
            </div>
            <audio
                ref={audioRef}
                controls
                src={src}
                className="w-full h-10"
                onPlay={() => setStatus('ready')}
                onWaiting={() => setStatus('loading')}
                onCanPlay={() => setStatus('ready')}
                onError={() => setStatus('error')}
                preload="metadata"
            >
                Your browser does not support audio.
            </audio>
        </div>
    );
}

/* ─────────────────────── FLOOR SCREEN ─────────────────────── */
function FloorScreen({ onSelectFloor }: { onSelectFloor: (floor: Floor) => void }) {
    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-2 text-center">Pilih Lantai</h2>
            <p className="text-center text-[#5A5A5A] text-sm mb-8">
                Pilih lantai untuk melihat zona yang tersedia
            </p>
            <div className="flex flex-col gap-5">
                {floors.map((floor) => (
                    <button
                        key={floor.id}
                        onClick={() => onSelectFloor(floor)}
                        className="group flex items-center gap-0 rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-[#C8B9A6] transition-all duration-200 bg-white text-left"
                    >
                        <div className="w-36 h-28 flex-shrink-0 overflow-hidden">
                            <img
                                src={floor.image}
                                alt={floor.label}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex-1 px-5 py-4">
                            <div className="text-xs uppercase tracking-widest text-[#8C6B3E] font-semibold mb-1">
                                {floor.label}
                            </div>
                            <div className="font-['Cinzel'] text-lg text-[#2B2B2B] leading-tight mb-1">
                                {floor.subtitle}
                            </div>
                            <div className="text-xs text-[#5A5A5A]">
                                {floor.zones.length} zona tersedia
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#8C6B3E] mr-4 flex-shrink-0" />
                    </button>
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────── ZONE LIST SCREEN ─────────────────────── */
function ZoneListScreen({
    floor,
    onBack,
    onSelectZone,
}: {
    floor: Floor;
    onBack: () => void;
    onSelectZone: (zone: AllZoneItem) => void;
}) {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <button
                onClick={onBack}
                className="flex items-center gap-1 text-[#8C6B3E] text-sm mb-6 hover:underline"
            >
                <ChevronLeft className="w-4 h-4" />
                Beranda
            </button>

            <div className="mb-6">
                <div className="text-xs uppercase tracking-widest text-[#8C6B3E] font-semibold mb-1">
                    {floor.label}
                </div>
                <h2 className="font-['Cinzel'] text-xl text-[#2B2B2B]">{floor.subtitle}</h2>
                <p className="text-sm text-[#5A5A5A] mt-1">Pilih Zona Ruangan:</p>
            </div>

            <div className="flex flex-col gap-3">
                {floor.zones.map((zone) => (
                    <button
                        key={zone.id}
                        onClick={() => onSelectZone(zone)}
                        className="group flex items-center gap-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-[#C8B9A6] transition-all duration-200 bg-white text-left"
                    >
                        <div className="w-24 h-20 flex-shrink-0 overflow-hidden">
                            <img
                                src={zone.image}
                                alt={zone.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex-1 px-4 py-3">
                            <div className="font-['Cinzel'] text-sm text-[#2B2B2B] leading-snug">{zone.name}</div>
                            <div className="flex items-center gap-1 mt-1 text-xs text-[#8C6B3E]">
                                <Volume2 className="w-3 h-3" />
                                <span>{zone.thematics.length} narasi</span>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#8C6B3E] mr-4 flex-shrink-0" />
                    </button>
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────── ZONE DETAIL SCREEN ─────────────────────── */
function ZoneDetailScreen({
    zone,
    floorLabel,
    onBack,
    onSelectThematic,
}: {
    zone: AllZoneItem;
    floorLabel: string;
    onBack: () => void;
    onSelectThematic: (thematic: ThematicNarration) => void;
}) {
    const [activeTab, setActiveTab] = useState<TabType>('zona');

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <button
                onClick={onBack}
                className="flex items-center gap-1 text-[#8C6B3E] text-sm mb-4 hover:underline"
            >
                <ChevronLeft className="w-4 h-4" />
                {floorLabel}
            </button>

            <div className="mb-5">
                <div className="text-xs uppercase tracking-widest text-[#8C6B3E] font-semibold mb-1">
                    {floorLabel}
                </div>
                <h2 className="font-['Cinzel'] text-xl text-[#2B2B2B]">{zone.name}</h2>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border border-[#C8B9A6] bg-white mb-6">
                <img
                    src={zone.image}
                    alt={zone.name}
                    className="w-full h-48 object-cover"
                />
            </div>

            {/* Tab Navigation */}
            <div className="flex rounded-lg overflow-hidden border border-[#C8B9A6] mb-6">
                <button
                    onClick={() => setActiveTab('zona')}
                    className={`flex-1 py-2.5 text-sm font-['Cinzel'] font-medium transition-colors ${
                        activeTab === 'zona'
                            ? 'bg-[#8C6B3E] text-white'
                            : 'bg-white text-[#5A5A5A] hover:bg-[#E7DED0]'
                    }`}
                >
                    ZONA
                </button>
                <button
                    onClick={() => setActiveTab('thematic')}
                    className={`flex-1 py-2.5 text-sm font-['Cinzel'] font-medium transition-colors ${
                        activeTab === 'thematic'
                            ? 'bg-[#8C6B3E] text-white'
                            : 'bg-white text-[#5A5A5A] hover:bg-[#E7DED0]'
                    }`}
                >
                    THEMATIC
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'zona' && (
                <div className="bg-white rounded-xl border border-[#C8B9A6] p-5 shadow-sm">
                    <p className="text-sm text-[#5A5A5A] mb-4">
                        Rangkuman keseluruhan zona — putar narasi audio berikut untuk mendapatkan gambaran umum zona ini.
                    </p>
                    <SimpleAudioPlayer src={zone.overallAudioFile} />
                </div>
            )}

            {activeTab === 'thematic' && (
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-[#5A5A5A] mb-1">Pilih Judul Narasi:</p>
                    {zone.thematics.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => onSelectThematic(item)}
                            className="group flex items-center gap-3 bg-white rounded-xl border border-[#C8B9A6] px-4 py-3.5 shadow-sm hover:shadow-md hover:border-[#8C6B3E] transition-all duration-200 text-left"
                        >
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#8C6B3E] text-white text-xs flex items-center justify-center font-bold">
                                {index + 1}
                            </span>
                            <p className="flex-1 text-sm font-medium text-[#2B2B2B] leading-snug group-hover:text-[#8C6B3E] transition-colors">
                                {item.title}
                            </p>
                            <ChevronRight className="w-4 h-4 text-[#8C6B3E] flex-shrink-0" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ─────────────────────── THEMATIC DETAIL SCREEN ─────────────────────── */
function ThematicDetailScreen({
    thematic,
    zoneName,
    floorLabel,
    thematicIndex,
    totalThematics,
    onBack,
    onNavigate,
}: {
    thematic: ThematicNarration;
    zoneName: string;
    floorLabel: string;
    thematicIndex: number;
    totalThematics: number;
    onBack: () => void;
    onNavigate: (direction: 'prev' | 'next') => void;
}) {
    // const [langTab, setLangTab] = useState<LangTab>('id'); // reserved for auto-translate feature
    const hasText = !!thematic.textId;
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareUrl = thematic.objectId
            ? `${window.location.origin}/object/${thematic.objectId}`
            : window.location.href;
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            {/* Back */}
            <button
                onClick={onBack}
                className="flex items-center gap-1 text-[#8C6B3E] text-sm mb-4 hover:underline"
            >
                <ChevronLeft className="w-4 h-4" />
                {zoneName}
            </button>

            {/* Breadcrumb */}
            <div className="mb-5">
                <div className="text-xs uppercase tracking-widest text-[#8C6B3E] font-semibold mb-1">
                    {floorLabel} · {zoneName}
                </div>
                <h2 className="font-['Cinzel'] text-lg text-[#2B2B2B] leading-snug">
                    {thematic.title}
                </h2>
            </div>

            {/* Audio Player */}
            <div className="bg-white rounded-xl border border-[#C8B9A6] p-5 shadow-sm mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <Volume2 className="w-4 h-4 text-[#8C6B3E]" />
                    <span className="text-sm font-medium text-[#2B2B2B] font-['Cinzel']">Audio Narasi</span>
                </div>
                <SimpleAudioPlayer src={thematic.audioFile} />
            </div>

            {/* Text Content */}
            {hasText && (
                <div className="relative bg-white rounded-xl border border-[#C8B9A6] shadow-sm overflow-hidden mb-6">
                    {/* Share Button */}
                    <button
                        onClick={handleShare}
                        className="absolute top-3 right-3 z-10 bg-[#8C6B3E] text-white p-2 rounded-full shadow-md hover:bg-[#7A5F36] transition-colors"
                        aria-label="Share"
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Share className="w-4 h-4" />}
                    </button>

                    {/* Language toggle — reserved for auto-translate feature
                    <div className="flex border-b border-[#C8B9A6]">
                        <button onClick={() => setLangTab('id')} className="...">Indonesia</button>
                        <button onClick={() => setLangTab('en')} className="...">English</button>
                    </div>
                    */}

                    <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="w-4 h-4 text-[#8C6B3E]" />
                            <span className="text-sm font-medium text-[#8C6B3E] font-['Cinzel']">Teks Narasi</span>
                        </div>
                        <p className="text-sm text-[#2B2B2B] leading-relaxed">
                            {thematic.textId}
                            {/* EN text reserved for auto-translate: {thematic.textEn} */}
                        </p>
                    </div>
                </div>
            )}

            {/* Prev / Next Navigation */}
            <div className="flex items-center justify-between gap-3">
                <button
                    onClick={() => onNavigate('prev')}
                    disabled={thematicIndex === 0}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-['Cinzel'] transition-all ${
                        thematicIndex === 0
                            ? 'border-[#C8B9A6] text-[#C8B9A6] cursor-not-allowed'
                            : 'border-[#8C6B3E] text-[#8C6B3E] hover:bg-[#8C6B3E] hover:text-white'
                    }`}
                >
                    <ChevronLeft className="w-4 h-4" />
                    Sebelumnya
                </button>

                <span className="text-xs text-[#5A5A5A]">
                    {thematicIndex + 1} / {totalThematics}
                </span>

                <button
                    onClick={() => onNavigate('next')}
                    disabled={thematicIndex === totalThematics - 1}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-['Cinzel'] transition-all ${
                        thematicIndex === totalThematics - 1
                            ? 'border-[#C8B9A6] text-[#C8B9A6] cursor-not-allowed'
                            : 'border-[#8C6B3E] text-[#8C6B3E] hover:bg-[#8C6B3E] hover:text-white'
                    }`}
                >
                    Selanjutnya
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

/* ─────────────────────── MAIN PAGE ─────────────────────── */
export default function AllZone() {
    const [view, setView] = useState<View>('floors');
    const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
    const [selectedZone, setSelectedZone] = useState<AllZoneItem | null>(null);
    const [selectedThematicIndex, setSelectedThematicIndex] = useState<number>(0);

    const handleSelectFloor = (floor: Floor) => {
        setSelectedFloor(floor);
        setView('zones');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSelectZone = (zone: AllZoneItem) => {
        setSelectedZone(zone);
        setView('detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSelectThematic = (thematic: ThematicNarration) => {
        if (!selectedZone) return;
        const idx = selectedZone.thematics.indexOf(thematic);
        setSelectedThematicIndex(idx >= 0 ? idx : 0);
        setView('thematic-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigateThematic = (direction: 'prev' | 'next') => {
        if (!selectedZone) return;
        const newIndex = direction === 'prev' ? selectedThematicIndex - 1 : selectedThematicIndex + 1;
        if (newIndex >= 0 && newIndex < selectedZone.thematics.length) {
            setSelectedThematicIndex(newIndex);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBackToFloors = () => {
        setSelectedFloor(null);
        setView('floors');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToZones = () => {
        setSelectedZone(null);
        setView('zones');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToDetail = () => {
        setView('detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-[#F4EFE6] min-h-screen">
            {/* Hero */}
            <div className="relative bg-[#8C6B3E] text-white py-16 px-4">
                <div className="max-w-[1200px] mx-auto text-center">
                    <div className="text-sm md:text-base uppercase tracking-[0.3em] mb-3 opacity-90">
                        Audio Guide
                    </div>
                    <h1 className="font-['Cinzel'] text-3xl md:text-5xl mb-4">All Zone</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-5"></div>
                    <p className="text-base md:text-lg max-w-xl mx-auto opacity-90">
                        Jelajahi setiap zona museum dengan panduan narasi audio
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="pb-16">
                {view === 'floors' && (
                    <FloorScreen onSelectFloor={handleSelectFloor} />
                )}

                {view === 'zones' && selectedFloor && (
                    <ZoneListScreen
                        floor={selectedFloor}
                        onBack={handleBackToFloors}
                        onSelectZone={handleSelectZone}
                    />
                )}

                {view === 'detail' && selectedFloor && selectedZone && (
                    <ZoneDetailScreen
                        zone={selectedZone}
                        floorLabel={selectedFloor.label}
                        onBack={handleBackToZones}
                        onSelectThematic={handleSelectThematic}
                    />
                )}

                {view === 'thematic-detail' && selectedFloor && selectedZone && (
                    <ThematicDetailScreen
                        thematic={selectedZone.thematics[selectedThematicIndex]}
                        zoneName={selectedZone.name}
                        floorLabel={selectedFloor.label}
                        thematicIndex={selectedThematicIndex}
                        totalThematics={selectedZone.thematics.length}
                        onBack={handleBackToDetail}
                        onNavigate={handleNavigateThematic}
                    />
                )}
            </div>
        </div>
    );
}
