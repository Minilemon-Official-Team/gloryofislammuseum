import { useEffect } from "react";
import { GraduationCap, BookOpen, Users } from "lucide-react";

export default function EducationInstitution() {

  useEffect(() => {
    if (typeof window === "undefined") return;

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
      videoId: "7462238543105035536",
      title:
        "Inilah Kesan Kepala Sekolah setelah Mengunjungi Indonesian Heritage Museum",
      description:
        "Kepala Sekolah dari salah satu SMP Negeri Wonogiri mengatakan bahwa Indonesian Heritage Museum merupakan tempat yang sangat bermanfaat untuk menambah wawasan tentang budaya dan sejarah bangsa.",
    },
    {
      id: 2,
      videoId: "7456718063233158418",
      title:
        "Pengalaman Berkesan Guru MTs Asal Malang di Indonesian Heritage Museum",
      description:
        "Indonesian Heritage Museum dengan koleksi yang sangat lengkap dinilai oleh guru sebagai tempat belajar yang ideal untuk memperluas pengetahuan anak-anak.",
    },
    {
      id: 3,
      videoId: "7455641795221818642",
      title:
        "Kesan dan Pesan Mahasiswi UGM Setelah Mengunjungi Indonesian Heritage Museum",
      description:
        "Mahasiswi UGM ini menyampaikan kesannya setelah mengunjungi Indonesian Heritage Museum dan merasa terkesan dengan banyaknya pengetahuan yang didapatkan.",
    },
    {
      id: 4,
      videoId: "7454081256171572486",
      title:
        "Cerita Guru SMA di Sumenep: Pengalaman Berkesan di Museum Warisan Indonesia",
      description:
        "Guru asal SMA di Sumenep menyebutkan bahwa Indonesian Heritage Museum merupakan tempat yang luar biasa karena mampu menyajikan kekayaan budaya Indonesia dengan menarik.",
    },
    {
      id: 5,
      videoId: "7446342608315583752",
      title:
        "Petualangan Seru Adik Kelas 6 SD di Indonesian Heritage Museum",
      description:
        "Menurutnya sejarah yang diceritakan di Indonesian Heritage Museum sangat menarik karena dijelaskan dengan cara yang detail dan menyenangkan.",
    },
    {
      id: 6,
      videoId: "7438555262203546887",
      title:
        "Pengalaman Edukatif SD asal Pasuruan di Indonesian Heritage Museum",
      description:
        "Indonesian Heritage Museum memiliki koleksi budaya yang sangat beragam mulai dari Papua hingga berbagai daerah lainnya di Indonesia.",
    },
    {
      id: 7,
      videoId: "7416667601687809298",
      title:
        "Cerita Seru SMP dari Wonogiri saat Mengunjungi Indonesian Heritage Museum",
      description:
        "Indonesian Heritage Museum memiliki berbagai koleksi menarik tentang sejarah dan budaya Indonesia yang memperluas wawasan pelajar.",
    },
    {
      id: 8,
      videoId: "7412573976636968208",
      title:
        "Kesan Kunjungan dari SMP asal Mojokerto di Indonesian Heritage Museum",
      description:
        "Para siswa mendapatkan pengalaman edukasi berharga tentang sejarah dan budaya dari berbagai daerah di Indonesia.",
    },
    {
      id: 9,
      videoId: "7389969800685948180",
      title:
        "Pengalaman Belajar Sejarah dari MTs asal Tuban di Indonesian Heritage Museum",
      description:
        "Mereka dapat melihat berbagai artefak peninggalan sejarah yang memberikan wawasan mendalam tentang budaya Indonesia.",
    },
    {
      id: 10,
      videoId: "7388458706545020161",
      title:
        "Kesan Edukatif Study Tour di Indonesian Heritage Museum",
      description:
        "Kunjungan ke Indonesian Heritage Museum memberikan pengalaman belajar menyenangkan tentang tradisi adat dan budaya nusantara.",
    },
    {
      id: 11,
      videoId: "7384394681901141266",
      title:
        "Pengalaman Seru dan Edukatif bagi Siswa di Indonesian Heritage Museum",
      description:
        "Museum ini memungkinkan siswa melihat langsung berbagai budaya dan sejarah Indonesia.",
    },
  ];

  return (
    <div className="bg-[#F4EFE6] min-h-screen">

      {/* HERO */}
      <div className="relative bg-[#8C6B3E] text-white py-32 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>

          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6">
            Educational Institution
          </h1>

          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Pengalaman Edukatif dari Institusi Pendidikan
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Indonesian Heritage Museum telah menjadi mitra edukatif bagi berbagai
            institusi pendidikan dari tingkat PAUD hingga perguruan tinggi.
          </p>

          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Dengan koleksi autentik dan metode pembelajaran inovatif, museum ini
            menjadi destinasi favorit kegiatan study tour dan field trip.
          </p>
        </div>
      </div>

      {/* HIGHLIGHT */}
      <div className="bg-[#E7DED0] py-16 px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded shadow-md p-8 text-center">
            <BookOpen className="mx-auto mb-4 text-[#8C6B3E]" size={36} />
            <h3 className="font-['Cinzel'] text-xl mb-3">Program Terstruktur</h3>
            <p>
              Program edukatif yang disesuaikan dengan kurikulum pendidikan.
            </p>
          </div>

          <div className="bg-white rounded shadow-md p-8 text-center">
            <GraduationCap className="mx-auto mb-4 text-[#8C6B3E]" size={36} />
            <h3 className="font-['Cinzel'] text-xl mb-3">Pembelajaran Aktif</h3>
            <p>
              Metode pembelajaran interaktif yang melibatkan siswa secara aktif.
            </p>
          </div>

          <div className="bg-white rounded shadow-md p-8 text-center">
            <Users className="mx-auto mb-4 text-[#8C6B3E]" size={36} />
            <h3 className="font-['Cinzel'] text-xl mb-3">Kemitraan Edukatif</h3>
            <p>
              Kolaborasi dengan institusi pendidikan untuk program jangka panjang.
            </p>
          </div>

        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="max-w-[1200px] mx-auto px-4 py-16 space-y-16">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-[#E7DED0]"
            } rounded shadow-md overflow-hidden`}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">

              {/* VIDEO */}
              <div className="flex justify-center">
                {item.videoId && (
                  <blockquote
                    className="tiktok-embed"
                    cite={`https://www.tiktok.com/@indonesianheritage/video/${item.videoId}`}
                    data-video-id={item.videoId}
                    style={{ maxWidth: "605px", minWidth: "325px" }}
                  >
                    <section></section>
                  </blockquote>
                )}
              </div>

              {/* TEXT */}
              <div className="flex flex-col justify-center">
                <div className="text-sm text-[#8C6B3E] font-medium mb-3">
                  Testimoni #{item.id}
                </div>

                <h3 className="font-['Cinzel'] text-2xl md:text-3xl mb-6">
                  {item.title}
                </h3>

                <div className="border-l-4 border-[#8C6B3E] pl-6">
                  <p className="italic leading-relaxed">
                    "{item.description}"
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
            Ajak Institusi Anda Berkunjung
          </h2>

          <p className="text-lg opacity-90 mb-8">
            Hubungi kami untuk mengatur program edukatif khusus
          </p>

          <a
            href="/visit"
            className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6]"
          >
            Hubungi Kami
          </a>

        </div>
      </div>

    </div>
  );
}
