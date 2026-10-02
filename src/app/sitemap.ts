import { MetadataRoute } from 'next';
import servicesData from '@/data/services.json';
import blogsData from '@/data/blogs.json';

function parseDateToIso(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString();
  try {
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flipcodesolutions.com';
  const currentDate = new Date().toISOString();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ];

  // Dynamic Service routes
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic Blog routes with exact post published / modified timestamps
  const blogRoutes: MetadataRoute.Sitemap = blogsData.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: parseDateToIso(blog.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}

