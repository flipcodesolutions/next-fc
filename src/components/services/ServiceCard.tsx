import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card-lift rounded-2xl bg-white border border-[#E5E7E9] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#FF6B35]/40 transition-all duration-300">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] flex items-center justify-center text-[#FF6B35] mb-6">
          <span className="font-extrabold text-lg">{service.title.charAt(0)}</span>
        </div>

        <h3 className="text-xl font-bold font-heading text-[#202323] mb-3">
          {service.title}
        </h3>

        <p className="text-sm text-[#6B7070] leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {service.deliverables && service.deliverables.length > 0 && (
          <ul className="space-y-2 mb-6 text-xs text-[#303333]">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-[#E5E7E9]">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-bold text-[#FF6B35] hover:text-[#202323] inline-flex items-center gap-1.5 transition-colors uppercase tracking-wider"
        >
          <span>Explore Service Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
