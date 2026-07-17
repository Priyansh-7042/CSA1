import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, User, Calendar as CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPostBySlug, getAllBlogPosts } from '../../../lib/mdx';
import JsonLd from '../../../components/JsonLd';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Pre-render blog static paths at build time
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for blog SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.metaTitle || `${post.title} | CodingSkills Academy Blog`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://codingskills.co.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      url: `https://codingskills.co.in/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate || post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          alt: post.title,
        }
      ]
    }
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  // Related blog articles (excluding the current one)
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  // JSON-LD BlogPosting Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [
      post.coverImage || "https://codingskills.co.in/images/blog/default.jpg"
    ],
    "datePublished": post.publishedDate,
    "dateModified": post.updatedDate || post.publishedDate,
    "author": [{
      "@type": "Person",
      "name": post.author,
      "url": "https://codingskills.co.in"
    }]
  };

  return (
    <div className="bg-light-base min-h-screen pt-32 pb-24 font-poppins">
      {/* Schema Injection */}
      <JsonLd data={blogSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back link */}
        <div className="mb-8 text-left">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-secondary transition-colors font-fredoka uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to blog list
          </Link>
        </div>

        {/* Article Meta */}
        <article className="text-left">
          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#2e2e2e] leading-tight mb-6 font-fredoka">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 font-semibold border-b border-gray-100 pb-6">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4 text-primary" />
                <span>Published: {post.publishedDate}</span>
              </div>
              {post.updatedDate && post.updatedDate !== post.publishedDate && (
                <div className="flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                  <span>Updated: {post.updatedDate}</span>
                </div>
              )}
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="w-full h-80 md:h-[450px] overflow-hidden rounded-3xl mb-12 shadow-soft bg-gray-200">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* MDX Body Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-fredoka prose-headings:text-dark-base prose-p:font-poppins prose-p:text-gray-600 prose-a:text-secondary mb-16">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-100 pt-16 text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark-base mb-8 font-fredoka">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link 
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100/80 hover:border-secondary/20 hover:shadow-soft transition-all duration-300 flex flex-col group"
                >
                  <div className="w-full h-36 bg-gray-200 overflow-hidden relative">
                    <img 
                      src={p.coverImage} 
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-all duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-sm font-bold text-dark-base font-fredoka group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                      {p.title}
                    </h3>
                    <span className="text-secondary font-bold text-xs mt-auto font-fredoka uppercase tracking-wider">Read &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
