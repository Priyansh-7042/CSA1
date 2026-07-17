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
    <div className="flex flex-col sm:flex-row gap-4 font-poppins">
      <Link 
        href="/book-demo" 
        className="btn-primary py-4 px-10 text-base md:text-lg flex items-center justify-center gap-2 shadow-lg"
      >
        <Calendar className="w-5 h-5" /> Book FREE Demo Class
      </Link>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="btn-secondary py-4 px-10 text-base md:text-lg flex items-center justify-center gap-2 border border-gray-100 bg-white"
      >
        <Download className="w-5 h-5 text-secondary" /> Download Curriculum
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
