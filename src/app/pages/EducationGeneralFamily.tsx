import { Camera, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/gallery';

const familyRoutes = galleryItems.slice(0, 8).map((item, index) => ({
  id: index + 1,
  title: item.title,
  description: item.caption,
  image: item.image,
}));

export default function EducationGeneralFamily() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      <section className="relative bg-[#8C6B3E] text-white py-32 px-4 museum-page-hero museum-page-hero-dark museum-page-hero-family">
        <div className="max-w-[900px] mx-auto text-center museum-page-hero-inner">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8"><Users className="w-10 h-10" /></div>
          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6 museum-page-hero-title">Program Keluarga</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8 museum-page-hero-rule" />
          <p className="text-lg md:text-xl opacity-90 leading-relaxed museum-page-hero-description">Rute ringan untuk mengenal sejarah Islam dan budaya Nusantara bersama keluarga.</p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">Program keluarga menggunakan cerita singkat dan visual koleksi agar setiap anggota keluarga dapat menemukan titik masuknya sendiri di museum.</p>
          <p className="text-[#2B2B2B] text-lg leading-relaxed">Pilih arsip yang menarik, lalu lanjutkan dengan kunjungan langsung atau jelajah digital melalui halaman galeri.</p>
        </div>
      </section>

      <section className="bg-[#E7DED0] py-16 px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow-md p-8 text-center"><Heart className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" /><h3 className="font-['Cinzel'] text-xl mb-3">Cerita bersama</h3><p className="text-[#5A5A5A] leading-relaxed">Bahas satu koleksi dan temukan kisah yang paling berkesan untuk keluarga.</p></div>
          <div className="bg-white rounded shadow-md p-8 text-center"><Users className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" /><h3 className="font-['Cinzel'] text-xl mb-3">Rute fleksibel</h3><p className="text-[#5A5A5A] leading-relaxed">Mulai dari galeri, zona sejarah, atau audio guide sesuai usia pengunjung.</p></div>
          <div className="bg-white rounded shadow-md p-8 text-center"><Camera className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" /><h3 className="font-['Cinzel'] text-xl mb-3">Belajar lewat gambar</h3><p className="text-[#5A5A5A] leading-relaxed">Gunakan arsip foto museum sebagai pemantik percakapan sebelum berkunjung.</p></div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-16 space-y-16">
        {familyRoutes.map((item, index) => (
          <article key={item.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#E7DED0]'} rounded shadow-md overflow-hidden`}>
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="rounded overflow-hidden bg-[#8C6B3E]/10 min-h-[280px]"><img src={item.image} alt={item.title} className="w-full h-full max-h-[320px] object-cover rounded" loading="lazy" /></div>
              <div className="flex flex-col justify-center"><div className="text-sm text-[#8C6B3E] font-medium mb-3">Rute keluarga #{item.id}</div><h3 className="font-['Cinzel'] text-2xl md:text-3xl mb-6">{item.title}</h3><div className="border-l border-[#8C6B3E] pl-6"><p className="leading-relaxed">{item.description}</p></div></div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-[#8C6B3E] text-white py-16 px-4"><div className="max-w-[900px] mx-auto text-center"><h2 className="font-['Cinzel'] text-3xl md:text-4xl mb-6">Siapkan kunjungan keluarga</h2><p className="text-lg opacity-90 mb-8">Lihat informasi jam buka, lokasi, dan rute kunjungan sebelum datang.</p><Link to="/visit" className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6]">Rencanakan kunjungan</Link></div></section>
    </div>
  );
}
