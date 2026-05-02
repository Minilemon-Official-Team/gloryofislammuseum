import { useEffect } from 'react';
import { Users, Heart, Camera } from 'lucide-react';

export default function EducationGeneralFamily() {
    useEffect(() => {
    if (!window.tiktokEmbedLoaded) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
  
      window.tiktokEmbedLoaded = true;
    } else {
      if (window.tiktokEmbedLoad) {
        window.tiktokEmbedLoad();
      }
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      videoId: '7416667601687809298',
      title: 'Inilah Kesan Mereka Tentang Pesona Indonesian Heritage Museum',
      description: 'Kata mereka, museum ini sangat menarik karena terdapat benda-benda peninggalan asli yang kaya makna sejarah. Selain itu, museum ini tidak hanya menjadi tempat rekreasi yang menyenangkan, tetapi juga menjadi sarana edukasi yang bermanfaat bagi pengunjung dari berbagai usia.',
    },
    {
      id: 2,
      videoId: '7446342608315583752',
      title: 'Begini Pendapat Pengunjung dari Lampung Tentang Pengalaman di Indonesian Heritage Museum',
      description: 'Menurut pengunjung, Indonesian Heritage Museum menawarkan banyak pembelajaran budaya yang berharga. Museum ini menghadirkan wawasan mendalam tentang sejarah dan tradisi Indonesia melalui koleksi-koleksi autentiknya.',
    },
    {
      id: 3,
      videoId: '7421491440083062024',
      title: 'Ini yang Dirasakan Pengunjung saat Berkunjung ke Indonesian Heritage Museum',
      description: 'Pengunjung dalam video ini menyebut bahwa Indonesian Heritage Museum adalah tempat yang bagus untuk memahami sejarah dan budaya Indonesia. Mereka merasa museum ini memberikan pengalaman edukasi yang menarik sekaligus menyenangkan.',
    },
    {
      id: 4,
      videoId: '7416667601687809298',
      title: 'Pengalaman Berkesan Adik Kecil saat Berkunjung di Indonesian Heritage Museum',
      description: 'Selama mengunjungi museum, adik kecil asal Surabaya ini mendapatkan banyak pengetahuan tentang suku adat dan budaya dari berbagai daerah di Indonesia.',
    },
    {
      id: 5,
      videoId: '7384394681901141266',
      title: 'Cerita Pengunjung dari Bali tentang Keseruan Mengunjungi Indonesian Heritage Museum',
      description: 'Melalui koleksi yang dipamerkan, pengunjung ini menyebut dapat mengenali ciri khas dari berbagai daerah di Indonesia. Selain itu, ukiran pada benda-benda yang dipamerkan memiliki keunikan tersendiri yang mampu menarik perhatian.',
    },
    {
      id: 6,
      videoId: '7455641795221818642',
      title: 'Pengalaman Menjelajahi Warisan Indonesia dengan Augmented Reality di Indonesian Heritage Museum',
      description: 'Di Indonesian Heritage Museum, pengunjung dapat mempelajari sejarah Indonesia, mulai dari peradaban kuno hingga zaman modern, serta wawasan mengenai akulturasi budaya antara Indonesia dan budaya luar. Augmented Reality membantu memvisualisasikan secara nyata peradaban bangsa Indonesia.',
    },
    {
      id: 7,
      videoId: '7462238543105035536',
      title: 'Pendapat Tentang Penggunaan Augmented Reality di Indonesian Heritage Museum',
      description: 'Penggunaan augmented reality di Indonesian Heritage Museum sangat bagus untuk menciptakan pengalaman interaktif yang menghidupkan sejarah dengan visual yang nyata. Selain itu, pengunjung juga dapat melihat benda-benda purba asli yang memperkaya pengetahuan tentang masa lalu Indonesia.',
    },
    {
      id: 8,
      videoId: '7388458706545020161',
      title: 'Cerita Menarik saat Mengunjungi Indonesian Heritage Museum',
      description: 'Di Indonesian Heritage Museum, pengunjung dapat mengetahui sejarah, adat istiadat, dan berbagai peninggalan budaya Indonesia yang kaya dan beragam.',
    },
    {
      id: 9,
      videoId: '7357924367243726097',
      title: 'Kesan Seru saat Berkunjung ke Indonesian Heritage Museum',
      description: 'Kunjungan ke Indonesian Heritage Museum sangat memberikan insight yang mendalam tentang sejarah dan budaya nusantara.',
    },
    {
      id: 10,
      videoId: '7454081256171572486',
      title: 'Cerita Kesan dan Pesan Setelah Mengunjungi Indonesian Heritage Museum',
      description: 'Museum ini memberikan wawasan sejarah yang mendalam dengan informasi lengkap di dalamnya, mencakup berbagai aspek budaya dan suku di Indonesia.',
    },
    {
      id: 11,
      videoId: '7472314392936254727',
      title: 'Pengalaman Edukatif Mengunjungi Indonesian Heritage Museum',
      description: 'Indonesian Heritage Museum menyajikan banyak informasi penting yang bisa dipelajari, menjadikannya tempat yang tepat untuk edukasi. Koleksi budayanya sangat lengkap.',
    },
    {
      id: 12,
      title: 'Kesan Menarik saat Menambah Wawasan di Indonesian Heritage Museum',
      description: 'Museum ini memberikan banyak informasi tentang sejarah dan budaya Indonesia dengan cara yang menarik.',
    },
    {
      id: 13,
      title: 'Kesan Tak Terlupakan Mengenal Budaya Indonesia di Indonesian Heritage Museum',
      description: 'Museum ini memberikan pengalaman yang berkesan karena menampilkan berbagai aspek budaya Indonesia.',
    },
    {
      id: 14,
      title: 'Kesan Seru dan Edukatif bagi Anak Muda di Indonesian Heritage Museum',
      description: 'Museum ini memberikan pengalaman yang seru sekaligus menambah wawasan tentang sejarah dan budaya Indonesia.',
    },
    {
      id: 15,
      title: 'Kesan Seru dengan Edukasi dan Pelayanan Terbaik di Indonesian Heritage Museum',
      description: 'Pengalaman berkunjung ke museum ini sangat menyenangkan karena edukasi yang diberikan menarik dan informatif.',
    },
    {
      id: 16,
      title: 'Pengalaman Baru yang Mengagumkan di Indonesian Heritage Museum',
      description: 'Berkunjung ke museum ini memberikan sesuatu yang baru dengan koleksi dari berbagai daerah yang memukau.',
    },
    {
      id: 17,
      title: 'Kesan Orang Tua Saat Berkunjung ke Indonesian Heritage Museum',
      description: 'Orang tua merasa senang karena museum ini sangat lengkap dan dilengkapi fitur augmented reality yang interaktif.',
    },
    {
      id: 18,
      title: 'Kesan Keluarga Malaysia saat Menjelajah Budaya Indonesia di Indonesian Heritage Museum',
      description: 'Keluarga asal Malaysia terkesan bisa mengenal lebih dekat cerita-cerita khas Indonesia yang diwariskan secara turun-temurun.',
    },
    {
      id: 19,
      title: 'Pengalaman Berkesan Melihat Sejarah secara Langsung di Indonesian Heritage Museum',
      description: 'Pengunjung kagum melihat koleksi barang-barang asli yang memperkenalkan sejarah Indonesia secara nyata.',
    },
    {
      id: 20,
      title: 'Kekaguman Pengunjung saat Menjelajahi Indonesian Heritage Museum',
      description: 'Pengunjung terkesan dengan banyaknya hal yang bisa dipelajari, mulai dari sejarah hingga adat dari berbagai wilayah Indonesia.',
    },
  ];

  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#8C6B3E] text-white py-32 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6">
            General & Family Testimonials
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Pengalaman Berkesan dari Pengunjung dan Keluarga
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Indonesian Heritage Museum telah menjadi destinasi favorit bagi berbagai kalangan, mulai dari individu yang mencari pengalaman sejarah hingga keluarga yang ingin menghabiskan waktu berkualitas bersama. Dengan beragam koleksi yang memukau dan suasana yang edukatif, museum ini menawarkan pengalaman unik yang mampu menginspirasi semua generasi.
          </p>
          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Testimoni dari para pengunjung menunjukkan bagaimana museum ini berhasil menjadi tempat yang menyatukan edukasi, hiburan, dan kenangan berharga. Baik untuk kunjungan pribadi maupun keluarga, museum ini memberikan kesan mendalam bagi setiap orang yang datang.
          </p>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="bg-[#E7DED0] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Pengalaman Berkesan</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Setiap kunjungan menciptakan kenangan yang tak terlupakan bagi keluarga dan individu
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Untuk Semua Usia</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Museum yang ramah keluarga dengan konten edukatif untuk segala generasi
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Interaktif & Modern</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Dilengkapi teknologi Augmented Reality untuk pengalaman yang lebih hidup
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-[#E7DED0]'
              } rounded shadow-md overflow-hidden`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* TikTok Embed Placeholder */}
                <div className="rounded overflow-hidden flex justify-center">
                  <blockquote
                    className="tiktok-embed"
                    cite={`https://www.tiktok.com/@indonesianheritage/video/${testimonial.videoId}`}
                    data-video-id={testimonial.videoId}
                    style={{ maxWidth: "605px", minWidth: "325px" }}
                  >
                    <section></section>
                  </blockquote>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-[#8C6B3E] font-medium mb-3">
                    Testimoni #{testimonial.id}
                  </div>
                  <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-6">
                    {testimonial.title}
                  </h3>
                  <div className="border-l-4 border-[#8C6B3E] pl-6">
                    <p className="text-[#2B2B2B] leading-relaxed italic">
                      "{testimonial.description}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#8C6B3E] text-white py-16 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Cinzel'] text-3xl md:text-4xl mb-6">
            Jadilah Bagian dari Cerita Kami
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Kunjungi Indonesian Heritage Museum dan ciptakan pengalaman berkesan Anda sendiri
          </p>
          <a
            href="/visit"
            className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6] transition-all shadow-lg"
          >
            Rencanakan Kunjungan Anda
          </a>
        </div>
      </div>
    </div>
  );
}
