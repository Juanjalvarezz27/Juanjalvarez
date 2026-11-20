import React from 'react';
import StarBullet from './StarBullet';

interface EyebrowProps {
  text: string;
  className?: string;
  rotateStar?: boolean;
  variant?: 'light' | 'dark';
}

// Etiqueta tipo píldora editorial monoespaciada precedida por la estrella de 8 puntas
export default function Eyebrow({
  text,
  className = '',
  rotateStar = false,
  variant = 'light',
}: EyebrowProps) {
  const isDark = variant === 'dark';
  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[11px] font-semibold uppercase tracking-[0.08em] select-none shadow-2xs transition-all ${
        isDark
          ? 'bg-white/[0.06] border border-white/12 text-white/90 backdrop-blur-xs'
          : 'bg-black/[0.035] border border-black/[0.07] text-ink hover:border-black/15 backdrop-blur-xs'
      } ${className}`}
    >
      <span className="text-accent flex items-center justify-center shrink-0">
        <StarBullet size={12} rotate={rotateStar} />
      </span>
      <span>{text}</span>
    </div>
  );
}
