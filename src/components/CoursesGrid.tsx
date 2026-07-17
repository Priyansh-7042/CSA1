'use client';

import React, { useState } from 'react';
import CourseCard from './CourseCard';

interface Course {
  title: string;
  slug: string;
  ageRange: string;
  lessons: string;
  duration: string;
  description: string;
  curriculumPdf: string;
  image: string;
}

interface CoursesGridProps {
  courses: Course[];
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Age Groups', id: 'all' },
    { label: 'Junior Coders (Ages 7-10)', id: '7-10' },
    { label: 'Rising Techies (Ages 11-14)', id: '11-14' },
    { label: 'Future Innovators (Ages 15-17)', id: '15-17' },
  ];

  const filteredCourses = activeFilter === 'all'
    ? courses
    : courses.filter(c => c.ageRange === activeFilter);

  return (
    <div className="font-poppins">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActiveFilter(f.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeFilter === f.id
                ? 'bg-secondary text-white shadow-md shadow-secondary/15'
                : 'bg-white border border-gray-100 hover:border-gray-200 text-gray-500 hover:text-dark-base'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400 bg-white rounded-3xl border border-gray-100 p-8">
          No courses found for this age group.
        </div>
      )}
    </div>
  );
};

export default CoursesGrid;
