import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Award, Heart, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Our Coding Academy | CodingSkills Academy',
  description: 'Learn about the mission, team, and story of CodingSkills Academy Paschim Vihar, teaching computer science, logic-building, C, and Python to kids aged 7-17.',
  alternates: {
    canonical: 'https://codingskills.co.in/about',
  }
};

export default function AboutPage() {
  return (
    <div className="bg-light-base min-h-screen pt-32 pb-24 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-base mb-4 font-fredoka">
            About <span className="text-secondary">CodingSkills Academy</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Empowering the next generation of creators, innovators, and thinkers.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft mb-12 text-left">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-grow w-full">
              <h2 className="text-2xl md:text-4xl font-bold text-dark-base mb-6 font-fredoka">
                Our Mission &amp; Purpose
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At CodingSkills Academy, we believe coding is a fundamental 21st-century superpower. Our goal is to transform screen time into creative time. Instead of merely consuming games, websites, and apps, we guide kids and teens aged 7 to 17 to build them from scratch.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded by expert programmers, our curriculum is engineered around logic building, structured computer science concepts, and practical projects. Small batch sizes (max 4 students) ensure that every child receives customized mentorship and support.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-secondary shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-base font-fredoka">ISO Certified</h4>
                    <span className="text-xs text-gray-500 font-semibold font-poppins">Standard Quality</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-secondary shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-base font-fredoka">500+ Graduates</h4>
                    <span className="text-xs text-gray-500 font-semibold font-poppins">Trained Students</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-secondary shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-base font-fredoka">Parent Rated 5/5</h4>
                    <span className="text-xs text-gray-500 font-semibold font-poppins">100% Trust</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm lg:max-w-md shrink-0 flex justify-center">
              <img 
                src="/about-kids-coding.png" 
                alt="Our coding classroom" 
                className="w-auto h-auto max-h-[300px] object-contain rounded-2xl drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Methodology Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft">
            <h3 className="text-2xl font-bold text-dark-base mb-6 font-fredoka">Our Core Methodology</h3>
            <ul className="space-y-4">
              {[
                "Fun & Game-Based: We introduce code using interactive tasks and visual games.",
                "Syntax Mastery: We teach how to construct syntax and avoid spelling errors.",
                "Deep Logic Building: We emphasize the 'why' behind loops, variables, and data arrays.",
                "Real Projects: Every milestone concludes with a real, playable showcase website or application.",
                "Certificates of Honor: Earn ISO-certified course completion awards."
              ].map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed font-medium">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-dark-base mb-4 font-fredoka">Start Your Child's Journey</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Unlock your child's computational thinking power. Book a free 1-on-1 demo trial class. No fees, no commitment, just coding.
            </p>
            <Link href="/contact" className="btn-primary w-full py-4 text-center">
              Book a Free Trial Class
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
