import React from 'react';

interface MotionPillProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

// Píldora decorativa con degradado cinemático motion blur y desplazamiento sutil
export default function MotionPill({
  width = 64,
  height = 24,
  className = '',
  style = {},
}: MotionPillProps) {
  const widthStyle = typeof width === 'number' ? `${width}px` : width;
  const heightStyle = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`relative inline-block overflow-hidden rounded-full shrink-0 select-none ${className}`}
      style={{
        width: widthStyle,
        height: heightStyle,
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Capa de fondo con degradado horizontal continuo */}
      <div 
        className="absolute inset-0 rounded-full animate-motion-gradient"
        style={{
          background: 'linear-gradient(90deg, #1a0500 0%, #FF3D14 45%, #FFB36B 60%, #1a0500 100%)',
          backgroundSize: '200% 100%',
        }}
      />

      {/* Capa desenfocada interna que simula estela y volumen lumínico */}
      <div 
        className="absolute inset-0 rounded-full blur-[7px] opacity-85 animate-motion-gradient"
        style={{
          background: 'linear-gradient(90deg, #1a0500 0%, #FF3D14 45%, #FFB36B 60%, #1a0500 100%)',
          backgroundSize: '200% 100%',
        }}
      />

      {/* Reflejo superior para simular cristal óptico */}
      <div 
        className="absolute inset-x-0 top-0 h-[45%] rounded-t-full bg-white/20 pointer-events-none"
      />

      {/* Micro-grano superpuesto para textura editorial */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
