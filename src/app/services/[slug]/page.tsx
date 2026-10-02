import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import ServiceDetails from '@/components/services/ServiceDetails';
import servicesData from '@/data/services.json';
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { ArrowRight } from 'lucide-react';

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
      images: [
        {
          url: `/services/${service.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${service.title} — Flipcode Solutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Flipcode Solutions`,
      description: service.description,
      images: [`/services/${service.slug}/opengraph-image`],
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
    badge: service.badge,
    shortDesc: service.shortDesc || service.description,
    description: service.description,
    fullDesc: service.fullDesc || service.description,
    iconName: service.iconName,
    features: service.features,
    deliverables: service.deliverables || service.features,
    techStack: service.techStack || [],
    process: service.process,
    benefits: service.benefits,
    faqs: service.faqs,
    metrics: service.metrics,
  };

  const faqItems = service.faqs ? service.faqs.map((f) => ({ q: f.question, a: f.answer })) : [];

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
      {faqItems.length > 0 && <FAQJsonLd faqs={faqItems} />}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Banner */}
        <section
          className="bg-[#202323] text-white pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden"
          aria-labelledby="serviceSlugTitle"
        >
          {/* Subtle Grid & Radial Glows */}
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[550px] h-[550px] hero-radial-glow pointer-events-none"></div>
          <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-radial from-[#FF6B35]/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-[#A0A4A6] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">›</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-white/40">›</span>
              <span className="text-[#FF6B35]">{service.title}</span>
            </nav>

            {/* Eyebrow Badge */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#CBD5E1] tracking-wide shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
                </span>
                <span>{service.badge || 'Engineering Capabilities'}</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              id="serviceSlugTitle"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight"
            >
              {service.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
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
