import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface CourseData {
  title: string;
  slug: string;
  ageRange: string;
  lessons: string;
  duration: string;
  description: string;
  curriculumPdf: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { q: string; a: string }[];
  content: string;
}

export interface BlogPostData {
  title: string;
  slug: string;
  publishedDate: string;
  updatedDate: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  content: string;
}

export function getAllCourses(): CourseData[] {
  const coursesDir = path.join(contentDirectory, 'courses');
  if (!fs.existsSync(coursesDir)) return [];
  
  const files = fs.readdirSync(coursesDir);
  const courses = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(coursesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      return {
        ...(data as Omit<CourseData, 'content'>),
        content
      } as CourseData;
    });

  return courses;
}

export function getCourseBySlug(slug: string): CourseData | null {
  const filePath = path.join(contentDirectory, 'courses', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    ...(data as Omit<CourseData, 'content'>),
    content
  } as CourseData;
}

export function getAllBlogPosts(): BlogPostData[] {
  const blogDir = path.join(contentDirectory, 'blog');
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir);
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      return {
        ...(data as Omit<BlogPostData, 'content'>),
        content
      } as BlogPostData;
    });

  // Sort posts by date descending
  return posts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPostData | null {
  const filePath = path.join(contentDirectory, 'blog', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    ...(data as Omit<BlogPostData, 'content'>),
    content
  } as BlogPostData;
}
