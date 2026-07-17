import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | CodingSkills Academy',
  description: 'Get in touch with CodingSkills Academy. Send us a message, ask about our visual programming classes, batch timings, or locate our center in New Delhi.',
  alternates: {
    canonical: 'https://codingskills.co.in/contact',
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-light-base pt-32 pb-24 font-poppins text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-base mb-4 font-fredoka">
            Connect With <span className="text-secondary">Our Team</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Have questions about our batch availability, course fees, or scheduling? Send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-gray-100 shadow-soft">
            <h3 className="text-2xl font-bold text-dark-base mb-6 font-fredoka">Contact Details</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-poppins">
              Get in touch with a course advisor directly. We are happy to help you select the best track for your child.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-base font-fredoka">Email Address</h4>
                  <a href="mailto:info@codingskills.co.in" className="text-gray-500 hover:text-secondary text-sm font-semibold transition-colors font-poppins">info@codingskills.co.in</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-base font-fredoka">Phone Number</h4>
                  <a href="tel:9999983314" className="text-gray-500 hover:text-secondary text-sm font-semibold transition-colors font-poppins">+91 99999 83314</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-base font-fredoka">Our Location</h4>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=CodingSkills+Academy+Paschim+Vihar+New+Delhi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-secondary text-sm font-semibold transition-colors leading-relaxed block font-poppins"
                  >
                    WZ-11, Jwalaheri Village, Paschim Vihar, New Delhi, Delhi, 110063
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Block */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
