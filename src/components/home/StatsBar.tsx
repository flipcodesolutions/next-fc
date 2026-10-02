'use client';

import React from 'react';
import { Calendar, Laptop, Smile, Globe2 } from 'lucide-react';
import StaggerContainer from '@/components/animations/StaggerContainer';
import AnimatedCounter from '@/components/animations/AnimatedCounter';

export default function StatsBar() {
  const stats = [
    {
      icon: Calendar,
      value: 'Sep 2023',
      numeric: null,
      suffix: '',
      label: 'Founded in Gujarat',
    },
    {
      icon: Laptop,
      value: '70+',
      numeric: 70,
      suffix: '+',
      label: 'Projects Delivered',
    },
    {
      icon: Smile,
      value: '70+',
      numeric: 70,
      suffix: '+',
      label: 'Happy Clients',
    },
    {
      icon: Globe2,
      value: '6+',
      numeric: 6,
      suffix: '+',
      label: 'Countries Served',
    },
  ];

  return (
    <section className="bg-white border-b border-[#E5E7E9] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          staggerDelay={120}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#F7F8F8] border border-[#E5E7E9] hover:border-[#FF6600]/40 transition-all hover:shadow-md group cursor-pointer hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7E9] flex items-center justify-center text-[#202323] group-hover:bg-[#FF6600] group-hover:text-white group-hover:border-[#FF6600] group-hover:scale-105 transition-all duration-300 flex-shrink-0 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-2xl font-extrabold font-heading text-[#0B1F33] group-hover:text-[#FF6600] transition-colors">
                    {stat.numeric !== null ? (
                      <AnimatedCounter value={stat.numeric} suffix={stat.suffix} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-xs font-semibold text-[#5A5D5C] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

