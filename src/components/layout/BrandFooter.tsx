import React from 'react';
import Link from 'next/link';
import FlipcodeLogo from '@/components/ui/FlipcodeLogo';
import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function BrandFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#202426] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid (5 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1: Brand Info (2 cols on large) */}
          <div className="lg:col-span-2 space-y-5">
            <FlipcodeLogo variant="light" size="md" />
            
            <p className="text-sm text-[#A0A4A6] leading-relaxed max-w-sm">
              Flipcode Solutions Private Limited is a full-stack IT engineering firm specialized in building robust, scalable web applications, SaaS platforms, enterprise systems, and custom digital products.
            </p>

            <div className="space-y-2.5 text-xs text-[#A0A4A6] pt-1">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6600]" />
                <a href="mailto:contact@flipcodesolutions.com" className="hover:text-white transition-colors">
                  contact@flipcodesolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6600]" />
                <a href="tel:+919979404044" className="hover:text-white transition-colors">
                  +91 99794 04044
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                <span>Nr. Panama Sales, Dalmill Road, Surendranagar, Gujarat 363001, India</span>
              </div>
            </div>

            {/* Social Links as clean SVGs */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2A2E30] hover:bg-[#FF6600] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2A2E30] hover:bg-[#FF6600] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2A2E30] hover:bg-[#FF6600] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A4A6]">
              <li><Link href="#services" className="hover:text-[#FF6600] transition-colors">Web App Development</Link></li>
              <li><Link href="#services" className="hover:text-[#FF6600] transition-colors">Mobile App Development</Link></li>
              <li><Link href="#services" className="hover:text-[#FF6600] transition-colors">SaaS Architecture</Link></li>
              <li><Link href="#services" className="hover:text-[#FF6600] transition-colors">Custom Software</Link></li>
              <li><Link href="#services" className="hover:text-[#FF6600] transition-colors">eCommerce Solutions</Link></li>
              <li><Link href="#services" className="hover:text-[#FF6600] transition-colors">Cloud &amp; Microservices</Link></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A4A6]">
              <li><Link href="#solutions" className="hover:text-[#FF6600] transition-colors">SaaS Platforms</Link></li>
              <li><Link href="#solutions" className="hover:text-[#FF6600] transition-colors">Business Management (ERP)</Link></li>
              <li><Link href="#solutions" className="hover:text-[#FF6600] transition-colors">Customer &amp; Partner Portals</Link></li>
              <li><Link href="#solutions" className="hover:text-[#FF6600] transition-colors">Booking &amp; Scheduling</Link></li>
              <li><Link href="#solutions" className="hover:text-[#FF6600] transition-colors">Subscription &amp; Billing</Link></li>
              <li><Link href="#solutions" className="hover:text-[#FF6600] transition-colors">Multi-Vendor Marketplaces</Link></li>
            </ul>
          </div>

          {/* Col 4: Technologies & Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A4A6]">
              <li><Link href="/about" className="hover:text-[#FF6600] transition-colors">About Us</Link></li>
              <li><Link href="/our-work" className="hover:text-[#FF6600] transition-colors">Our Work</Link></li>
              <li><Link href="/career" className="hover:text-[#FF6600] transition-colors">Career</Link></li>
              <li><Link href="/blog" className="hover:text-[#FF6600] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF6600] transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A4A6]">
          <p>© {currentYear} Flipcode Solutions Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Security Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
