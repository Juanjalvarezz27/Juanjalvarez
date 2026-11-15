import React from 'react';
import MotionPill from './MotionPill';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'accent' | 'white';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  showMotionPill?: boolean;
}

// Botón de interacción del sistema con variantes primary, outline, accent y white
export default function Button({
  variant = 'primary',
  children,
  className = '',
  icon,
  leftIcon,
  showMotionPill = true,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-medium text-body px-6 py-3.5 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none group";

  const variants = {
    primary: "bg-ink text-white hover:bg-[#1C1C1F] shadow-sm",
    outline: "bg-transparent text-ink border border-line hover:border-ink",
    accent: "bg-accent text-white hover:bg-accent-deep shadow-sm",
    white: "bg-white text-ink hover:bg-white/90 shadow-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {(variant === 'primary' || variant === 'white') && showMotionPill && (
        <MotionPill width={24} height={12} className="transition-transform group-hover:scale-105" />
      )}
      {leftIcon && <span className="shrink-0 inline-flex items-center">{leftIcon}</span>}
      <span className="inline-flex items-center justify-center gap-2">{children}</span>
      {icon && <span className="shrink-0 transition-transform group-hover:translate-x-0.5 inline-flex items-center">{icon}</span>}
    </button>
  );
}
