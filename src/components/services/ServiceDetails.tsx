import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import { ArrowRight, CheckCircle2, Layers, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

interface ServiceDetailsProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <div className="space-y-16">
      {/* Overview Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
            Service Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323]">
            {service.title}
          </h2>
          <p className="text-base text-[#303333] leading-relaxed">
            {service.fullDesc || service.shortDesc}
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary-orange px-6 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2"
            >
              <span>Consult on {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-[#202323] text-white p-8 rounded-3xl border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#FF6B35]" />
              <h3 className="text-lg font-bold font-heading text-white">Deliverables &amp; Outcomes</h3>
            </div>
            {service.deliverables && (
              <ul className="space-y-3 text-xs text-slate-300">
                {service.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Tech Stack & Features */}
      {service.techStack && service.techStack.length > 0 && (
        <div className="bg-[#F7F8F8] p-8 sm:p-10 rounded-2xl border border-[#E5E7E9]">
          <h3 className="text-xl font-bold font-heading text-[#202323] mb-4">
            Technology Stack &amp; Frameworks
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E5E7E9] text-xs font-semibold text-[#202323] shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
