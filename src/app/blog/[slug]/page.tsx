import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import blogsData from '@/data/blogs.json';
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/seo/JsonLd';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, Share2, Sparkles } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Flipcode Solutions',
    };
  }

  return {
    title: `${post.title} | Flipcode Engineering Blog`,
    description: post.summary,
    keywords: [
      ...post.tags,
      post.category,
      'software engineering guide',
      'system architecture',
    ],
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Flipcode Blog`,
      description: post.summary,
      url: `https://flipcodesolutions.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: '2026-03-01T08:00:00.000Z',
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Flipcode Blog`,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'Blog', url: 'https://flipcodesolutions.com/blog' },
          { name: post.title, url: `https://flipcodesolutions.com/blog/${post.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.summary}
        url={`https://flipcodesolutions.com/blog/${post.slug}`}
        authorName={post.author.name}
      />
      <SiteHeader />

      <main className="flex-1">
        {/* Post Header */}
        <section className="bg-[#202323] text-white pt-36 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-[#A0A4A6] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span className="text-white/40">›</span>
              <span className="text-[#FF6B35]">{post.category}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-xs font-bold text-[#FF6B35] uppercase tracking-wider mb-4">
              {post.category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">{post.author.name}</span>
                <span className="text-slate-400">({post.author.role})</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>{post.publishedAt}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="bg-white py-20 lg:py-24 border-b border-[#E5E7E9]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <p className="text-lg text-[#303333] leading-relaxed font-medium">
              {post.summary}
            </p>

            <div className="border-t border-b border-[#E5E7E9] py-6 space-y-4">
              <h2 className="text-2xl font-bold font-heading text-[#202323]">
                Architectural Key Takeaways
              </h2>
              <p className="text-sm text-[#6B7070] leading-relaxed">
                When scaling enterprise systems, engineering teams often encounter performance degradation caused by blocking synchronous I/O and unoptimized database query patterns. By decoupling state management and employing distributed caching alongside edge edge-computing strategies, applications achieve deterministic latency profiles under extreme concurrent workloads.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading text-[#202323]">
                Best Practices &amp; Engineering Recommendations
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#303333]">
                <li>Implement aggressive edge caching for cacheable dynamic fragments.</li>
                <li>Employ connection pooling and database read-replicas for data layer isolation.</li>
                <li>Utilize automated CI/CD pipelines with comprehensive end-to-end regression suites.</li>
              </ul>
            </div>

            {/* Tags */}
            <div className="pt-8 border-t border-[#E5E7E9] flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#5A5D5C] mr-2">Tags:</span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Back to Blog */}
            <div className="pt-6">
              <Link
                href="/blog"
                className="btn-secondary-outline px-6 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
