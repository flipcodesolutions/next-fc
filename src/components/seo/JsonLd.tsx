import React from 'react';

interface OrganizationProps {
  url?: string;
  name?: string;
  logo?: string;
  description?: string;
}

export function OrganizationJsonLd({
  url = 'https://flipcodesolutions.com',
  name = 'Flipcode Solutions Private Limited',
  logo = 'https://flipcodesolutions.com/icons/icon-512x512.png',
  description = 'Flipcode Solutions Private Limited is a full-stack digital product engineering and enterprise software development company.',
}: OrganizationProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    legalName: 'Flipcode Solutions Private Limited',
    url,
    logo,
    description,
    founder: [
      {
        '@type': 'Person',
        name: 'Vikas Dave',
        jobTitle: 'Founder & CEO',
      },
    ],
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nr. Panama Sales, Dalmill Road',
      addressLocality: 'Surendranagar',
      addressRegion: 'Gujarat',
      postalCode: '363001',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9979404044',
        contactType: 'sales',
        email: 'contact@flipcodesolutions.com',
        areaServed: ['US', 'CA', 'GB', 'AE', 'IN', 'AU', 'EU'],
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/flipcodesolutions',
      'https://twitter.com/flipcodesolutions',
      'https://facebook.com/flipcodesolutions',
      'https://instagram.com/flipcodesolutions',
      'https://github.com/flipcodesolutions',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd({
  url = 'https://flipcodesolutions.com',
  name = 'Flipcode Solutions',
}: {
  url?: string;
  name?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: Array<{ q: string; a: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  providerName = 'Flipcode Solutions Private Limited',
}: {
  name: string;
  description: string;
  url: string;
  providerName?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: providerName,
      url: 'https://flipcodesolutions.com',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development & IT Engineering Services',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  authorName,
  images = [],
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  authorName?: string;
  images?: string[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished: datePublished || '2026-03-01T08:00:00+00:00',
    dateModified: '2026-03-15T10:00:00+00:00',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      name: authorName || 'Flipcode Architecture Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Flipcode Solutions Private Limited',
      url: 'https://flipcodesolutions.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://flipcodesolutions.com/icons/icon-512x512.png',
      },
    },
    image: images.length > 0 ? images : ['https://flipcodesolutions.com/images/og-image.jpg'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
