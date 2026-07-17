# CodingSkills Academy Website Administration & Deployment Guide

This website is built with Next.js 14 using the App Router. The entire codebase is structured to be completely **static**, allowing it to be hosted on Hostinger shared static hosting without requiring a Node.js server.

---

## 1. How to Add a New Course

All courses are stored as markdown files (`.mdx`) in the `/content/courses/` folder.

To add a new course:
1. Navigate to `/content/courses/` in your files.
2. Create a new file with the naming convention `your-course-slug.mdx` (use lowercase and hyphens, e.g., `ai-art-mastery.mdx`).
3. Copy and paste the frontmatter template below at the top of your file. Fill in your details.
4. Write the description content in Markdown below the frontmatter block.

### Course Frontmatter Template:
```yaml
---
title: "Your Course Title"
slug: "your-course-slug"
ageRange: "8-12" # e.g. 7-10, 11-14, 15-17
lessons: "24 Lessons"
duration: "3 Months"
description: "A short, engaging description for course cards and Google snippets."
curriculumPdf: "/curriculum/your-course-pdf.pdf"
image: "/courses/course-logo.png"
metaTitle: "Your SEO Meta Title | CodingSkills Academy"
metaDescription: "Detailed SEO description optimized for Google search results."
faqs:
  - q: "What will my child learn in this course?"
    a: "Your child will learn..."
  - q: "Are there any prerequisites?"
    a: "No prior experience is required..."
---

# Write Your Detailed Course Syllabus/Description Here

You can write normal text, lists, and headings here. 
Every child works on real coding tasks and earns a certificate!
```

---

## 2. How to Add a New Blog Post

All blog articles are stored as markdown files (`.mdx`) in the `/content/blog/` folder.

To add a new blog article:
1. Navigate to `/content/blog/` in your files.
2. Create a new file named `your-blog-slug.mdx` (e.g., `why-kids-should-learn-python.mdx`).
3. Paste the template below at the top and write the article in markdown below it.
4. *Important Rule*: Keep the first paragraph around ~150 words directly answering the question in the title to optimize for Google Featured Snippets and AI Search engines.

### Blog Frontmatter Template:
```yaml
---
title: "Why Kids Should Learn Python First?"
slug: "why-kids-should-learn-python-first"
publishedDate: "2026-07-12"
updatedDate: "2026-07-12"
author: "Coding Skills Academy Team"
metaTitle: "Why Kids Should Learn Python | CodingSkills Academy"
metaDescription: "An in-depth look at why Python is the best programming language for young learners."
coverImage: "/images/blog/python-cover.jpg"
---

# Why Kids Should Learn Python First?

[Write your direct ~150-word answer paragraph here for search engine optimization]
...
```

---

## 3. Local Development

To run the site locally in development mode:
```bash
# Run local dev server
npm run dev
```
Open `http://localhost:3000` in your web browser.

---

## 4. How to Build & Export for Hostinger

Since Hostinger shared hosting does not run Node.js, we compile the Next.js site into static HTML, CSS, and JS assets.

1. Open your terminal in the project directory.
2. Run the build command:
   ```bash
   npm run build
   ```
3. Once the build completes, Next.js generates a folder named `/out` in the root of the project.
4. This `/out` folder contains the static HTML files (like `index.html`, `courses.html`, `blog.html`, etc.) and assets.

---

## 5. How to Deploy to Hostinger

1. Log into your **Hostinger hPanel**.
2. Go to **File Manager** for your domain (e.g., `codingskills.co.in`).
3. Open the `public_html` directory.
4. Delete any old files (make a backup if necessary).
5. Upload all the contents of the `/out/` folder directly into `public_html`.
   * *Note*: Do not upload the `/out/` folder itself; upload the *files inside* the `/out/` folder (e.g. `_next`, `index.html`, `courses`, `blog`, etc.) directly into `public_html`.
6. Your site is live!

---

## 6. Supabase Connection Settings

Form submissions are stored in two tables inside your Supabase Database:
1. `contact_us`: Handles simple website query forms.
2. `curriculum`: Handles brochure downloads and booking requests.

If you ever need to change the Supabase credentials, update the following fields in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anonymous-publishable-key
```
