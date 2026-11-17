'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'motion/react';
import { Container, Button, MotionPill, ParticleAtmosphere } from '../ui';
import HeroVisual from './HeroVisual';

// Carga diferida en cliente del elemento 3D isométrico sin SSR
const HeroSystem3D = dynamic(() => import('./HeroSystem3D'), { ssr: false });

// Sección Hero cinematográfica con titular editorial en 3 líneas, degradado cromático y objeto 3D
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Curva de animación suave sin máscaras ni recorte de glifos
  const lineTransition = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: '0.35em', filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: {
      duration: 0.8,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section 
      id="inicio"
      className="relative w-full max-w-full min-h-[100svh] min-h-[640px] max-h-[1100px] [@media(max-height:760px)]:min-h-0 [@media(max-height:500px)]:min-h-0 rounded-b-[48px] overflow-hidden pt-24 sm:pt-28 pb-[clamp(120px,calc(15vw+32px),240px)] flex flex-col justify-between"
      style={{
        background: 'linear-gradient(180deg, #ECECEA 0%, #ECECEA 70%, #D2D2CF 100%)'
      }}
    >
      {/* 1. Fondo de estela lumínica en la mitad derecha a la altura de la base 3D */}
      <HeroVisual />

      {/* Atmósfera de partículas flotantes en azul y rojo */}
      <ParticleAtmosphere variant="hero" />

      {/* Resplandor sutil azul hielo en la esquina superior izquierda para equilibrar temperatura */}
      <div 
        className="absolute top-10 left-0 -translate-x-1/3 w-[520px] h-[380px] rounded-full bg-gradient-to-br from-[#38BDF8]/20 via-[#BFE0FF]/14 to-transparent blur-[90px] pointer-events-none mix-blend-multiply -z-0" 
        aria-hidden="true" 
      />

      {/* 2. Contenido principal estructurado con retícula de 12 columnas en desktop */}
      <Container className="relative z-20 flex-grow flex flex-col justify-center my-auto w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center w-full">
          
          {/* Columna de contenido editorial (cols 1–8 en desktop) */}
          <div className="xl:col-span-8 flex flex-col items-start text-left relative z-20 w-full min-w-0 xl:min-w-max">
            
            {/* Eyebrow con indicador de disponibilidad en tiempo real */}
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex flex-wrap items-center gap-2.5 font-mono text-label text-ink mb-5"
            >
              <span className="font-semibold uppercase tracking-[0.08em]">
                Ingeniero full-stack · Trujillo, VE
              </span>
              <span className="hidden sm:inline text-line">•</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface/80 border border-line">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-ink-soft uppercase tracking-wider">
                  Disponible para proyectos
                </span>
              </span>
            </motion.div>

            {/* Titular H1 editorial en 3 líneas: ink, muted-strong con MotionPill, y autónomos en degradado */}
            <h1 className="font-display font-bold text-[clamp(2.4rem,6.6vw,7.5rem)] tracking-[-0.045em] leading-[0.92] select-none text-left w-full xl:w-max [text-wrap:balance]">
              
              {/* Línea 1: ink */}
              <motion.span 
                {...lineTransition(0)}
                className="block text-ink whitespace-normal sm:whitespace-nowrap"
              >
                Sistemas reales.
              </motion.span>

              {/* Línea 2: muted-strong (#77777C) con MotionPill en línea */}
              <motion.span 
                {...lineTransition(0.1)}
                className="block text-muted-strong whitespace-nowrap mt-[0.05em]"
              >
                <span>Negocios</span>
                <span 
                  className="inline-flex align-middle ml-[0.25em] rounded-full overflow-hidden shrink-0 shadow-xs"
                  style={{
                    width: '2.2em',
                    height: '0.62em',
                  }}
                  aria-hidden="true"
                >
                  <MotionPill width={120} height={34} className="w-full h-full" />
                </span>
              </motion.span>

              {/* Línea 3: autónomos. con sangría reducida en tablet y completa en desktop */}
              <motion.span 
                {...lineTransition(0.2)}
                className="block text-left pl-0 sm:pl-[clamp(24px,4vw,60px)] xl:pl-[clamp(40px,7vw,120px)] whitespace-nowrap mt-[0.05em]"
              >
                <span className="hero-gradient-text">
                  autónomos.
                </span>
              </motion.span>

            </h1>

            {/* Subtítulo editorial equilibrado */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-body-lg text-ink-soft max-w-[500px] font-normal leading-relaxed mt-5 mb-7"
            >
              Desarrollo software de gestión a medida, plataformas web de alta conversión y automatizaciones que te devuelven el control operativo de tu negocio.
            </motion.p>

            {/* Fila de llamadas a la acción (CTAs): apiladas en <480px, horizontales desde 480px */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 w-full xs:w-auto"
            >
              <a 
                href="https://wa.me/584129164371?text=Hola%20Juan,%20vi%20tu%20portafolio%20y%20quiero%20cotizar%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto"
              >
                <Button variant="primary" className="w-full xs:w-auto justify-center">
                  Iniciar proyecto
                </Button>
              </a>

              <a href="#proyectos" className="w-full xs:w-auto">
                <Button variant="outline" className="w-full xs:w-auto justify-center">
                  Ver proyectos
                </Button>
              </a>
            </motion.div>

            {/* Elemento 3D en viewports menores a 1280px debajo de los CTAs */}
            <div className="w-full mt-10 xl:hidden flex justify-center min-h-[300px]">
              <HeroSystem3D isMobile={true} />
            </div>

          </div>

          {/* Columna derecha en desktop (≥1280px): escena centrada en contenedor de altura fija */}
          <div className="hidden xl:flex xl:col-span-4 h-[460px] items-center justify-center relative self-center select-none pointer-events-auto">
            <HeroSystem3D />
          </div>

        </div>
      </Container>

      {/* 3. Wordmark gigante "álvarez" posicionado en el borde inferior por detrás de los CTAs */}
      <div 
        className="absolute bottom-0 inset-x-0 w-full max-w-full text-center pointer-events-none select-none z-0 translate-y-[42%] overflow-hidden"
        aria-hidden="true"
      >
        <span 
          className="font-display font-bold text-[clamp(4.5rem,28vw,22vw)] xl:text-[21vw] tracking-[-0.06em] leading-none block whitespace-nowrap bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent"
          style={{
            filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.08)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.04))'
          }}
        >
          álvarez
        </span>
      </div>

    </section>
  );
}
