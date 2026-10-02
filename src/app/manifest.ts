import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: 'flipcode-solutions',
    name: 'Flipcode Solutions Private Limited',
    short_name: 'Flipcode',
    description: 'Enterprise Full-Stack Software, Web, Mobile & SaaS Engineering Services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#202323',
    theme_color: '#202323',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'technology', 'utilities'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}

