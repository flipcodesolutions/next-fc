'use client';

import React, { useEffect, useRef, useState } from 'react';

export type AnimationVariant =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleIn'
  | 'blurReveal'
  | 'fadeIn';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 500,
  threshold = 0.12,
  className = '',
  as: Component = 'div',
  style = {},
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Check if element is already in viewport
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(() => setIsVisible(true));
      if (once) return;
    }

    if (!('IntersectionObserver' in window)) {
      requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px 40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getVariantStyles = (): { initial: React.CSSProperties; animate: React.CSSProperties } => {
    switch (variant) {
      case 'fadeUp':
        return {
          initial: { opacity: 0, transform: 'translate3d(0, 28px, 0)' },
          animate: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        };
      case 'fadeDown':
        return {
          initial: { opacity: 0, transform: 'translate3d(0, -28px, 0)' },
          animate: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        };
      case 'fadeLeft':
        return {
          initial: { opacity: 0, transform: 'translate3d(-28px, 0, 0)' },
          animate: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        };
      case 'fadeRight':
        return {
          initial: { opacity: 0, transform: 'translate3d(28px, 0, 0)' },
          animate: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        };
      case 'scaleIn':
        return {
          initial: { opacity: 0, transform: 'scale3d(0.94, 0.94, 1)' },
          animate: { opacity: 1, transform: 'scale3d(1, 1, 1)' },
        };
      case 'blurReveal':
        return {
          initial: { opacity: 0, filter: 'blur(8px)', transform: 'translate3d(0, 16px, 0)' },
          animate: { opacity: 1, filter: 'blur(0px)', transform: 'translate3d(0, 0, 0)' },
        };
      case 'fadeIn':
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        };
    }
  };

  const { initial, animate } = getVariantStyles();

  const transitionStyle: React.CSSProperties = {
    transitionProperty: 'opacity, transform, filter',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform',
    ...(isVisible ? animate : initial),
    ...style,
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={transitionStyle}
      data-animated={isVisible ? 'true' : 'false'}
    >
      {children}
    </Component>
  );
}
