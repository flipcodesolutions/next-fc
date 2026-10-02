'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import projectsData from '@/data/projects.json';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import {
  ArrowRight,
  CheckCircle2,
  X,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  categoryLabel?: string;
  industry?: string;
  shortDesc: string;
  overview?: string;
  fullOverview?: string;
  challenge?: string;
  requirements?: string[];
  solution?: string;
  keyFeatures?: string[];
  techs?: string[];
  process?: string;
  results?: string[];
  impact?: string;
  timeline?: string;
  gradient?: string;
}

type CategoryFilter = 'ALL' | 'WEB' | 'MOBILE';

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterOptions: { label: CategoryFilter; icon: React.ComponentType<{ className?: string }> }[] = [
    { label: 'ALL', icon: Layers },
    { label: 'WEB', icon: Globe },
    { label: 'MOBILE', icon: Smartphone },
  ];

  const projects: ProjectItem[] = projectsData.map((p) => ({
    id: p.id,
    name: p.name || p.title || 'Enterprise Project',
    category: (p.category || 'WEB').toUpperCase(),
    categoryLabel: p.categoryLabel || (p.category === 'MOBILE' ? 'Mobile App' : 'Web Platform'),
    industry: p.industry || 'Enterprise Software',
    shortDesc: p.shortDesc || p.summary || '',
    overview: p.overview || p.fullOverview || p.summary || '',
    fullOverview: p.fullOverview || p.overview || p.summary || '',
    challenge: p.challenge || 'Scaling performance under high concurrent user load.',
    requirements: p.requirements || [],
    solution: p.solution || 'Engineered modern scalable cloud architecture.',
    keyFeatures: p.keyFeatures || [],
    techs: p.techs || [],
    process: p.process || 'Discovery → UI/UX → Sprint Engineering → QA → Production Rollout',
    results: p.results || [p.impact || 'Delivered with 99.9% uptime SLA'],
    impact: p.impact || '',
    timeline: p.timeline || 'Sprint Delivery',
    gradient: p.gradient || 'from-slate-900 via-[#202323] to-[#2C3030]',
  }));

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    const projCat = (proj.category || '').toUpperCase();
    return projCat === activeFilter;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'Our Work', url: 'https://flipcodesolutions.com/our-work' },
        ]}
      />
      <SiteHeader />

      <main className="flex-1">
        
        {/* Our Work Hero */}
        <section
          className="bg-[#202323] text-white pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden"
          aria-labelledby="ourWorkHeroTitle"
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
              <span className="text-[#FF6B35]">Our Work</span>
            </nav>

            {/* Eyebrow Badge */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#CBD5E1] tracking-wide shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
                </span>
                <span>Portfolio &amp; Case Studies</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              id="ourWorkHeroTitle"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight"
            >
              Turning Ideas Into <br className="hidden sm:inline" />
              <span className="text-[#FF6B35]">Digital Products</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Explore our production-grade work across responsive web platforms, iOS &amp; Android mobile apps, and custom enterprise digital portals.
            </p>
          </div>
        </section>

        {/* Filter Tabs & Projects Grid */}
        <section className="bg-white py-16 lg:py-24 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter Bar (ALL | WEB | MOBILE) */}
            <div className="flex flex-col items-center justify-center mb-14 space-y-3">
              <div className="inline-flex p-1.5 bg-[#F7F8F8] border border-[#E5E7E9] rounded-2xl shadow-xs">
                {filterOptions.map(({ label, icon: Icon }) => {
                  const isActive = activeFilter === label;
                  return (
                    <button
                      key={label}
                      onClick={() => setActiveFilter(label)}
                      className={`relative px-7 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? 'bg-[#FF6B35] text-white shadow-md shadow-[#FF6B35]/25 scale-100'
                          : 'text-[#5A5D5C] hover:text-[#202323] hover:bg-white/80'
                      }`}
                      aria-pressed={isActive}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#73787A]'}`} />
                      <span>{label}</span>
                      {isActive && (
                        <span className="ml-1.5 px-2 py-0.5 text-[10px] rounded-full bg-white/20 text-white font-mono">
                          {label === 'ALL'
                            ? projects.length
                            : projects.filter((p) => p.category === label).length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Status Hint */}
              <p className="text-xs text-[#73787A]">
                Showing <span className="font-bold text-[#202323]">{filteredProjects.length}</span>{' '}
                {activeFilter === 'ALL'
                  ? 'Total Projects'
                  : activeFilter === 'WEB'
                  ? 'Web Projects'
                  : 'Mobile Projects'}
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="cursor-pointer rounded-2xl bg-white border border-[#E5E7E9] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group hover:border-[#FF6B35]/40"
                >
                  <div>
                    {/* Visual Card Top */}
                    <div className={`h-52 bg-gradient-to-br ${proj.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                      <div className="flex items-center justify-between relative z-10">
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-white border border-white/15">
                          {proj.industry}
                        </span>
                        <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                          proj.category === 'MOBILE'
                            ? 'bg-[#FF6B35]/20 text-[#FF6B35] border-[#FF6B35]/40'
                            : 'bg-white/15 text-white border-white/20'
                        }`}>
                          {proj.categoryLabel || proj.category}
                        </span>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
                          <span>{proj.results?.[0] || proj.impact}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-xl font-bold font-heading text-[#202323] group-hover:text-[#FF6B35] transition-colors leading-snug">
                        {proj.name}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-[#6B7070] leading-relaxed line-clamp-3">
                        {proj.shortDesc}
                      </p>

                      {proj.techs && proj.techs.length > 0 && (
                        <div className="mt-6 pt-5 border-t border-[#E5E7E9] flex flex-wrap gap-1.5">
                          {proj.techs.slice(0, 5).map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F7F8F8] text-[#5A5D5C] border border-[#E5E7E9]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-7 pb-6 pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(proj);
                      }}
                      className="w-full py-2.5 rounded-xl border border-[#E5E7E9] text-xs font-bold text-[#202323] group-hover:bg-[#202323] group-hover:text-white group-hover:border-[#202323] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF6B35]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Detailed Case Study Interactive Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#202323]/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
            <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E5E7E9] overflow-hidden my-8">
              
              {/* Modal Header */}
              <div className="p-6 sm:p-8 bg-[#202323] text-white flex items-start justify-between border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] uppercase font-bold mb-1.5">
                    <span>{selectedProject.industry}</span>
                    <span>·</span>
                    <span className="px-2 py-0.5 rounded bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/40">
                      {selectedProject.category}
                    </span>
                    <span>·</span>
                    <span>{selectedProject.categoryLabel}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    {selectedProject.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto">
                
                {/* 1. Project Overview */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-2">
                    01. Project Overview
                  </h3>
                  <p className="text-sm sm:text-base text-[#303333] leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* 2. Client Challenge */}
                <div className="p-5 rounded-2xl bg-[#F7F8F8] border border-[#E5E7E9]">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF6B35] font-heading mb-2">
                    02. Client Challenge &amp; Bottlenecks
                  </h3>
                  <p className="text-sm text-[#303333] leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                {/* 3. Business Requirements */}
                {selectedProject.requirements && selectedProject.requirements.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-3">
                      03. Key Business Requirements
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.requirements.map((req: string, rIdx: number) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-sm text-[#303333]">
                          <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 4. Our Technical Solution */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-2">
                    04. Our Technical Architecture &amp; Solution
                  </h3>
                  <p className="text-sm text-[#303333] leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* 5. Key Features */}
                {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-3">
                      05. Core Delivered Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.keyFeatures.map((feat: string, fIdx: number) => (
                        <div key={fIdx} className="p-3.5 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-semibold text-[#202323] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. Technology Stack */}
                {selectedProject.techs && selectedProject.techs.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-3">
                      06. Technology Stack &amp; Frameworks
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((t: string, tIdx: number) => (
                        <span key={tIdx} className="px-3 py-1.5 rounded-lg bg-[#202323] text-white text-xs font-mono font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Development Process */}
                {selectedProject.process && (
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-2">
                      07. Execution Process
                    </h3>
                    <div className="p-4 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-mono text-[#303333]">
                      {selectedProject.process}
                    </div>
                  </div>
                )}

                {/* 8. Results & Impact */}
                {selectedProject.results && selectedProject.results.length > 0 && (
                  <div className="p-6 rounded-2xl bg-[#202323] text-white">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF6B35] font-heading mb-3">
                      08. Measured Results &amp; Commercial Impact
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedProject.results.map((res: string, resIdx: number) => (
                        <div key={resIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 9. Modal Bottom CTA */}
                <div className="pt-4 border-t border-[#E5E7E9] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#5A5D5C]">
                    Ready to engineer a solution with similar performance?
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="btn-primary-orange px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2"
                  >
                    <span>Request Similar Project Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Final CTA */}
        <section className="bg-[#202323] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white">
              Ready to Turn Your Idea Into a <span className="text-[#FF6B35]">Production-Ready Reality?</span>
            </h2>
            <p className="text-base text-slate-300 max-w-xl mx-auto">
              Schedule a technical discovery session with Flipcode Solutions to outline your architecture and sprint roadmap.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary-orange px-8 py-4 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-xl shadow-[#FF6B35]/25"
              >
                <span>Start a Project</span>
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
