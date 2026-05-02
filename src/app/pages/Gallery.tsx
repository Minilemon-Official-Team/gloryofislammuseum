import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'A Pair of Loro Blonyo (Sekelompok Loro Blonyo)',
    category: 'Artifacts',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926889/1_bb8gmg.webp',
    description: 'Sepasang patung loro blonyo berasal dari sebuah Desa di Ponorogo yang dipercaya sebagai perwujudan pasangan nenek moyang yang diyakini dapat melindungi, menolong dan menyembuhkan berbagai penyakit, yang konon menurut cerita apabila ada yang sakit maka dengan mengambil sedikit dari bagian wajah patung tersebut dan serta diberi do’a ritual maka penyakit tersebut akan sembuh.',
  },
  {
    id: 2,
    title: 'Barong Tengkok',
    category: 'Artifacts',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926890/2_cd3li0.webp',
    description: 'Barong Tengkok adalah Sebutan untuk seni pertunjukkan yang biasanya disuguhkan dalam suatu acara untuk mengiringi pengantin pada acara perkawinan atau acara Khitanan, berfungsi sebagai hiburan. Prosesinya berupa arak – arakan dengan mengusung calon pengantin atau yang dikhitan dengan kuda – kudaan kayu.',
  },
  {
    id: 3,
    title: 'Dayak Iban Statue (Dayak Iban Statue)',
    category: 'Artifacts',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926890/3_j4wpy0.webp',
    description: 'Patung Penjaga yang biasa diletakkan di depan rumah adat untuk tolak balak / patung pengusir roh – roh jahat seperti wabah penyakit, petaka dan gangguan roh – roh jahat.',
  },
  {
    id: 4,
    title: 'Mask Bird (Topeng Burung)',
    category: 'Artifacts',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926890/4_ppc9zy.webp',
    description: 'The Bird Mask, which is depicted as a hornbill, is believed to be a bearer of blessings to farmers, at the start of rice planting, which is usually a ritual ceremony to ward off pests and disasters.',
  },
  {
    id: 5,
    title: 'Letti Statue (Patung Letti)',
    category: 'Artifacts',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926890/5_r19bii.webp',
    description: 'Patung prasejarah peninggalan masyarakat purbakala yang digunakan untuk media berinteraksi dengan alam kematian/leluhur. Patung ini mempunyai bercak darah di sekitar bagian tubuhnya yang menandakan pernah digunakan untuk acara ritual penyembahan',
  },
  {
    id: 6,
    title: 'Tao-Tao Statue (Patung Tao-Tao)',
    category: 'Artifacts',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926891/6_ocazup.webp',
    description: 'Patung penjaga makam Batu Lemo Toraja. Patung ini diperuntukkan bagi kaum Bangsawan saja. Kata Tao dalam bahasa Toraja berarti orang, oleh sebab itu patung Tao-Tao di pahat menyerupai orang yang meninggal.',
  },
  {
    id: 7,
    title: 'Pustaha Lak-Lak',
    category: 'Documents',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926892/7_vpirjo.webp',
    description: 'Kitab suci kuno yang bernama Pustaha yang berasal dari Batak. Berisikan tulisan tentang cara perawatan medis secara tradisional, sihir, tentang cara untuk menangkal hal jahat (poda), mantra dan doa untuk hal yang baik agar dapat mencapai tujuan tertentu. Ditulis dalam aksara Batak, terdiri atas lampak (cover) dan Lak-lak (kulit pohon sebagai media untuk menulis). Sampul buku dengan motif bentuk kadal yang melambangkan Dewa Baraspati di Tano.Pustaha terbuat dari kayu atau lapisan kayu dari pohon alim (aquilaria Malaccensis) tintanya datang dari hasil kapur yang dibakar dan campuran dari esensi sona dan hake, adapun cara penulisannya menggunakan bulu ayam.',
  },
  {
    id: 8,
    title: 'Sculpture Deer (Patung Rusa)',
    category: 'Artifacts',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926893/8_xafgvg.webp',
    description: 'Patung rusa dalam kehidupan para Bangsawan Keraton dilambangkan kesiagaan atau kewaspadaan terhadap ancaman musuh, rusa juga dikenal lincah, gesit dan cepat, dan tidak meninggalkan keelokannya/kewibawaannya.',
  },
  {
    id: 9,
    title: 'Tiger Mask (Topeng Harimau)',
    category: 'Sculpture',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926894/9_mvwmft.webp',
    description: 'Topeng Macan yang biasa digunakan untuk drama wayang orang, berperan sebagai makhluk penjaga hutan dan mempunyai sifat yang suka menerkam orang yang mengganggu hutan kekuasaannya.',
  },
  {
    id: 10,
    title: 'TKalimantan Mask (Topeng Kalimantan)',
    category: 'Sculpture',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926895/10_a17crm.webp',
    description: 'Topeng Kalimantan digunakan pada upacara adat tradisional di Kalimantan.',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Sculpture', 'Pottery', 'Textiles', 'Architecture', 'Artifacts', 'Documents'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            The galleries at the Indonesian Heritage Museum display various collections that illustrate the richness of Indonesian culture, ranging from ancient statues, traditional masks, to scriptures that have high historical value. Each collection reflects the uniqueness and diversity of cultures that developed in various regions in Indonesia. Through this exhibition, visitors can better understand how Indonesia’s art and traditions are strongly intertwined, as well as the important role these objects played in the lives of Indonesians in the past. The gallery provides a deep insight into the long journey of Indonesian culture that is rich in spiritual, aesthetic and historical values.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded transition-all ${
                filter === category
                  ? 'bg-[#8C6B3E] text-white shadow-lg'
                  : 'bg-white text-[#2B2B2B] border border-[#C8B9A6] hover:bg-[#E7DED0]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="24px">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-[#8C6B3E] text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-['Cinzel'] text-xl mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-white text-center">
                <span className="inline-block px-4 py-2 bg-[#8C6B3E] rounded-full text-sm mb-3">
                  {selectedImage.category}
                </span>
                <h2 className="font-['Cinzel'] text-3xl mb-2">{selectedImage.title}</h2>
                <p className="text-white/80 text-lg">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
