'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-4 w-full font-poppins">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div 
            key={i} 
            className="bg-white rounded-2xl border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(i)}
              type="button"
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-dark-base hover:text-secondary transition-colors font-fredoka text-base md:text-lg focus:outline-none"
            >
              <span>{faq.q}</span>
              <ChevronDown 
                className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[300px] border-t border-gray-50' : 'max-h-0'
              } overflow-hidden`}
            >
              <p className="px-6 py-5 text-gray-500 text-sm md:text-base leading-relaxed font-poppins font-medium">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
