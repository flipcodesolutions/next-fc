import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import {
  Code2,
  Smartphone,
  Layers,
  ShoppingBag,
  Server,
  Network,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Software & IT Engineering Services | Flipcode Solutions',
  description:
    'Comprehensive software engineering services: Custom Web Application Development, Native & Cross-Platform Mobile Apps (Flutter, React Native), SaaS Platforms, Cloud DevOps, and API Architectures.',
  keywords: [
    'Software Development Services',
    'Custom Web Application Engineering',
    'Mobile App Development iOS Android',
    'SaaS Engineering Services',
    'Cloud Architecture DevOps AWS',
    'REST API Microservices Node.js',
    'Custom CRM ERP Development',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Enterprise IT & Software Engineering Services | Flipcode Solutions',
    description:
      'Explore our full suite of digital engineering capabilities: Web, Mobile, Cloud, SaaS, APIs, and Custom Enterprise Software.',
    url: 'https://flipcodesolutions.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development & IT Engineering Services | Flipcode Solutions',
    description:
      'Explore full-stack web, mobile, SaaS, and cloud architecture services delivered by Flipcode Solutions.',
  },
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'web',
      title: 'Web Application Development',
      badge: 'Modern Full-Stack',
      icon: Code2,
      desc: 'We engineer bespoke, lightning-fast web applications designed to handle high concurrency, intricate data models, and fluid interactive user journeys.',
      capabilities: [
        'Custom Web Applications',
        'Enterprise Business Portals',
        'Admin Panels & Internal Dashboards',
        'Customer Self-Service Portals',
        'Custom CRM Systems',
        'Enterprise Resource Planning (ERP)',
        'Complex Management Systems',
      ],
      techs: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    },
    {
      id: 'saas',
      title: 'SaaS Development',
      badge: 'Cloud Architecture',
      icon: Layers,
      desc: 'From initial MVP wireframes to multi-tenant cloud enterprise solutions, we architect scalable software-as-a-service products with automated monetization.',
      capabilities: [
        'Multi-Tenant SaaS Architectures',
        'Recurring Subscription Systems (Stripe)',
        'Role-Based Granular Access Control',
        'Customer Onboarding & Provisioning',
        'Product & Asset Management Platforms',
        'Usage-Based Metering & Telemetry',
      ],
      techs: ['Next.js', 'Node.js / Express', 'Stripe Connect', 'MySQL', 'Redis', 'AWS'],
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      badge: 'iOS & Android',
      icon: Smartphone,
      desc: 'Native and hybrid mobile applications delivering 60fps animations, intuitive tactile gestures, offline database caching, and native hardware sensor access.',
      capabilities: [
        'Native iOS (Swift) & Android (Kotlin)',
        'Cross-Platform Flutter Development',
        'React Native Mobile Architectures',
        'API-driven Mobile Applications',
        'Biometric Auth & Push Notifications',
        'App Store & Play Store CI/CD Pipelines',
      ],
      techs: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    },
    {
      id: 'ecommerce',
      title: 'eCommerce Development',
      badge: 'Omnichannel Commerce',
      icon: ShoppingBag,
      desc: 'High-converting custom storefronts and multi-vendor marketplaces engineered with sub-second page loads, automated tax calculation, and seamless checkout.',
      capabilities: [
        'Custom Headless eCommerce',
        'Multi-Vendor Marketplace Platforms',
        'Product Catalog & Inventory Sync',
        'Secure Multi-Gateway Payment Processing',
        'Order Lifecycle & Shipment Tracking',
        'Affiliate & Referral Platforms',
      ],
      techs: ['Next.js Commerce', 'Node.js', 'Shopify Plus', 'Stripe', 'PayPal', 'MySQL'],
    },
    {
      id: 'backend',
      title: 'Backend & API Development',
      badge: 'High Concurrency',
      icon: Server,
      desc: 'Resilient backend microservices, robust API gateways, and optimized database storage layers built for low latency and high data integrity.',
      capabilities: [
        'Laravel & Modern PHP Systems',
        'Node.js & Express REST APIs',
        'Python & FastAPI High-Performance Engines',
        'GraphQL Schema Federation',
        'Third-Party API Integration Layer',
        'JWT & OAuth2 Authentication Systems',
      ],
      techs: ['Node.js', 'Laravel', 'Python / FastAPI', 'MySQL 8.0', 'PostgreSQL', 'Docker'],
    },
    {
      id: 'integrations',
      title: 'Integration Services',
      badge: 'Ecosystem Connectivity',
      icon: Network,
      desc: 'Connect disparate software systems into unified, automated data pipelines that eliminate manual double-entry and sync records in real-time.',
      capabilities: [
        'Payment Gateways (Stripe, Razorpay, PayPal)',
        'Amazon SP-API & Marketplaces Sync',
        'Affiliate Network & Tracking APIs',
        'YouTube & Social Media Data APIs',
        'CRM & ERP Connectors (HubSpot, Salesforce)',
        'Custom Webhooks & Event Streams',
      ],
      techs: ['RESTful APIs', 'GraphQL', 'Webhooks', 'Message Queues', 'Kafka', 'Redis'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'Services', url: 'https://flipcodesolutions.com/services' },
        ]}
      />
      <SiteHeader />

      <main className="flex-1">
        
        {/* Services Hero */}
        <section className="bg-[#202323] text-white pt-36 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] hero-radial-glow pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#A0A4A6] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
              Full-Stack Engineering Services
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Technology Services Built <span className="text-[#FF6B35]">Around Your Goals</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From high-traffic web applications and mobile apps to multi-tenant SaaS engines and bespoke enterprise integrations, we engineer solutions that perform.
            </p>
          </div>
        </section>

        {/* Detailed Service Categories */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {serviceCategories.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-3xl border border-[#E5E7E9] ${
                    isEven ? 'bg-[#F7F8F8]' : 'bg-white shadow-sm'
                  }`}
                >
                  {/* Left column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7E9] flex items-center justify-center text-[#FF6B35] shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35]">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323] leading-snug">
                      {service.title}
                    </h2>

                    <p className="text-sm text-[#303333] leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Tech tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {service.techs.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="btn-primary-orange px-6 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2"
                      >
                        <span>Discuss Your Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Capabilities list (6 cols) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E7E9] shadow-sm space-y-3.5">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-4">
                        Core Deliverables &amp; Capabilities
                      </h3>
                      <ul className="space-y-3">
                        {service.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="flex items-center gap-3 text-sm text-[#303333]">
                            <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                            <span className="font-medium">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#202323] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Have a technical challenge? <br />
              <span className="text-[#FF6B35]">Let&apos;s discuss it.</span>
            </h2>
            <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Our lead software architects will conduct a free technical scoping session to outline your architecture, technology stack, and sprint roadmap.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary-orange px-8 py-4 rounded-xl text-sm font-bold inline-flex items-center gap-2.5 shadow-xl shadow-[#FF6B35]/25"
              >
                <span>Schedule an Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
