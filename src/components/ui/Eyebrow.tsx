import React from 'react';
import StarBullet from './StarBullet';

interface EyebrowProps {
  text: string;
  className?: string;
  rotateStar?: boolean;
  variant?: 'light' | 'dark';
}

// Etiqueta monoespaciada en mayúsculas precedida por la estrella de 8 puntas
export default function Eyebrow({
  text,
  className = '',
  rotateStar = false,
  variant = 'light',
}: EyebrowProps) {
  const textColor = variant === 'dark' ? 'text-white/80' : 'text-ink';
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-label uppercase tracking-[0.08em] ${textColor} ${className}`}>
      <StarBullet size={13} rotate={rotateStar} />
      <span>{text}</span>
    </div>
  );
}
