'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, ShieldCheck, Download } from 'lucide-react';
import CurriculumModal from './CurriculumModal';

interface CourseCardProps {
  course: {
    title: string;
    slug: string;
    ageRange: string;
    lessons: string;
    duration: string;
    description: string;
    curriculumPdf: string;
    image: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div 
      className="bg-white rounded-[20px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 hover:border-secondary/20 hover:shadow-[0_12px_30px_rgba(237,91,45,0.06)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full relative font-poppins"
    >
      {/* Age Badge */}
      <div className="flex justify-between items-center mb-3">
        <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-primary/10 text-secondary">
          Ages {course.ageRange}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-extrabold text-[#2e2e2e] leading-snug mb-1 font-fredoka min-h-[3rem] flex items-center">
        {course.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-500 text-xs mb-4 font-poppins leading-relaxed min-h-[3rem]">
        {course.description}
      </p>

      {/* Course Image */}
      <div className="w-full flex justify-center mb-4 h-[132px]">
        <img 
          src={course.image} 
          alt={course.title} 
          loading="lazy"
          decoding="async"
          className="w-auto h-full object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-0.5 pt-3 pb-3 border-t border-b border-gray-100 mb-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <BookOpen className="w-4 h-4 mb-1 text-secondary" />
          <span className="text-[12px] font-bold text-[#2e2e2e]">{course.lessons}</span>
          <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Lessons</span>
        </div>
        <div className="flex flex-col items-center justify-center border-x border-gray-100">
          <Calendar className="w-4 h-4 mb-1 text-secondary" />
          <span className="text-[12px] font-bold text-[#2e2e2e] truncate max-w-full px-1">{course.duration}</span>
          <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Duration</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ShieldCheck className="w-4 h-4 mb-1 text-secondary" />
          <span className="text-[12px] font-bold text-[#2e2e2e]">Yes</span>
          <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Certificate</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto space-y-2">
        <Link 
          href={`/courses/${course.slug}`} 
          className="w-full py-2.5 rounded-xl border border-gray-100 hover:border-secondary hover:text-secondary text-gray-500 font-bold transition-all text-xs text-center block font-fredoka uppercase tracking-wider"
        >
          View Details
        </Link>
        <button 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className="w-full px-2 py-2.5 rounded-xl bg-secondary text-white font-bold hover:bg-opacity-95 shadow-sm hover:shadow-orange transition-all text-[11px] sm:text-xs flex items-center justify-center gap-1.5 font-fredoka uppercase tracking-wide whitespace-nowrap cursor-pointer z-10"
        >
          <Download className="w-3.5 h-3.5 shrink-0" />
          <span>Download Curriculum</span>
        </button>
      </div>

      {/* Curriculum Modal */}
      <CurriculumModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={course.title}
        pdfUrl={course.curriculumPdf}
      />
    </div>
  );
};

export default CourseCard;
