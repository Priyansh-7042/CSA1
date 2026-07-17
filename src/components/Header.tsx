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
      setIsScrolled(window.scrollY > 20);
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

  const isHomePage = pathname === '/';
  const textColorClass = (!isScrolled && isHomePage) ? 'text-white' : 'text-dark-base';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-dark-base/5 py-3 shadow-soft' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Coding Skills Academy Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                onClick={closeMobileMenu}
                className={`text-base font-fredoka font-medium transition-colors hover:text-secondary relative group ${
                  pathname === link.path ? 'text-secondary' : textColorClass
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300 ${
                  pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <a href="https://learn.codingskills.co.in" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm px-6 py-2.5">
                Login
              </a>
              <Link href="/book-demo" className="btn-primary text-sm px-6 py-2.5">
                Book Demo
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors focus:outline-none ${
                isMobileMenuOpen ? 'text-dark-base' : textColorClass
              } hover:text-secondary`}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-white/98 backdrop-blur-lg flex flex-col items-center justify-start pt-10 px-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={closeMobileMenu}
              className={`text-2xl font-fredoka font-semibold mb-6 transition-colors ${
                pathname === link.path ? 'text-secondary' : 'text-dark-base hover:text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://learn.codingskills.co.in" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="w-full max-w-xs btn-secondary py-3 text-center mb-4 text-lg font-fredoka"
          >
            Login
          </a>
          <Link 
            href="/book-demo" 
            onClick={closeMobileMenu}
            className="w-full max-w-xs btn-primary py-3 text-center text-lg font-fredoka"
          >
            Book Free Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
