'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { StarBullet } from '../ui';

interface HeroSystem3DProps {
  className?: string;
  isMobile?: boolean;
}

// Elemento 3D isométrico compacto y optimizado que comunica "sistemas reales, negocios autónomos"
export default function HeroSystem3D({
  className = '',
  isMobile = false,
}: HeroSystem3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: fine)').matches;
    }
    return false;
  });
  const shouldReduceMotion = useReducedMotion();

  // Suscripción al cambio de tipo de puntero si el dispositivo acopla/desacopla periféricos
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(pointer: fine)');
    const handler = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // IntersectionObserver para pausar animaciones cuando el Hero sale del viewport
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Valores de movimiento con amortiguación spring suave
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 24, stiffness: 110 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Rotaciones base isométrica rotateX(58deg) rotateZ(-32deg) con ajuste suave ±6° por parallax
  const rotX = useTransform(smoothY, [-1, 1], [64, 52]);
  const rotZ = useTransform(smoothX, [-1, 1], [-38, -26]);

  // Desplazamiento amplificado para los 2 chips flotantes exteriores
  const chipOffsetX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const chipOffsetY = useTransform(smoothY, [-1, 1], [-12, 12]);

  // Manejador de movimiento del mouse sobre la escena
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isFinePointer || shouldReduceMotion || isMobile) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      mouseX.set(Math.max(-1, Math.min(1, x)));
      mouseY.set(Math.max(-1, Math.min(1, y)));
    },
    [isFinePointer, shouldReduceMotion, isMobile, mouseX, mouseY]
  );

  // Restauración de reposo al salir del hover
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Exactamente 2 haces verticales que conectan las capas
  const beams = [
    { left: 105, top: 135, delay: 0 },
    { left: 275, top: 245, delay: 1.5 },
  ];

  // Exactamente 2 chips flotantes perimetrales
  const floatingChips = [
    { label: 'Pedidos', right: 15, top: 75, z: 95, duration: 6.2, initialOffset: 5 },
    { label: 'Reportes', right: 25, bottom: 75, z: 150, duration: 6.8, initialOffset: -5 },
  ];

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${
        isMobile
          ? 'w-[280px] h-[290px] pointer-events-none'
          : 'w-[380px] h-[440px] pointer-events-auto cursor-default'
      } ${className}`}
      style={{
        perspective: '1400px',
      }}
    >
      {/* Contenedor flotante con traslación y leve oscilación */}
      <motion.div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          scale: isMobile ? 0.76 : 1,
          x: isMobile ? -50 : 0,
        }}
        animate={
          isInView && !shouldReduceMotion
            ? {
                y: isMobile ? [-5, 5, -5] : [-8, 8, -8],
                rotateZ: isMobile ? [-0.8, 0.8, -0.8] : [-1.2, 1.2, -1.2],
              }
            : { y: 0, rotateZ: 0 }
        }
        transition={{
          duration: isMobile ? 6 : 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Grupo principal 3D con pose isométrica y parallax reactivo */}
        <motion.div
          className="w-full h-full absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            rotateX: shouldReduceMotion || !isFinePointer || isMobile ? 58 : rotX,
            rotateZ: shouldReduceMotion || !isFinePointer || isMobile ? -32 : rotZ,
          }}
        >
          {/* Sombra proyectada difusa en el plano base */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              left: 70,
              top: 100,
              width: 240,
              height: 240,
              background: 'radial-gradient(circle, rgba(8, 8, 10, 0.22) 0%, rgba(8, 8, 10, 0.05) 50%, transparent 75%)',
              filter: 'blur(22px)',
              transform: 'translate3d(10px, 14px, -20px)',
            }}
          />

          {/* 2 Haces verticales luminosos entre las capas */}
          {beams.map((b, idx) => (
            <div
              key={idx}
              className="absolute pointer-events-none"
              style={{
                left: b.left,
                top: b.top,
                width: '1.5px',
                height: isHovered ? 152 : 112,
                transform: 'rotateX(-90deg)',
                transformOrigin: '0 0',
                background: 'linear-gradient(to bottom, rgba(225, 29, 18, 0.85) 0%, rgba(255, 61, 20, 0.35) 60%, transparent 100%)',
                transition: 'height 500ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Punto de luz ascendente en loop escalonado */}
              <motion.div
                className="absolute w-1.5 h-3 -left-[2.25px] rounded-full bg-white shadow-[0_0_8px_#FF3D14]"
                animate={
                  isInView && !shouldReduceMotion
                    ? { top: ['0%', '100%'], opacity: [0, 1, 1, 0] }
                    : { top: '50%', opacity: 0.6 }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: b.delay,
                }}
              />
            </div>
          ))}

          {/* CAPA 1 (INFERIOR): "DATOS" (translateZ: 0px, 260x260px) */}
          <div
            className="absolute rounded-[24px] bg-ink border border-white/10 p-5 flex flex-col justify-center gap-2.5 overflow-hidden shadow-xl"
            style={{
              left: 60,
              top: 90,
              width: 260,
              height: 260,
              transform: 'translate3d(0, 0, 0px)',
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          >
            {/* 3 Registros simulados con bloques redondeados */}
            <div className="bg-white/[0.06] border border-white/[0.08] rounded-xl px-3 py-2 flex items-center justify-between">
              <div>
                <div className="w-20 h-1.5 bg-white/30 rounded-full" />
                <div className="w-12 h-1 bg-white/15 rounded-full mt-1.5" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>

            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl px-3 py-2 flex items-center justify-between">
              <div>
                <div className="w-24 h-1.5 bg-white/25 rounded-full" />
                <div className="w-14 h-1 bg-white/10 rounded-full mt-1.5" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>

            <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl px-3 py-2 flex items-center justify-between">
              <div>
                <div className="w-18 h-1.5 bg-white/20 rounded-full" />
                <div className="w-10 h-1 bg-white/10 rounded-full mt-1.5" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
          </div>

          {/* CAPA 2 (MEDIA): "PROCESOS" (translateZ: 56px / hover: 76px, 260x260px) */}
          <div
            className="absolute rounded-[24px] p-5 flex flex-col justify-center overflow-hidden shadow-lg"
            style={{
              left: 60,
              top: 90,
              width: 260,
              height: 260,
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              transform: `translate3d(0, 0, ${isHovered ? 76 : 56}px)`,
              transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* 3 nodos y línea de flujo animada sin textos */}
            <svg className="w-full h-16 overflow-visible" viewBox="0 0 220 50">
              <path
                d="M 25 25 C 65 10, 85 40, 110 25 S 155 10, 195 25"
                fill="none"
                stroke="rgba(8, 8, 10, 0.12)"
                strokeWidth="2"
              />

              <motion.path
                d="M 25 25 C 65 10, 85 40, 110 25 S 155 10, 195 25"
                fill="none"
                stroke="#E11D12"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                animate={
                  isInView && !shouldReduceMotion
                    ? { strokeDashoffset: [0, -24] }
                    : { strokeDashoffset: 0 }
                }
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              />

              <circle cx="25" cy="25" r="6.5" fill="#08080A" stroke="white" strokeWidth="2" />
              <circle cx="110" cy="25" r="7.5" fill="#E11D12" stroke="white" strokeWidth="2" />
              <circle cx="195" cy="25" r="6.5" fill="#08080A" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          {/* CAPA 3 (SUPERIOR): "PANEL" (translateZ: 112px / hover: 152px, 260x260px) */}
          <div
            className="absolute rounded-[24px] bg-[#F7F7F6] border border-line p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-xl"
            style={{
              left: 60,
              top: 90,
              width: 260,
              height: 260,
              transform: `translate3d(0, 0, ${isHovered ? 152 : 112}px)`,
              transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Cabecera: Chip con punto verde pulsante "Operando" */}
            <div className="flex items-center justify-end">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[9px] font-semibold text-emerald-700">
                  Operando
                </span>
              </div>
            </div>

            {/* 4 barras verticales animadas que suben y bajan suavemente */}
            <div className="my-auto py-1">
              <div className="h-14 flex items-end justify-center gap-3 bg-white border border-line/60 rounded-xl px-4 py-2">
                <motion.div
                  className="w-3.5 rounded-t-md bg-ink"
                  animate={
                    isInView && !shouldReduceMotion
                      ? { height: ['35%', '75%', '45%'] }
                      : { height: '55%' }
                  }
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="w-3.5 rounded-t-md bg-accent"
                  animate={
                    isInView && !shouldReduceMotion
                      ? { height: ['50%', '90%', '65%'] }
                      : { height: '80%' }
                  }
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: 0.3,
                  }}
                />
                <motion.div
                  className="w-3.5 rounded-t-md bg-ink"
                  animate={
                    isInView && !shouldReduceMotion
                      ? { height: ['40%', '65%', '30%'] }
                      : { height: '45%' }
                  }
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: 0.6,
                  }}
                />
                <motion.div
                  className="w-3.5 rounded-t-md bg-muted-strong"
                  animate={
                    isInView && !shouldReduceMotion
                      ? { height: ['55%', '85%', '40%'] }
                      : { height: '60%' }
                  }
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: 0.9,
                  }}
                />
              </div>
            </div>

            {/* Interruptor toggle "Automático" encendido en accent */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-line/60 shadow-2xs">
              <span className="font-sans text-xs font-semibold text-ink">
                Automático
              </span>
              <div className="w-8 h-4.5 rounded-full bg-accent p-0.5 flex items-center justify-end shadow-xs">
                <div className="w-3.5 h-3.5 rounded-full bg-white shadow-xs" />
              </div>
            </div>
          </div>

          {/* EXACTAMENTE 2 CHIPS FLOTANTES: "Pedidos" y "Reportes" */}
          {floatingChips.map((chip, idx) => (
            <motion.div
              key={idx}
              className="absolute pointer-events-none select-none"
              style={{
                right: chip.right,
                top: chip.top,
                bottom: chip.bottom,
                transformStyle: 'preserve-3d',
                transform: `translate3d(0, 0, ${chip.z}px)`,
                x: !isMobile && isFinePointer && !shouldReduceMotion ? chipOffsetX : 0,
                y: !isMobile && isFinePointer && !shouldReduceMotion ? chipOffsetY : 0,
              }}
            >
              <motion.div
                className="rounded-full bg-white/80 border border-white/90 shadow-md px-3 py-1.5 flex items-center gap-2 text-ink font-sans text-xs font-semibold whitespace-nowrap"
                animate={
                  isInView && !shouldReduceMotion
                    ? { y: [chip.initialOffset, -chip.initialOffset, chip.initialOffset] }
                    : { y: 0 }
                }
                transition={{
                  duration: chip.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <StarBullet size={11} />
                <span>{chip.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
