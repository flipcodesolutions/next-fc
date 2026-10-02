import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = 'w-6 h-6' }: TechIconProps) {
  const norm = name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');

  switch (norm) {
    case 'reactjs':
    case 'react':
      return (
        <svg viewBox="0 0 115 100" fill="none" className={className}>
          <ellipse cx="57.5" cy="50" rx="55" ry="21" stroke="#61DAFB" strokeWidth="6" transform="rotate(0 57.5 50)" />
          <ellipse cx="57.5" cy="50" rx="55" ry="21" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 57.5 50)" />
          <ellipse cx="57.5" cy="50" rx="55" ry="21" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 57.5 50)" />
          <circle cx="57.5" cy="50" r="10" fill="#61DAFB" />
        </svg>
      );

    case 'nextjs':
    case 'next':
      return (
        <svg viewBox="0 0 180 180" fill="none" className={className}>
          <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="#FFFFFF" />
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" r="90" fill="#000000" stroke="#FFFFFF" strokeWidth="6" />
            <path
              d="M149.508 157.438L69.105 54H54V125.97H66.23V69.756L139.73 164.67C143.14 162.43 146.41 160.01 149.508 157.438Z"
              fill="url(#next-grad)"
            />
            <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
          </g>
          <defs>
            <linearGradient id="next-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#3178C6" />
          <path d="M10 13H17M13.5 13V24" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M24 16C23 14.5 21 14 19.5 14.5C18 15 18 16.5 18.5 17.5C19.5 19 24 19 24 21.5C24 23.5 22 24.5 19.5 24C18 23.5 17 22.5 17 22.5"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'vuejs':
    case 'vue':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M1.5 3.5L12 21.5L22.5 3.5H17.5L12 13L6.5 3.5H1.5Z" fill="#42B883" />
          <path d="M6.5 3.5L12 13L17.5 3.5H13.5L12 6.2L10.5 3.5H6.5Z" fill="#35495E" />
        </svg>
      );

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83" />
          <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
          <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
          <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
          <circle cx="16" cy="12" r="4" fill="#1ABCFE" />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M16 2L29 9.5V24.5L16 32L3 24.5V9.5L16 2Z" fill="#68A063" />
          <path d="M16 5.5L25.5 11V22L16 27.5L6.5 22V11L16 5.5Z" fill="#215732" />
          <path d="M11 13V19L16 22V16L21 19V13L16 10L11 13Z" fill="#83CD29" />
        </svg>
      );

    case 'laravel':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M21.5 5.5L16 2.3L10.5 5.5L16 8.7L21.5 5.5ZM16 9.4L10.5 6.2V12.6L16 15.8V9.4ZM21.5 6.2L16.7 9V15.4L21.5 12.6V6.2ZM9.5 7.1L4 4L1 5.7L6.5 8.9L9.5 7.1ZM6.5 9.7L1 6.5V13L6.5 16.2V9.7ZM9.5 8L6.7 9.6V16L9.5 14.4V8ZM15 16.5L9.5 13.3V19.7L15 22.9V16.5Z"
            fill="#FF2D20"
          />
        </svg>
      );

    case 'fastapi':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="11" fill="#009688" />
          <path d="M13 3L6 14H12L11 21L18 10H12L13 3Z" fill="#FFFFFF" />
        </svg>
      );

    case 'php':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="8" fill="#777BB4" />
          <path d="M6 11H12C14 11 15 12 15 13.5C15 15 14 16 12 16H8.5L7.5 21H5.5L6 11ZM8.8 14.2H11.5C12.5 14.2 13 13.8 13 13.5C13 13 12.5 12.6 11.5 12.6H8.5L8.8 14.2Z" fill="#FFFFFF" />
          <path d="M15 11H17.2L16 17H19C20.5 17 21.5 16 21.5 14.5C21.5 13 20.5 11 18.5 11H15ZM16.5 15.5L17.2 12.5H18.5C19.2 12.5 19.5 13 19.5 13.5C19.5 14.2 19 15.5 18 15.5H16.5Z" fill="#FFFFFF" />
          <path d="M22 11H27C28.5 11 29 12 29 13.5C29 15 28 16 26.5 16H24L23 21H21L22 11ZM24.5 14.2H26.2C27 14.2 27.5 13.8 27.5 13.5C27.5 13 27 12.6 26.2 12.6H24.2L24.5 14.2Z" fill="#FFFFFF" />
        </svg>
      );

    case 'graphql':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z"
            stroke="#E10098"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3.5 7L20.5 17M3.5 17L20.5 7M12 2V22" stroke="#E10098" strokeWidth="1.8" />
          <circle cx="12" cy="2" r="2" fill="#E10098" />
          <circle cx="20.66" cy="7" r="2" fill="#E10098" />
          <circle cx="20.66" cy="17" r="2" fill="#E10098" />
          <circle cx="12" cy="22" r="2" fill="#E10098" />
          <circle cx="3.34" cy="17" r="2" fill="#E10098" />
          <circle cx="3.34" cy="7" r="2" fill="#E10098" />
        </svg>
      );

    case 'stripeapi':
    case 'stripe':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#635BFF" />
          <path
            d="M15.5 12.6C15.5 11.7 16.3 11.2 17.6 11.2C19.3 11.2 21.2 11.8 22.4 12.5V8.5C21 7.9 19.3 7.6 17.5 7.6C13.2 7.6 10.5 9.9 10.5 13.1C10.5 18.2 17.5 17.3 17.5 19.8C17.5 20.8 16.5 21.3 15 21.3C13.2 21.3 11 20.4 9.6 19.5V23.7C11.3 24.5 13.3 24.8 15.1 24.8C19.5 24.8 22.5 22.7 22.5 19.4C22.5 13.9 15.5 14.9 15.5 12.6Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M13.5 2L3 12.5L6.8 16.3L21 2H13.5Z" fill="#02569B" />
          <path d="M13.5 12L7.5 18L11.3 21.8L17.3 15.8L13.5 12Z" fill="#0175C2" />
          <path d="M17.3 15.8L13.5 19.6L15.9 22H21L17.3 15.8Z" fill="#29B6F6" />
        </svg>
      );

    case 'reactnative':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect x="6" y="2" width="20" height="28" rx="4" stroke="#61DAFB" strokeWidth="2" fill="#1C2C35" />
          <line x1="13" y1="5" x2="19" y2="5" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="16" cy="16" rx="7" ry="2.8" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 16 16)" />
          <ellipse cx="16" cy="16" rx="7" ry="2.8" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(-30 16 16)" />
          <circle cx="16" cy="16" r="1.5" fill="#61DAFB" />
          <circle cx="16" cy="27" r="1" fill="#61DAFB" />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#336791" />
          <path
            d="M16 6C11.5 6 8.5 9 8.5 13.5C8.5 17 10 19 12 21V26H15V22H17V26H20V20.5C22 18.5 23.5 16.5 23.5 13.5C23.5 9 20.5 6 16 6ZM13.5 14C12.7 14 12 13.3 12 12.5C12 11.7 12.7 11 13.5 11C14.3 11 15 11.7 15 12.5C15 13.3 14.3 14 13.5 14ZM18.5 14C17.7 14 17 13.3 17 12.5C17 11.7 17.7 11 18.5 11C19.3 11 20 11.7 20 12.5C20 13.3 19.3 14 18.5 14Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'mongodb':
    case 'mongo':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 1.5C11.5 3 7 7.5 7 13C7 17 9.5 20.5 12 22.5C14.5 20.5 17 17 17 13C17 7.5 12.5 3 12 1.5Z"
            fill="#47A248"
          />
          <path d="M12 1.5V22.5C11.6 22.2 7 18 7 13C7 8 11.5 2.5 12 1.5Z" fill="#4BAE4F" />
          <path d="M12 6.5C12 11 10.5 15 10.5 17" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#005E86" />
          <ellipse cx="16" cy="9" rx="10" ry="3.5" stroke="#F29111" strokeWidth="2" fill="#004A6A" />
          <path d="M6 9V16C6 18 10.5 19.5 16 19.5C21.5 19.5 26 18 26 16V9" stroke="#F29111" strokeWidth="2" fill="none" />
          <path d="M6 16V23C6 25 10.5 26.5 16 26.5C21.5 26.5 26 25 26 23V16" stroke="#F29111" strokeWidth="2" fill="none" />
          <path d="M16 13L18 16H14L16 13Z" fill="#FFFFFF" />
        </svg>
      );

    case 'redis':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L2 6.5L12 11L22 6.5L12 2Z" fill="#DC382D" />
          <path d="M2 10.5L12 15L22 10.5L20 8.5L12 12.5L4 8.5L2 10.5Z" fill="#A82820" />
          <path d="M2 15.5L12 20L22 15.5L20 13.5L12 17.5L4 13.5L2 15.5Z" fill="#841E18" />
          <circle cx="12" cy="6.5" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4.5 18.5L7.5 4.5L10.5 10.5L4.5 18.5Z" fill="#FFA000" />
          <path d="M14.5 9.5L12.5 4.5L4.5 18.5L14.5 9.5Z" fill="#F57C00" />
          <path d="M19.5 18.5L16.5 7.5L4.5 18.5L12 22.5L19.5 18.5Z" fill="#FFCA28" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M11.87 2C6.87 2 7.18 4.17 7.18 4.17L7.19 6.42H12V7.17H4.55C2.17 7.17 2 9.4 2 9.4L2 12.6C2 15.17 3.5 15.02 3.5 15.02H5.08V12.78C5.08 10.22 7.22 10.27 7.22 10.27H12.06C14.5 10.27 14.5 8 14.5 8V4.73C14.5 2.5 11.87 2 11.87 2ZM9.4 3.45C9.9 3.45 10.3 3.85 10.3 4.35C10.3 4.85 9.9 5.25 9.4 5.25C8.9 5.25 8.5 4.85 8.5 4.35C8.5 3.85 8.9 3.45 9.4 3.45Z"
            fill="#3776AB"
          />
          <path
            d="M12.13 22C17.13 22 16.82 19.83 16.82 19.83L16.81 17.58H12V16.83H19.45C21.83 16.83 22 14.6 22 14.6L22 11.4C22 8.83 20.5 8.98 20.5 8.98H18.92V11.22C18.92 13.78 16.78 13.73 16.78 13.73H11.94C9.5 13.73 9.5 16 9.5 16V19.27C9.5 21.5 12.13 22 12.13 22ZM14.6 20.55C14.1 20.55 13.7 20.15 13.7 19.65C13.7 19.15 14.1 18.75 14.6 18.75C15.1 18.75 15.5 19.15 15.5 19.65C15.5 20.15 15.1 20.55 14.6 20.55Z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'aws':
    case 'amazonwebservices':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#232F3E" />
          <path d="M9 13.5L11 8.5H12.5L14.5 13.5H13.2L12.7 12H10.7L10.2 13.5H9ZM11 11H12.4L11.7 9.2L11 11Z" fill="#FFFFFF" />
          <path d="M15 8.5H16.2L17.5 12.5L18.8 8.5H20L21.3 12.5L22.6 8.5H23.8L22 13.5H20.8L19.4 9.5L18 13.5H16.8L15 8.5Z" fill="#FFFFFF" />
          <path
            d="M8 20C13 23.5 19 23.5 24 20"
            stroke="#FF9900"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path d="M22 18.5L24.5 20.2L22.5 22.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M22.5 11.5C22 10.5 20.5 10 20.5 10C20 9 19 8.5 17.5 8.5L17 9C16.5 9 16 9 15.5 9.2V7H13.5V9H11.5V7H9.5V9H7.5V7H5.5V9C4 9.2 3.5 10 3 11C2 12.5 2 14.5 3 16C5 19 8.5 19.5 13 19.5C18.5 19.5 22 16.5 22.5 12.5C23 12 22.8 11.7 22.5 11.5Z"
            fill="#2496ED"
          />
          <rect x="7.5" y="10" width="1.5" height="1.5" fill="#FFFFFF" />
          <rect x="9.5" y="10" width="1.5" height="1.5" fill="#FFFFFF" />
          <rect x="11.5" y="10" width="1.5" height="1.5" fill="#FFFFFF" />
          <rect x="13.5" y="10" width="1.5" height="1.5" fill="#FFFFFF" />
          <rect x="9.5" y="8" width="1.5" height="1.5" fill="#FFFFFF" />
          <rect x="11.5" y="8" width="1.5" height="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'wordpress':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10.5" fill="#21759B" stroke="#FFFFFF" strokeWidth="0.8" />
          <path
            d="M3.2 12C3.2 15.6 5.4 18.7 8.5 20.1L5.2 10.8C3.9 11.2 3.2 12 3.2 12ZM17.8 11.5C17.8 10.1 17.3 9.1 16.8 8.3C16.2 7.3 15.6 6.5 15.6 5.5C15.6 4.3 16.5 3.3 17.7 3.3C17.8 3.3 17.9 3.3 18 3.3C16.3 2.1 14.2 1.4 12 1.4C8.6 1.4 5.6 3 3.8 5.6C4 5.6 4.3 5.6 4.6 5.6C5.8 5.6 7.6 5.4 7.6 5.4C8.2 5.4 8.3 6.3 7.7 6.4C7.7 6.4 7 6.5 6.2 6.5L10.3 18.7L12.8 11.2L11 6.5C10.2 6.5 9.5 6.4 9.5 6.4C8.9 6.3 9 5.4 9.6 5.4C9.6 5.4 11.5 5.6 12.6 5.6C13.8 5.6 15.7 5.4 15.7 5.4C16.3 5.4 16.4 6.3 15.8 6.4C15.8 6.4 15.1 6.5 14.3 6.5L18.3 18.5C19.8 16.9 20.8 14.6 20.8 12C20.8 9.8 19.6 7.9 17.8 6.9C18.2 8.3 18.4 9.8 18.4 10.8C18.4 11.1 18.3 11.3 17.8 11.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'squarespace':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#181818" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <path
            d="M17.4 8.6L15.4 6.6C14.6 5.8 13.3 5.8 12.5 6.6L7.6 11.5C6.8 12.3 6.8 13.6 7.6 14.4L9.6 16.4C10.4 17.2 11.7 17.2 12.5 16.4L17.4 11.5C18.2 10.7 18.2 9.4 17.4 8.6ZM11.4 15.3L9.4 13.3L13.3 9.4L15.3 11.4L11.4 15.3Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    default:
      return (
        <div className={`rounded bg-white/10 flex items-center justify-center font-bold text-xs text-white ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
