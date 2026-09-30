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
    <Link href="/" className={`inline-flex items-center group ${className}`}>
      <img
        src="/images/logo.webp"
        alt="Flipcode Solutions Private Limited"
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto object-contain transition-transform group-hover:scale-[1.02] duration-200"
        style={{ width: `${dimensions.width}px` }}
      />
    </Link>
  );
}
