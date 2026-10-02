'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FlipcodeLogo from '@/components/ui/FlipcodeLogo';
import servicesData from '@/data/services.json';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Code2,
  Smartphone,
  Layers,
  Server,
  ShoppingBag,
  Palette,
  Users2,
  CloudCog,
  Cpu,
  Network,
  FileText,
  TrendingUp,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Smartphone,
  Layers,
  Server,
  ShoppingBag,
  Palette,
  Users2,
  CloudCog,
  Cpu,
  Network,
  FileText,
  TrendingUp,
};

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prevPathnameRef = useRef(pathname);

  // Close menus when route changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setServicesDropdownOpen(false);
      setMobileMenuOpen(false);
      setMobileServicesExpanded(false);
    }
  }, [pathname]);

  // Handle outside click & escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const isServicesActive = pathname.startsWith('/services');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', isDropdown: true },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Career', href: '/career' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7E9] py-3.5'
          : 'bg-white border-b border-[#E5E7E9] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <FlipcodeLogo variant="dark" size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative py-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 relative py-1 cursor-pointer group ${
                        isServicesActive
                          ? 'text-[#FF6B35]'
                          : 'text-[#303333] hover:text-[#FF6B35]'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#FF6B35]' : 'text-[#73787A]'
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#FF6B35] transition-all duration-200 ${
                          isServicesActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </button>

                    {/* Mega Dropdown Menu */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[760px] xl:w-[860px] bg-white rounded-2xl border border-[#E5E7E9] shadow-2xl transition-all duration-200 origin-top overflow-hidden z-50 ${
                        servicesDropdownOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100 visible'
                          : 'opacity-0 -translate-y-2 pointer-events-none scale-98 invisible'
                      }`}
                    >
                      {/* Top Header Strip inside Dropdown */}
                      <div className="bg-[#FAFBFB] px-6 py-3 border-b border-[#E5E7E9] flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#5A5D5C] uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
                          <span>Enterprise Software &amp; IT Capabilities</span>
                        </div>
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-xs font-bold text-[#FF6B35] hover:text-[#202323] inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* Services Grid (3 Columns) */}
                      <div className="p-6 grid grid-cols-3 gap-3">
                        {servicesData.map((service) => {
                          const Icon = (service.iconName && iconMap[service.iconName]) || Code2;
                          const isCurrent = pathname === `/services/${service.slug}`;

                          return (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              onClick={() => setServicesDropdownOpen(false)}
                              className={`group p-3 rounded-xl border transition-all duration-150 flex items-start gap-3 ${
                                isCurrent
                                  ? 'bg-[#FF6B35]/10 border-[#FF6B35]/40 shadow-xs'
                                  : 'bg-white border-transparent hover:border-[#E5E7E9] hover:bg-[#F7F8F8]'
                              }`}
                            >
                              <div className="w-9 h-9 rounded-lg bg-[#F7F8F8] group-hover:bg-[#FF6B35] border border-[#E5E7E9] group-hover:border-[#FF6B35] flex items-center justify-center text-[#FF6B35] group-hover:text-white transition-all duration-200 flex-shrink-0 mt-0.5 shadow-2xs">
                                <Icon className="w-4 h-4" />
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1">
                                  <h4 className="text-xs font-bold text-[#202323] group-hover:text-[#FF6B35] transition-colors truncate">
                                    {service.title}
                                  </h4>
                                </div>
                                <p className="text-[11px] text-[#73787A] line-clamp-1 mt-0.5">
                                  {service.badge || service.shortDesc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Dropdown Bottom Banner */}
                      <div className="bg-[#202323] px-6 py-3.5 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#FF6B35]">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white">Need a Custom Software Solution?</p>
                            <p className="text-[11px] text-[#A0A4A6]">Get a free technical scoping &amp; architecture review session.</p>
                          </div>
                        </div>

                        <Link
                          href="/contact"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="btn-primary-orange px-3.5 py-1.5 rounded-lg text-xs font-bold inline-flex items-center gap-1.5"
                        >
                          <span>Talk to Architects</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 group ${
                    isActive ? 'text-[#FF6B35]' : 'text-[#303333] hover:text-[#FF6B35]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#FF6B35] transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary-orange px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Link
              href="/contact"
              className="btn-primary-orange px-3.5 py-1.5 rounded-lg text-xs font-bold"
            >
              Let&apos;s Talk
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#303333] hover:bg-[#F7F8F8] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-5 border-t border-[#E5E7E9] space-y-1 bg-white animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        isServicesActive
                          ? 'bg-[#FF6B35]/10 text-[#FF6B35]'
                          : 'text-[#303333] hover:bg-[#F7F8F8] hover:text-[#FF6B35]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesExpanded ? 'rotate-180 text-[#FF6B35]' : 'text-[#73787A]'
                        }`}
                      />
                    </button>

                    {/* Mobile Services Accordion List */}
                    {mobileServicesExpanded && (
                      <div className="pl-3 pr-2 py-2 space-y-1.5 bg-[#FAFBFB] rounded-xl border border-[#E5E7E9] mx-2">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 text-xs font-bold text-[#FF6B35] bg-white rounded-lg border border-[#FF6B35]/20"
                        >
                          <span>All Services Overview</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <div className="grid grid-cols-1 gap-1 pt-1">
                          {servicesData.map((service) => {
                            const Icon = (service.iconName && iconMap[service.iconName]) || Code2;
                            const isCurrent = pathname === `/services/${service.slug}`;

                            return (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                                  isCurrent
                                    ? 'bg-[#FF6B35]/10 text-[#FF6B35] font-bold'
                                    : 'text-[#303333] hover:bg-white hover:text-[#FF6B35]'
                                }`}
                              >
                                <Icon className="w-3.5 h-3.5 text-[#FF6B35] flex-shrink-0" />
                                <span className="truncate">{service.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#FF6B35]/10 text-[#FF6B35]'
                      : 'text-[#303333] hover:bg-[#F7F8F8] hover:text-[#FF6B35]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-[#E5E7E9] flex flex-col gap-2 px-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary-orange py-2.5 text-center text-sm font-bold rounded-lg flex items-center justify-center gap-2"
              >
                <span>Let&apos;s Talk — Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
