import React from 'react';
import { Metadata } from 'next';
import CoursesGrid from '../../components/CoursesGrid';
import { getAllCourses } from '../../lib/mdx';

export const metadata: Metadata = {
  title: 'Coding Courses for Kids & Teens | CodingSkills Academy',
  description: 'Explore our 12 interactive coding courses for kids and teens aged 7-17. Scratch, Minecraft, HTML/CSS Web Development, C, Python, and AI. Download course curriculum today.',
  alternates: {
    canonical: 'https://codingskills.co.in/courses',
  }
};

export default function CoursesPage() {
  const allCourses = getAllCourses();

  return (
    <div className="bg-light-base min-h-screen pt-32 pb-24 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-base mb-4">
            Explore Our <span className="text-secondary">Coding Courses</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Fun, project-based online classes taught live. Choose a course category based on your child's age group below.
          </p>
        </div>

        {/* Filterable Grid */}
        <CoursesGrid courses={allCourses} />

      </div>
    </div>
  );
}
