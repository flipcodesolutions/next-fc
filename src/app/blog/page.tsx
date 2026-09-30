'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Mail,
  CheckCircle2,
  Sparkles,
  Tag,
  BookOpen,
} from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [emailSub, setEmailSub] = useState('');
  const [emailSubError, setEmailSubError] = useState('');
  const [subDone, setSubDone] = useState(false);

  const categories = [
    'All',
    'Technology',
    'Business',
    'SaaS',
    'Web Development',
    'Mobile',
    'eCommerce',
    'AI',
    'Digital Transformation',
  ];

  const featuredArticle = {
    title: 'Laravel vs Node.js: Which Backend Architecture Should You Choose for 2026?',
    category: 'Technology',
    date: 'Sep 24, 2026',
    readTime: '7 min read',
    desc: 'An in-depth architectural comparison examining throughput benchmarks, concurrency models, developer velocity, ORM ecosystems, and long-term cloud maintainability for scaling SaaS and enterprise platforms.',
    author: 'Alex Vance · Lead Technical Architect',
    color: 'from-slate-900 via-[#202323] to-[#2C3030]',
  };

  const articles = [
    {
      id: 'cost-to-build-saas',
      title: 'How Much Does It Cost to Build a SaaS Platform in 2026?',
      category: 'SaaS',
      date: 'Sep 18, 2026',
      readTime: '6 min read',
      desc: 'A transparent breakdown of MVP budgeting, cloud hosting costs, authentication, Stripe billing architecture, and multi-tenant database infrastructure.',
    },
    {
      id: 'react-vs-nextjs',
      title: 'React vs Next.js: Understanding the Difference and When to Switch',
      category: 'Web Development',
      date: 'Sep 12, 2026',
      readTime: '5 min read',
      desc: 'Exploring Server Components, Turbopack performance, SEO crawling benefits, and hydration optimizations for commercial web applications.',
    },
    {
      id: 'scalable-crm-architecture',
      title: 'How to Build a Scalable Custom CRM for Enterprise Sales Teams',
      category: 'Business',
      date: 'Sep 05, 2026',
      readTime: '8 min read',
      desc: 'Architecting custom CRM pipelines with real-time WebSocket syncing, automated lead scoring, and tight ERP integration without bloated SaaS seat fees.',
    },
    {
      id: 'custom-vs-off-the-shelf',
      title: 'Custom Software vs Off-the-Shelf: An Executive Decision Guide',
      category: 'Digital Transformation',
      date: 'Aug 29, 2026',
      readTime: '6 min read',
      desc: 'When does it make financial sense to build bespoke proprietary software versus licensing rigid subscription platforms? An ROI analysis.',
    },
    {
      id: 'automate-operations',
      title: 'How Growing Businesses Can Automate Core Operations via APIs',
      category: 'Business',
      date: 'Aug 22, 2026',
      readTime: '7 min read',
      desc: 'Eliminating manual spreadsheet entry by synchronizing inventory, purchase orders, client invoices, and fulfillment telemetry across systems.',
    },
    {
      id: 'rest-api-best-practices',
      title: 'REST API Development Best Practices for High Concurrency',
      category: 'Technology',
      date: 'Aug 15, 2026',
      readTime: '9 min read',
      desc: 'Schema versioning, rate limiting, JWT token rotation, Redis response caching, and idempotency guarantees for mission-critical endpoints.',
    },
    {
      id: 'multivendor-ecommerce-architecture',
      title: 'Building Multi-Vendor eCommerce Platforms with Automated Payouts',
      category: 'eCommerce',
      date: 'Aug 08, 2026',
      readTime: '8 min read',
      desc: 'Implementing two-sided marketplaces with Stripe Connect split escrows, multi-warehouse catalog indexing, and vendor portal security.',
    },
    {
      id: 'flutter-vs-react-native',
      title: 'Flutter vs React Native: Choosing the Right Mobile Stack',
      category: 'Mobile',
      date: 'Aug 01, 2026',
      readTime: '6 min read',
      desc: 'Evaluating rendering performance, native device bridge access, code reusability, and developer talent availability for iOS and Android apps.',
    },
  ];

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub.trim()) {
      setEmailSubError('Email address is required');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailSub.trim())) {
      setEmailSubError('Please enter a valid corporate email address');
      return;
    }
    setEmailSubError('');
    setSubDone(true);
    setTimeout(() => {
      setEmailSub('');
      setSubDone(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        
        {/* Blog Hero */}
        <section className="bg-[#202323] text-white pt-36 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] hero-radial-glow pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#A0A4A6] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
              Flipcode Engineering &amp; Strategy Blog
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Insights, Ideas &amp; <span className="text-[#FF6B35]">Technology</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Deep dives, architectural benchmarks, and practical technology guides written by our software engineering teams.
            </p>
          </div>
        </section>

        {/* Featured Article Section */}
        <section className="bg-white py-14 lg:py-20 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="p-8 sm:p-12 rounded-3xl bg-[#202323] text-white relative overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B35]/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="max-w-3xl relative z-10 space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#FF6B35] text-white font-bold uppercase font-mono">
                    Featured Article
                  </span>
                  <span className="text-slate-400">{featuredArticle.date}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400">{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {featuredArticle.desc}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#A0A4A6] font-mono">
                    {featuredArticle.author}
                  </span>
                  <span className="text-xs font-bold text-[#FF6B35] inline-flex items-center gap-1 hover:underline cursor-pointer">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Categories & Articles Grid */}
        <section className="bg-[#F7F8F8] py-16 lg:py-24 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#FF6B35] text-white shadow-md shadow-[#FF6B35]/25'
                      : 'bg-white text-[#5A5D5C] hover:bg-[#E5E7E9] hover:text-[#202323] border border-[#E5E7E9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid (8 Articles) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="rounded-2xl bg-white border border-[#E5E7E9] p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#5A5D5C] mb-3.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F7F8F8] text-[#FF6B35] font-bold border border-[#E5E7E9]">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-[#202323] group-hover:text-[#FF6B35] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#6B7070] leading-relaxed">
                      {article.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E7E9] flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">{article.date}</span>
                    <span className="font-bold text-[#202323] group-hover:text-[#FF6B35] flex items-center gap-1 transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#202323] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-white/10">
              <div className="max-w-xl mx-auto space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B35] mx-auto mb-2">
                  <Mail className="w-6 h-6" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Get practical technology insights in your inbox.
                </h3>

                <p className="text-xs sm:text-sm text-slate-300">
                  No marketing fluff. Only real-world architectural case studies, performance benchmarks, and development guides.
                </p>

                {subDone ? (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Thank you for subscribing! Check your inbox soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} noValidate className="pt-2 flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        placeholder="Enter your corporate email..."
                        value={emailSub}
                        onChange={(e) => {
                          setEmailSub(e.target.value);
                          if (emailSubError) setEmailSubError('');
                        }}
                        className={`flex-1 px-4 py-3 rounded-xl bg-[#2C3030] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          emailSubError
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/10 focus:border-[#FF6B35]'
                        }`}
                      />
                      <button
                        type="submit"
                        className="btn-primary-orange px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer"
                      >
                        Subscribe
                      </button>
                    </div>
                    {emailSubError && (
                      <p className="text-xs text-red-400 text-left pl-1 font-medium">{emailSubError}</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
