import { Users, Heart, Camera } from 'lucide-react';

const testimonials = [
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
  { id: 12, title: "Velit Esse Cillum Dolore", description: "Quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur." },
  { id: 13, title: "Eu Fugiat Nulla Pariatur", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti." },
  { id: 14, title: "Excepteur Sint Occaecat", description: "Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident." },
  { id: 15, title: "Cupidatat Non Proident", description: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga." },
  { id: 16, title: "Sunt In Culpa Officia", description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio." },
  { id: 17, title: "Deserunt Mollit Anim", description: "Cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est." },
  { id: 18, title: "Id Est Laborum Magna", description: "Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet." },
  { id: 19, title: "Curabitur Pretium Tincidunt", description: "Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus." },
  { id: 20, title: "Lacus Nulla Gravida Orci", description: "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." },
];

export default function EducationGeneralFamily() {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Lorem Ipsum</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Dolor Sit Amet</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Consectetur Elit</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation.
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
                {/* IMAGE */}
                <div className="rounded overflow-hidden bg-[#8C6B3E] flex items-center justify-center p-6 min-h-[280px]">
                  <img
                    src={`https://placehold.co/600x400/8C6B3E/F4EFE6?text=Family+${testimonial.id}`}
                    alt={testimonial.title}
                    className="w-full h-full max-h-[320px] object-cover rounded"
                    loading="lazy"
                  />
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
            Lorem Ipsum Dolor Sit
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <a
            href="/visit"
            className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6] transition-all shadow-lg"
          >
            Lorem Ipsum
          </a>
        </div>
      </div>
    </div>
  );
}
