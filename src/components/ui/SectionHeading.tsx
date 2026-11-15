import React from 'react';
import Eyebrow from './Eyebrow';

interface SectionHeadingProps {
  part1: string;
  part2: string;
  eyebrow?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  rotateStar?: boolean;
  variant?: 'light' | 'dark';
}

// Encabezado editorial en dos tonos con etiqueta de entrada y subtítulo opcional
export default function SectionHeading({
  part1,
  part2,
  eyebrow,
  subtitle,
  align = 'left',
  className = '',
  rotateStar = false,
  variant = 'light',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = variant === 'dark';

  return (
    <div className={`flex flex-col gap-3.5 ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <Eyebrow text={eyebrow} rotateStar={rotateStar} variant={variant} />
      )}
      <h2 className="font-display font-semibold text-display-md sm:text-display-lg tracking-[-0.045em] leading-[0.92]">
        <span className={isDark ? 'text-white' : 'text-ink'}>{part1}</span>{' '}
        <span className={isDark ? 'text-white/60' : 'text-muted'}>{part2}</span>
      </h2>
      {subtitle && (
        <p className={`text-body-lg max-w-[560px] font-normal leading-relaxed mt-1 ${isDark ? 'text-white/65' : 'text-ink-soft'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
