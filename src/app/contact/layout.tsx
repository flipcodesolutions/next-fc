import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us & Schedule Strategy Consultation | Flipcode Solutions',
  description:
    'Contact Flipcode Solutions Private Limited for custom software development inquiries, request a quote / RFP, or schedule a 15-minute engineering strategy consultation with our solution architects.',
  keywords: [
    'Contact Flipcode Solutions',
    'Hire Software Developers India',
    'Request Software Development Quote',
    'Custom Software Agency RFP',
    'Schedule Tech Consultation',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Start Your Project with Flipcode Solutions',
    description:
      'Get in touch with our engineering team for technical advisory, RFPs, custom quotes, or to schedule a strategy call.',
    url: 'https://flipcodesolutions.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Flipcode Solutions',
    description:
      'Connect with our engineering team to discuss your software architecture, web apps, mobile apps, or enterprise systems.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'Contact', url: 'https://flipcodesolutions.com/contact' },
        ]}
      />
      {children}
    </>
  );
}
