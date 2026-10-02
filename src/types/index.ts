export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  badge?: string;
  shortDesc: string;
  description?: string;
  fullDesc?: string;
  iconName?: string;
  deliverables?: string[];
  techStack?: string[];
  features?: string[];
  metrics?: string;
  benefits?: string[];
  process?: ServiceProcessStep[];
  faqs?: ServiceFAQ[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  shortDesc: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  technologies?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content?: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags: string[];
}

export interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  socials: Record<string, string>;
}
