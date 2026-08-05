import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { BookOpen, Calendar as CalendarIcon, ShieldCheck, Clock, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import MarkdownContent from '../../../components/MarkdownContent';
import { getCourseBySlug, getAllCourses } from '../../../lib/mdx';
import FAQAccordion from '../../../components/FAQAccordion';
import CourseActions from '../../../components/CourseActions';
import CourseCard from '../../../components/CourseCard';
import JsonLd from '../../../components/JsonLd';

interface CoursePageProps {
  params: {
    slug: string;
  };
}

// Pre-render static paths at build time
export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map(course => ({
    slug: course.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};

  return {
    title: course.metaTitle || `${course.title} | CodingSkills Academy`,
    description: course.metaDescription || course.description,
    alternates: {
      canonical: `https://codingskills.co.in/courses/${course.slug}`,
    },
    openGraph: {
      title: course.metaTitle || course.title,
      description: course.metaDescription || course.description,
      url: `https://codingskills.co.in/courses/${course.slug}`,
      type: 'website',
      images: [
        {
          url: course.image,
          width: 800,
          height: 600,
          alt: course.title,
        }
      ]
    }
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseBySlug(params.slug);
  if (!course) {
    notFound();
  }

  // Related courses (excluding the current one)
  const allCourses = getAllCourses();
  const relatedCourses = allCourses
    .filter(c => c.slug !== course.slug)
    .slice(0, 3);

  // JSON-LD Course Schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "CodingSkills Academy",
      "sameAs": "https://codingskills.co.in"
    }
  };

  // JSON-LD FAQ Schema
  const faqSchema = course.faqs && course.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": course.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <div className="bg-light-base min-h-screen pt-32 pb-24 font-poppins">
      {/* Schema Injection */}
      <JsonLd data={courseSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back link */}
        <div className="mb-8 text-left">
          <Link 
            href="/courses" 
            className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-secondary transition-colors font-fredoka uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all courses
          </Link>
        </div>

        {/* Course Header Block */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100/80 shadow-soft mb-12 text-left">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Header info */}
            <div className="flex-1 w-full">
              <span className="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider bg-primary/10 text-secondary uppercase mb-6 inline-block">
                Ages {course.ageRange}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#2e2e2e] leading-snug mb-6 font-fredoka">
                {course.title}
              </h1>
              <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed font-poppins font-medium">
                {course.description}
              </p>

              {/* Course Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-secondary shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Lessons</span>
                    <span className="text-sm font-extrabold text-dark-base">{course.lessons}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-secondary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Duration</span>
                    <span className="text-sm font-extrabold text-dark-base">{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-secondary shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Certificate</span>
                    <span className="text-sm font-extrabold text-dark-base">ISO-Certified</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-secondary shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Batch Size</span>
                    <span className="text-sm font-extrabold text-dark-base">Max 4 Students</span>
                  </div>
                </div>
              </div>

              {/* Course Actions CTA */}
              <CourseActions courseTitle={course.title} curriculumPdf={course.curriculumPdf} />
            </div>

            {/* Header image */}
            <div className="w-full max-w-sm lg:max-w-md shrink-0 flex justify-center">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-auto h-auto max-h-[300px] object-contain transform hover:scale-102 transition-all duration-300"
              />
            </div>
            
          </div>
        </div>

        {/* MDX Body Description Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100/80 shadow-soft mb-12 text-left prose prose-lg max-w-none prose-headings:font-fredoka prose-headings:text-dark-base prose-p:font-poppins prose-p:text-gray-600 prose-a:text-secondary">
          <MarkdownContent content={course.content} />
        </div>

        {/* FAQs Accordion Block */}
        {course.faqs && course.faqs.length > 0 && (
          <div className="mb-20 text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark-base mb-8 font-fredoka">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={course.faqs} />
          </div>
        )}

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark-base mb-8 font-fredoka">
              Related Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
