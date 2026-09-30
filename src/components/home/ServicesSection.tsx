'use client';

import React from 'react';
import {
  Globe,
  Smartphone,
  Layers,
  Code2,
  ShoppingBag,
  Cpu,
  Network,
  CloudCog,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      id: 'web-dev',
      title: 'Web Application Development',
      description:
        'Modern, highly responsive web apps built with Next.js, React, Node.js, and TypeScript for rapid load speeds and flawless scalability.',
      icon: Globe,
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description:
        'Native and hybrid mobile applications for iOS & Android utilizing Flutter and React Native with native device capability integration.',
      icon: Smartphone,
      tags: ['Flutter', 'React Native', 'iOS', 'Android'],
    },
    {
      id: 'saas-dev',
      title: 'SaaS Development',
      description:
        'Multi-tenant cloud architectures, subscription billing, automated provisioning, and customer analytics engineered from day zero.',
      icon: Layers,
      tags: ['Multi-Tenant', 'Stripe', 'Auth0', 'Scalability'],
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description:
        'Tailored software solutions engineered to address specialized business workflows, eliminating operational friction and manual bottlenecks.',
      icon: Code2,
      tags: ['Custom Workflows', 'Architecture', 'Security'],
    },
    {
      id: 'ecommerce',
      title: 'eCommerce Development',
      description:
        'High-converting digital storefronts, custom checkout experiences, inventory synchronization, and omnichannel shopping engines.',
      icon: ShoppingBag,
      tags: ['Headless Commerce', 'Shopify Plus', 'Payment APIs'],
    },
    {
      id: 'crm-erp',
      title: 'CRM & ERP Solutions',
      description:
        'Centralized enterprise resource planning and client relationship management portals designed for real-time team collaboration.',
      icon: Cpu,
      tags: ['Enterprise Resource', 'Dashboards', 'Analytics'],
    },
    {
      id: 'api-integration',
      title: 'API & Third-Party Integrations',
      description:
        'Secure RESTful & GraphQL APIs, payment gateways, messaging protocols, webhooks, and legacy software modernizations.',
      icon: Network,
      tags: ['REST & GraphQL', 'Webhooks', 'Microservices'],
    },
    {
      id: 'cloud-backend',
      title: 'Cloud & Backend Solutions',
      description:
        'Fault-tolerant serverless and containerized Node.js, Python, and MySQL/Postgres cloud infrastructures with automated CI/CD.',
      icon: CloudCog,
      tags: ['AWS', 'Docker', 'MySQL', 'CI/CD Pipelines'],
    },
  ];

  return (
    <section id="services" className="bg-white py-24 lg:py-32 border-b border-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F9] border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
            Our Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202426] tracking-tight leading-tight">
            Technology That Solves <span className="text-[#FF6600]">Real Business Problems</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#73787A] leading-relaxed">
            From strategic cloud architecture to pixel-perfect user experiences, we engineer end-to-end digital solutions that accelerate enterprise growth.
          </p>
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-[#E5E7E9] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#FF6600]/40 flex flex-col justify-between"
              >
                {/* Accent top border highlight on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-transparent group-hover:bg-[#FF6600] transition-colors rounded-t"></div>

                <div>
                  {/* Modern minimal icon with orange accent */}
                  <div className="w-12 h-12 rounded-xl bg-[#F7F8F9] border border-[#E5E7E9] flex items-center justify-center text-[#202426] group-hover:bg-[#FF6600] group-hover:text-white group-hover:border-[#FF6600] transition-all duration-300 shadow-sm mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading text-[#202426] group-hover:text-[#FF6600] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#3F4446] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="mt-6 pt-5 border-t border-[#E5E7E9]/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F7F8F9] text-[#5A5D5C] group-hover:border-[#E5E7E9] border border-transparent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService && onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#202426] group-hover:text-[#FF6600] transition-colors"
                  >
                    <span>Learn More &amp; Inquire</span>
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
