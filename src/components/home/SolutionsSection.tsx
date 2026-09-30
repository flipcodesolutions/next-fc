'use client';

import React from 'react';
import {
  Layers,
  Briefcase,
  Users2,
  Store,
  CalendarCheck,
  CreditCard,
  UserCheck,
  ShoppingBag,
  ArrowRight,
  Check,
} from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolution?: (title: string) => void;
}

export default function SolutionsSection({ onSelectSolution }: SolutionsSectionProps) {
  const solutions = [
    {
      id: 'saas',
      title: 'SaaS Platforms',
      description: 'End-to-end multi-tenant software with automated provisioning, subscription tiers, and self-serve onboarding.',
      icon: Layers,
      features: ['Multi-tenancy isolation', 'Usage metering', 'Automated billing'],
    },
    {
      id: 'bms',
      title: 'Business Management Systems',
      description: 'Unified administrative suites to track inventory, staff workflows, purchase orders, and multi-location operations.',
      icon: Briefcase,
      features: ['Workflow automation', 'Resource allocation', 'Audit logs'],
    },
    {
      id: 'crm-erp',
      title: 'CRM / ERP Platforms',
      description: 'Intelligent pipeline management, customer history tracking, sales forecasting, and ERP resource integration.',
      icon: Users2,
      features: ['Sales funnel sync', 'Omnichannel tracking', 'Real-time telemetry'],
    },
    {
      id: 'marketplaces',
      title: 'Multi-Vendor Marketplaces',
      description: 'Two-sided digital commerce ecosystems featuring vendor stores, split payments, review moderation, and commission engines.',
      icon: Store,
      features: ['Split escrow payouts', 'Vendor portal', 'Catalog syndication'],
    },
    {
      id: 'booking',
      title: 'Booking & Scheduling Platforms',
      description: 'Automated appointment reservation engines with calendar syncing, SMS/email alerts, and integrated deposits.',
      icon: CalendarCheck,
      features: ['Timezone auto-detect', 'Calendar sync', 'Instant payment hold'],
    },
    {
      id: 'subscription',
      title: 'Subscription & Billing Engines',
      description: 'Recurring billing infrastructure with dunning management, dynamic pricing tiers, invoices, and payment gateways.',
      icon: CreditCard,
      features: ['Stripe & PayPal API', 'Dunning recovery', 'Tax compliance'],
    },
    {
      id: 'portals',
      title: 'Customer & Partner Portals',
      description: 'Self-service client dashboards for support ticket tracking, document sharing, contract approvals, and account settings.',
      icon: UserCheck,
      features: ['Role-based access', 'Secure file vault', 'Granular permissions'],
    },
    {
      id: 'ecommerce-sol',
      title: 'eCommerce Platforms',
      description: 'High-speed headless commerce solutions optimized for conversion rates, localized currencies, and instant checkout.',
      icon: ShoppingBag,
      features: ['Sub-second cart', 'Omnichannel inventory', 'Custom checkout'],
    },
  ];

  return (
    <section id="solutions" className="bg-[#F7F8F9] py-24 lg:py-32 border-b border-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C] uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
            Tailored Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202426] tracking-tight leading-tight">
            Scalable Solutions for <span className="text-[#FF6600]">Modern Businesses</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#73787A] leading-relaxed">
            We build specialized software systems engineered to solve operational complexities across diverse commercial domains.
          </p>
        </div>

        {/* 8 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectSolution && onSelectSolution(item.title)}
                className="group cursor-pointer rounded-2xl bg-white border border-[#E5E7E9] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#FF6600]/40 flex flex-col justify-between"
              >
                <div>
                  {/* Clean icon badge */}
                  <div className="w-11 h-11 rounded-xl bg-[#F7F8F9] border border-[#E5E7E9] flex items-center justify-center text-[#202426] group-hover:bg-[#FF6600] group-hover:text-white group-hover:border-[#FF6600] transition-colors mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading text-[#202426] group-hover:text-[#FF6600] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#3F4446] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mt-4 space-y-1.5 pt-4 border-t border-[#E5E7E9]/70">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-[#5A5D5C]">
                        <Check className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7E9]/60">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectSolution) {
                        onSelectSolution(item.title);
                      }
                    }}
                    className="text-xs font-bold text-[#202426] group-hover:text-[#FF6600] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Request Custom Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
