import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'ISO-aligned enterprise software engineering standards',
    'Dedicated developer pods with senior architects & lead engineers',
    'Direct client communication and transparent sprint roadmaps',
    'Long-term post-deployment maintenance & infrastructure support',
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
              About Flipcode
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323] tracking-tight leading-snug">
              Engineering Digital Products That <span className="text-[#FF6B35]">Drive Real Business ROI</span>
            </h2>

            <p className="text-base text-[#303333] leading-relaxed">
              Founded in September 2023 in Gujarat, India, Flipcode Solutions Private Limited is a full-stack digital product engineering firm. We design, build, and scale mission-critical software systems for ambitious startups, SMEs, and global enterprises.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#303333]">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="btn-primary-orange px-6 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-sm"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="card-lift-dark cursor-pointer relative rounded-3xl bg-gradient-to-br from-[#202323] to-[#2C3030] p-8 sm:p-10 text-white shadow-xl overflow-hidden border border-white/10 hover:border-[#FF6B35]/40 transition-all">
              <div className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full bg-radial from-[#FF6B35]/25 to-transparent pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="inline-block bg-[#FF6B35] text-white font-extrabold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider">
                  Since Sep 2023
                </div>

                <h3 className="text-2xl font-bold font-heading text-white">
                  Why Global Companies Choose Us as Their Tech Partner
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  We don&apos;t just write lines of code; we analyze your revenue models, system architecture bottlenecks, and customer user journeys to create software that scales securely.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-extrabold text-[#FF6B35]">70+</div>
                    <div className="text-xs text-slate-400 mt-1">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-white">6+</div>
                    <div className="text-xs text-slate-400 mt-1">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
