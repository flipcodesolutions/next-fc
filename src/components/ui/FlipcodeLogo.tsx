import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FlipcodeLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export default function FlipcodeLogo({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}: FlipcodeLogoProps) {
  const dimensions = {
    sm: { width: 150, height: 32 },
    md: { width: 200, height: 42 },
    lg: { width: 240, height: 50 },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center group ${className} ${
        variant === 'light' ? 'brightness-110' : ''
      }`}
      aria-label="Flipcode Solutions"
    >
      <Image
        src="/images/logo.webp"
        alt={showSubtitle ? 'Flipcode Solutions Private Limited' : 'Flipcode Solutions'}
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto object-contain transition-transform group-hover:scale-[1.02] duration-200"
        priority
      />
    </Link>
  );
}
