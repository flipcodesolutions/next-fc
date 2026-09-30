import React from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-32 px-4 bg-[#F7F8F8]">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-white border border-[#E5E7E9] flex items-center justify-center text-[#FF6B35] mx-auto shadow-md">
            <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '10s' }} />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#FF6B35] uppercase tracking-widest">
              Error 404
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323]">
              Page Not Found
            </h1>
            <p className="text-sm text-[#6B7070] leading-relaxed">
              The page you are looking for might have been moved, renamed, or is temporarily unavailable.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="btn-primary-orange px-6 py-3 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/services"
              className="btn-secondary-outline px-6 py-3 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
