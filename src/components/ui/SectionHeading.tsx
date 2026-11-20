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
  highlight?: 'gradient' | 'accent' | 'ice' | 'muted';
}

// Encabezado editorial dinámico con aura lumínica, cápsula técnica y degradado cinético
export default function SectionHeading({
  part1,
  part2,
  eyebrow,
  subtitle,
  align = 'left',
  className = '',
  rotateStar = false,
  variant = 'light',
  highlight = 'gradient',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = variant === 'dark';

  // Selección de estilo tipográfico para el fragmento destacado
  const getHighlightClass = () => {
    switch (highlight) {
      case 'gradient':
        return 'hero-gradient-text inline-block';
      case 'accent':
        return 'text-accent';
      case 'ice':
        return 'text-ice';
      case 'muted':
      default:
        return isDark ? 'text-white/60' : 'text-muted';
    }
  };

  return (
    <div className={`relative flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      
      {/* Resplandor ambiental de fondo para aportar profundidad y vida a la sección */}
      <div 
        className={`absolute -top-10 ${isCenter ? 'left-1/2 -translate-x-1/2' : 'left-0 -translate-x-1/4'} w-[400px] sm:w-[520px] h-[160px] rounded-full ${
          isDark 
            ? 'bg-gradient-to-r from-accent/15 via-[#38BDF8]/10 to-transparent blur-[90px]'
            : 'bg-gradient-to-r from-accent/12 via-[#38BDF8]/12 to-transparent blur-[85px]'
        } pointer-events-none -z-0`}
        aria-hidden="true"
      />

      {eyebrow && (
        <Eyebrow text={eyebrow} rotateStar={rotateStar} variant={variant} className="relative z-10" />
      )}

      <h2 className="relative z-10 font-display font-semibold text-display-md sm:text-display-lg tracking-[-0.045em] leading-[1.05] [text-wrap:balance]">
        <span className={`block sm:inline ${isDark ? 'text-white' : 'text-ink'}`}>{part1}</span>{' '}
        <span className={getHighlightClass()}>{part2}</span>
      </h2>

      {subtitle && (
        <p className={`relative z-10 text-body-lg max-w-[580px] font-normal leading-relaxed ${isDark ? 'text-white/70' : 'text-ink-soft'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
