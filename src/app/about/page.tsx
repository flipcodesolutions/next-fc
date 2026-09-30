import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import {
  Target,
  Eye,
  CheckCircle2,
  Lightbulb,
  Handshake,
  Users2,
  Heart,
  Rocket,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Quote,
  Calendar,
  Layers,
} from 'lucide-react';
import teamData from '@/data/team.json';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About Us | Engineering Excellence & Culture — Flipcode Solutions',
  description:
    'Learn about Flipcode Solutions Private Limited, an engineering-driven digital product company delivering mission-critical web, mobile, cloud, and enterprise software worldwide.',
  keywords: [
    'About Flipcode Solutions',
    'software engineering company',
    'IT company India',
    'enterprise software agency',
    'digital transformation partner',
    'agile development team',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Flipcode Solutions Private Limited | Engineering Excellence',
    description:
      'Discover our engineering culture, mission, vision, milestone timeline, and core values that drive enterprise software success.',
    url: 'https://flipcodesolutions.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Flipcode Solutions Private Limited',
    description:
      'Discover our engineering culture, team values, and enterprise software capabilities.',
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Excellence',
      desc: 'We strive for excellence in everything — from code quality and architecture to client communication.',
      icon: CheckCircle2,
      color: '#FF6B35',
      bgColor: 'rgba(255, 107, 53, 0.08)',
    },
    {
      title: 'Innovation',
      desc: 'We explore new ideas and modern technologies to deliver cutting-edge solutions for real challenges.',
      icon: Lightbulb,
      color: '#2563EB',
      bgColor: 'rgba(37, 99, 235, 0.08)',
    },
    {
      title: 'Integrity',
      desc: 'Transparency, honesty, and uncompromising ethical standards guide every customer engagement.',
      icon: Handshake,
      color: '#16A34A',
      bgColor: 'rgba(22, 163, 74, 0.08)',
    },
    {
      title: 'Teamwork',
      desc: 'The best results come from passionate engineers, designers, and project managers collaborating as one.',
      icon: Users2,
      color: '#9333EA',
      bgColor: 'rgba(147, 51, 234, 0.08)',
    },
    {
      title: 'Client Focus',
      desc: 'Deeply understanding and exceeding client needs is our highest operational priority.',
      icon: Heart,
      color: '#E11D48',
      bgColor: 'rgba(225, 29, 72, 0.08)',
    },
    {
      title: 'Growth Mindset',
      desc: 'We embrace complex challenges, learn continuously from every project, and scale together.',
      icon: Rocket,
      color: '#D97706',
      bgColor: 'rgba(217, 119, 6, 0.08)',
    },
  ];

  const timelineMilestones = [
    {
      year: 'Sep 2023',
      title: 'FlipCode Solutions Founded',
      desc: 'Officially established in Surendranagar, Gujarat, with the goal of delivering innovative software, custom mobile apps, and digital solutions to businesses worldwide.',
      align: 'left',
    },
    {
      year: '2024',
      title: 'Expanding Our Services',
      desc: 'Broadened expertise across modern web applications, Flutter & React Native mobile apps, custom CRM portals, eCommerce platforms, and cloud DevOps for diverse industries.',
      align: 'right',
    },
    {
      year: '2025',
      title: 'Growing With Our Clients',
      desc: 'Partnered with startups, SMEs, and enterprises across India, Nigeria, Australia, the US, and UK — delivering 70+ scalable, secure, and high-performing software systems.',
      align: 'left',
    },
    {
      year: 'Today & Beyond',
      title: 'Your Trusted Technology Partner',
      desc: 'Helping businesses globally accelerate digital growth through innovative technology, dedicated developer pods, reliable 24/7 support, and long-term partnerships.',
      align: 'right',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Flipcode Solutions Private Limited',
            alternateName: 'Flipcode Solutions',
            url: 'https://flipcodesolutions.com',
            logo: 'https://flipcodesolutions.com/images/logo.webp',
            description:
              'Enterprise software engineering company delivering scalable web applications, mobile apps (Flutter, React Native), cloud infrastructure, and custom CRM systems.',
            foundingDate: '2023-09',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Nr. Panama Sales, Dalmill Road',
              addressLocality: 'Surendranagar',
              addressRegion: 'Gujarat',
              postalCode: '363001',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-9979404044',
              contactType: 'customer service',
              email: 'info@flipcodesolutions.com',
              areaServed: ['IN', 'US', 'GB', 'AE', 'AU', 'CA', 'EU'],
              availableLanguage: ['English', 'Hindi', 'Gujarati'],
            },
            sameAs: [
              'https://www.linkedin.com/company/flipcode-solutions-private-limited/',
              'https://facebook.com/flipcodesolutions',
              'https://instagram.com/flipcodesolutions',
            ],
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'About Us', url: 'https://flipcodesolutions.com/about' },
        ]}
      />

      <SiteHeader />

      <main className="flex-1" id="mainContent">
        {/* ==========================================================================
            1. PAGE HERO BANNER
            ========================================================================== */}
        <section
          className="bg-[#202323] text-white pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden"
          aria-labelledby="pageHeroTitle"
        >
          {/* Subtle Grid & Radial Glows */}
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[550px] h-[550px] hero-radial-glow pointer-events-none"></div>
          <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-radial from-[#FF6B35]/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-[#A0A4A6] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">›</span>
              <span className="text-[#FF6B35]">About</span>
            </nav>

            {/* Eyebrow Badge */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#CBD5E1] tracking-wide shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
                </span>
                <span>FlipCode Solutions Pvt. Ltd.</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              id="pageHeroTitle"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight"
            >
              Crafting digital excellence <br className="hidden sm:inline" />
              <span className="text-[#FF6B35]">since September 2023</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Founded in September 2023 in Surendranagar, Gujarat — we help businesses embrace digital transformation through innovative, reliable, and scalable technology solutions.
            </p>

            {/* Hero CTA Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="#ab-story"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white text-sm font-semibold transition-all duration-200 hover:border-[#FF6B35]/50 group"
              >
                <span>Discover Our Story</span>
                <ArrowDown className="w-4 h-4 text-[#FF6B35] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. COMPANY STORY & IDENTITY
            ========================================================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E5E7E9]" id="ab-story">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Left Column: Story Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                  About FlipCode
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323] tracking-tight leading-snug">
                  Who We Are &amp; <span className="text-[#FF6B35]">How We Began</span>
                </h2>

                <div className="space-y-4 text-base text-[#303333] leading-relaxed">
                  <p>
                    <strong>FlipCode Solutions Private Limited</strong> was founded in <strong>September 2023</strong> in <strong>Surendranagar, Gujarat</strong>, with a clear vision to help businesses embrace digital transformation through cutting-edge technology solutions.
                  </p>
                  <p className="text-[#5A5D5C]">
                    From day one, our mission has been simple: deliver reliable, scalable, and high-quality custom software. We build custom web development, cross-platform mobile apps (iOS &amp; Android), eCommerce platforms, CRM &amp; ERP portals, and cloud infrastructure for startups, SMEs, and global enterprises.
                  </p>
                </div>

                {/* 4 Stat Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#E5E7E9]">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6B35] leading-none">
                      Sep 2023
                    </div>
                    <div className="text-xs sm:text-sm text-[#6B7070] font-semibold mt-1.5">
                      Founded in Gujarat
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#202323] leading-none">
                      70+
                    </div>
                    <div className="text-xs sm:text-sm text-[#6B7070] font-semibold mt-1.5">
                      Projects Delivered
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] leading-none">
                      70+
                    </div>
                    <div className="text-xs sm:text-sm text-[#6B7070] font-semibold mt-1.5">
                      Happy Customers
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#16A34A] leading-none">
                      6+
                    </div>
                    <div className="text-xs sm:text-sm text-[#6B7070] font-semibold mt-1.5">
                      Countries Served
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dark Leadership Card */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl bg-gradient-to-br from-[#202323] to-[#2C3030] p-8 sm:p-12 text-white shadow-xl overflow-hidden border border-white/10">
                  {/* Subtle radial orange glow effect in bottom-right corner */}
                  <div className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full bg-radial from-[#FF6B35]/25 to-transparent pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="inline-block bg-[#FF6B35] text-white font-extrabold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-6 shadow-sm">
                      Since September 2023
                    </div>

                    <Quote className="w-12 h-12 text-[#FF6B35]/80 mb-6" />

                    <blockquote className="text-lg sm:text-xl font-semibold leading-relaxed text-slate-100 mb-8">
                      &ldquo;Secure, user-friendly, and future-ready digital products — crafted by a team that combines technical expertise with a relentless focus on solving real business problems.&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center font-extrabold text-white text-base shadow-md">
                        FS
                      </div>
                      <div>
                        <div className="font-bold text-base text-white">FlipCode Solutions Leadership</div>
                        <div className="text-xs text-slate-400">Surendranagar, Gujarat, India</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. MEET OUR TEAM (Leadership & Engineering)
            ========================================================================== */}
        <section className="bg-[#F7F8F8] py-20 lg:py-28 border-b border-[#E5E7E9]" id="ab-team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                Meet Our Team
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323]">
                The People Behind <span className="text-[#FF6B35]">Our Success</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#6B7070]">
                Passionate experts united by a shared commitment to quality, scalable architecture, and continuous innovation.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.map((member, idx) => (
                <article
                  key={idx}
                  className="card-lift cursor-pointer rounded-2xl bg-white border border-[#E5E7E9] overflow-hidden group flex flex-col shadow-xs"
                >
                  {/* Photo & LinkedIn Link */}
                  <div className="relative aspect-square w-full bg-[#202323] overflow-hidden">
                    <Image
                      src={member.avatar}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    {/* Hover Social Overlay */}
                    <div className="absolute inset-0 bg-[#202323]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-[#FF6B35] text-white flex items-center justify-center shadow-lg hover:bg-white hover:text-[#FF6B35] transition-all transform group-hover:translate-y-0 translate-y-2 cursor-pointer"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#202323] group-hover:text-[#FF6B35] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider mt-0.5 mb-3">
                        {member.role}
                      </p>
                      <p className="text-xs text-[#6B7070] leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ==========================================================================
            4. PURPOSE & PRINCIPLES (Mission, Vision & Core Values)
            ========================================================================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E5E7E9]" id="ab-identity">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                Purpose &amp; Principles
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323]">
                Our Mission, Vision &amp; <span className="text-[#FF6B35]">Core Values</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#6B7070]">
                We don&apos;t just build software — we build partnerships that drive lasting digital transformation.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Mission Card */}
              <div className="card-lift cursor-pointer p-8 sm:p-10 rounded-2xl bg-[#F7F8F8] border border-[#E5E7E9] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#202323] mb-3">
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base text-[#303333] leading-relaxed">
                    To empower businesses through innovative technology solutions that drive growth, enhance efficiency, and create sustainable competitive advantages in the digital marketplace.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="card-lift cursor-pointer p-8 sm:p-10 rounded-2xl bg-[#F7F8F8] border border-[#E5E7E9] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#202323] mb-3">
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base text-[#303333] leading-relaxed">
                    To be the leading provider of transformative IT solutions that shape the future of businesses worldwide, setting new standards for innovation, quality, and client satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="card-lift cursor-pointer rounded-2xl bg-[#F8FAFC] border border-[#E5E7E9] p-7 flex flex-col justify-between hover:border-[#FF6B35]/40 transition-colors"
                  >
                    <div>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: val.bgColor, color: val.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold font-heading text-[#202323] mb-2">
                        {val.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B7070] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ==========================================================================
            5. MILESTONES & TIMELINE ROADMAP
            ========================================================================== */}
        <section className="bg-[#F7F8F8] py-20 lg:py-28 border-b border-[#E5E7E9]" id="ab-journey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                Our Journey
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323]">
                Building Trust, <span className="text-[#FF6B35]">One Milestone</span> at a Time
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#6B7070]">
                A journey of dedication, technical excellence, and lasting partnerships.
              </p>
            </div>

            {/* Timeline Roadmap (Alternating Left & Right Cards) */}
            <div className="relative max-w-4xl mx-auto py-6">
              {/* Vertical Spine Line */}
              <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF6B35] via-[#202323]/25 to-[#FF6B35] -translate-x-1/2"></div>

              <div className="space-y-8 md:space-y-12">
                {timelineMilestones.map((item, idx) => {
                  const isLeft = item.align === 'left';
                  return (
                    <div
                      key={idx}
                      className="relative flex flex-col md:grid md:grid-cols-2 md:gap-14 items-center"
                    >
                      {/* Left Column (Card when isLeft, Empty on desktop when !isLeft) */}
                      <div className={`w-full ${isLeft ? 'block pl-14 md:pl-0' : 'hidden md:block'}`}>
                        {isLeft && (
                          <div className="card-lift cursor-pointer relative bg-white border border-[#E5E7E9] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#FF6B35]/40 transition-all duration-300">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-extrabold text-xs mb-3 font-mono">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{item.year}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold font-heading text-[#202323] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#5A5D5C] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Center Node Dot */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center pointer-events-none">
                        <div className="w-8 h-8 rounded-full bg-white border-4 border-[#FF6B35] shadow-md flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                        </div>
                      </div>

                      {/* Right Column (Card when !isLeft, Empty on desktop when isLeft) */}
                      <div className={`w-full ${!isLeft ? 'block pl-14 md:pl-0' : 'hidden md:block'}`}>
                        {!isLeft && (
                          <div className="card-lift cursor-pointer relative bg-white border border-[#E5E7E9] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#FF6B35]/40 transition-all duration-300">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-extrabold text-xs mb-3 font-mono">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{item.year}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold font-heading text-[#202323] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#5A5D5C] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================================
            6. CTA BANNER
            ========================================================================== */}
        <section className="bg-[#202323] text-white py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] cta-radial-glow pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
              Engineering Partnership
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Ready to Partner With an Engineering Team You Can Trust?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss your product roadmap, evaluate technical feasibility, and prepare a tailored execution plan.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary-orange px-8 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-md"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-work"
                className="btn-outline-white px-8 py-4 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2.5 w-full sm:w-auto"
              >
                <Layers className="w-4 h-4" />
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
