import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies | Enterprise Portfolio — Flipcode Solutions',
  description:
    'Explore our portfolio of delivered digital products: multi-tenant SaaS applications, cross-platform mobile apps (Flutter, React Native), high-scale eCommerce platforms, and custom ERP systems.',
  keywords: [
    'Flipcode Case Studies',
    'Software Portfolio',
    'SaaS Development Case Studies',
    'Mobile App Projects',
    'Enterprise Software Portfolio',
    'Custom Web Application Examples',
  ],
  alternates: {
    canonical: '/our-work',
  },
  openGraph: {
    title: 'Our Work & Case Studies | Flipcode Solutions Private Limited',
    description:
      'Explore our production portfolio across SaaS platforms, mobile ecosystems, enterprise business software, and custom digital portals.',
    url: 'https://flipcodesolutions.com/our-work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work & Case Studies | Flipcode Solutions',
    description:
      'Explore our production-grade digital software engineering portfolio and enterprise case studies.',
  },
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'Our Work', url: 'https://flipcodesolutions.com/our-work' },
        ]}
      />
      {children}
    </>
  );
}
