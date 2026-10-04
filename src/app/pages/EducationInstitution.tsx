import { BookOpen, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildings } from '../data/museumData';

const learningRoutes = buildings.flatMap((building) => building.zones).slice(0, 11);

export default function EducationInstitution() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      <section className="relative bg-[#8C6B3E] text-white py-32 px-4 museum-page-hero museum-page-hero-dark museum-page-hero-institution">
        <div className="max-w-[900px] mx-auto text-center museum-page-hero-inner">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8"><GraduationCap className="w-10 h-10" /></div>
          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6 museum-page-hero-title">Program Institusi Pendidikan</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8 museum-page-hero-rule" />
          <p className="text-lg md:text-xl opacity-90 leading-relaxed museum-page-hero-description">Gunakan zona museum sebagai bahan belajar sejarah, peradaban, dan budaya yang kontekstual.</p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-4 py-16"><div className="bg-white rounded shadow-md p-8 md:p-12"><p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">Rangkaian ruang di Glory of Islam Museum dapat menjadi titik awal diskusi kelas, tugas riset, atau kunjungan terarah untuk sekolah dan kampus.</p><p className="text-[#2B2B2B] text-lg leading-relaxed">Pilih zona yang sesuai dengan topik pembelajaran, lalu siapkan pertanyaan sebelum rombongan datang.</p></div></section>

      <section className="bg-[#E7DED0] py-16 px-4"><div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8"><div className="bg-white rounded shadow-md p-8 text-center"><BookOpen className="mx-auto mb-4 text-[#8C6B3E]" size={36} /><h3 className="font-['Cinzel'] text-xl mb-3">Bahan diskusi</h3><p className="text-[#5A5A5A] leading-relaxed">Gunakan narasi zona sebagai bahan pembuka pelajaran sejarah dan kebudayaan.</p></div><div className="bg-white rounded shadow-md p-8 text-center"><GraduationCap className="mx-auto mb-4 text-[#8C6B3E]" size={36} /><h3 className="font-['Cinzel'] text-xl mb-3">Kunjungan terarah</h3><p className="text-[#5A5A5A] leading-relaxed">Susun rute berdasarkan tema agar waktu belajar di museum lebih terukur.</p></div><div className="bg-white rounded shadow-md p-8 text-center"><Users className="mx-auto mb-4 text-[#8C6B3E]" size={36} /><h3 className="font-['Cinzel'] text-xl mb-3">Belajar kolaboratif</h3><p className="text-[#5A5A5A] leading-relaxed">Ajak siswa mencatat temuan, membandingkan ruang, dan mempresentasikan hasilnya.</p></div></div></section>

      <section className="max-w-[1200px] mx-auto px-4 py-16 space-y-16">{learningRoutes.map((zone, index) => <article key={zone.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#E7DED0]'} rounded shadow-md overflow-hidden`}><div className="grid md:grid-cols-2 gap-8 p-8"><div className="rounded overflow-hidden bg-[#8C6B3E]/10 min-h-[280px]"><img src={zone.image} alt={zone.name} className="w-full h-full max-h-[320px] object-cover rounded" loading="lazy" /></div><div className="flex flex-col justify-center"><div className="text-sm text-[#8C6B3E] font-medium mb-3">Zona pembelajaran #{zone.id}</div><h3 className="font-['Cinzel'] text-2xl md:text-3xl mb-6">{zone.name}</h3><div className="border-l border-[#8C6B3E] pl-6"><p className="leading-relaxed">{zone.description}</p></div></div></div></article>)}</section>

      <section className="bg-[#8C6B3E] text-white py-16 px-4"><div className="max-w-[900px] mx-auto text-center"><h2 className="font-['Cinzel'] text-3xl md:text-4xl mb-6">Bawa kelas ke museum</h2><p className="text-lg opacity-90 mb-8">Hubungi tim museum untuk menyiapkan rute kunjungan institusi pendidikan.</p><Link to="/visit" className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6]">Lihat informasi kunjungan</Link></div></section>
    </div>
  );
}
