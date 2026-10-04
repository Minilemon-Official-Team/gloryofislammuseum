import { BookOpen, Sparkles, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/gallery';

const educationalContent = galleryItems.slice(7, 18);

export default function EducationalSeries() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      <section className="bg-[#8C6B3E] text-white py-32 px-4 museum-page-hero museum-page-hero-dark museum-page-hero-series"><div className="max-w-[900px] mx-auto text-center museum-page-hero-inner"><div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8"><Video className="w-10 h-10" /></div><h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6 museum-page-hero-title">Seri Edukasi Museum</h1><div className="w-24 h-1 bg-white mx-auto mb-8 museum-page-hero-rule" /><p className="text-lg md:text-xl opacity-90 museum-page-hero-description">Cerita pendek dari galeri untuk menemani proses belajar sebelum dan sesudah kunjungan.</p></div></section>

      <section className="max-w-[900px] mx-auto px-4 py-16"><div className="bg-white rounded shadow-md p-10"><p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">Seri ini merangkum beberapa tema dari arsip Glory of Islam Museum agar mudah dipakai sebagai materi pengantar, tugas refleksi, atau percakapan keluarga.</p><p className="text-[#2B2B2B] text-lg leading-relaxed">Buka galeri untuk melihat konteks visual lengkap dari setiap cerita.</p></div></section>

      <section className="bg-[#E7DED0] py-16 px-4"><div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8"><div className="bg-white p-8 rounded shadow text-center"><Video className="w-10 h-10 mx-auto text-[#8C6B3E] mb-4" /><h3 className="font-['Cinzel'] text-xl mb-3">Cerita singkat</h3><p className="text-[#5A5A5A] leading-relaxed">Mulai dengan satu topik yang mudah dibaca bersama.</p></div><div className="bg-white p-8 rounded shadow text-center"><BookOpen className="w-10 h-10 mx-auto text-[#8C6B3E] mb-4" /><h3 className="font-['Cinzel'] text-xl mb-3">Konteks sejarah</h3><p className="text-[#5A5A5A] leading-relaxed">Hubungkan visual koleksi dengan linimasa dan ruang pamer.</p></div><div className="bg-white p-8 rounded shadow text-center"><Sparkles className="w-10 h-10 mx-auto text-[#8C6B3E] mb-4" /><h3 className="font-['Cinzel'] text-xl mb-3">Bahan lanjutan</h3><p className="text-[#5A5A5A] leading-relaxed">Lanjutkan eksplorasi melalui galeri dan audio guide museum.</p></div></div></section>

      <section className="max-w-[1200px] mx-auto px-4 py-16 space-y-16">{educationalContent.map((content, index) => <article key={content.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#E7DED0]'} rounded shadow-md overflow-hidden`}><div className="grid md:grid-cols-2 gap-8 p-8"><div className="rounded overflow-hidden bg-[#8C6B3E]/10 min-h-[280px]"><img src={content.image} alt={content.title} className="w-full h-full max-h-[320px] object-cover rounded" loading="lazy" /></div><div className="flex flex-col justify-center"><h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-6">{content.title}</h3><p className="text-[#2B2B2B] leading-relaxed">{content.caption}</p><div className="mt-6 pt-6 border-t border-[#C8B9A6]"><p className="text-sm text-[#5A5A5A]">Arsip seri edukasi #{index + 1}</p></div></div></div></article>)}</section>

      <section className="bg-[#8C6B3E] text-white py-16 px-4"><div className="max-w-[900px] mx-auto text-center"><h2 className="font-['Cinzel'] text-3xl md:text-4xl mb-6">Lihat arsip lengkap</h2><p className="text-lg opacity-90 mb-8">Temukan seluruh koleksi visual dan pilih cerita yang ingin kamu dalami.</p><Link to="/gallery" className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6]">Buka galeri</Link></div></section>
    </div>
  );
}
