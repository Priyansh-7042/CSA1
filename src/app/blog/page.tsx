import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '../../lib/mdx';

export const metadata: Metadata = {
  title: 'Coding Blog & Parent Guides | CodingSkills Academy',
  description: 'Guides, tips, and insights on teaching coding to kids and teens aged 7-17. Read articles from our software mentors about Python, block programming, Scratch, and AI education.',
  alternates: {
    canonical: 'https://codingskills.co.in/blog',
  }
};

export default function BlogListingPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="bg-light-base min-h-screen pt-32 pb-24 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-base mb-4">
            Coding Academy <span className="text-secondary">Blog</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Stay updated with educational tips, parent guides, and trends in STEM education for kids and teens.
          </p>
        </div>

        {/* Blog Post Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100/80 hover:border-secondary/20 hover:shadow-soft transition-all duration-300 flex flex-col group text-left"
              >
                <div className="w-full h-56 overflow-hidden bg-gray-100 relative">
                  <img 
                    src={post.coverImage || '/images/blog/default.jpg'} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-2 text-xs text-gray-400 mb-4 font-bold tracking-wide uppercase">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-dark-base mb-4 font-fredoka group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-poppins line-clamp-3">
                    {post.metaDescription}
                  </p>
                  <span className="text-secondary font-bold text-sm mt-auto font-fredoka uppercase tracking-wider">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400 bg-white rounded-3xl border border-gray-100 p-8">
            No articles published yet. Check back soon!
          </div>
        )}

      </div>
    </div>
  );
}
