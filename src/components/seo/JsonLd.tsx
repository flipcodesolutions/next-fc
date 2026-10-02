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
  logo = 'https://flipcodesolutions.com/images/logo.webp',
  description = 'Flipcode Solutions Private Limited is a full-stack digital product engineering and enterprise software development agency delivering high-performance web applications, iOS & Android mobile apps, multi-tenant SaaS platforms, and enterprise software solutions.',
}: OrganizationProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name,
    legalName: 'Flipcode Solutions Private Limited',
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
      width: '240',
      height: '50',
    },
    image: 'https://flipcodesolutions.com/images/og-image.jpg',
    description,
    founder: [
      {
        '@type': 'Person',
        name: 'Ravirajsinh Gohil',
        jobTitle: 'CEO & Founder',
      },
      {
        '@type': 'Person',
        name: 'Jigar Parmar',
        jobTitle: 'CTO',
      },
    ],
    foundingDate: '2023-09-01',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nr. Panama Sales, Dalmill Road',
      addressLocality: 'Surendranagar',
      addressRegion: 'Gujarat',
      postalCode: '363001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.7224,
      longitude: 71.642,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9979404044',
        contactType: 'sales & customer support',
        email: 'contact@flipcodesolutions.com',
        areaServed: ['US', 'CA', 'GB', 'AE', 'IN', 'AU', 'EU', 'NG'],
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/flipcode-solutions-private-limited/',
      'https://www.facebook.com/flipcodesolutions',
      'https://www.instagram.com/flipcodesolutions',
      'https://twitter.com/flipcodesolutions',
    ],
    knowsAbout: [
      'Custom Web Application Development',
      'Enterprise Software Engineering',
      'Mobile App Development (iOS & Android)',
      'Flutter and React Native',
      'Multi-tenant SaaS Architecture',
      'Node.js & Next.js Ecosystem',
      'Laravel & PHP Modern Backends',
      'Cloud Architecture & AWS DevOps',
      'REST & GraphQL API Microservices',
      'Custom ERP & CRM Platforms',
      'AI & Workflow Automation',
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD, EUR, GBP, INR, AUD, AED',
    paymentAccepted: 'Wire Transfer, Credit Card, Stripe',
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
  if (!faqs || faqs.length === 0) return null;

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
  if (!items || items.length === 0) return null;

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
  serviceType = 'Software Development & IT Engineering',
}: {
  name: string;
  description: string;
  url: string;
  providerName?: string;
  serviceType?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    provider: {
      '@type': 'Corporation',
      name: providerName,
      url: 'https://flipcodesolutions.com',
      logo: 'https://flipcodesolutions.com/images/logo.webp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Product Engineering Services',
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
  dateModified,
  authorName,
  authorRole,
  images = [],
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorRole?: string;
  images?: string[];
}) {
  const published = datePublished
    ? new Date(datePublished).toISOString()
    : '2026-09-24T08:00:00+00:00';
  const modified = dateModified
    ? new Date(dateModified).toISOString()
    : published;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      name: authorName || 'Flipcode Architecture Team',
      jobTitle: authorRole || 'Software Engineering Team',
      worksFor: {
        '@type': 'Organization',
        name: 'Flipcode Solutions Private Limited',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Flipcode Solutions Private Limited',
      url: 'https://flipcodesolutions.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://flipcodesolutions.com/images/logo.webp',
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

export function JobPostingJsonLd({
  jobs,
}: {
  jobs: Array<{
    id: string;
    title: string;
    type: string;
    experience: string;
    location: string;
    salary: string;
    desc: string;
    skills: string[];
  }>;
}) {
  if (!jobs || jobs.length === 0) return null;

  return (
    <>
      {jobs.map((job) => {
        const schema = {
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: job.title,
          description: `${job.desc} Key skills: ${job.skills.join(', ')}. Required experience: ${job.experience}.`,
          datePosted: '2026-09-01T08:00:00+00:00',
          validThrough: '2027-12-31T23:59:59+00:00',
          employmentType: job.type.toUpperCase().includes('FULL') ? 'FULL_TIME' : 'OTHER',
          hiringOrganization: {
            '@type': 'Organization',
            name: 'Flipcode Solutions Private Limited',
            sameAs: 'https://flipcodesolutions.com',
            logo: 'https://flipcodesolutions.com/images/logo.webp',
          },
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Nr. Panama Sales, Dalmill Road',
              addressLocality: 'Surendranagar',
              addressRegion: 'Gujarat',
              postalCode: '363001',
              addressCountry: 'IN',
            },
          },
          applicantLocationRequirements: {
            '@type': 'Country',
            name: 'India',
          },
          jobLocationType: 'TELECOMMUTE',
          skills: job.skills.join(', '),
        };

        return (
          <script
            key={job.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        );
      })}
    </>
  );
}

export function PortfolioJsonLd({
  projects,
}: {
  projects: Array<{
    id: string;
    name: string;
    categoryLabel?: string;
    shortDesc: string;
    techs?: string[];
  }>;
}) {
  if (!projects || projects.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Flipcode Solutions Portfolio & Case Studies',
    itemListElement: projects.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: p.name,
        applicationCategory: p.categoryLabel || 'BusinessApplication',
        description: p.shortDesc,
        operatingSystem: 'All Modern Browsers / iOS / Android',
        creator: {
          '@type': 'Organization',
          name: 'Flipcode Solutions Private Limited',
        },
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
