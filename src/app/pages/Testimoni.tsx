import { Quote, Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Lorem Ipsum', location: 'Lorem City', date: 'February 2026', rating: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 2, name: 'Dolor Sit', location: 'Amet, Consectetur', date: 'February 2026', rating: 5, text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 3, name: 'Adipiscing Elit', location: 'Sed Do', date: 'January 2026', rating: 5, text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' },
  { id: 4, name: 'Eiusmod Tempor', location: 'Incididunt', date: 'January 2026', rating: 5, text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.' },
  { id: 5, name: 'Ut Labore', location: 'Et Dolore Magna', date: 'December 2025', rating: 5, text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.' },
  { id: 6, name: 'Aliqua Ut Enim', location: 'Ad Minim Veniam', date: 'December 2025', rating: 5, text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.' },
  { id: 7, name: 'Quis Nostrud', location: 'Exercitation', date: 'November 2025', rating: 5, text: 'Cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.' },
  { id: 8, name: 'Ullamco Laboris', location: 'Nisi Ut', date: 'November 2025', rating: 5, text: 'Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' },
  { id: 9, name: 'Aliquip Ex Ea', location: 'Commodo Consequat', date: 'October 2025', rating: 5, text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.' },
];

export default function Testimoni() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Visitor Testimonials
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 text-center">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#8C6B3E] text-[#8C6B3E]" />
            ))}
          </div>
          <div className="text-4xl font-['Cinzel'] text-[#2B2B2B] mb-2">5.0 out of 5</div>
          <p className="text-[#5A5A5A]">Based on {testimonials.length} reviews from visitors worldwide</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-8 relative hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-4 right-4 opacity-5">
                <Quote className="w-16 h-16 text-[#8C6B3E]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#8C6B3E] text-[#8C6B3E]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#2B2B2B] leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-[#C8B9A6] pt-4">
                <div className="font-['Cinzel'] text-[#2B2B2B] mb-1">{testimonial.name}</div>
                <div className="text-sm text-[#5A5A5A] mb-1">{testimonial.location}</div>
                <div className="text-xs text-[#8C6B3E]">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Experience */}
        <div className="mt-16 bg-[#E7DED0] rounded-lg shadow-lg p-12 text-center">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-4">Share Your Experience</h2>
          <p className="text-[#5A5A5A] mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl">
            Write a Review
          </button>
        </div>

        {/* Visitor Statistics */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-['Cinzel'] text-[#8C6B3E] mb-2">100%</div>
            <div className="text-sm text-[#5A5A5A]">Would Recommend</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-['Cinzel'] text-[#8C6B3E] mb-2">50K+</div>
            <div className="text-sm text-[#5A5A5A]">Annual Visitors</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-['Cinzel'] text-[#8C6B3E] mb-2">4.9/5</div>
            <div className="text-sm text-[#5A5A5A]">Google Reviews</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-['Cinzel'] text-[#8C6B3E] mb-2">25</div>
            <div className="text-sm text-[#5A5A5A]">Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
  );
}
