import { MetadataRoute } from 'next';
import { getAllCourses, getAllBlogPosts } from '../lib/mdx';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codingskills.co.in';

  // Static routes
  const staticRoutes = [
    '',
    '/courses',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  // Dynamic course routes
  const courses = getAllCourses().map(course => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Dynamic blog routes
  const blogPosts = getAllBlogPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishedDate || new Date().toISOString()),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...courses, ...blogPosts];
}
