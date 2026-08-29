import React from 'react';
import Link from 'next/link';
import { Trophy, Code, Users, BrainCircuit, Rocket, ShieldCheck, CheckCircle2, Sparkles, Presentation, Star, FileText, Mail, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import CourseCard from '../components/CourseCard';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import JsonLd from '../components/JsonLd';
import { getAllCourses, getAllBlogPosts } from '../lib/mdx';

export default function Home() {
  // Load courses & blog posts at build time
  const allCourses = getAllCourses();
  
  const allBlogPosts = getAllBlogPosts();
  const latestPosts = allBlogPosts.slice(0, 3); // Latest 3 blog articles

  // Organization schema data
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CodingSkills Academy",
    "url": "https://codingskills.co.in",
    "logo": "https://codingskills.co.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99999-83314",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "WZ-11, Jwalaheri Village, Paschim Vihar",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110063",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/coding_skills_academy"
    ]
  };

  // Why parents choose us features data
  const features = [
    {
      image: '/images/features/feature_1.png',
      title: 'Project Showcase & Certificates',
      description: 'Every child builds a real project - a game, website, or app - and earns an ISO-certified certificate they are genuinely proud of.'
    },
    {
      image: '/images/features/feature_2.png',
      title: '100% Fun & Interactive',
      description: 'No boring lectures. Kids learn by building things they care about. Coding is the most exciting part of their week!'
    },
    {
      image: '/images/features/feature_3.png',
      title: 'Live Expert Mentors',
      description: 'Our mentors are trained to keep young minds engaged and excited. Small batches ensure personalized attention for every child.'
    },
    {
      image: '/images/features/feature_4.png',
      title: 'Future Advantage',
      description: 'Coding teaches logical thinking and problem-solving, making kids significantly better at Math and Science in school.'
    },
    {
      image: '/images/features/feature_5.png',
      title: 'Competition Readiness',
      description: 'We prepare students for National Coding Olympiads, Hackathons, and school-level competitions. Our students win!'
    },
    {
      image: '/images/features/feature_6.png',
      title: 'Parent Approved',
      description: 'Loved by 500+ parents. We focus on transforming screen time into creative time. Your child will love it - we guarantee it.'
    }
  ];

  // How it works steps
  const steps = [
    {
      image: "/images/steps/step_1.png",
      title: "Step 1: Learn by Building",
      desc: "No boring theory. Kids start building their first project from Day 1."
    },
    {
      image: "/images/steps/step_2.png",
      title: "Step 2: Expert Guidance",
      desc: "Live 1:1 or small group sessions with mentors who make coding fun."
    },
    {
      image: "/images/steps/step_3.png",
      title: "Step 3: Master the Logic",
      desc: "We teach the 'why' behind the code, building critical thinking skills."
    },
    {
      image: "/images/steps/step_4.png",
      title: "Step 4: Show the World",
      desc: "Your child presents their final project at our Demo Day event. The pride on their face? Priceless."
    }
  ];

  return (
    <div className="bg-light-base overflow-hidden">
      {/* Organisation JSON-LD */}
      <JsonLd data={orgSchema} />

      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-dark-base mb-6">
              Why Parents Choose <span className="text-secondary">Coding Skills Academy?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-poppins">
              We don't just teach code; we teach confidence. Our platform transforms children from technology consumers into technology creators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft hover:shadow-orange hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-full max-w-[10rem] mb-6 flex items-center justify-center overflow-hidden rounded-2xl bg-primary/5 p-2.5 border border-primary/10 group-hover:scale-105 transition-transform duration-300 mx-auto aspect-square">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark-base mb-3 font-fredoka group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 font-poppins leading-relaxed text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & How it Works */}
      <section className="py-24 bg-light-base overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-base mb-8">
                Coding Skills Academy <br/><span className="text-secondary">Learn | Create | Code</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 font-poppins leading-relaxed text-justify">
                Coding Skills Academy is an educational platform that helps students aged 7 to 17 learn coding through engaging, personalized, and practical education. We provide online coding classes with hands-on projects, creative thinking, logical problem-solving, and confidence-building through technology.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Better in Math & Science through logical thinking',
                  'Ahead of everyone in class with years of experience',
                  'Prepare for National Coding Olympiads & Hackathons',
                  'Build a portfolio for top college applications'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-dark-base font-fredoka font-medium">{point}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/book-demo" className="btn-primary">
                Book FREE Demo Class
              </Link>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <img 
                src="/about-kids-coding.png" 
                alt="Kids Coding Future" 
                loading="lazy"
                decoding="async"
                className="w-full h-auto drop-shadow-xl rounded-2xl"
              />
            </div>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-soft border border-gray-100">
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-4xl font-bold text-dark-base mb-4">How Your Child <span className="text-secondary">Becomes a Creator</span></h3>
              <p className="text-gray-500 font-poppins">Our 4-step journey to building confidence and skills.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="text-center group flex flex-col items-center">
                  <div className="w-[7.5rem] h-[7.5rem] mb-6 flex items-center justify-center overflow-hidden rounded-2xl bg-primary/5 p-2.5 border border-primary/10 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-dark-base font-fredoka mb-3">{step.title}</h4>
                  <p className="text-gray-500 text-sm font-poppins leading-relaxed text-justify">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Coding Courses Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2e2e2e] mb-4">Our Coding Courses</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8 font-poppins">Explore all of our hands-on modules designed for different age groups and skill levels.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Swiper Carousel */}
      <TestimonialsSection />

      {/* Latest Blog Posts Section */}
      {latestPosts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-base mb-4 font-fredoka">From Our <span className="text-secondary">Coding Blog</span></h2>
              <p className="text-gray-500 font-poppins max-w-md mx-auto">Get helpful insights, guidebooks, and tips on teaching children logic and programming.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-secondary/20 hover:shadow-soft transition-all duration-300 flex flex-col group"
                >
                  <div className="w-full h-48 overflow-hidden bg-gray-200 relative">
                    <img 
                      src={post.coverImage || '/images/blog/default.jpg'} 
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <div className="flex gap-2 text-xs text-gray-400 mb-3 font-semibold font-poppins">
                      <span>{post.publishedDate}</span>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </div>
                    <h3 className="text-lg font-bold text-dark-base mb-3 font-fredoka group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4 font-poppins">
                      {post.metaDescription}
                    </p>
                    <span className="text-secondary font-bold text-xs mt-auto font-fredoka uppercase tracking-wider">Read Article &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-light-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-orange">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full -mr-48 -mb-48"></div>
            
            <div className="relative z-10 text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Ready to Give Your Child a <span className="text-primary">Superpower?</span>
              </h2>
              <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-poppins">
                Book a free 45-minute demo class. Your child will write their first lines of code and build something small today!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/book-demo"
                  className="bg-white text-secondary hover:bg-gray-50 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:-translate-y-1 font-now inline-block"
                >
                  Book FREE Demo Class
                </Link>
                <div className="flex items-center text-white/80 font-medium font-poppins">
                  <Star className="w-5 h-5 mr-2 text-primary" />
                  No commitment. Kids love it!
                </div>
              </div>
              <p className="text-white/60 text-sm mt-10 font-poppins">
                Join 500+ parents who have discovered the power of coding with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Form Info details */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-dark-base mb-6">
                Connect With <span className="text-secondary">Our Team</span>
              </h2>
              <p className="text-gray-500 mb-8 font-poppins leading-relaxed text-justify">
                Have questions about our course structures, batch availability, or the custom 1-on-1 trial schedules? Send us a message and our counselor will assist you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-base font-fredoka">Email Address</h4>
                    <a href="mailto:info@codingskills.co.in" className="text-gray-500 hover:text-secondary text-sm font-semibold transition-colors">info@codingskills.co.in</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-base font-fredoka">Phone Number</h4>
                    <a href="tel:9999983314" className="text-gray-500 hover:text-secondary text-sm font-semibold transition-colors">+91 99999 83314</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form component */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
