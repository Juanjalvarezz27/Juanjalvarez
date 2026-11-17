'use client';

import React from 'react';

// Tipos de partículas atmosféricas de marca
type ParticleColor = 'poppy' | 'ice';
type ParticleType = 'dot' | 'glow' | 'star' | 'orb';
type ParticleAnimation = 'float-slow' | 'float-medium' | 'pulse' | 'none';

interface ParticleSpec {
  x: string;
  y: string;
  size: number;
  color: ParticleColor;
  type: ParticleType;
  animation?: ParticleAnimation;
  delay?: number;
  opacity?: number;
}

// Constelaciones deterministas por sección para evitar hydration mismatches en SSR
const PRESETS: Record<string, ParticleSpec[]> = {
  process: [
    // Cuadrante superior (predominio azul hielo)
    { x: '7%', y: '12%', size: 4, color: 'ice', type: 'dot', animation: 'float-slow', delay: 0 },
    { x: '16%', y: '8%', size: 24, color: 'ice', type: 'orb', animation: 'float-medium', delay: 1.5, opacity: 0.55 },
    { x: '30%', y: '20%', size: 9, color: 'poppy', type: 'star', animation: 'pulse', delay: 0.8 },
    { x: '48%', y: '10%', size: 6, color: 'ice', type: 'glow', animation: 'float-slow', delay: 2.2 },
    { x: '70%', y: '16%', size: 28, color: 'ice', type: 'orb', animation: 'float-slow', delay: 3.1, opacity: 0.5 },
    { x: '88%', y: '14%', size: 4, color: 'poppy', type: 'dot', animation: 'float-medium', delay: 1.2 },
    // Franja central alrededor de tarjetas de avance
    { x: '10%', y: '46%', size: 10, color: 'poppy', type: 'star', animation: 'float-slow', delay: 2.8 },
    { x: '24%', y: '58%', size: 5, color: 'ice', type: 'glow', animation: 'pulse', delay: 0.5 },
    { x: '66%', y: '44%', size: 22, color: 'poppy', type: 'orb', animation: 'float-medium', delay: 1.8, opacity: 0.5 },
    { x: '86%', y: '50%', size: 4, color: 'ice', type: 'dot', animation: 'float-slow', delay: 3.4 },
    // Cuadrante inferior y puente hacia FAQ (predominio naranja/rojo poppy)
    { x: '6%', y: '82%', size: 6, color: 'ice', type: 'glow', animation: 'float-medium', delay: 2.0 },
    { x: '22%', y: '88%', size: 4, color: 'poppy', type: 'dot', animation: 'float-slow', delay: 0.4 },
    { x: '38%', y: '76%', size: 30, color: 'poppy', type: 'orb', animation: 'float-slow', delay: 1.6, opacity: 0.55 },
    { x: '58%', y: '84%', size: 9, color: 'ice', type: 'star', animation: 'pulse', delay: 2.5 },
    { x: '76%', y: '78%', size: 6, color: 'poppy', type: 'glow', animation: 'float-slow', delay: 0.9 },
    { x: '92%', y: '86%', size: 24, color: 'poppy', type: 'orb', animation: 'float-medium', delay: 2.7, opacity: 0.5 },
  ],
  faq: [
    // Cuadrante izquierdo (sobre la tarjeta de contacto sticky)
    { x: '8%', y: '14%', size: 28, color: 'poppy', type: 'orb', animation: 'float-slow', delay: 0.6, opacity: 0.55 },
    { x: '15%', y: '30%', size: 4, color: 'poppy', type: 'dot', animation: 'pulse', delay: 1.1 },
    { x: '24%', y: '18%', size: 9, color: 'ice', type: 'star', animation: 'float-medium', delay: 2.3 },
    { x: '34%', y: '40%', size: 6, color: 'poppy', type: 'glow', animation: 'float-slow', delay: 0.3 },
    { x: '44%', y: '16%', size: 22, color: 'ice', type: 'orb', animation: 'float-slow', delay: 3.0, opacity: 0.5 },
    // Cuadrante derecho (alrededor de las preguntas desplegables)
    { x: '64%', y: '24%', size: 4, color: 'ice', type: 'dot', animation: 'float-medium', delay: 1.4 },
    { x: '78%', y: '12%', size: 10, color: 'poppy', type: 'star', animation: 'pulse', delay: 2.0 },
    { x: '90%', y: '32%', size: 5, color: 'ice', type: 'glow', animation: 'float-slow', delay: 0.7 },
    { x: '9%', y: '70%', size: 6, color: 'ice', type: 'glow', animation: 'float-medium', delay: 2.6 },
    { x: '26%', y: '84%', size: 26, color: 'poppy', type: 'orb', animation: 'float-slow', delay: 1.9, opacity: 0.55 },
    { x: '50%', y: '76%', size: 4, color: 'poppy', type: 'dot', animation: 'pulse', delay: 0.2 },
    { x: '72%', y: '80%', size: 30, color: 'ice', type: 'orb', animation: 'float-medium', delay: 2.8, opacity: 0.5 },
    { x: '87%', y: '68%', size: 9, color: 'poppy', type: 'star', animation: 'float-slow', delay: 1.3 },
    { x: '94%', y: '86%', size: 4, color: 'ice', type: 'dot', animation: 'float-medium', delay: 0.8 },
  ],
  services: [
    { x: '6%', y: '16%', size: 26, color: 'ice', type: 'orb', animation: 'float-slow', delay: 1.0, opacity: 0.5 },
    { x: '18%', y: '10%', size: 4, color: 'poppy', type: 'dot', animation: 'pulse', delay: 2.2 },
    { x: '32%', y: '24%', size: 9, color: 'ice', type: 'star', animation: 'float-medium', delay: 0.5 },
    { x: '50%', y: '12%', size: 6, color: 'ice', type: 'glow', animation: 'float-slow', delay: 1.7 },
    { x: '72%', y: '20%', size: 24, color: 'poppy', type: 'orb', animation: 'float-medium', delay: 2.9, opacity: 0.5 },
    { x: '88%', y: '14%', size: 4, color: 'ice', type: 'dot', animation: 'float-slow', delay: 0.3 },
    { x: '12%', y: '68%', size: 8, color: 'poppy', type: 'star', animation: 'pulse', delay: 1.5 },
    { x: '26%', y: '84%', size: 6, color: 'poppy', type: 'glow', animation: 'float-slow', delay: 2.4 },
    { x: '54%', y: '76%', size: 28, color: 'ice', type: 'orb', animation: 'float-slow', delay: 0.9, opacity: 0.5 },
    { x: '76%', y: '82%', size: 4, color: 'ice', type: 'dot', animation: 'float-medium', delay: 2.1 },
    { x: '90%', y: '76%', size: 22, color: 'poppy', type: 'orb', animation: 'float-medium', delay: 1.1, opacity: 0.55 },
  ],
  statement: [
    { x: '10%', y: '20%', size: 4, color: 'ice', type: 'dot', animation: 'float-slow', delay: 0.4 },
    { x: '26%', y: '14%', size: 26, color: 'ice', type: 'orb', animation: 'float-medium', delay: 1.6, opacity: 0.5 },
    { x: '44%', y: '26%', size: 9, color: 'poppy', type: 'star', animation: 'pulse', delay: 2.5 },
    { x: '72%', y: '16%', size: 24, color: 'poppy', type: 'orb', animation: 'float-slow', delay: 0.8, opacity: 0.55 },
    { x: '88%', y: '22%', size: 6, color: 'ice', type: 'glow', animation: 'float-medium', delay: 2.0 },
    { x: '14%', y: '74%', size: 28, color: 'poppy', type: 'orb', animation: 'float-slow', delay: 1.2, opacity: 0.55 },
    { x: '34%', y: '82%', size: 5, color: 'poppy', type: 'dot', animation: 'pulse', delay: 0.7 },
    { x: '60%', y: '70%', size: 8, color: 'ice', type: 'star', animation: 'float-slow', delay: 2.7 },
    { x: '82%', y: '78%', size: 22, color: 'ice', type: 'orb', animation: 'float-medium', delay: 1.4, opacity: 0.5 },
  ],
  hero: [
    { x: '14%', y: '22%', size: 24, color: 'ice', type: 'orb', animation: 'float-slow', delay: 1.0, opacity: 0.5 },
    { x: '28%', y: '36%', size: 4, color: 'ice', type: 'dot', animation: 'pulse', delay: 2.0 },
    { x: '40%', y: '18%', size: 8, color: 'poppy', type: 'star', animation: 'float-medium', delay: 0.6 },
    { x: '66%', y: '28%', size: 24, color: 'poppy', type: 'orb', animation: 'float-slow', delay: 1.8, opacity: 0.5 },
    { x: '82%', y: '42%', size: 5, color: 'ice', type: 'glow', animation: 'float-slow', delay: 2.4 },
  ],
  default: [
    { x: '14%', y: '18%', size: 4, color: 'poppy', type: 'dot', animation: 'float-slow', delay: 0.5 },
    { x: '32%', y: '28%', size: 24, color: 'ice', type: 'orb', animation: 'float-medium', delay: 1.5, opacity: 0.5 },
    { x: '68%', y: '22%', size: 8, color: 'poppy', type: 'star', animation: 'pulse', delay: 2.2 },
    { x: '86%', y: '32%', size: 6, color: 'ice', type: 'glow', animation: 'float-slow', delay: 0.9 },
    { x: '26%', y: '74%', size: 26, color: 'poppy', type: 'orb', animation: 'float-slow', delay: 1.8, opacity: 0.55 },
    { x: '78%', y: '80%', size: 22, color: 'ice', type: 'orb', animation: 'float-medium', delay: 2.6, opacity: 0.5 },
  ],
};

// Componente de atmósfera de partículas de color flotantes optimizado por GPU
export default function ParticleAtmosphere({
  variant = 'default',
  className = '',
}: {
  variant?: 'statement' | 'services' | 'process' | 'faq' | 'hero' | 'default';
  className?: string;
}) {
  const particles = PRESETS[variant] || PRESETS.default;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {particles.map((p, idx) => {
        const isPoppy = p.color === 'poppy';

        // Animación CSS con retardo individual para evitar sincronización rígida
        const animClass =
          p.animation === 'float-slow'
            ? 'animate-float-slow'
            : p.animation === 'float-medium'
            ? 'animate-float-medium'
            : p.animation === 'pulse'
            ? 'animate-pulse'
            : '';

        const animStyle: React.CSSProperties = {
          left: p.x,
          top: p.y,
          animationDelay: p.delay ? `${p.delay}s` : '0s',
          opacity: p.opacity ?? 1,
        };

        if (p.type === 'orb') {
          return (
            <span
              key={idx}
              style={{
                ...animStyle,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundImage: isPoppy
                  ? 'radial-gradient(circle, rgba(255, 61, 20, 0.48) 0%, rgba(255, 61, 20, 0.16) 48%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(2, 132, 199, 0.45) 0%, rgba(56, 189, 248, 0.16) 48%, transparent 70%)',
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[1px] will-change-transform ${animClass}`}
            />
          );
        }

        if (p.type === 'star') {
          return (
            <span
              key={idx}
              style={{
                ...animStyle,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center will-change-transform ${animClass} ${
                isPoppy ? 'text-[#FF3D14]' : 'text-[#0284C7]'
              }`}
            >
              <svg
                viewBox="0 0 16 16"
                className="w-full h-full"
                fill="currentColor"
                style={{
                  filter: isPoppy
                    ? 'drop-shadow(0 0 4px rgba(255, 61, 20, 0.55))'
                    : 'drop-shadow(0 0 4px rgba(2, 132, 199, 0.5))',
                }}
              >
                <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5Z" />
              </svg>
            </span>
          );
        }

        if (p.type === 'glow') {
          return (
            <span
              key={idx}
              style={{
                ...animStyle,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform ${animClass} ${
                isPoppy
                  ? 'bg-gradient-to-tr from-[#FF3D14] to-[#FF8C66] shadow-[0_0_10px_rgba(255,61,20,0.65)]'
                  : 'bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] shadow-[0_0_10px_rgba(2,132,199,0.6)]'
              }`}
            />
          );
        }

        // Tipo 'dot' básico
        return (
          <span
            key={idx}
            style={{
              ...animStyle,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform ${animClass} ${
              isPoppy
                ? 'bg-[#FF3D14] shadow-[0_0_7px_rgba(255,61,20,0.55)]'
                : 'bg-[#0284C7] shadow-[0_0_7px_rgba(2,132,199,0.55)]'
            }`}
          />
        );
      })}
    </div>
  );
}
