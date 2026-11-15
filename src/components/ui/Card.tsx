import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'accent' | 'ice';
  children: React.ReactNode;
  className?: string;
}

// Tarjeta estructural con radio de 28px y variantes de contraste
export default function Card({
  variant = 'light',
  children,
  className = '',
  ...props
}: CardProps) {
  const base = "rounded-card p-6 sm:p-8 transition-all duration-300 border";

  const variants = {
    light: "bg-surface text-ink border-line",
    dark: "bg-ink text-white border-line-dark",
    accent: "bg-accent text-white border-transparent",
    ice: "bg-ice text-ink border-line",
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
