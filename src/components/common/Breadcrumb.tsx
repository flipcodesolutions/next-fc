import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`inline-flex items-center gap-2 text-xs font-semibold text-[#A0A4A6] ${className}`} aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-[#FF6B35]' : 'text-slate-300'}>{item.label}</span>
            )}
            {!isLast && <span className="text-white/40">›</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
