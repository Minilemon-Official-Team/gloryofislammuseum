import { MessageCircle, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Testimoni() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4 museum-plain-page">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16 museum-page-intro museum-page-intro-testimoni">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4 museum-page-intro-title">Cerita Pengunjung</h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6 museum-page-intro-rule" />
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed museum-page-intro-description">Halaman ini akan menampilkan pengalaman pengunjung yang sudah diverifikasi oleh tim museum.</p>
        </div>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2 min-h-[300px]"><img src="/images/home/section-1.jpg" alt="Ruang pamer Glory of Islam Museum" className="w-full h-full object-cover" /></div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <Quote className="w-10 h-10 text-[#8C6B3E] mb-6" />
            <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-4">Ruang untuk cerita pengunjung</h2>
            <p className="text-[#5A5A5A] leading-relaxed mb-6">Belum ada testimoni terverifikasi yang diterbitkan. Kami memilih menunggu cerita asli pengunjung daripada menampilkan kutipan contoh.</p>
            <div className="flex items-center gap-3 text-[#8C6B3E] text-sm"><MessageCircle className="w-5 h-5" />Testimoni akan diperbarui setelah proses moderasi selesai.</div>
          </div>
        </section>

        <section className="mt-16 bg-[#E7DED0] rounded-lg shadow-lg p-10 md:p-12 text-center">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-4">Bagikan pengalamanmu</h2>
          <p className="text-[#5A5A5A] mb-8 max-w-2xl mx-auto">Setelah berkunjung, hubungi tim museum agar pengalamanmu dapat dipertimbangkan untuk ditampilkan di halaman ini.</p>
          <Link to="/visit" className="inline-block px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg">Lihat informasi kunjungan</Link>
        </section>
      </div>
    </div>
  );
}
