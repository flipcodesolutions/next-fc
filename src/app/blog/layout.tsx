import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Engineering Blog & Technology Insights | Flipcode Solutions',
  description:
    'Read engineering insights, architecture deep-dives, performance benchmarks, and development guides on Next.js, Node.js, Flutter, SaaS architecture, and cloud systems.',
  keywords: [
    'Software Engineering Blog',
    'Next.js Architecture Guides',
    'Node.js Performance',
    'Flutter vs React Native',
    'SaaS Engineering Best Practices',
    'Flipcode Tech Blog',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Technology & Software Engineering Blog | Flipcode Solutions',
    description:
      'Practical technology insights, architectural benchmarks, and real-world software engineering guides.',
    url: 'https://flipcodesolutions.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flipcode Solutions Engineering Blog',
    description:
      'Practical software engineering guides, architectural benchmarks, and full-stack insights.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://flipcodesolutions.com' },
          { name: 'Blog', url: 'https://flipcodesolutions.com/blog' },
        ]}
      />
      {children}
    </>
  );
}
