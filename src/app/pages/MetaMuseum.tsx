import { Cpu, Eye, Layers } from 'lucide-react';

/* =========================
   CDN CONFIG
========================= */

const CDN_IMAGE_BASE = "https://res.cloudinary.com/dnbq1z8lx/image/upload/";
const CDN_VIDEO_BASE = "https://res.cloudinary.com/dnbq1z8lx/video/upload/";

type MediaType = "video" | "image";

interface ARItem {
  id: number;
  title: string;
  description: string;
  type: MediaType;
  image?: string;
  video?: string;
}

/* =========================
   MEDIA RESOLVER
========================= */

const getMedia = (item: ARItem) => {
  if (item.type === "video") {
    return item.video && item.video !== ""
      ? item.video
      : `${CDN_VIDEO_BASE}meta-museum/${item.id}.mp4`;
  }

  return item.image && item.image !== ""
    ? item.image
    : `${CDN_IMAGE_BASE}meta-museum/${item.id}.webp`;
};

/* =========================
   DATA
========================= */

const arItems: ARItem[] = [
  {
    id: 1,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935581/1_5_xkczqq.webp",
    title: "Keseruan Anak-Anak Menikmati Augmented Reality (AR)",
    description:
      "Anak-anak terlihat sangat menikmati pengalaman baru dengan augmented reality di Indonesian Heritage Museum.",
  },
  {
    id: 2,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935621/1_21_x5z5tw.webp",
    title: "Menghadirkan Sejarah yang Menarik untuk Anak-Anak dengan Augmented Reality",
    description:
      "Anak-anak bisa merasakan pengalaman yang berbeda saat sejarah Indonesia disajikan melalui augmented reality.",
  },
  {
    id: 3,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935583/1_20_nhtyjq.webp",
    title: "Keseruan Pengunjung Menikmati Augmented Reality",
    description:
      "Pengunjung merasakan pengalaman seru saat menikmati teknologi augmented reality.",
  },
  {
    id: 4,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_19_o1wmvk.webp",
    title: "Pengalaman Imersif Pengunjung dengan Augmented Reality",
    description:
      "Pengunjung bisa merasakan pengalaman yang mendalam dan seru saat menjelajahi berbagai koleksi melalui AR.",
  },
  {
    id: 5,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_11_x5l41i.webp",
    title: "Serunya Pengunjung Menjelajahi Dunia Wayang Melalui Augmented Reality",
    description:
      "Pengunjung merasakan pengalaman baru saat menjelajahi dunia wayang melalui augmented reality.",
  },
  {
    id: 6,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935581/1_10_h528jx.webp",
    title: "Menyusuri Jejak Sejarah Lewat Teknologi Augmented Reality",
    description:
      "Pengunjung diajak menyusuri jejak sejarah Indonesia dengan cara yang lebih interaktif melalui teknologi AR.",
  },
  {
    id: 7,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_1_h3nmiz.webp",
    title: "Koleksi Barang-Barang Perdagangan China di Nusantara Lewat Teknologi AR",
    description:
      "Melalui augmented reality, pengunjung dapat mempelajari lebih dalam tentang koleksi perdagangan China di Nusantara.",
  },
  {
    id: 8,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935818/1_22_vmdd5w.webp",
    title: "Melihat Sejarah secara Interaktif Lewat Augmented Reality",
    description:
      "Pengunjung dapat merasakan sejarah Indonesia secara langsung melalui teknologi AR.",
  },
  {
    id: 9,
    type: "video",
    video: "https://res.cloudinary.com/dnbq1z8lx/video/upload/v1772936681/1_5_nwd25c.mp4",
    title: "Keseruan Pengunjung Memperagakan Augmented Reality",
    description:
      "Pengunjung terlibat dalam pengalaman seru memperagakan augmented reality.",
  },
  {
    id: 10,
    type: "video",
    video: "https://res.cloudinary.com/dnbq1z8lx/video/upload/v1772936680/1_4_ggrktc.mp4",
    title: "Petualangan Interaktif Pengunjung dengan Augmented Reality",
    description:
      "Dengan augmented reality, pengunjung dapat merasakan pengalaman yang lebih hidup.",
  },
  {
    id: 11,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935583/1_20_nhtyjq.webp",
    title: "Teknologi Augmented Reality Menghidupkan Rumah Adat",
    description:
      "Teknologi AR memungkinkan pengunjung melihat rumah adat Nusantara dalam bentuk digital yang interaktif.",
  },
  {
    id: 12,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_19_o1wmvk.webp",
    title: "Menjelajahi Rumah Adat dengan Augmented Reality",
    description:
      "Teknologi AR menghadirkan pengalaman interaktif untuk mengeksplorasi rumah adat Nusantara.",
  },
  {
    id: 13,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_12_gjqzqc.webp",
    title: "Mengenal Artefak Nusantara dengan Teknologi AR",
    description:
      "Teknologi AR menghadirkan pengalaman interaktif dalam menjelajahi artefak bersejarah Nusantara.",
  },
  {
    id: 14,
    type: "image",
    image: "",
    title: "Menghidupkan Tokoh Bersejarah dengan AR",
    description:
      "Teknologi AR menghadirkan tokoh-tokoh bersejarah dalam bentuk digital yang interaktif.",
  },
  {
    id: 15,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_1_h3nmiz.webp",
    title: "Menghidupkan Kembali Kapal Ekspedisi Kuno dengan AR",
    description:
      "Dengan AR, pengunjung dapat melihat visualisasi kapal ekspedisi kuno.",
  },
  {
    id: 16,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_12_gjqzqc.webp",
    title: "Menghidupkan Peradaban Kuno dengan AR",
    description:
      "Teknologi AR menyajikan visualisasi dinamis yang menghidupkan kembali peradaban kuno.",
  },
  {
    id: 17,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_17_mjw7mx.webp",
    title: "Melihat Zaman Prasejarah dengan AR",
    description:
      "Augmented Reality membawa pengunjung menelusuri jejak manusia purba.",
  },
  {
    id: 18,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772936678/1_23_x5apvd.webp",
    title: "Menelusuri Artefak Kuno dengan AR",
    description:
      "Augmented Reality memungkinkan pengunjung mengeksplorasi artefak bersejarah secara detail.",
  },
  {
    id: 19,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772936678/1_24_jligfa.webp",
    title: "Melihat Peradaban Manusia Melayu Indonesia Lewat AR",
    description:
      "Visualisasi manusia Melayu Indonesia ditampilkan secara interaktif.",
  },
  {
    id: 20,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_27_jatoqa.webp",
    title: "Mengungkap Detail Artefak Kuno dengan AR",
    description:
      "Visualisasi AR memungkinkan pengunjung melihat artefak dari berbagai sisi.",
  },
  {
    id: 21,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935581/1_9_em7izc.webp",
    title: "Menelusuri Rumah Adat Indonesia dengan AR",
    description:
      "AR menghadirkan visualisasi rumah adat secara detail.",
  },
  {
    id: 22,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_4_pgei5n.webp",
    title: "Menjelajahi Koleksi Bersejarah dengan AR",
    description:
      "Pengunjung dapat mengeksplorasi koleksi budaya secara interaktif.",
  },
  {
    id: 23,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_3_a28egb.webp",
    title: "Menyelami Peradaban Masa Lalu dengan AR",
    description:
      "Teknologi AR membawa pengunjung menjelajahi kehidupan manusia purba.",
  },
  {
    id: 24,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772936678/1_25_lrhtfy.webp",
    title: "Menjelajahi Artefak Bersejarah Secara Interaktif",
    description:
      "Dengan teknologi AR, pengunjung dapat mengamati artefak kuno secara lebih dekat.",
  },
  {
    id: 25,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_3_a28egb.webp",
    title: "Mengungkap Peradaban Hindu di Nusantara dengan AR",
    description:
      "Pengunjung dapat melihat visualisasi bangunan kuno dari India.",
  },
  {
    id: 26,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_15_zp7mpa.webp",
    title: "Melihat Candi Prambanan Lebih Dekat dengan AR",
    description:
      "Teknologi AR memungkinkan pengunjung menjelajahi replika Candi Prambanan.",
  },
  {
    id: 27,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_18_ak4bbd.webp",
    title: "Visualisasi Panggung Wayang Potehi dengan AR",
    description:
      "AR menghadirkan replika digital panggung wayang potehi.",
  },
  {
    id: 28,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_16_jqglif.webp",
    title: "Menelusuri Jejak Arsitektur Kuno India dengan AR",
    description:
      "AR membantu pengunjung melihat visualisasi bangunan bersejarah.",
  },
  {
    id: 29,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_17_mjw7mx.webp",
    title: "Menelusuri Jejak Peradaban Kuno dengan AR",
    description:
      "AR membantu pengunjung melihat visualisasi situs bersejarah secara detail.",
  },
  {
    id: 30,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_2_zli449.webp",
    title: "Menjelajahi Warisan Budaya Indonesia dengan AR",
    description:
      "AR memungkinkan pengunjung melihat visualisasi bangunan dan artefak secara nyata.",
  },
];

/* =========================
   COMPONENT
========================= */

export default function MetaMuseum() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen">

      {/* HERO */}
      <div className="relative bg-[#8C6B3E] text-white py-32 px-4">
        <div className="max-w-[900px] mx-auto text-center">

          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Cpu className="w-10 h-10 text-white" />
          </div>

          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6">
            Meta Museum
          </h1>

          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Augmented Reality — Menjelajahi Warisan Budaya Indonesia Secara Interaktif
          </p>

        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Indonesian Heritage Museum menggabungkan teknologi augmented reality
            untuk memberikan pengalaman baru dalam menjelajahi kekayaan budaya Indonesia.
          </p>

          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Teknologi ini membawa sejarah dan budaya Indonesia lebih dekat
            kepada pengunjung dengan cara yang menyenangkan.
          </p>
        </div>
      </div>

      {/* FEATURE */}
      <div className="bg-[#E7DED0] py-16 px-4">

        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded shadow-md p-8 text-center">
            <Cpu className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Teknologi AR</h3>
            <p>Augmented Reality yang canggih menghidupkan koleksi museum.</p>
          </div>

          <div className="bg-white rounded shadow-md p-8 text-center">
            <Eye className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Pengalaman Imersif</h3>
            <p>Setiap artefak dan situs bersejarah dihidupkan kembali.</p>
          </div>

          <div className="bg-white rounded shadow-md p-8 text-center">
            <Layers className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" />
            <h3 className="font-['Cinzel'] text-xl mb-3">30 Konten AR</h3>
            <p>Koleksi lengkap 30 konten AR yang mengeksplorasi budaya Nusantara.</p>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">

        <div className="space-y-16">

          {arItems.map((item, index) => {

            const media = getMedia(item);

            return (
              <div
                key={item.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-[#E7DED0]"} rounded shadow-md overflow-hidden`}
              >

                <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>

                  {/* MEDIA */}

                  <div className="rounded overflow-hidden flex items-center justify-center">

                    {item.type === "video" ? (

                      <video
                        className="w-full h-full max-h-[420px] object-cover rounded"
                        controls
                        playsInline
                        preload="metadata"
                      >
                        <source src={media} type="video/mp4" />
                      </video>

                    ) : (

                      <img
                        src={media}
                        alt={item.title}
                        className="w-full h-full max-h-[420px] object-cover rounded"
                        loading="lazy"
                      />

                    )}

                  </div>

                  {/* TEXT */}

                  <div className="flex flex-col justify-center">

                    <div className="text-sm text-[#8C6B3E] font-medium mb-3">
                      Konten AR #{item.id}
                    </div>

                    <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-6">
                      {item.title}
                    </h3>

                    <div className="border-l-4 border-[#8C6B3E] pl-6">
                      <p className="text-[#2B2B2B] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </div>
  );
}
