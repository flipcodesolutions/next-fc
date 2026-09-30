export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  OUR_WORK: '/our-work',
  CAREER: '/career',
  BLOG: '/blog',
  CONTACT: '/contact',
} as const;

export const NAV_LINKS = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'About', href: ROUTES.ABOUT },
  { name: 'Services', href: ROUTES.SERVICES },
  { name: 'Our Work', href: ROUTES.OUR_WORK },
  { name: 'Career', href: ROUTES.CAREER },
  { name: 'Blog', href: ROUTES.BLOG },
  { name: 'Contact', href: ROUTES.CONTACT },
];
