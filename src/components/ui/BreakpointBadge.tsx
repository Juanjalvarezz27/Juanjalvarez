'use client';

import { useState, useEffect } from 'react';

// Insignia de depuración de breakpoints solo activa en entorno de desarrollo
export default function BreakpointBadge() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Si no estamos en entorno de desarrollo, abortar
    if (process.env.NODE_ENV !== 'development') return;

    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (process.env.NODE_ENV !== 'development' || windowWidth === null) {
    return null;
  }

  // Identificación del rango de viewport
  let range = 'móvil pequeño';
  if (windowWidth >= 1920) range = 'ancho';
  else if (windowWidth >= 1280) range = 'desktop';
  else if (windowWidth >= 1024) range = 'laptop';
  else if (windowWidth >= 768) range = 'tablet';
  else if (windowWidth >= 480) range = 'móvil';

  return (
    <aside 
      aria-label="Breakpoint actual en desarrollo"
      className="fixed bottom-3 left-3 z-[9999] pointer-events-none select-none rounded-md bg-ink/90 text-white border border-white/20 px-2 py-1 font-mono text-[11px] shadow-lg backdrop-blur-xs"
    >
      <span className="font-semibold text-accent">{windowWidth}px</span>
      <span className="text-white/40 mx-1.5">·</span>
      <span className="text-white/80">{range}</span>
    </aside>
  );
}
