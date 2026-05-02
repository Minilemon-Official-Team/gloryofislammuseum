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
  { id: 1, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+1', title: "Lorem Ipsum Dolor Sit Amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 2, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+2', title: "Consectetur Adipiscing Elit", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 3, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+3', title: "Sed Do Eiusmod Tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { id: 4, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+4', title: "Incididunt Ut Labore", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { id: 5, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+5', title: "Et Dolore Magna Aliqua", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
  { id: 6, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+6', title: "Ut Enim Ad Minim Veniam", description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
  { id: 7, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+7', title: "Quis Nostrud Exercitation", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores." },
  { id: 8, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+8', title: "Ullamco Laboris Nisi", description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
  { id: 9, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+9', title: "Aliquip Ex Ea Commodo", description: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
  { id: 10, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+10', title: "Duis Aute Irure Dolor", description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam." },
  { id: 11, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+11', title: "In Reprehenderit Voluptate", description: "Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit." },
  { id: 12, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+12', title: "Velit Esse Cillum Dolore", description: "Quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." },
  { id: 13, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+13', title: "Eu Fugiat Nulla Pariatur", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti." },
  { id: 14, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+14', title: "Excepteur Sint Occaecat", description: "Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident." },
  { id: 15, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+15', title: "Cupidatat Non Proident", description: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." },
  { id: 16, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+16', title: "Sunt In Culpa Officia", description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio." },
  { id: 17, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+17', title: "Deserunt Mollit Anim", description: "Cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est." },
  { id: 18, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+18', title: "Id Est Laborum Magna", description: "Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet." },
  { id: 19, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+19', title: "Curabitur Pretium Tincidunt", description: "Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus." },
  { id: 20, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+20', title: "Lacus Nulla Gravida Orci", description: "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." },
  { id: 21, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+21', title: "Nullam Varius Turpis", description: "Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis." },
  { id: 22, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+22', title: "Commodo Pharetra Eros", description: "Cras non dolor. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst." },
  { id: 23, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+23', title: "Bibendum Elit Luctus", description: "Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique." },
  { id: 24, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+24', title: "Magna Felis Sollicitudin", description: "Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor." },
  { id: 25, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+25', title: "Mauris Aliquam Tincidunt", description: "Tincidunt et, mollis lobortis, feugiat vitae, ipsum. Sed lectus. Praesent elementum hendrerit tortor." },
  { id: 26, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+26', title: "Vestibulum Ante Ipsum", description: "Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui." },
  { id: 27, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+27', title: "Primis In Faucibus Orci", description: "Eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna." },
  { id: 28, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+28', title: "Luctus Et Ultrices Posuere", description: "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet." },
  { id: 29, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+29', title: "Cubilia Curae Donec Velit", description: "Lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis." },
  { id: 30, type: "image", image: 'https://placehold.co/600x400/8C6B3E/F4EFE6?text=AR+30', title: "Quisque Volutpat Mattis", description: "Aliquet a, ultricies vel, mauris. Morbi nec mauris ac libero rutrum interdum. Donec ullamcorper fringilla eros." },
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Glory of Islam Museum menggabungkan teknologi augmented reality
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
