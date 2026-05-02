import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Australia',
    date: 'February 2026',
    rating: 5,
    text: 'An absolutely stunning museum! The collection is breathtaking and the way artifacts are presented really brings Indonesian history to life. The virtual tour option was perfect for planning our visit, and the staff were incredibly knowledgeable and helpful. A must-visit when in Malang!',
  },
  {
    id: 2,
    name: 'Budi Santoso',
    location: 'Jakarta, Indonesia',
    date: 'February 2026',
    rating: 5,
    text: 'Sangat bangga dengan museum ini! Koleksi Majapahit-nya luar biasa lengkap dan terawat dengan baik. Program edukasinya juga sangat bermanfaat untuk anak-anak. Terima kasih sudah menjaga warisan budaya Indonesia dengan begitu baik.',
  },
  {
    id: 3,
    name: 'Dr. Michael Chen',
    location: 'Singapore',
    date: 'January 2026',
    rating: 5,
    text: 'As a historian specializing in Southeast Asian culture, I found this museum to be exceptional. The curation is scholarly yet accessible, and the conservation work is of the highest standard. The staff\'s expertise and passion for Indonesian heritage is evident in every exhibition.',
  },
  {
    id: 4,
    name: 'Maria Garcia',
    location: 'Spain',
    date: 'January 2026',
    rating: 5,
    text: 'What a wonderful experience! The museum building itself is beautiful, and the exhibitions are thoughtfully designed. The audio guide in Spanish was very helpful. I especially loved the textile collection and the detailed explanations of batik techniques.',
  },
  {
    id: 5,
    name: 'Ratna Dewi',
    location: 'Surabaya, Indonesia',
    date: 'December 2025',
    rating: 5,
    text: 'Museum favorit saya di Jawa Timur! Setiap kali berkunjung selalu ada hal baru yang dipelajari. Program workshopnya sangat menarik, terutama workshop batik. Anak-anak juga sangat menikmati kunjungan edukatif mereka ke sini.',
  },
  {
    id: 6,
    name: 'James Anderson',
    location: 'United Kingdom',
    date: 'December 2025',
    rating: 5,
    text: 'Outstanding museum with world-class artifacts. The Candi Jago and Candi Kidal stone reliefs are absolutely magnificent. The museum does an excellent job of contextualizing these pieces within Indonesian history. Highly recommended for anyone interested in Southeast Asian culture.',
  },
  {
    id: 7,
    name: 'Yuki Tanaka',
    location: 'Japan',
    date: 'November 2025',
    rating: 5,
    text: 'とても素晴らしい博物館です！インドネシアの文化遺産を学ぶのに最高の場所です。展示は美しく、スタッフはとても親切でした。バーチャルツアーも素晴らしかったです。',
  },
  {
    id: 8,
    name: 'Emma Williams',
    location: 'Canada',
    date: 'November 2025',
    rating: 5,
    text: 'This museum exceeded all expectations! The exhibitions are beautifully curated, and I learned so much about Majapahit history. The conservation lab viewing window was fascinating. The gift shop also has wonderful books and replicas.',
  },
  {
    id: 9,
    name: 'Ahmad Rahman',
    location: 'Malang, Indonesia',
    date: 'October 2025',
    rating: 5,
    text: 'Sebagai warga Malang, saya sangat bangga dengan museum ini. Ini bukan hanya tempat wisata, tapi juga pusat pembelajaran budaya yang sangat penting. Program komunitas dan kerjasama dengan sekolah-sekolah lokal sangat menginspirasi.',
  },
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
            Hear what our visitors have to say about their experience at the Indonesian Heritage Museum
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
            We love hearing from our visitors! Share your experience at the Indonesian Heritage Museum 
            and help others discover the beauty of Indonesian cultural heritage.
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
