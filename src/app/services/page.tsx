import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import servicesData from '@/data/services.json';
import {
  Code2,
  Smartphone,
  Layers,
  Server,
  ShoppingBag,
  Palette,
  Users2,
  CloudCog,
  Cpu,
  Network,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Smartphone,
  Layers,
  Server,
  ShoppingBag,
  Palette,
  Users2,
  CloudCog,
  Cpu,
  Network,
  FileText,
  TrendingUp,
};

export const metadata: Metadata = {
  title: 'Enterprise Software & IT Engineering Services | Flipcode Solutions',
  description:
    'Comprehensive software engineering services: Custom Web Application Development, Native & Cross-Platform Mobile Apps (Flutter, React Native), SaaS Platforms, Cloud DevOps, AI & Automation, and API Architectures.',
  keywords: [
    'Software Development Services',
    'Custom Web Application Engineering',
    'Mobile App Development iOS Android',
    'SaaS Engineering Services',
    'Cloud Architecture DevOps AWS',
    'REST API Microservices Node.js',
    'Custom CRM ERP Development',
    'AI Workflow Automation',
    'Headless CMS eCommerce',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Enterprise IT & Software Engineering Services | Flipcode Solutions',
    description:
      'Explore our full suite of 12 digital engineering capabilities: Web, Mobile, Cloud, SaaS, APIs, AI Automation, and Custom Enterprise Software.',
    url: 'https://flipcodesolutions.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development & IT Engineering Services | Flipcode Solutions',
    description:
      'Explore full-stack web, mobile, SaaS, cloud architecture, and AI services delivered by Flipcode Solutions.',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'Services', url: 'https://flipcodesolutions.com/services' },
        ]}
      />
      <SiteHeader />

      <main className="flex-1">
        
        {/* Services Hero */}
        <section
          className="bg-[#202323] text-white pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden"
          aria-labelledby="servicesHeroTitle"
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
              <span className="text-[#FF6B35]">Services</span>
            </nav>

            {/* Eyebrow Badge */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#CBD5E1] tracking-wide shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
                </span>
                <span>Full-Stack Engineering Capabilities</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              id="servicesHeroTitle"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight"
            >
              Technology Services Built <br className="hidden sm:inline" />
              <span className="text-[#FF6B35]">Around Your Goals</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              From high-traffic web applications and mobile apps to multi-tenant SaaS platforms, cloud DevOps, and AI workflow integrations, we engineer solutions that scale.
            </p>

            {/* Quick stats pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-300">
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15">12 Specialized Disciplines</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15">100% Client IP Ownership</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15">99.9% Production SLA</span>
            </div>
          </div>
        </section>

        {/* Detailed Service Categories */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {servicesData.map((service, idx) => {
              const Icon = (service.iconName && iconMap[service.iconName]) || Code2;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-3xl border border-[#E5E7E9] hover:border-[#FF6B35]/40 transition-all ${
                    isEven ? 'bg-[#F7F8F8]' : 'bg-white shadow-sm'
                  }`}
                >
                  {/* Left column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7E9] flex items-center justify-center text-[#FF6B35] shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35]">
                        {service.badge || 'Engineering'}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323] leading-snug">
                      {service.title}
                    </h2>

                    <p className="text-sm text-[#303333] leading-relaxed">
                      {service.description || service.shortDesc}
                    </p>

                    {/* Tech tags */}
                    {service.techStack && (
                      <div className="pt-2 flex flex-wrap gap-2">
                        {service.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn-primary-orange px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href="/contact"
                        className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#303333] hover:text-[#FF6B35] bg-white border border-[#E5E7E9] hover:border-[#FF6B35]/40 transition-colors"
                      >
                        <span>Request Scope</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Capabilities & Deliverables list (6 cols) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="card-lift cursor-pointer p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E7E9] shadow-sm space-y-3.5 hover:border-[#FF6B35]/40 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A5D5C] font-heading">
                          Core Deliverables &amp; Capabilities
                        </h3>
                        {service.metrics && (
                          <span className="text-[11px] font-bold text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded-full">
                            {service.metrics}
                          </span>
                        )}
                      </div>

                      <ul className="space-y-3">
                        {(service.features || service.deliverables || []).slice(0, 6).map((cap, cIdx) => (
                          <li key={cIdx} className="flex items-center gap-3 text-sm text-[#303333]">
                            <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                            <span className="font-medium">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#202323] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Have a technical challenge? <br />
              <span className="text-[#FF6B35]">Let&apos;s discuss it.</span>
            </h2>
            <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Our lead software architects will conduct a free technical scoping session to outline your architecture, technology stack, and sprint roadmap.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary-orange px-8 py-4 rounded-xl text-sm font-bold inline-flex items-center gap-2.5 shadow-xl shadow-[#FF6B35]/25"
              >
                <span>Schedule an Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
