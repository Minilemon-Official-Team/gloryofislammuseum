import { GraduationCap, Users, BookOpen, Palette, Calendar, ArrowRight } from 'lucide-react';

export default function Education() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Education & Family Programs
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Engaging educational programs designed to inspire learning and appreciation for Indonesian cultural heritage
          </p>
        </div>

        {/* Program Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#8C6B3E]" />
            </div>
            <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-3">General/Family</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Programs designed for families and general visitors to explore Indonesian heritage together
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-[#8C6B3E]" />
            </div>
            <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-3">Educational Institution</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Curriculum-aligned programs for schools, universities, and educational organizations
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-[#8C6B3E]" />
            </div>
            <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-3">Educational Series</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Specialized lecture series, workshops, and multi-session learning programs
            </p>
          </div>
        </div>

        {/* General/Family Programs Section */}
        <section className="mb-20">
          <div className="bg-[#E7DED0] rounded-lg p-2 inline-block mb-6">
            <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] px-6 py-2">General/Family Programs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Family Discovery Tours</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Interactive guided tours designed for families with children ages 6-12. Engaging activities and 
                storytelling bring Indonesian history to life through hands-on exploration.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Duration: 90 minutes</li>
                <li>• Ages: 6-12 years with parents</li>
                <li>• Schedule: Saturdays & Sundays, 10:00 AM & 2:00 PM</li>
                <li>• Free with museum admission</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Weekend Workshops</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Monthly hands-on workshops teaching traditional Indonesian arts and crafts. Perfect for families 
                wanting to create their own cultural artifacts.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Batik making, pottery, traditional masks</li>
                <li>• Duration: 2-3 hours</li>
                <li>• All materials provided</li>
                <li>• Fee: IDR 100,000 per participant</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                View Schedule <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Cultural Celebration Days</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Special event days celebrating Indonesian cultural festivals with traditional performances, 
                storytelling, music, and interactive activities for all ages.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Quarterly special events</li>
                <li>• Traditional performances and demonstrations</li>
                <li>• Cultural food tasting</li>
                <li>• Free admission on celebration days</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                View Events <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Summer Family Program</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Week-long summer program offering daily activities, workshops, and guided explorations 
                for families during school holidays.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Two sessions: June and August</li>
                <li>• Daily themes and activities</li>
                <li>• Ages: 7-14 years</li>
                <li>• Registration opens in April</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                Register Interest <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Educational Institution Programs Section */}
        <section className="mb-20">
          <div className="bg-[#D9CFC1] rounded-lg p-2 inline-block mb-6">
            <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] px-6 py-2">Educational Institution Programs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">School Field Trips</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Curriculum-aligned museum visits for primary and secondary schools with guided tours and 
                educational materials supporting classroom learning.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Tailored to grade levels and curriculum</li>
                <li>• Pre-visit and post-visit materials</li>
                <li>• Student worksheets included</li>
                <li>• Discounted group rates</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                Book School Visit <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">University Partnerships</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Collaborative programs with universities including internships, research access, and 
                specialized seminars for advanced students.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Internship opportunities</li>
                <li>• Research archive access</li>
                <li>• Guest lecture series</li>
                <li>• Thesis research support</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                Partnership Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Teacher Development</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Professional development workshops for teachers focusing on Indonesian history, cultural studies, 
                and museum-based learning strategies.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Quarterly professional development days</li>
                <li>• Teaching resource kits</li>
                <li>• Curriculum integration support</li>
                <li>• Certificate of completion provided</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                View Workshops <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Outreach Programs</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Museum staff visit schools with portable exhibitions, artifacts, and interactive presentations 
                for institutions unable to visit the museum.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Portable exhibitions</li>
                <li>• Artifact handling sessions</li>
                <li>• Cultural presentations</li>
                <li>• Available throughout East Java</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                Request Outreach <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Educational Series Section */}
        <section className="mb-12">
          <div className="bg-[#E7DED0] rounded-lg p-2 inline-block mb-6">
            <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] px-6 py-2">Educational Series</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Heritage Lecture Series</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Monthly lectures by leading scholars, archaeologists, and cultural experts covering various 
                aspects of Indonesian heritage and Majapahit history.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Monthly evening lectures</li>
                <li>• Expert speakers from around the world</li>
                <li>• Q&A sessions</li>
                <li>• Free attendance with RSVP</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                View Lecture Schedule <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Art & Craft Masterclass</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Multi-week intensive courses in traditional Indonesian arts taught by master craftspeople, 
                from beginner to advanced levels.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• 4-6 week courses</li>
                <li>• Traditional batik, pottery, woodcarving</li>
                <li>• Master instructor-led</li>
                <li>• Certificate upon completion</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                Enroll Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Indonesian Language & Culture</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Language courses integrated with cultural learning, perfect for international visitors and 
                expatriates wanting to deepen their understanding of Indonesia.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Beginner to advanced levels</li>
                <li>• Cultural immersion activities</li>
                <li>• 10-week courses</li>
                <li>• Small class sizes</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Research Symposium</h3>
              <p className="text-[#2B2B2B] mb-4 leading-relaxed">
                Annual academic symposium bringing together researchers, scholars, and students to present 
                and discuss latest findings in Indonesian archaeological and cultural studies.
              </p>
              <ul className="space-y-2 text-[#5A5A5A] mb-6">
                <li>• Annual event in November</li>
                <li>• Paper presentations and panels</li>
                <li>• Networking opportunities</li>
                <li>• Publication in proceedings</li>
              </ul>
              <button className="text-[#8C6B3E] hover:text-[#6F532F] flex items-center gap-2">
                Symposium Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact for Programs */}
        <div className="bg-[#8C6B3E] text-white rounded-lg shadow-xl p-12 text-center">
          <h2 className="font-['Cinzel'] text-3xl mb-4">Get Started with Our Programs</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our Education Department to learn more about our programs, book a visit, 
            or discuss custom educational experiences for your group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#8C6B3E] rounded hover:bg-[#E7DED0] transition-colors shadow-lg">
              Contact Education Team
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded hover:bg-white/10 transition-colors">
              Download Program Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
