import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl gap-2 cursor-pointer shadow-xs';

  const variantStyles = {
    primary: 'btn-primary-orange shadow-sm',
    secondary: 'btn-secondary-outline',
    outline: 'border border-[#E5E7E9] text-[#202323] hover:border-[#FF6B35] hover:text-[#FF6B35] bg-white',
    white: 'bg-white text-[#202323] hover:bg-[#F8FAFC] hover:text-[#FF6B35] shadow-md',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
