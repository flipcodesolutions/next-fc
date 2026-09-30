'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Mail, CheckCircle2 } from 'lucide-react';

interface CtaSectionProps {
  onOpenContact?: () => void;
}

export default function CtaSection({ onOpenContact }: CtaSectionProps) {
  return (
    <section id="contact" className="bg-[#202426] text-white py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle Orange Radial Glow behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] cta-orange-glow pointer-events-none"></div>
      
      {/* Abstract Grid background */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#A0A4A6] uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-ping"></span>
          Ready to Engineer the Future
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
          Have an Idea? <span className="text-[#FF6600]">Let&apos;s Build It.</span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Tell us about your business challenge, and we&apos;ll help turn it into a scalable digital solution. 
          From initial consultation to architectural blueprint and full development.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onOpenContact}
            className="btn-orange-primary px-9 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 shadow-xl shadow-[#FF6600]/25 group w-full sm:w-auto"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenContact}
            className="text-base font-semibold text-white hover:text-[#FF6600] transition-colors inline-flex items-center gap-2 py-3 px-6 rounded-xl hover:bg-white/5"
          >
            <MessageSquare className="w-4 h-4 text-[#FF6600]" />
            <span>Talk to Our Team</span>
          </button>
        </div>

        {/* Reassurance points */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
            <span>NDA &amp; IP Protection Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
            <span>Free Architectural &amp; Cost Estimate</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
            <span>Response within 24 Hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
