'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Layers,
  ShieldCheck,
  Zap,
  HelpCircle,
  Compass,
} from 'lucide-react';

interface ServiceDetailsProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-20">
      
      {/* 1. Overview Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
            {service.badge || 'Engineering Capabilities'}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323] leading-tight">
            Engineering Precision for {service.title}
          </h2>

          <p className="text-base sm:text-lg text-[#303333] leading-relaxed">
            {service.fullDesc || service.description || service.shortDesc}
          </p>

          {service.metrics && (
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-xs font-bold text-[#FF6B35]">
              <Zap className="w-4 h-4 text-[#FF6B35]" />
              <span>Key Metric Guarantee: {service.metrics}</span>
            </div>
          )}

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary-orange px-6 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-sm"
            >
              <span>Consult on {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="px-5 py-3 rounded-xl text-sm font-bold text-[#303333] hover:text-[#FF6B35] bg-[#F7F8F8] hover:bg-[#E5E7E9] border border-[#E5E7E9] transition-colors inline-flex items-center gap-1.5"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>

        {/* Deliverables Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#202323] text-white p-8 rounded-3xl border border-white/10 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FF6B35]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-white">Deliverables &amp; Outcomes</h3>
                <p className="text-xs text-slate-400">Guaranteed production-ready output</p>
              </div>
            </div>

            {service.deliverables && (
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
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

      {/* 2. Core Features & Capabilities */}
      {service.features && service.features.length > 0 && (
        <div className="space-y-8">
          <div className="border-t border-[#E5E7E9] pt-12">
            <div className="flex items-center gap-2 text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4 text-[#FF6B35]" />
              <span>Core Features</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323]">
              What We Build Under {service.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAFBFB] border border-[#E5E7E9] hover:border-[#FF6B35]/40 hover:bg-white hover:shadow-md transition-all duration-200 flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  {idx + 1}
                </div>
                <span className="text-sm font-semibold text-[#202323] leading-snug">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Technology Stack */}
      {service.techStack && service.techStack.length > 0 && (
        <div className="bg-[#F7F8F8] p-8 sm:p-10 rounded-3xl border border-[#E5E7E9] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B35]">
                Tools &amp; Frameworks
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#202323] mt-1">
                Technology Stack for {service.title}
              </h3>
            </div>
            <span className="text-xs font-medium text-[#73787A]">
              Tested, modern &amp; scalable
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-[#E5E7E9] text-xs font-bold text-[#202323] shadow-xs hover:border-[#FF6B35] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 4. Engineering Process / Methodology */}
      {service.process && service.process.length > 0 && (
        <div className="space-y-8 border-t border-[#E5E7E9] pt-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5A5D5C] uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#FF6B35]" />
              <span>Step-by-Step Delivery</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323]">
              How We Execute {service.title}
            </h3>
            <p className="text-sm text-[#73787A]">
              A proven, transparent engineering lifecycle from discovery to 24/7 post-launch SLA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {service.process.map((stepItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E5E7E9] hover:border-[#FF6B35]/40 hover:shadow-lg transition-all relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-heading text-[#FF6B35]/30">
                    {stepItem.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#202323] mt-2 mb-2">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-[#5A5D5C] leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Business Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <div className="space-y-6 border-t border-[#E5E7E9] pt-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#5A5D5C] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
            <span>Value &amp; Advantages</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323]">
            Why Partner with Flipcode for {service.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAFBFB] border border-[#E5E7E9] flex items-center gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF6B35] text-white flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-[#202323]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Service Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="space-y-6 border-t border-[#E5E7E9] pt-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#5A5D5C] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#FF6B35]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323]">
            Common Inquiries About {service.title}
          </h3>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E5E7E9] overflow-hidden bg-white transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#202323] hover:text-[#FF6B35] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#73787A] transition-transform duration-200 flex-shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-[#FF6B35]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5A5D5C] leading-relaxed border-t border-[#F0F2F2] bg-[#FAFBFB]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
