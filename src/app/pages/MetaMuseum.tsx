import { Cpu, Eye, Layers } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { buildings } from '../data/museumData';

const metaZoneItems = buildings.flatMap((building) => building.zones).slice(0, 12);

const arItems = [
  ...galleryItems.map((item) => ({
    title: item.title,
    description: item.caption,
    image: item.image,
  })),
  ...metaZoneItems.map((zone) => ({
      title: zone.name,
      description: zone.description,
      image: zone.image,
  })),
].map((item, index) => ({ ...item, id: index + 1 }));

const metaArchiveCount = galleryItems.length + metaZoneItems.length;

export default function MetaMuseum() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      <section className="relative bg-[#8C6B3E] text-white py-32 px-4 museum-page-hero museum-page-hero-dark museum-page-hero-meta">
        <div className="max-w-[900px] mx-auto text-center museum-page-hero-inner">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6 museum-page-hero-title">Meta Museum</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8 museum-page-hero-rule" />
          <p className="text-lg md:text-xl opacity-90 leading-relaxed museum-page-hero-description">
            Lapisan digital yang membuat koleksi Glory of Islam Museum terasa lebih dekat.
          </p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Meta Museum memperluas kunjungan melalui Augmented Reality, sehingga cerita di balik koleksi dan zona museum dapat dipelajari kembali dari perangkat pengunjung.
          </p>
          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Jelajahi arsip visual di bawah ini untuk mengenali ruang, peristiwa, dan jejak peradaban yang menjadi bagian dari koleksi museum.
          </p>
        </div>
      </section>

      <section className="bg-[#E7DED0] py-16 px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow-md p-8 text-center">
            <Cpu className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Koleksi berlapis AR</h3>
            <p className="text-[#5A5A5A] leading-relaxed">Informasi tambahan hadir sebagai lapisan digital di atas koleksi museum.</p>
          </div>
          <div className="bg-white rounded shadow-md p-8 text-center">
            <Eye className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Belajar lewat visual</h3>
            <p className="text-[#5A5A5A] leading-relaxed">Foto galeri dan ruang pamer membantu pengunjung menyiapkan rute kunjungan.</p>
          </div>
          <div className="bg-white rounded shadow-md p-8 text-center">
            <Layers className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" />
            <h3 className="font-['Cinzel'] text-xl mb-3">{metaArchiveCount} arsip museum</h3>
            <p className="text-[#5A5A5A] leading-relaxed">Koleksi visual ini menggabungkan {galleryItems.length} item galeri dan {metaZoneItems.length} zona museum.</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-16 space-y-16">
        {arItems.map((item, index) => (
          <article key={item.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#E7DED0]'} rounded shadow-md overflow-hidden`}>
            <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="rounded overflow-hidden flex items-center justify-center bg-[#8C6B3E]/10 min-h-[260px]">
                <img src={item.image} alt={item.title} className="w-full h-full max-h-[420px] object-cover rounded" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-sm text-[#8C6B3E] font-medium mb-3">Arsip digital #{item.id}</div>
                <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-6">{item.title}</h3>
                <div className="border-l border-[#8C6B3E] pl-6">
                  <p className="text-[#2B2B2B] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
