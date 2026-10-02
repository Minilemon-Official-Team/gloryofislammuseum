import { useEffect, useState } from 'react';
import { ArrowLeft, Check, MapPin, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ContentLanguageSwitcher } from '../components/ui/ContentLanguageSwitcher';
import { useTranslationContext } from '../context/TranslationContext';
import { findZoneById, getZoneImage } from '../data/museumData';
import { findDioramaBySlug } from '../data/dioramaData';
import { getDioramaDetailDescription } from '../data/dioramaNarratives';
import { copyShareLink } from '../utils/share';

export default function DioramaPage() {
    const { slug } = useParams<{ slug: string }>();
    const [copied, setCopied] = useState(false);
    const { currentLang } = useTranslationContext();
    const diorama = slug ? findDioramaBySlug(slug) : null;
    const parent = diorama ? findZoneById(diorama.zoneId) : null;
    const isEn = currentLang === 'en';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleShare = async () => {
        if (!diorama) return;
        const shareUrl = `${window.location.origin}/diorama/${encodeURIComponent(diorama.slug)}`;
        try {
            await copyShareLink(shareUrl);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (!diorama || !parent) {
        return (
            <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
                <div className="max-w-[800px] mx-auto text-center">
                    <h1 className="font-['Cinzel'] text-3xl text-[#8C6B3E] mb-4">Diorama Not Found</h1>
                    <p className="text-[#5A5A5A] mb-8">The requested diorama is not available.</p>
                    <Link to="/auto-guide" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Auto Guide
                    </Link>
                </div>
            </div>
        );
    }

    const name = isEn ? diorama.nameEn : diorama.name;
    const zoneName = isEn ? parent.zone.nameEn : parent.zone.name;
    const description = isEn ? diorama.descriptionEn : diorama.description;
    const detailDescription = isEn ? diorama.descriptionEn : getDioramaDetailDescription(diorama.slug, diorama.description);
    const zoneLabel = isEn ? diorama.zoneLabelEn : diorama.zoneLabel;

    return (
        <div className="bg-[#F4EFE6] min-h-screen pb-12">
            <div className="bg-[#E7DED0] py-3 px-4">
                <div className="max-w-[1000px] mx-auto flex items-center gap-2 text-sm flex-wrap">
                    <Link to="/" className="text-[#8C6B3E] hover:underline">Home</Link>
                    <span className="text-[#5A5A5A]">/</span>
                    <Link to="/auto-guide" className="text-[#8C6B3E] hover:underline">Auto Guide</Link>
                    <span className="text-[#5A5A5A]">/</span>
                    <span className="text-[#5A5A5A]">{name}</span>
                </div>
            </div>

            <div className="relative bg-[#8C6B3E] text-white py-12 px-4 museum-page-hero museum-page-hero-dark museum-page-hero-detail museum-page-hero-diorama">
                <div className="max-w-[1000px] mx-auto museum-page-hero-inner">
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm opacity-80">
                            <MapPin className="w-4 h-4" />
                            <span>{zoneLabel}</span>
                        </div>
                        <ContentLanguageSwitcher />
                    </div>
                    <h1 className="font-['Cinzel'] text-4xl md:text-5xl mb-2 museum-page-hero-title">{name}</h1>
                    <p className="text-sm opacity-80 museum-page-hero-description">
                        {isEn ? `Zone #${parent.index + 1} · ${zoneName}` : `Zona #${parent.index + 1} · ${zoneName}`}
                    </p>
                </div>
            </div>

            <div className="max-w-[1000px] mx-auto px-4 py-10">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                        <div className="rounded overflow-hidden bg-[#8C6B3E] min-h-[260px]">
                            <img src={getZoneImage(parent.zone)} alt={zoneName} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex items-start justify-between gap-4 mb-5">
                                <div>
                                    <div className="text-sm text-[#8C6B3E] font-medium mb-2">{zoneLabel}</div>
                                    <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">{name}</h2>
                                </div>
                                <button
                                    onClick={handleShare}
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors text-sm shrink-0"
                                >
                                    {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                                    {copied ? (isEn ? 'Copied' : 'Tersalin') : (isEn ? 'Share' : 'Bagikan')}
                                </button>
                            </div>

                            <p className="notranslate text-[#2B2B2B] leading-relaxed text-lg mb-6">{description}</p>

                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm text-[#5A5A5A]">{isEn ? 'Download the QR image to open this diorama detail page.' : 'Unduh gambar QR untuk membuka halaman detail diorama ini.'}</span>
                                    <a
                                        href={diorama.qrPath}
                                        download
                                        className="inline-flex items-center justify-center px-4 py-2 border border-[#8C6B3E] text-[#8C6B3E] rounded hover:bg-[#F4EFE6] transition-colors text-sm"
                                    >
                                        Download QR PNG
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <article className="mt-6 bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-5">
                        {isEn ? 'Diorama narrative' : 'Narasi diorama'}
                    </h2>
                    <div className="space-y-4 text-[#2B2B2B] leading-relaxed text-lg">
                        {detailDescription.split(/\n\n+/).map((paragraph, index) => (
                            <p key={`${diorama.slug}-paragraph-${index}`}>{paragraph}</p>
                        ))}
                    </div>
                </article>

                <div className="mt-8 flex gap-4">
                    <Link to="/auto-guide" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        {isEn ? 'Back to Auto Guide' : 'Kembali ke Auto Guide'}
                    </Link>
                </div>
            </div>
        </div>
    );
}
