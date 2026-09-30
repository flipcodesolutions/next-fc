import React from 'react';
import Link from 'next/link';
import FlipcodeLogo from '@/components/ui/FlipcodeLogo';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-[#202323] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Column 1: Company Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <FlipcodeLogo variant="light" size="md" />
            
            <p className="text-sm text-[#A0A4A6] leading-relaxed max-w-md">
              Flipcode Solutions Private Limited is a full-stack software development agency building reliable, scalable, and production-ready digital solutions for startups, SMEs, and growing businesses.
            </p>

            <div className="space-y-2 text-xs text-[#A0A4A6] pt-1">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6B35]" />
                <a href="mailto:contact@flipcodesolutions.com" className="hover:text-white transition-colors">
                  contact@flipcodesolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6B35]" />
                <span className="hover:text-white transition-colors">+91 (0) 80 4920 1800</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                <span>Flipcode Towers, Silicon Tech Innovation Hub, Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A4A6]">
              <li>
                <Link href="/about" className="hover:text-[#FF6B35] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-[#FF6B35] transition-colors">Our Work</Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#FF6B35] transition-colors">Career</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FF6B35] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF6B35] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A4A6]">
              <li>
                <Link href="/services#web" className="hover:text-[#FF6B35] transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="/services#mobile" className="hover:text-[#FF6B35] transition-colors">Mobile Development</Link>
              </li>
              <li>
                <Link href="/services#saas" className="hover:text-[#FF6B35] transition-colors">SaaS Development</Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="hover:text-[#FF6B35] transition-colors">eCommerce</Link>
              </li>
              <li>
                <Link href="/services#custom" className="hover:text-[#FF6B35] transition-colors">Custom Software</Link>
              </li>
              <li>
                <Link href="/services#api" className="hover:text-[#FF6B35] transition-colors">API Development</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Technologies (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Technologies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A4A6]">
              <li>
                <span className="hover:text-white transition-colors cursor-default">Laravel / PHP</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">React.js</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">Next.js</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">Node.js</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">Python / FastAPI</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">Flutter &amp; React Native</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A4A6]">
          <p>© 2026 Flipcode Solutions Private Limited. All Rights Reserved.</p>

          {/* Social Icons: LinkedIn, Facebook, Instagram, X */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-[#2C3030] hover:bg-[#FF6B35] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-[#2C3030] hover:bg-[#FF6B35] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-[#2C3030] hover:bg-[#FF6B35] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-[#2C3030] hover:bg-[#FF6B35] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
