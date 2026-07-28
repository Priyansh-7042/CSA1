'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-md py-2.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Coding Skills Academy Logo" 
              className="h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                onClick={closeMobileMenu}
                className={`text-base font-fredoka font-semibold transition-colors hover:text-secondary relative py-1 ${
                  pathname === link.path ? 'text-secondary' : 'text-dark-base'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full transform origin-left transition-transform duration-300 ${
                  pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <a 
                href="https://learn.codingskills.co.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2 rounded-full font-fredoka font-bold text-sm text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm"
              >
                Login
              </a>
              <Link 
                href="/book-demo" 
                className="btn-primary text-sm px-6 py-2.5 shadow-md hover:shadow-lg transition-all"
              >
                Book Free Demo
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-dark-base hover:text-secondary transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-gray-200 shadow-xl flex flex-col items-center py-6 px-6 z-50 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={closeMobileMenu}
              className={`text-xl font-fredoka font-semibold my-2.5 transition-colors ${
                pathname === link.path ? 'text-secondary' : 'text-dark-base hover:text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full max-w-xs flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
            <a 
              href="https://learn.codingskills.co.in" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full py-2.5 text-center font-fredoka font-bold text-secondary border-2 border-secondary hover:bg-secondary hover:text-white rounded-full transition-all duration-300"
            >
              Login
            </a>
            <Link 
              href="/book-demo" 
              onClick={closeMobileMenu}
              className="w-full btn-primary py-3 text-center text-base font-fredoka shadow-md"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

