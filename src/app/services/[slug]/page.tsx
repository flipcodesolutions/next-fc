import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import ServiceDetails from '@/components/services/ServiceDetails';
import servicesData from '@/data/services.json';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Flipcode Solutions',
    };
  }

  return {
    title: `${service.title} | Engineering Services — Flipcode Solutions`,
    description: service.description,
    keywords: [
      service.title,
      `${service.title} company`,
      'custom software engineering',
      'enterprise software agency',
      ...service.features,
    ],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Flipcode Solutions`,
      description: service.description,
      url: `https://flipcodesolutions.com/services/${service.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Flipcode Solutions`,
      description: service.description,
    },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const formattedService = {
    id: service.id,
    title: service.title,
    slug: service.slug,
    shortDesc: service.description,
    fullDesc: service.description,
    deliverables: service.features,
    techStack: [
      'Next.js 16',
      'TypeScript',
      'Node.js',
      'React Native',
      'PostgreSQL',
      'AWS / Cloudflare',
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'Services', url: 'https://flipcodesolutions.com/services' },
          { name: service.title, url: `https://flipcodesolutions.com/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={service.title}
        description={service.description}
        url={`https://flipcodesolutions.com/services/${service.slug}`}
      />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#202323] text-white pt-36 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-[#A0A4A6] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">›</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-white/40">›</span>
              <span className="text-[#FF6B35]">{service.title}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#A0A4A6] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
              {service.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {service.description}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceDetails service={formattedService} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#F7F8F8] py-16">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#202323]">
              Need specialized expertise in {service.title}?
            </h2>
            <p className="text-sm text-[#6B7070]">
              Let our senior architects evaluate your technical requirements and prepare a detailed execution blueprint.
            </p>
            <div>
              <Link
                href="/contact"
                className="btn-primary-orange px-8 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-sm"
              >
                <span>Book Technical Consultation</span>
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
