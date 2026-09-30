import blogsData from '@/data/blogs.json';
import { BlogPost } from '@/types';

export async function getAllBlogs(): Promise<BlogPost[]> {
  return blogsData as unknown as BlogPost[];
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const blogs = await getAllBlogs();
  return blogs.find((b) => b.slug === slug);
}
