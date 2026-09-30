'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import FlipcodeLogo from '@/components/ui/FlipcodeLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'About Us', href: '#why-flipcode' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7E9] py-3.5'
        : 'bg-white border-b border-[#E5E7E9] py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Flipcode Logo */}
          <div className="flex-shrink-0">
            <FlipcodeLogo variant="dark" size="md" />
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#202426] hover:text-[#FF6600] transition-colors duration-150 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF6600] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right: CTA & Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="btn-orange-primary px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenContact}
              className="btn-orange-primary px-3 py-1.5 rounded-md text-xs font-semibold"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#202426] hover:bg-[#F7F8F9] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-[#E5E7E9] space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#202426] hover:text-[#FF6600] hover:bg-[#F7F8F9] rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#E5E7E9] flex flex-col gap-2.5 px-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full btn-orange-primary py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Get Started with Flipcode</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
