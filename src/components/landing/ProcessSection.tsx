'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useReducedMotion, type MotionValue } from 'motion/react';
import { Container, SectionHeading, StarBullet, Reveal } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';

// Ilustración 01: Descubrimiento (Burbujas de conversación con indicador de escritura)
function IllustrationDiscovery({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2 p-3 select-none" aria-hidden="true">
      {/* Burbuja entrante (blanca) */}
      <div className="bg-white border border-line rounded-2xl rounded-bl-xs p-2.5 shadow-2xs max-w-[150px] self-start">
        <div className="w-20 h-1.5 rounded-full bg-ink/25 mb-1.5" />
        <div className="w-14 h-1.5 rounded-full bg-ink/15" />
      </div>

      {/* Burbuja saliente (oscura) */}
      <div className="bg-ink border border-line-dark rounded-2xl rounded-br-xs p-2.5 shadow-2xs max-w-[150px] self-end">
        <div className="w-16 h-1.5 rounded-full bg-white/40 mb-1.5" />
        <div className="w-24 h-1.5 rounded-full bg-white/20" />
      </div>

      {/* Burbuja de "escribiendo..." con 3 puntos animados */}
      <div className="bg-white border border-line rounded-full px-2.5 py-1.5 shadow-2xs inline-flex items-center gap-1 self-start">
        {[0, 0.2, 0.4].map((delay, idx) => (
          <motion.span
            key={idx}
            className="w-1.5 h-1.5 rounded-full bg-ink/60"
            animate={
              shouldReduceMotion
                ? { opacity: 0.6 }
                : { opacity: [0.3, 1, 0.3], y: [0, -2, 0] }
            }
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Ilustración 02: Propuesta y diseño (Plano de interfaz con cuadrícula y cota de medida)
function IllustrationDesign() {
  return (
    <div 
      className="w-full h-full flex items-center justify-center p-3 select-none relative overflow-hidden" 
      aria-hidden="true"
      style={{
        backgroundImage: 'radial-gradient(rgba(8, 8, 10, 0.12) 1px, transparent 1px)',
        backgroundSize: '10px 10px',
      }}
    >
      {/* Marco de navegador en miniatura */}
      <div className="w-[170px] h-[94px] rounded-xl bg-white border border-line shadow-xs p-2 flex flex-col gap-1.5 relative group-hover:border-accent/40 transition-colors duration-300">
        {/* Barra superior con 3 puntos y URL bar */}
        <div className="flex items-center gap-1 border-b border-line/40 pb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-ink/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-ink/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-ink/20" />
          <div className="w-14 h-1 rounded-full bg-ink/10 ml-1.5" />
        </div>

        {/* Bloque de cabecera */}
        <div className="w-full h-3 rounded bg-ink/10" />

        {/* 2 bloques de contenido */}
        <div className="grid grid-cols-2 gap-1.5 flex-1 relative">
          <div className="rounded bg-surface border border-line/50" />
          <div className="rounded bg-surface border border-line/50 relative overflow-hidden">
            {/* Línea de cota naranja interactiva */}
            <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 flex items-center">
              <div className="w-0.5 h-2 bg-accent" />
              <div className="h-0.5 bg-accent flex-1" />
              <div className="w-0.5 h-2 bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ilustración 03: Desarrollo con avances (Sprint backlog con barra en progreso activo)
function IllustrationDevelopment({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3 p-4 select-none" aria-hidden="true">
      {/* Fila 1: Completa */}
      <div className="flex items-center gap-2.5">
        <div className="w-4 h-4 rounded-full bg-ink text-white flex items-center justify-center shrink-0">
          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex-1 h-2 rounded-full bg-ink/10 overflow-hidden">
          <div className="w-full h-full bg-ink rounded-full" />
        </div>
      </div>

      {/* Fila 2: En desarrollo activo al 70% con degradado MotionPill */}
      <div className="flex items-center gap-2.5">
        <div className="w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
          <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex-1 h-2 rounded-full bg-accent/20 overflow-hidden relative">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent to-[#FF3D14]"
            animate={
              shouldReduceMotion
                ? { width: '70%' }
                : { width: ['35%', '72%', '35%'] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

      {/* Fila 3: Pendiente al 30% */}
      <div className="flex items-center gap-2.5">
        <div className="w-4 h-4 rounded-full border border-line flex items-center justify-center shrink-0" />
        <div className="flex-1 h-2 rounded-full bg-ink/10 overflow-hidden">
          <div className="w-[30%] h-full bg-muted/40 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// Ilustración 04: Lanzamiento y soporte (Modo oscuro con chip En línea, switch y telemetría de pulso)
function IllustrationLaunch({ 
  statusText, 
  shouldReduceMotion 
}: { 
  statusText: string; 
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-3.5 select-none" aria-hidden="true">
      {/* Cabecera: Chip pulsante "En línea" y switch en accent */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] font-semibold text-emerald-300">
            {statusText}
          </span>
        </div>

        {/* Switch activo en accent */}
        <div className="w-8 h-4.5 rounded-full bg-accent p-0.5 flex items-center justify-end shadow-xs">
          <div className="w-3.5 h-3.5 rounded-full bg-white shadow-xs" />
        </div>
      </div>

      {/* Latido de pulso ECG con strokeDashoffset animado */}
      <div className="w-full py-1">
        <svg className="w-full h-8 overflow-visible" viewBox="0 0 160 36">
          <motion.path
            d="M 0 18 L 40 18 L 50 4 L 60 32 L 70 8 L 80 24 L 90 18 L 160 18"
            fill="none"
            stroke="rgba(255, 255, 255, 0.65)"
            strokeWidth="2"
            strokeDasharray="40 120"
            animate={
              shouldReduceMotion
                ? { strokeDashoffset: 0 }
                : { strokeDashoffset: [160, 0] }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </svg>
      </div>
    </div>
  );
}

// Nodo horizontal para la vista desktop
function TimelineNode({
  index,
  progress,
  shouldReduceMotion,
}: {
  index: number;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}) {
  const threshold = index * 0.28;
  const [isActive, setIsActive] = useState(Boolean(shouldReduceMotion));

  useEffect(() => {
    if (shouldReduceMotion) return;
    const unsubscribe = progress.on('change', (v) => {
      setIsActive(v >= threshold);
    });
    return () => unsubscribe();
  }, [progress, threshold, shouldReduceMotion]);

  const isNodeActive = Boolean(shouldReduceMotion || isActive);

  return (
    <div className="flex justify-center">
      <div
        className={`w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center shadow-xs select-none bg-surface ${
          isNodeActive
            ? 'border-accent text-accent scale-110 shadow-accent/20'
            : 'border-line text-muted scale-100'
        }`}
        aria-hidden="true"
      >
        <StarBullet size={18} rotate={isNodeActive} />
      </div>
    </div>
  );
}

// Tarjeta individual de paso reutilizable en desktop, tablet y móvil
function StepCard({
  step,
  index,
  statusOnline,
  shouldReduceMotion,
  showStarBullet = false,
  visualHeight = 'h-[140px]',
}: {
  step: {
    num: string;
    stage: string;
    title: string;
    desc: string;
  };
  index: number;
  statusOnline: string;
  shouldReduceMotion: boolean | null;
  showStarBullet?: boolean;
  visualHeight?: string;
}) {
  const isDark = index === 3;

  return (
    <div
      className={`rounded-[28px] p-5 xl:p-6 flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1.5 shadow-xs hover:shadow-lg ${
        isDark
          ? 'bg-ink text-white border border-line-dark'
          : 'bg-surface text-ink border border-line'
      }`}
    >
      <div>
        {/* Zona visual con la mini ilustración específica */}
        <div
          className={`w-full ${visualHeight} rounded-[20px] overflow-hidden mb-5 ${
            isDark ? 'bg-white/[0.06] border border-white/10' : 'bg-bg border border-line/60'
          }`}
        >
          {index === 0 && <IllustrationDiscovery shouldReduceMotion={shouldReduceMotion} />}
          {index === 1 && <IllustrationDesign />}
          {index === 2 && <IllustrationDevelopment shouldReduceMotion={shouldReduceMotion} />}
          {index === 3 && (
            <IllustrationLaunch 
              statusText={statusOnline} 
              shouldReduceMotion={shouldReduceMotion} 
            />
          )}
        </div>

        {/* Fila con etiqueta de etapa y número grande */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wider border ${
              isDark
                ? 'border-white/20 text-white/90 bg-white/5'
                : 'border-line text-ink bg-bg'
            }`}
          >
            {step.stage}
          </span>

          <div className="flex items-center gap-2">
            {showStarBullet && (
              <StarBullet size={14} className="text-accent" />
            )}
            <span
              className={`font-display font-bold text-3xl select-none transition-colors ${
                isDark ? 'text-white/40 group-hover:text-white' : 'text-muted/60 group-hover:text-ink'
              }`}
            >
              {step.num}
            </span>
          </div>
        </div>

        {/* Título de la etapa */}
        <h3
          className={`font-display font-semibold text-[21px] xl:text-[23px] tracking-[-0.03em] leading-tight mb-2.5 ${
            isDark ? 'text-white' : 'text-ink'
          }`}
        >
          {step.title}
        </h3>
      </div>

      {/* Descripción completa sin recorte artificial */}
      <p
        className={`text-[14px] xl:text-[14.5px] leading-relaxed mt-1 ${
          isDark ? 'text-white/70' : 'text-ink-soft'
        }`}
      >
        {step.desc}
      </p>
    </div>
  );
}

// Sección Proceso (#proceso) en fila única horizontal compacta y editorial
export default function ProcessSection() {
  const { t } = useLanguage();
  const ps = t.single_page.process_section;
  const containerRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Seguimiento de scroll para animar la línea horizontal en desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.45'],
  });

  // Manejo de scroll en carrusel móvil para reflejar el indicador activo
  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, offsetWidth } = carouselRef.current;
    const cardWidth = offsetWidth * 0.82 + 12;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveStep(Math.max(0, Math.min(3, index)));
  };

  // Desplazamiento suave al tocar un punto del carrusel
  const scrollToStep = (index: number) => {
    if (!carouselRef.current) return;
    const { offsetWidth } = carouselRef.current;
    const cardWidth = offsetWidth * 0.82 + 12;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveStep(index);
  };

  return (
    <section
      id="proceso"
      ref={containerRef}
      className="relative w-full bg-bg text-ink pt-[clamp(64px,9vw,120px)] pb-[clamp(36px,4.5vw,56px)] overflow-hidden"
    >
      <Container>
        {/* Encabezado editorial centrado */}
        <SectionHeading
          eyebrow={ps.eyebrow}
          part1={ps.title_part1}
          part2={ps.title_part2}
          subtitle={ps.subtitle}
          align="center"
          className="mb-[clamp(40px,5vw,64px)]"
        />

        {/* 1. VISTA DESKTOP (≥1024px): Línea horizontal animada con 4 nodos y 4 tarjetas en una fila */}
        <div className="hidden lg:block relative">
          {/* Línea horizontal base de fondo (entre centros de columnas 1 y 4) */}
          <div 
            className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-line pointer-events-none"
            aria-hidden="true"
          />

          {/* Línea horizontal activa que se dibuja con el scroll */}
          <motion.div
            style={{
              scaleX: shouldReduceMotion ? 1 : scrollYProgress,
              transformOrigin: 'left',
            }}
            className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-accent pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* 4 Nodos centrados sobre cada tarjeta */}
          <div className="grid grid-cols-4 gap-5 relative z-10 mb-8">
            {ps.steps.map((_, idx) => (
              <TimelineNode
                key={idx}
                index={idx}
                progress={scrollYProgress}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          {/* Fila de 4 tarjetas con Reveal escalonado de 80ms */}
          <div className="grid grid-cols-4 gap-5 items-stretch">
            {ps.steps.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.08} className="h-full">
                <StepCard
                  step={step}
                  index={idx}
                  statusOnline={ps.status_online}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2. VISTA TABLET (768–1023px): Retícula de 2x2 con StarBullet junto al número */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 items-stretch">
          {ps.steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 0.08} className="h-full">
              <StepCard
                step={step}
                index={idx}
                statusOnline={ps.status_online}
                shouldReduceMotion={shouldReduceMotion}
                showStarBullet={true}
              />
            </Reveal>
          ))}
        </div>

        {/* 3. VISTA MÓVIL (<768px): Carrusel horizontal con scroll-snap e indicadores */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex snap-x snap-mandatory overflow-x-auto gap-3 px-4 -mx-4 pb-4 pt-1 no-scrollbar"
          >
            {ps.steps.map((step, idx) => (
              <div
                key={step.num}
                className="w-[82vw] shrink-0 snap-center h-full"
              >
                <StepCard
                  step={step}
                  index={idx}
                  statusOnline={ps.status_online}
                  shouldReduceMotion={shouldReduceMotion}
                  visualHeight="h-[120px]"
                />
              </div>
            ))}
          </div>

          {/* Indicadores de 4 puntos accesibles para navegar las tarjetas */}
          <div className="flex items-center justify-center gap-2 mt-4" role="tablist">
            {ps.steps.map((step, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeStep === idx}
                aria-label={`${ps.step_aria} ${idx + 1}`}
                onClick={() => scrollToStep(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeStep === idx
                    ? 'w-7 h-2 bg-accent'
                    : 'w-2 h-2 bg-line hover:bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
