'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenCaseStudy?: (title: string) => void;
}

export default function CaseStudiesSection({ onOpenCaseStudy }: CaseStudiesSectionProps) {
  const caseStudies = [
    {
      id: 'case-1',
      industry: 'Logistics & Supply Chain',
      title: 'Global Fleet Telematics & Real-Time Cargo Tracking Platform',
      description:
        'Architected a high-concurrency event telemetry gateway handling 50,000+ connected IoT vehicle sensors with live route optimization, automated dispatch, and sub-second delay alerts.',
      tags: ['Next.js', 'Node.js', 'MySQL 8.0', 'Redis', 'WebSockets', 'AWS IoT'],
      stats: '42% Efficiency Boost · 1.2M Daily Telemetry Events',
      imageGradient: 'from-slate-900 via-slate-800 to-indigo-950',
      accentColor: '#FF6600',
    },
    {
      id: 'case-2',
      industry: 'FinTech & B2B Billing',
      title: 'Multi-Tenant Subscription & Revenue Operations Engine',
      description:
        'Engineered an enterprise-grade billing platform managing recurring billing lifecycles, automated tax compliance across 30+ countries, and dynamic dunning recovery.',
      tags: ['React', 'TypeScript', 'Express', 'Stripe Connect', 'PostgreSQL', 'Docker'],
      stats: '$35M+ Processed Annually · 99.99% Billing Accuracy',
      imageGradient: 'from-slate-900 via-slate-800 to-[#202426]',
      accentColor: '#FF6600',
    },
    {
      id: 'case-3',
      industry: 'Healthcare & Telehealth',
      title: 'HIPAA-Compliant Patient Care Portal & Diagnostic Scheduling',
      description:
        'Designed a secure digital consultation platform linking 120+ clinical practices, real-time electronic health records (EHR) sync, automated video appointments, and prescription delivery.',
      tags: ['Next.js', 'Flutter Mobile', 'Node.js', 'WebRTC', 'MySQL', 'SOC2 / HIPAA'],
      stats: '180k Active Patients · 4.9/5 App Store Rating',
      imageGradient: 'from-slate-900 via-slate-800 to-emerald-950',
      accentColor: '#FF6600',
    },
  ];

  return (
    <section id="case-studies" className="bg-[#F7F8F9] py-24 lg:py-32 border-b border-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C] uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
              Proven Client Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202426] tracking-tight leading-tight">
              Featured <span className="text-[#FF6600]">Case Studies</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#73787A]">
              Explore how we help modern enterprises solve high-stakes software engineering challenges.
            </p>
          </div>

          <button
            onClick={() => onOpenCaseStudy && onOpenCaseStudy('All Case Studies')}
            className="self-start md:self-auto text-sm font-bold text-[#202426] hover:text-[#FF6600] inline-flex items-center gap-2 transition-colors pb-1 border-b-2 border-[#202426] hover:border-[#FF6600]"
          >
            <span>View All Client Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              onClick={() => onOpenCaseStudy && onOpenCaseStudy(cs.title)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E5E7E9] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className={`h-52 bg-gradient-to-br ${cs.imageGradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  {/* Subtle decorative grid */}
                  <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-white">
                      {cs.industry}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#FF6600] text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-[11px] font-mono text-[#FF6600] font-semibold uppercase tracking-wider">
                      Impact Metrics
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {cs.stats}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold font-heading text-[#202426] group-hover:text-[#FF6600] transition-colors leading-snug">
                    {cs.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#3F4446] leading-relaxed">
                    {cs.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-6 pt-5 border-t border-[#E5E7E9] flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F7F8F9] text-[#5A5D5C] border border-[#E5E7E9]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-7 pb-6 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenCaseStudy) {
                      onOpenCaseStudy(cs.title);
                    }
                  }}
                  className="w-full py-2.5 rounded-lg border border-[#E5E7E9] text-xs font-bold text-[#202426] group-hover:bg-[#202426] group-hover:text-white group-hover:border-[#202426] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Architecture &amp; Solution</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6600]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
