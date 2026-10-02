'use client';

import React, { useState, useMemo } from 'react';
import TechIcon from './TechIcons';
import technologiesData from '@/data/technologies.json';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  GitBranch, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

interface TechnologySectionProps {
  onOpenConsult?: () => void;
}

export default function TechnologySection({ onOpenConsult }: TechnologySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = useMemo(() => [
    { id: 'all', label: 'All Technologies', count: technologiesData.length },
    { id: 'frontend', label: 'Frontend & UI', count: technologiesData.filter(t => t.category === 'frontend').length },
    { id: 'backend', label: 'Backend & APIs', count: technologiesData.filter(t => t.category === 'backend').length },
    { id: 'mobile', label: 'Mobile Apps', count: technologiesData.filter(t => t.category === 'mobile').length },
    { id: 'cloud', label: 'Cloud & DevOps', count: technologiesData.filter(t => t.category === 'cloud').length },
    { id: 'database', label: 'Databases & Cache', count: technologiesData.filter(t => t.category === 'database').length },
    { id: 'ai', label: 'AI & Data', count: technologiesData.filter(t => t.category === 'ai').length },
    { id: 'cms', label: 'CMS & Web', count: technologiesData.filter(t => t.category === 'cms').length },
  ], []);

  const filteredTechs = useMemo(() => {
    if (activeCategory === 'all') return technologiesData;
    return technologiesData.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-[#1D2121] text-white py-24 lg:py-32 relative overflow-hidden" id="technologies">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 bg-cross-pattern-dark pointer-events-none opacity-30"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FF6600]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#FF8A3D]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse"></span>
            Battle-Tested Engineering Ecosystem
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            IT Technologies &amp; Frameworks <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              We Engineer With
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300/80 leading-relaxed font-normal">
            From reactive high-fidelity frontends and distributed microservices to automated cloud orchestration, AI workflows, and resilient database architectures.
          </p>
        </ScrollReveal>

        {/* Engineering Architecture Quality Bar */}
        <ScrollReveal variant="fadeUp" delay={0.1} className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-[#FF6600]/15 border border-[#FF6600]/30 flex items-center justify-center text-[#FF6600] shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Sub-100ms Latency</div>
                <div className="text-[11px] text-slate-400">High-Throughput APIs</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-[#FF6600]/15 border border-[#FF6600]/30 flex items-center justify-center text-[#FF6600] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Strict Type Safety</div>
                <div className="text-[11px] text-slate-400">End-to-End Contracts</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-[#FF6600]/15 border border-[#FF6600]/30 flex items-center justify-center text-[#FF6600] shrink-0">
                <GitBranch className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Automated CI/CD</div>
                <div className="text-[11px] text-slate-400">Zero-Downtime Deploys</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-[#FF6600]/15 border border-[#FF6600]/30 flex items-center justify-center text-[#FF6600] shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Cloud Native</div>
                <div className="text-[11px] text-slate-400">Elastic Auto-Scaling</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#282C2C]/90 border border-white/10 backdrop-blur-md shadow-lg max-w-full">
            {categories.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6600] to-[#FF7B1A] text-white shadow-md shadow-[#FF6600]/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono transition-colors ${
                      isActive
                        ? 'bg-black/25 text-white'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Technology Grid */}
        <StaggerContainer
          key={activeCategory}
          staggerDelay={30}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {filteredTechs.map((tech, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-gradient-to-b from-[#292D2D]/90 to-[#222525]/90 border border-white/[0.08] hover:border-[#FF6600]/50 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF6600]/10 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Illumination on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Card Top: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center p-2.5 group-hover:bg-white/[0.1] group-hover:border-[#FF6600]/40 group-hover:scale-105 transition-all duration-300 shadow-inner">
                    <TechIcon name={tech.name} className="w-7 h-7" />
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-[10px] font-mono font-semibold text-slate-300 group-hover:text-[#FF6600] group-hover:border-[#FF6600]/30 transition-colors">
                    {tech.badge}
                  </span>
                </div>

                {/* Card Content: Title & Specialty */}
                <h3 className="text-base font-bold font-heading text-white group-hover:text-[#FF6600] transition-colors flex items-center gap-1.5 mb-1">
                  {tech.name}
                </h3>
                
                <p className="text-xs font-medium text-slate-400 mb-3.5">
                  {tech.sub}
                </p>

                {/* Technical Capability Tags */}
                {tech.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {tech.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-slate-300/80 group-hover:border-white/15 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Subtle Micro-Interaction */}
              <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {tech.categoryLabel || tech.category}
                </span>
                <span className="flex items-center gap-1 text-[#FF6600] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-1 group-hover:translate-x-0">
                  Enterprise Ready
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </StaggerContainer>

        {/* Bottom Continuous Ecosystem Marquee Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 overflow-hidden relative">
          <div className="text-center text-xs font-mono text-slate-400 uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            Continuous Integration &amp; Modern Framework Ecosystem
          </div>

          <div className="flex gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex shrink-0 gap-6 animate-marquee items-center py-2">
              {technologiesData.map((t, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] whitespace-nowrap hover:border-[#FF6600]/40 hover:bg-white/[0.08] transition-all group cursor-pointer"
                >
                  <TechIcon name={t.name} className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {t.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400 group-hover:text-[#FF6600] transition-colors">
                    {t.badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex shrink-0 gap-6 animate-marquee items-center py-2" aria-hidden="true">
              {technologiesData.map((t, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] whitespace-nowrap hover:border-[#FF6600]/40 hover:bg-white/[0.08] transition-all group cursor-pointer"
                >
                  <TechIcon name={t.name} className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {t.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400 group-hover:text-[#FF6600] transition-colors">
                    {t.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stack Consultation CTA Bar */}
        <ScrollReveal variant="fadeUp" delay={0.2} className="mt-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#292D2D] via-[#242727] to-[#292D2D] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <Layers className="w-4 h-4 text-[#FF6600]" />
                Planning an architecture modernization or custom tech stack?
              </div>
              <p className="text-xs text-slate-400">
                Our principal software architects will review your throughput requirements, tech debt, and scalability roadmap.
              </p>
            </div>

            <button
              onClick={() => {
                if (onOpenConsult) {
                  onOpenConsult();
                } else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6600] to-[#FF7B1A] text-white text-xs font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-[#FF6600]/30 transition-all shrink-0 cursor-pointer group"
            >
              <span>Request Tech Evaluation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
