'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Container, 
  SectionHeading, 
  Eyebrow, 
  Button, 
  MotionPill, 
  Card, 
  Reveal 
} from '@/src/components/ui';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export default function StyleguidePage() {
  const colorTokens = [
    { name: '--bg', hex: '#F3F3F1', role: 'Fondo general cálido', className: 'bg-bg text-ink border border-line' },
    { name: '--surface', hex: '#FFFFFF', role: 'Superficie de tarjetas claras', className: 'bg-surface text-ink border border-line' },
    { name: '--ink', hex: '#0B0B0C', role: 'Texto principal y fondos oscuros', className: 'bg-ink text-white' },
    { name: '--ink-soft', hex: '#5A5A5F', role: 'Texto secundario de párrafos', className: 'bg-ink-soft text-white' },
    { name: '--muted', hex: '#8E8E93', role: 'Segundo tono en titulares', className: 'bg-muted text-white' },
    { name: '--accent', hex: '#FF3D14', role: 'Acento principal y CTAs', className: 'bg-accent text-white' },
    { name: '--accent-deep', hex: '#E11D12', role: 'Hover y sombras de acento', className: 'bg-accent-deep text-white' },
    { name: '--ice', hex: '#BFE0FF', role: 'Contraste frío y badges', className: 'bg-ice text-ink border border-line' },
    { name: '--line', hex: 'rgba(11,11,12,0.10)', role: 'Bordes finos sobre fondo claro', className: 'bg-surface text-ink border-2 border-line' },
  ];

  const typeScale = [
    { label: 'display-xl', sample: 'Sistemas que escalan negocios', size: 'clamp(3rem, 9vw, 9rem)', tracking: '-0.045em', leading: '0.92', className: 'text-display-xl font-display font-semibold' },
    { label: 'display-lg', sample: 'Arquitectura y código limpio', size: 'clamp(2.5rem, 6vw, 6rem)', tracking: '-0.045em', leading: '0.94', className: 'text-display-lg font-display font-semibold' },
    { label: 'display-md', sample: 'Automatización de procesos reales', size: 'clamp(2rem, 4vw, 3.75rem)', tracking: '-0.04em', leading: '0.96', className: 'text-display-md font-display font-semibold' },
    { label: 'body-lg', sample: 'Desarrollo soluciones digitales para empresas que buscan control operativo total y herramientas confiables.', size: 'clamp(1.05rem, 1.4vw, 1.25rem)', tracking: 'normal', leading: '1.55', className: 'text-body-lg text-ink-soft' },
    { label: 'body', sample: 'Texto base de interfaz para explicaciones de soporte, detalles técnicos y descripciones compactas.', size: '1rem (16px)', tracking: 'normal', leading: '1.55', className: 'text-body text-ink-soft' },
    { label: 'label (mono)', sample: 'STATUS: DISPONIBLE PARA PROYECTOS // 2026', size: '0.75rem (12px)', tracking: '0.08em', leading: '1', className: 'text-label font-mono uppercase text-ink' },
  ];

  return (
    <main className="min-h-screen bg-bg text-ink py-16 sm:py-24">
      <Container className="space-y-24">

        {/* Encabezado de la Guía de Estilos */}
        <header className="border-b border-line pb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <Eyebrow text="SISTEMA DE DISEÑO // V1.0" rotateStar={true} className="mb-4" />
            <h1 className="font-display font-semibold text-display-lg tracking-[-0.045em] leading-[0.92]">
              <span className="text-ink">Kinetic</span>{' '}
              <span className="text-muted">Editorial</span>
            </h1>
            <p className="text-body-lg text-ink-soft max-w-2xl mt-4 font-normal">
              Fundación visual de alta fidelidad: fondo claro cálido, tipografía neo-grotesca con titulares en dos tonos, componentes desacoplados y tokens rigurosos.
            </p>
          </div>

          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-label font-mono text-ink uppercase tracking-[0.08em] hover:text-accent transition-colors shrink-0"
          >
            <span>Volver al Portafolio</span>
            <ArrowRight size={14} />
          </Link>
        </header>

        {/* SECCIÓN 1: TOKENS DE COLOR */}
        <section className="space-y-8">
          <div>
            <Eyebrow text="01 • PALETA CROMÁTICA" className="mb-2" />
            <SectionHeading 
              part1="Tokens de color" 
              part2="y contraste controlado" 
            />
            <p className="text-body text-ink-soft max-w-xl mt-2">
              Todas las superficies, textos y acentos se derivan de variables CSS en :root, expuestas a Tailwind para evitar valores sueltos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {colorTokens.map((token, i) => (
              <div 
                key={i} 
                className="bg-surface rounded-card p-5 border border-line flex flex-col justify-between gap-6 transition-all hover:-translate-y-0.5"
              >
                <div className={`w-full h-20 rounded-2xl p-3 flex items-start justify-end ${token.className}`}>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-black/10 backdrop-blur-xs">
                    {token.hex}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-sm font-semibold text-ink block">
                    {token.name}
                  </span>
                  <span className="text-xs text-ink-soft block mt-1">
                    {token.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 2: ESCALA TIPOGRÁFICA FLUIDA */}
        <section className="space-y-8">
          <div>
            <Eyebrow text="02 • TIPOGRAFÍA" className="mb-2" />
            <SectionHeading 
              part1="Escala fluida con clamp" 
              part2="y titulares en minúscula" 
            />
            <p className="text-body text-ink-soft max-w-xl mt-2">
              Inter Tight para titulares expresivos en dos tonos, Inter para legibilidad continua y JetBrains Mono para etiquetas de sistema.
            </p>
          </div>

          <div className="space-y-6 bg-surface rounded-card p-6 sm:p-10 border border-line divide-y divide-line">
            {typeScale.map((t, i) => (
              <div key={i} className={i === 0 ? 'pb-6' : 'py-6'}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                    {t.label}
                  </span>
                  <span className="font-mono text-[11px] text-ink-soft">
                    {t.size} • tracking: {t.tracking}
                  </span>
                </div>
                <div className={t.className}>
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: COMPONENTES BASE DE BOTÓN Y PÍLDORA */}
        <section className="space-y-8">
          <div>
            <Eyebrow text="03 • INTERACCIÓN Y MOVIMIENTO" className="mb-2" />
            <SectionHeading 
              part1="Botones y MotionPill" 
              part2="para estela visual" 
            />
            <p className="text-body text-ink-soft max-w-xl mt-2">
              Micro-interacciones con desplazamiento de 2px, foco visible accesible y píldoras con degradado motion blur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card de Botones */}
            <Card variant="light" className="flex flex-col justify-between gap-6">
              <div>
                <span className="font-mono text-xs text-ink uppercase tracking-wider font-semibold block mb-2">
                  Variantes de Button
                </span>
                <p className="text-xs text-ink-soft mb-6">
                  Primary integra la mini MotionPill a la izquierda; Outline y Accent responden a elevación táctil.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-start gap-4">
                  <Button variant="primary">
                    Iniciar Proyecto
                  </Button>
                  <Button variant="outline">
                    Ver Código
                  </Button>
                  <Button variant="accent" icon={<Sparkles size={16} />}>
                    Explorar
                  </Button>
                </div>
              </div>
              <div className="pt-4 border-t border-line text-xs font-mono text-ink-soft">
                Hover: -translate-y-0.5 • Focus visible: outline accent
              </div>
            </Card>

            {/* Card de MotionPill */}
            <Card variant="light" className="flex flex-col justify-between gap-6">
              <div>
                <span className="font-mono text-xs text-ink uppercase tracking-wider font-semibold block mb-2">
                  Variantes de MotionPill
                </span>
                <p className="text-xs text-ink-soft mb-6">
                  Degradado dinámico #1a0500 → #FF3D14 (45%) → #FFB36B (60%) → #1a0500 con blur interno y grano.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MotionPill width={40} height={16} />
                    <span className="font-mono text-xs text-ink-soft">Pequeño (40 × 16px)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MotionPill width={80} height={28} />
                    <span className="font-mono text-xs text-ink-soft">Mediano (80 × 28px)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MotionPill width={140} height={40} />
                    <span className="font-mono text-xs text-ink-soft">Grande (140 × 40px)</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-line text-xs font-mono text-ink-soft">
                Animación: background-position 8s alternate
              </div>
            </Card>

          </div>
        </section>

        {/* SECCIÓN 4: VARIACIONES DE TARJETA (CARD) */}
        <section className="space-y-8">
          <div>
            <Eyebrow text="04 • SUPERFICIES MODULARES" className="mb-2" />
            <SectionHeading 
              part1="Cuatro variantes de Card" 
              part2="con radio de 28px" 
            />
            <p className="text-body text-ink-soft max-w-xl mt-2">
              Geometría unificada con radio de 28px y contraste nítido sin sombras difusas artificiales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card Light */}
            <Card variant="light" className="flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-mono text-xs uppercase text-ink-soft font-semibold block mb-2">
                  Variant: Light
                </span>
                <h3 className="font-display font-semibold text-2xl text-ink leading-tight mb-2">
                  Superficie limpia
                </h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Fondo blanco sobre canvas cálido para secciones de contenido estándar.
                </p>
              </div>
              <span className="font-mono text-[11px] text-ink-soft pt-4 border-t border-line">
                bg-surface • border-line
              </span>
            </Card>

            {/* Card Dark */}
            <Card variant="dark" className="flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-mono text-xs uppercase text-white/60 font-semibold block mb-2">
                  Variant: Dark
                </span>
                <h3 className="font-display font-semibold text-2xl text-white leading-tight mb-2">
                  Inversión de ritmo
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Fondo tinta profundo para bloques de código o llamadas clave de conversión.
                </p>
              </div>
              <span className="font-mono text-[11px] text-white/50 pt-4 border-t border-line-dark">
                bg-ink • border-line-dark
              </span>
            </Card>

            {/* Card Accent */}
            <Card variant="accent" className="flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-mono text-xs uppercase text-white/80 font-semibold block mb-2">
                  Variant: Accent
                </span>
                <h3 className="font-display font-semibold text-2xl text-white leading-tight mb-2">
                  Energía cinemática
                </h3>
                <p className="text-xs text-white/90 leading-relaxed">
                  Acento naranja de alto impacto para avisos destacados y estado prioritario.
                </p>
              </div>
              <span className="font-mono text-[11px] text-white/70 pt-4 border-t border-white/20">
                bg-accent • text-white
              </span>
            </Card>

            {/* Card Ice */}
            <Card variant="ice" className="flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-mono text-xs uppercase text-ink-soft font-semibold block mb-2">
                  Variant: Ice
                </span>
                <h3 className="font-display font-semibold text-2xl text-ink leading-tight mb-2">
                  Contraste gélido
                </h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Azul hielo suave para métricas, estados verificados o paneles analíticos.
                </p>
              </div>
              <span className="font-mono text-[11px] text-ink-soft pt-4 border-t border-line">
                bg-ice • border-line
              </span>
            </Card>

          </div>
        </section>

        {/* SECCIÓN 5: REVEAL CON ESCALONAMIENTO MOTION */}
        <section className="space-y-8">
          <div>
            <Eyebrow text="05 • REVELACIÓN POR SCROLL" className="mb-2" />
            <SectionHeading 
              part1="Wrapper Reveal" 
              part2="con escalonamiento suave" 
            />
            <p className="text-body text-ink-soft max-w-xl mt-2">
              Animación basada en motion/react (framer-motion) con curva cubic-bezier(.22,1,.36,1) y delay de 80ms para cascada cinemática.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <Card variant="light" className="p-6">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                  <Check size={16} />
                </div>
                <h4 className="font-display font-semibold text-xl text-ink mb-1">Paso 01</h4>
                <p className="text-xs text-ink-soft">Delay 0ms: revelado inmediato al entrar al 20% del viewport.</p>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card variant="light" className="p-6">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                  <Check size={16} />
                </div>
                <h4 className="font-display font-semibold text-xl text-ink mb-1">Paso 02</h4>
                <p className="text-xs text-ink-soft">Delay 80ms: cascada fluida con curva de aceleración natural.</p>
              </Card>
            </Reveal>

            <Reveal delay={0.16}>
              <Card variant="light" className="p-6">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                  <Check size={16} />
                </div>
                <h4 className="font-display font-semibold text-xl text-ink mb-1">Paso 03</h4>
                <p className="text-xs text-ink-soft">Delay 160ms: entrada sincronizada sin jank ni layout shifts.</p>
              </Card>
            </Reveal>
          </div>
        </section>

      </Container>
    </main>
  );
}
