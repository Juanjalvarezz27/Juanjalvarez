'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'motion/react';
import { Container, Button, MotionPill } from '../ui';
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
      className="relative w-full max-w-full min-h-[100svh] min-h-[640px] max-h-[1200px] [@media(max-height:760px)]:min-h-0 [@media(max-height:500px)]:min-h-0 rounded-b-[48px] overflow-hidden pt-28 sm:pt-32 xl:pt-28 pb-16 sm:pb-24 xl:pb-[clamp(120px,calc(15vw+32px),240px)] flex flex-col justify-between"
      style={{
        background: 'linear-gradient(180deg, #ECECEA 0%, #ECECEA 70%, #D2D2CF 100%)'
      }}
    >
      {/* 1. Fondo de estela lumínica en la mitad derecha a la altura de la base 3D */}
      <HeroVisual />

      {/* Resplandor sutil azul hielo en la esquina superior izquierda para equilibrar temperatura */}
      <div 
        className="absolute top-10 left-0 -translate-x-1/3 w-[500px] h-[360px] bg-gradient-to-br from-[#BFE0FF]/30 to-transparent blur-[120px] pointer-events-none -z-0" 
        aria-hidden="true" 
      />

      {/* 2. Contenido principal estructurado con retícula de 12 columnas en desktop */}
      <Container className="relative z-20 flex-grow flex flex-col justify-start xl:justify-center my-0 xl:my-auto w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center w-full">
          
          {/* Columna de contenido editorial: centrado en móvil y alineado a la izquierda en desktop */}
          <div className="xl:col-span-8 flex flex-col items-center text-center xl:items-start xl:text-left relative z-20 w-full min-w-0">
            
            {/* Eyebrow con indicador de disponibilidad en tiempo real */}
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex flex-col xs:flex-row items-center justify-center xl:justify-start gap-2.5 font-mono text-label text-ink mb-5 text-center"
            >
              <span className="font-semibold uppercase tracking-[0.08em]">
                Ingeniero full-stack · Trujillo, VE
              </span>
              <span className="hidden xs:inline text-line">•</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface/80 border border-line">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-ink-soft uppercase tracking-wider">
                  Disponible para proyectos
                </span>
              </span>
            </motion.div>

            {/* Titular H1 editorial en 3 líneas: ink, muted-strong con MotionPill, y autónomos en degradado */}
            <h1 className="font-display font-bold text-[clamp(2.4rem,6.6vw,7.5rem)] tracking-[-0.045em] leading-[0.92] select-none w-full flex flex-col items-center xl:items-start text-center xl:text-left">
              
              {/* Línea 1: ink */}
              <motion.div 
                {...lineTransition(0)}
                className="w-full flex items-center justify-center xl:justify-start text-ink whitespace-normal sm:whitespace-nowrap"
              >
                Sistemas reales.
              </motion.div>

              {/* Línea 2: muted-strong (#77777C) con MotionPill en línea */}
              <motion.div 
                {...lineTransition(0.1)}
                className="w-full flex items-center justify-center xl:justify-start text-muted-strong whitespace-nowrap mt-[0.05em]"
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
              </motion.div>

              {/* Línea 3: logotipo 3D redondo en el espacio editorial izquierdo + autónomos */}
              <motion.div 
                {...lineTransition(0.2)}
                className="w-full flex items-center justify-center xl:justify-start whitespace-nowrap mt-[0.05em]"
              >
                <span 
                  className="inline-flex align-middle mr-[0.22em] relative rounded-full overflow-hidden shrink-0 shadow-[0_4px_24px_-2px_rgba(255,61,20,0.32)] ring-1 ring-black/10 select-none group"
                  style={{
                    width: '0.82em',
                    height: '0.82em',
                  }}
                  aria-hidden="true"
                >
                  <Image
                    src="/brand/logo-round.png"
                    alt="Juan Álvarez"
                    fill
                    sizes="(max-width: 768px) 48px, 96px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </span>
                <span className="hero-gradient-text">
                  autónomos.
                </span>
              </motion.div>

            </h1>

            {/* Elemento 3D en viewports menores a 1280px ubicado entre el titular y el párrafo */}
            <div className="w-full my-6 sm:my-8 xl:hidden flex justify-center items-center relative z-10">
              <HeroSystem3D isMobile={true} />
            </div>

            {/* Subtítulo editorial equilibrado */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-body-lg text-ink-soft max-w-[500px] font-normal leading-relaxed text-center xl:text-left mt-2 mb-7 mx-auto xl:mx-0"
            >
              Desarrollo software de gestión a medida, plataformas web de alta conversión y automatizaciones que te devuelven el control operativo de tu negocio.
            </motion.p>

            {/* Fila de llamadas a la acción (CTAs): apiladas en <480px, horizontales desde 480px */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center xl:justify-start gap-3 w-full xs:w-auto mx-auto xl:mx-0"
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

          </div>

          {/* Columna derecha en desktop (≥1280px): escena centrada en contenedor de altura fija */}
          <div className="hidden xl:flex xl:col-span-4 h-[460px] items-center justify-center relative self-center select-none pointer-events-auto">
            <HeroSystem3D />
          </div>

        </div>
      </Container>

      {/* 3. Wordmark gigante "álvarez" en naranja de marca posicionado en el borde inferior */}
      <div 
        className="absolute bottom-0 inset-x-0 w-full max-w-full text-center pointer-events-none select-none z-0 translate-y-[14%] sm:translate-y-[16%] xl:translate-y-[18%] overflow-hidden"
        aria-hidden="true"
      >
        <span 
          className="font-display font-bold text-[clamp(4.5rem,22vw,14rem)] xl:text-[21vw] tracking-[-0.06em] leading-none block whitespace-nowrap bg-gradient-to-b from-accent via-[#FF4A24] to-accent-deep bg-clip-text text-transparent pb-1"
          style={{
            filter: 'drop-shadow(0px 4px 24px rgba(255, 61, 20, 0.22)) drop-shadow(0px 1px 2px rgba(225, 29, 18, 0.15))'
          }}
        >
          álvarez
        </span>
      </div>

    </section>
  );
}
