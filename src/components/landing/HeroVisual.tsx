'use client';

import React from 'react';
import Image from 'next/image';

interface HeroVisualProps {
  hasPortrait?: boolean;
  className?: string;
}

// Estela decorativa cinematográfica en CSS ubicada en la mitad derecha a la altura de la base 3D
export default function HeroVisual({
  hasPortrait = false,
  className = '',
}: HeroVisualProps) {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Contenedor de la estela aerodinámica en la mitad derecha (solo visible en desktop ≥1280px para acompañar la escena 3D) */}
      <div className="hidden xl:flex absolute top-[46%] sm:top-[48%] lg:top-[50%] left-[55%] -right-[6vw] w-[48vw] flex-col items-end animate-drift-estela opacity-75 pointer-events-none">
        
        {/* Franja 1: Rojo (#E11D12) elipse con desvanecimiento horizontal */}
        <div 
          className="w-[48vw] h-[75px] rounded-[100%]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(225, 29, 18, 0.78) 25%, rgba(225, 29, 18, 0.78) 75%, transparent 100%)',
            filter: 'blur(38px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Franja 2: Naranja (#FF3D14) elipse con solapamiento */}
        <div 
          className="w-[42vw] h-[52px] rounded-[100%] -mt-7 mr-[2vw]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 61, 20, 0.85) 20%, rgba(255, 61, 20, 0.85) 80%, transparent 100%)',
            filter: 'blur(30px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Franja 3: Ámbar (#FFB36B) elipse */}
        <div 
          className="w-[36vw] h-[34px] rounded-[100%] -mt-5 mr-[4vw]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 179, 107, 0.9) 15%, rgba(255, 179, 107, 0.9) 85%, transparent 100%)',
            filter: 'blur(24px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Franja fina de velocidad: highlight ámbar casi blanco (3px, blur 2px) */}
        <div 
          className="w-[32vw] h-[3px] rounded-[100%] -mt-5 mr-[5vw]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 252, 235, 0.95) 25%, rgba(255, 248, 220, 0.95) 75%, transparent 100%)',
            filter: 'blur(2px)',
          }}
        />
      </div>

      {/* Resplandor radial cinemático centrado para móvil/tablet (<1280px) detrás del elemento 3D */}
      <div 
        className="xl:hidden absolute left-1/2 -translate-x-1/2 top-[44%] -translate-y-1/2 w-[340px] sm:w-[440px] h-[300px] rounded-full pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(255, 61, 20, 0.28) 0%, rgba(225, 29, 18, 0.14) 45%, transparent 70%)',
          filter: 'blur(36px)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Slot preparado para /public/hero-portrait.png si se añade en el futuro */}
      {hasPortrait && (
        <div className="absolute bottom-0 right-10 w-[380px] h-[520px] hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/hero-portrait.png"
              alt="Juan Álvarez"
              fill
              className="object-contain object-bottom mask-[linear-gradient(to_bottom,black_75%,transparent_100%)]"
              priority
            />
          </div>
        </div>
      )}

      {/* Capa de grano sutil para textura editorial integrada */}
      <div 
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
