import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Careers & Engineering Jobs | Join Our Team — Flipcode Solutions',
  description:
    'Join our fast-growing engineering team at Flipcode Solutions. Explore open software engineering positions for Full-Stack, Frontend, Mobile (Flutter/React Native), Node.js, and UI/UX Designers.',
  keywords: [
    'Software Engineering Careers',
    'IT Jobs India',
    'Full Stack Developer Jobs',
    'Mobile Developer Jobs Flutter React Native',
    'Node.js Developer Careers',
    'Flipcode Solutions Careers',
  ],
  alternates: {
    canonical: '/career',
  },
  openGraph: {
    title: 'Careers & Engineering Jobs | Flipcode Solutions Private Limited',
    description:
      'We are hiring talented software engineers, architects, and product designers to build world-class digital systems.',
    url: 'https://flipcodesolutions.com/career',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Flipcode Solutions',
    description:
      'Explore software engineering career opportunities and join our high-performance engineering culture.',
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'Careers', url: 'https://flipcodesolutions.com/career' },
        ]}
      />
      {children}
    </>
  );
}
