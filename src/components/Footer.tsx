import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-black pt-20 pb-10 border-t border-white/5 font-poppins text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-8 group">
              <img
                src="/logo.png"
                alt="Coding Skills Academy Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Coding Skills Academy is an educational platform that helps students aged 7 to 17 learn coding through
              engaging, personalized, and practical education.
            </p>
            <div className="flex space-x-5">
              {[
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/coding_skills_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
                  path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 font-fredoka uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Book Free Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/verify-certificate"
                  className="text-secondary hover:text-primary transition-colors text-sm font-semibold flex items-center space-x-1"
                >
                  <span>Verify Certificate</span>
                  <span className="text-[10px] bg-secondary/20 text-secondary px-1.5 py-0.5 rounded font-mono ml-1">
                    NEW
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 font-fredoka uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                Email:{' '}
                <a href="mailto:info@codingskills.co.in" className="hover:text-primary">
                  info@codingskills.co.in
                </a>
              </li>
              <li>
                Phone:{' '}
                <a href="tel:9999983314" className="hover:text-primary">
                  +91 99999 83314
                </a>
              </li>
              <li>
                Website:{' '}
                <a href="https://codingskills.co.in" className="hover:text-primary">
                  codingskills.co.in
                </a>
              </li>
              <li>
                Address:{' '}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=CodingSkills+Academy+Paschim+Vihar+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  WZ-11, Jwalaheri Village, Paschim Vihar, New Delhi, Delhi, 110063
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 mb-4 md:mb-0 font-medium">
            &copy; {new Date().getFullYear()} CodingSkills Academy. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs text-gray-500">
            <Link href="/verify-certificate" className="hover:text-white transition-colors">
              Verify Certificate
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
