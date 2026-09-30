import React from 'react';
import { Star } from 'lucide-react';
import testimonialsData from '@/data/testimonials.json';

export default function Testimonials() {
  return (
    <section className="bg-[#F7F8F8] py-20 lg:py-28 border-b border-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323]">
            Trusted by Founders &amp; <span className="text-[#FF6B35]">Enterprise Leaders</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7070]">
            Hear how our engineering pods helped businesses build, scale, and transform their digital capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="card-lift rounded-2xl bg-white border border-[#E5E7E9] p-7 sm:p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center gap-1 text-[#FF6B35] mb-4">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#303333] leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#E5E7E9]">
                <div className="w-10 h-10 rounded-full bg-[#202323] text-white flex items-center justify-center font-bold text-sm">
                  {item.initials || item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#202323]">{item.author}</div>
                  <div className="text-xs text-[#6B7070]">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
