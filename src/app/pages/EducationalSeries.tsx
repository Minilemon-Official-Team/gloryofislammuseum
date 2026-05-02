import { useEffect } from "react";
import { Sparkles, Video, BookOpen } from "lucide-react";

export default function EducationalSeries() {
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

  const educationalContent = [
    {
      id: 1,
      videoId: "7448941995302620424",
      title: "Kain Batik Lasem",
      description:
        "Kain Batik Lasem merupakan salah satu warisan budaya Indonesia yang khas, dengan motif yang mencerminkan perpaduan antara pengaruh Tiongkok dan Jawa.",
    },
    {
      id: 2,
      videoId: "7443747332908223762",
      title: "Kain Batik 3 Negeri",
      description:
        "Kain Batik 3 Negeri merupakan perpaduan indah antara budaya Lasem, Solo, dan Pekalongan yang tercermin dalam motif dan warnanya.",
    },
    {
      id: 3,
      videoId: "7433366411155672340",
      title: "Kapak Genggam",
      description:
        "Kapak genggam adalah alat tradisional yang digunakan oleh suku-suku di Indonesia dalam berbagai kegiatan sehari-hari.",
    },
    {
      id: 4,
      videoId: "7428542725932223751",
      title: "Celengan Majapahit",
      description:
        "Celengan Majapahit adalah peninggalan sejarah yang mencerminkan kebudayaan dan keahlian kerajinan pada masa Kerajaan Majapahit.",
    },
    {
      id: 5,
      videoId: "7376613909362494728",
      title: "Mitologi China: Naga",
      description:
        "Naga dalam mitologi China adalah simbol kekuatan, keberuntungan, dan kebijaksanaan.",
    },
    {
      id: 6,
      videoId: "7370279059122638100",
      title: "Perisai Talawang",
      description:
        "Perisai Talawang adalah salah satu benda pusaka khas suku Dayak yang melambangkan keberanian dan kekuatan.",
    },
    {
      id: 7,
      videoId: "7357926838565358864",
      title: "Topeng Monyet Jawa Barat",
      description:
        "Topeng Monyet merupakan seni pertunjukan tradisional dari Jawa Barat yang menggambarkan sosok monyet dengan ekspresi lucu.",
    },
    {
      id: 8,
      videoId: "7352105673892646162",
      title: "Topeng Sidakarya Bali",
      description:
        "Topeng Sidakarya adalah salah satu topeng tradisional Bali yang digunakan dalam pertunjukan tari topeng.",
    },
    {
      id: 9,
      videoId: "7363234299383926033",
      title: "Bujang Ganong",
      description:
        "Bujang Ganong adalah tokoh dalam kesenian Reog Ponorogo yang dikenal dengan gerakan tari yang energik.",
    },
    {
      id: 10,
      videoId: "7348715959835708680",
      title: "Tradisi Menyambut Ramadan",
      description:
        "Berbagai daerah di Indonesia memiliki cara unik dalam menyambut Ramadan.",
    },
    {
      id: 11,
      videoId: "7484165354000764165",
      title: "Asal-usul Kata Puasa",
      description:
        "Istilah puasa berasal dari kata upavasa dalam tradisi Hindu-Buddha.",
    },
  ];

  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      {/* HERO */}
      <div className="bg-[#8C6B3E] text-white py-32 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Video className="w-10 h-10 text-white" />
          </div>

          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6">
            Educational Series
          </h1>

          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

          <p className="text-lg md:text-xl opacity-90">
            Jelajahi Kekayaan Budaya Indonesia Melalui Video Edukatif
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-10">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Educational Series menghadirkan video edukatif mengenai sejarah,
            seni, dan budaya Indonesia melalui platform digital.
          </p>

          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Melalui format digital ini, Indonesian Heritage Museum
            memungkinkan masyarakat untuk belajar mengenai warisan budaya
            Indonesia dengan cara yang menarik dan mudah diakses.
          </p>
        </div>
      </div>

      {/* FEATURE */}
      <div className="bg-[#E7DED0] py-16 px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded shadow text-center">
            <Video className="w-10 h-10 mx-auto text-[#8C6B3E] mb-4" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Video Edukatif</h3>
            <p>Konten video yang menarik untuk semua usia.</p>
          </div>

          <div className="bg-white p-8 rounded shadow text-center">
            <BookOpen className="w-10 h-10 mx-auto text-[#8C6B3E] mb-4" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Beragam Topik</h3>
            <p>Berbagai aspek budaya Indonesia dibahas secara menarik.</p>
          </div>

          <div className="bg-white p-8 rounded shadow text-center">
            <Sparkles className="w-10 h-10 mx-auto text-[#8C6B3E] mb-4" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Akses Mudah</h3>
            <p>Belajar kapan saja melalui media sosial.</p>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 py-16 space-y-16">

        {educationalContent.map((content, index) => (

          <div
            key={content.id}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-[#E7DED0]"
            } rounded shadow-md overflow-hidden`}
          >

            <div className="grid md:grid-cols-2 gap-8 p-8">

              {/* TIKTOK VIDEO */}
              <div className="flex justify-center">
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/@indonesianheritage/video/${content.videoId}`}
                  data-video-id={content.videoId}
                  style={{ maxWidth: "605px", minWidth: "325px" }}
                >
                  <section></section>
                </blockquote>
              </div>

              {/* TEXT */}
              <div className="flex flex-col justify-center">

                <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-6">
                  {content.title}
                </h3>

                <p className="text-[#2B2B2B] leading-relaxed">
                  {content.description}
                </p>

                <div className="mt-6 pt-6 border-t border-[#C8B9A6]">
                  <p className="text-sm text-[#5A5A5A]">
                    Educational Series #{content.id}
                  </p>
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* CTA */}
      <div className="bg-[#8C6B3E] text-white py-16 px-4">

        <div className="max-w-[900px] mx-auto text-center">

          <h2 className="font-['Cinzel'] text-3xl md:text-4xl mb-6">
            Ikuti Konten Edukatif Kami
          </h2>

          <p className="text-lg opacity-90 mb-8">
            Dapatkan video edukatif terbaru melalui TikTok
            @indonesianheritage
          </p>

          <a
            href="https://www.tiktok.com/@indonesianheritage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6]"
          >
            Kunjungi TikTok Kami
          </a>

        </div>

      </div>

    </div>
  );
}
