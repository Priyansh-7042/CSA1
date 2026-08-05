import { coursesData, CourseData } from '../data/courses';
import { blogPostsData, BlogPostData } from '../data/blogPosts';

export type { CourseData, BlogPostData };

export function getAllCourses(): CourseData[] {
  return coursesData;
}

export function getCourseBySlug(slug: string): CourseData | null {
  const course = coursesData.find(c => c.slug === slug);
  return course || null;
}

export function getAllBlogPosts(): BlogPostData[] {
  return [...blogPostsData].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPostData | null {
  const post = blogPostsData.find(p => p.slug === slug);
  return post || null;
}
