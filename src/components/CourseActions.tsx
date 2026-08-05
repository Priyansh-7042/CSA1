'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, Calendar } from 'lucide-react';
import CurriculumModal from './CurriculumModal';

interface CourseActionsProps {
  courseTitle: string;
  curriculumPdf: string;
}

const CourseActions: React.FC<CourseActionsProps> = ({ courseTitle, curriculumPdf }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 font-poppins w-full">
      <Link 
        href="/book-demo" 
        className="btn-primary py-3.5 sm:py-4 px-5 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
      >
        <Calendar className="w-5 h-5 shrink-0" /> Book FREE Demo Class
      </Link>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="btn-secondary py-3.5 sm:py-4 px-5 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 w-full sm:w-auto group"
      >
        <Download className="w-5 h-5 text-secondary group-hover:text-white transition-colors shrink-0" /> Download Curriculum
      </button>

      <CurriculumModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={courseTitle}
        pdfUrl={curriculumPdf}
      />
    </div>
  );
};

export default CourseActions;
