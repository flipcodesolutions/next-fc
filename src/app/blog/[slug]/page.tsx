import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import blogsData from '@/data/blogs.json';
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/seo/JsonLd';
import {
  ArrowLeft,
  Clock,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Code2,
} from 'lucide-react';

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
      title: 'Article Not Found | Flipcode Solutions',
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
      'full stack development',
      'flipcode solutions',
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

  // Find related articles (excluding the current one)
  const relatedPosts = blogsData
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

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
        
        {/* Post Hero Header */}
        <section className="bg-[#202323] text-white pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden" aria-labelledby="blog-post-heading">
          {/* Subtle background grid and radial light */}
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[550px] h-[550px] hero-radial-glow pointer-events-none"></div>
          <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-radial from-[#FF6B35]/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Breadcrumb Navigation */}
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-[#A0A4A6] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span className="text-white/40">›</span>
              <span className="text-[#FF6B35]">{post.category}</span>
            </nav>

            {/* Eyebrow badge */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#CBD5E1] tracking-wide shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
                </span>
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-bold text-xs">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <span className="font-bold text-white">{post.author.name}</span>
                  <span className="text-slate-400 ml-1.5">({post.author.role})</span>
                </div>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>{post.publishedAt}</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>{post.readTime}</span>
              </div>
            </div>

          </div>
        </section>

        {/* Main Article Content & Sidebar Grid */}
        <section className="bg-white py-16 lg:py-24 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Article Body (8 cols) */}
              <article className="lg:col-span-8 space-y-10">
                
                {/* Lead Summary Callout */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F8F8] border-l-4 border-[#FF6B35] shadow-2xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A5D5C] mb-2 font-mono">
                    Executive Summary
                  </h3>
                  <p className="text-base sm:text-lg text-[#202323] leading-relaxed font-medium">
                    {post.summary}
                  </p>
                </div>

                {/* Dynamic Content Sections */}
                {post.sections && post.sections.length > 0 ? (
                  post.sections.map((section, idx) => (
                    <div key={idx} id={`section-${idx}`} className="space-y-5 pt-2">
                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323] tracking-tight">
                        {section.heading}
                      </h2>

                      <p className="text-base text-[#303333] leading-relaxed">
                        {section.body}
                      </p>

                      {/* Code Snippet Block */}
                      {section.codeSnippet && (
                        <div className="rounded-2xl bg-[#202323] text-slate-200 border border-white/10 overflow-hidden shadow-lg my-4">
                          <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                            <span className="flex items-center gap-1.5">
                              <Code2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                              <span>{section.codeSnippet.language}</span>
                            </span>
                            <span className="text-[11px] text-slate-500">Source Spec</span>
                          </div>
                          <pre className="p-5 text-xs sm:text-sm font-mono overflow-x-auto text-emerald-400 leading-relaxed">
                            <code>{section.codeSnippet.code}</code>
                          </pre>
                        </div>
                      )}

                      {/* Key Takeaways / Points */}
                      {section.keyPoints && section.keyPoints.length > 0 && (
                        <div className="p-5 rounded-2xl bg-[#FAFBFB] border border-[#E5E7E9] space-y-3 mt-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A5D5C] font-heading">
                            Key Architectural Takeaways:
                          </h4>
                          <ul className="space-y-2.5">
                            {section.keyPoints.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2.5 text-sm text-[#303333]">
                                <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  /* Fallback default section if no structured sections */
                  <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323]">
                      Architectural Implementation Strategy
                    </h2>
                    <p className="text-base text-[#303333] leading-relaxed">
                      Engineering high-throughput systems requires decoupling monolithic dependencies, employing asynchronous task queues, and isolating data models with clear API contracts.
                    </p>
                  </div>
                )}

                {/* Conclusion Box */}
                {post.conclusion && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#202323] text-white border border-white/10 shadow-xl space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#FF6B35] uppercase tracking-wider font-mono">
                      <Sparkles className="w-4 h-4" />
                      <span>Conclusion &amp; Final Thoughts</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {post.conclusion}
                    </p>
                  </div>
                )}

                {/* Tags & Share Row */}
                <div className="pt-8 border-t border-[#E5E7E9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#5A5D5C] mr-1">Tags:</span>
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/blog"
                      className="px-4 py-2 rounded-xl bg-white border border-[#E5E7E9] hover:border-[#FF6B35] text-xs font-bold text-[#202323] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>All Articles</span>
                    </Link>
                  </div>
                </div>

                {/* Author Card Bio */}
                <div className="p-6 rounded-2xl bg-[#F7F8F8] border border-[#E5E7E9] flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center font-extrabold text-xl flex-shrink-0 shadow-md">
                    {post.author.name.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-[#202323]">{post.author.name}</h4>
                      <span className="text-xs text-[#73787A]">({post.author.role})</span>
                    </div>
                    <p className="text-xs text-[#5A5D5C] leading-relaxed">
                      Leading digital product architecture, cloud engineering, and full-stack software development at Flipcode Solutions Private Limited.
                    </p>
                  </div>
                </div>

              </article>

              {/* Sidebar (4 cols) */}
              <aside className="lg:col-span-4 space-y-8">
                
                {/* CTA Card: Technical Scoping */}
                <div className="p-7 rounded-3xl bg-[#202323] text-white border border-white/10 shadow-xl space-y-5 sticky top-24">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FF6B35]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-heading text-white">
                      Planning a Complex Software Project?
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Consult directly with our lead software architects. We provide full architectural scoping, tech stack recommendations, and roadmap planning.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary-orange w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-center"
                  >
                    <span>Schedule Free Technical Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>Zero obligation architecture review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>Direct NDA protection</span>
                    </div>
                  </div>
                </div>

              </aside>

            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="bg-[#F7F8F8] py-16 lg:py-20 border-b border-[#E5E7E9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B35]">
                    More from the Engineering Team
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323] mt-1">
                    Related Articles &amp; Insights
                  </h3>
                </div>

                <Link
                  href="/blog"
                  className="text-xs font-bold text-[#FF6B35] hover:text-[#202323] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View All Blog Posts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="card-lift rounded-2xl bg-white border border-[#E5E7E9] p-6 flex flex-col justify-between hover:shadow-lg transition-all group hover:border-[#FF6B35]/40"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#5A5D5C] mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F7F8F8] text-[#FF6B35] font-bold border border-[#E5E7E9]">
                          {related.category}
                        </span>
                        <span className="text-slate-400">{related.readTime}</span>
                      </div>

                      <h4 className="text-base font-bold font-heading text-[#202323] group-hover:text-[#FF6B35] transition-colors leading-snug line-clamp-2">
                        {related.title}
                      </h4>

                      <p className="mt-2.5 text-xs text-[#6B7070] leading-relaxed line-clamp-2">
                        {related.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-[#E5E7E9] flex items-center justify-between text-xs font-bold text-[#202323] group-hover:text-[#FF6B35]">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        )}

      </main>

      <SiteFooter />
    </div>
  );
}
