import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card-lift rounded-2xl bg-white border border-[#E5E7E9] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#FF6B35]/40 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between text-xs text-[#6B7070] mb-4">
          <span className="px-2.5 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-bold uppercase tracking-wider font-mono">
            {post.category}
          </span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold font-heading text-[#202323] mb-3 group-hover:text-[#FF6B35] transition-colors">
          <Link href={`/blog/${post.slug}`} className="hover:text-[#FF6B35] transition-colors">
            {post.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-[#6B7070] leading-relaxed mb-6">
          {post.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-[#E5E7E9] flex items-center justify-between">
        <div className="text-xs text-[#303333] font-semibold">
          {post.author.name}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-bold text-[#FF6B35] hover:text-[#202323] inline-flex items-center gap-1 transition-colors uppercase tracking-wider"
        >
          <span>Read Post</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
