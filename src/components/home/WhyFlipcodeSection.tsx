import React from 'react';
import { ShieldCheck, Zap, Globe2 } from 'lucide-react';

export default function WhyFlipcodeSection() {
  const stats = [
    {
      number: '120+',
      label: 'Delivered Projects',
      subtext: 'High-impact enterprise software & SaaS platforms launched globally.',
    },
    {
      number: '45+',
      label: 'International Clients',
      subtext: 'Serving businesses across North America, Europe, Middle East & Asia.',
    },
    {
      number: '30+',
      label: 'Modern Technologies',
      subtext: 'Mastery across modern frontends, scalable backends & cloud databases.',
    },
    {
      number: '8+',
      label: 'Years of Experience',
      subtext: 'Proven track record of engineering scalable, battle-tested software systems.',
    },
  ];

  const pillars = [
    {
      icon: Zap,
      title: 'High-Throughput Architecture',
      desc: 'Engineered for sub-second latency, high concurrency, and resilient cloud availability.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security & Compliance',
      desc: 'Adhering to strict data protection standards, encrypted channels, and rigorous code audits.',
    },
    {
      icon: Globe2,
      title: 'Global Delivery Standards',
      desc: 'Seamless agile sprints, transparent milestone reporting, and around-the-clock SLA support.',
    },
  ];

  return (
    <section id="why-flipcode" className="bg-[#202426] text-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background Abstract Line Pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>
      
      {/* Subtle Orange Glow in Center-Left */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-[#FF6600]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#A0A4A6] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
            Why Flipcode Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Built for Performance. <br className="hidden sm:inline" />
            <span className="text-[#FF6600]">Designed for Growth.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We partner with visionary founders and enterprises to engineer digital infrastructure that scales effortlessly as your business grows.
          </p>
        </div>

        {/* 4 Primary Statistics Grid with Orange Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#2A2E30]/80 border border-white/10 relative overflow-hidden group hover:border-[#FF6600]/40 transition-all duration-300"
            >
              {/* Subtle top indicator */}
              <div className="w-8 h-1 bg-[#FF6600] rounded-full mb-6"></div>

              {/* Number */}
              <div className="text-4xl sm:text-5xl font-extrabold font-heading text-[#FF6600] tracking-tight">
                {stat.number}
              </div>

              {/* Label */}
              <div className="mt-2 text-lg font-bold text-white font-heading">
                {stat.label}
              </div>

              {/* Supporting Text */}
              <p className="mt-2 text-xs sm:text-sm text-[#A0A4A6] leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Value Pillars Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#FF6600] flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">{p.title}</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
