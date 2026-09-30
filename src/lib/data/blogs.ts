import blogsData from '@/data/blogs.json';
import { BlogPost } from '@/types';

export function getBlogsStaticData(): BlogPost[] {
  return blogsData as unknown as BlogPost[];
}
