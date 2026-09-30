import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Flipcode Solutions Private Limited',
    short_name: 'Flipcode',
    description: 'Enterprise Full-Stack Software, Web, Mobile & SaaS Engineering Services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#202323',
    theme_color: '#FF6B35',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
