import { Sparkles, Video, BookOpen } from "lucide-react";

const DUMMY_IMAGE = "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772934955/Logo_mkvfjb.webp";

const educationalContent = [
  { id: 1, title: "Lorem Ipsum Dolor Sit Amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 2, title: "Consectetur Adipiscing Elit", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { id: 3, title: "Sed Do Eiusmod Tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { id: 4, title: "Incididunt Ut Labore", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { id: 5, title: "Et Dolore Magna Aliqua", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
  { id: 6, title: "Ut Enim Ad Minim Veniam", description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
  { id: 7, title: "Quis Nostrud Exercitation", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores." },
  { id: 8, title: "Ullamco Laboris Nisi", description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
  { id: 9, title: "Aliquip Ex Ea Commodo", description: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
  { id: 10, title: "Duis Aute Irure Dolor", description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam." },
  { id: 11, title: "In Reprehenderit Voluptate", description: "Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit." },
];

export default function EducationalSeries() {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-10">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* FEATURE */}
      <div className="bg-[#E7DED0] py-16 px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded shadow text-center">
            <Video className="w-10 h-10 mx-auto text-[#8C6B3E] mb-4" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="bg-white p-8 rounded shadow text-center">
            <BookOpen className="w-10 h-10 mx-auto text-[#8C6B3E] mb-4" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Dolor Sit Amet</h3>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>

          <div className="bg-white p-8 rounded shadow text-center">
            <Sparkles className="w-10 h-10 mx-auto text-[#8C6B3E] mb-4" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Consectetur Elit</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
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

              {/* IMAGE */}
              <div className="rounded overflow-hidden bg-[#8C6B3E] flex items-center justify-center p-6 min-h-[280px]">
                <img
                  src={DUMMY_IMAGE}
                  alt={content.title}
                  className="w-full h-full max-h-[320px] object-cover rounded"
                  loading="lazy"
                />
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
            Lorem Ipsum Dolor Sit
          </h2>

          <p className="text-lg opacity-90 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <a
            href="#"
            className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6]"
          >
            Lorem Ipsum
          </a>

        </div>

      </div>

    </div>
  );
}
