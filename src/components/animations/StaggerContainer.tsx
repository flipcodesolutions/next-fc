'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimationVariant } from './ScrollReveal';

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number; // ms between each child
  initialDelay?: number; // ms before first child begins
  duration?: number;
  variant?: AnimationVariant;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export default function StaggerContainer({
  children,
  staggerDelay = 90,
  initialDelay = 0,
  duration = 500,
  variant = 'fadeUp',
  threshold = 0.1,
  className = '',
  as: Component = 'div',
}: StaggerContainerProps) {
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
      return;
    }

    if (!('IntersectionObserver' in window)) {
      requestAnimationFrame(() => setIsVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
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
  }, [threshold]);

  const getTransform = () => {
    switch (variant) {
      case 'fadeUp':
        return { initial: 'translate3d(0, 24px, 0)', animate: 'translate3d(0, 0, 0)' };
      case 'fadeDown':
        return { initial: 'translate3d(0, -24px, 0)', animate: 'translate3d(0, 0, 0)' };
      case 'fadeLeft':
        return { initial: 'translate3d(-24px, 0, 0)', animate: 'translate3d(0, 0, 0)' };
      case 'fadeRight':
        return { initial: 'translate3d(24px, 0, 0)', animate: 'translate3d(0, 0, 0)' };
      case 'scaleIn':
        return { initial: 'scale3d(0.92, 0.92, 1)', animate: 'scale3d(1, 1, 1)' };
      case 'blurReveal':
        return { initial: 'translate3d(0, 16px, 0)', animate: 'translate3d(0, 0, 0)' };
      case 'fadeIn':
      default:
        return { initial: 'none', animate: 'none' };
    }
  };

  const transformMap = getTransform();

  const childrenArray = React.Children.toArray(children);

  return (
    <Component ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        const delay = initialDelay + index * staggerDelay;
        const style: React.CSSProperties = {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? transformMap.animate : transformMap.initial,
          filter: variant === 'blurReveal' ? (isVisible ? 'blur(0px)' : 'blur(6px)') : undefined,
          transitionProperty: 'opacity, transform, filter',
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: `${delay}ms`,
          willChange: 'opacity, transform',
        };

        return (
          <div key={index} style={style} className="h-full">
            {child}
          </div>
        );
      })}
    </Component>
  );
}
