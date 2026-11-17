'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion, type MotionValue } from 'motion/react';
import { Container, Eyebrow, MotionPill, StarBullet } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';

// Palabra individual con transición de color reactiva al scroll con contraste legible en reposo
function ScrollWord({
  word,
  progress,
  range,
  shouldReduceMotion,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  shouldReduceMotion: boolean | null;
}) {
  // Contraste optimizado: inicia en #66666B (ratio >5.5:1 sobre fondo crema) y pasa a #08080A con el scroll
  const color = useTransform(progress, range, ['#66666B', '#08080A']);

  if (shouldReduceMotion) {
    return <span className="text-ink inline-block mr-[0.24em]">{word}</span>;
  }

  return (
    <motion.span 
      style={{ color }} 
      className="inline-block mr-[0.24em] will-change-[color]"
    >
      {word}
    </motion.span>
  );
}

// Métrica individual accesible con contador numérico ease-out
function MetricItem({
  metric,
  isInView,
  shouldReduceMotion,
}: {
  metric: {
    num: number;
    prefix: string;
    suffix: string;
    valueText: string;
    label: string;
    desc: string;
    isNumeric: boolean;
    ariaLabel: string;
  };
  isInView: boolean;
  shouldReduceMotion: boolean | null;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !metric.isNumeric || shouldReduceMotion) return;
    
    let startTime: number | null = null;
    const duration = 1200;
    const target = metric.num;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(ease * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isInView, metric.isNumeric, metric.num, shouldReduceMotion]);

  // En reducción de movimiento se renderiza directamente el valor final
  const displayValue = shouldReduceMotion
    ? (metric.isNumeric ? `${metric.prefix}${metric.num}${metric.suffix}` : metric.valueText)
    : (metric.isNumeric ? `${metric.prefix}${count}${metric.suffix}` : metric.valueText);

  return (
    <div 
      className="flex flex-col items-center text-center px-4 sm:px-6 py-2 transition-transform duration-300 hover:-translate-y-0.5"
      role="region"
      aria-label={metric.ariaLabel}
    >
      <div className="font-display font-bold text-[clamp(2rem,4.2vw,4rem)] tracking-[-0.045em] leading-none text-ink select-none">
        {displayValue}
      </div>
      <span className="text-[15px] sm:text-base font-semibold text-ink leading-tight mt-3.5 tracking-tight">
        {metric.label}
      </span>
      <p className="font-mono text-[10px] sm:text-[11px] font-medium text-ink/65 uppercase tracking-[0.14em] mt-1.5">
        {metric.desc}
      </p>
    </div>
  );
}

// Sección Statement + Métricas con tipografía calibrada para máxima legibilidad editorial
export default function StatementSection() {
  const { t } = useLanguage();
  const st = t.single_page.statement_section;
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const metricsBoxRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isMetricsInView = useInView(metricsBoxRef, { once: true, margin: '-40px' });

  // Seguimiento de scroll para revelar palabras progresivamente
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  // Lista de palabras secuenciales para scroll progress mapping
  const wordsGroup1 = st.phrase2.split(' ');
  const wordsGroup2 = st.phrase3.split(' ');
  const wordsGroup3 = st.phrase4.split(' ');
  const wordsGroup4 = st.phrase5.split(' ');

  const allWords = [
    ...wordsGroup1,
    ...wordsGroup2,
    ...wordsGroup3,
    ...wordsGroup4,
  ];
  const total = allWords.length;

  let globalWordIndex = 0;
  const getNextRange = (): [number, number] => {
    const start = globalWordIndex / total;
    const end = (globalWordIndex + 1) / total;
    globalWordIndex++;
    return [start, end];
  };

  return (
    <section 
      id="sobre-mi"
      ref={containerRef}
      className="relative w-full bg-bg text-ink pt-[clamp(64px,8vw,112px)] pb-[clamp(32px,4vw,48px)] overflow-hidden"
    >
      <Container>
        {/* 1. FILA DE CABECERA: Eyebrow con línea divisoria continua */}
        <div className="flex items-center gap-6 mb-8 w-full">
          <Eyebrow 
            text={st.eyebrow} 
            rotateStar={false}
            className="shrink-0"
          />
          <div className="flex-1 h-px bg-line" aria-hidden="true" />
        </div>

        {/* 2. PÁRRAFO EDITORIAL FLUIDO CON LECTURA CÓMODA Y PÍLDORAS NO HUÉRFANAS */}
        <div 
          ref={textRef}
          className="w-full font-display font-medium text-[clamp(1.75rem,1.1rem+3.8vw,5.25rem)] tracking-[-0.03em] leading-[1.14] select-none text-left"
        >
          {/* Frase inicial fija en tono ink con non-breaking hyphen para full-stack */}
          <span className="text-ink inline mr-[0.24em]">
            {st.phrase1}
          </span>

          {/* Frase 2: palabras previas a la pastilla */}
          {wordsGroup1.slice(0, -1).map((w, idx) => (
            <ScrollWord 
              key={`w1-${idx}`} 
              word={w} 
              progress={scrollYProgress} 
              range={getNextRange()} 
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}

          {/* Bloque enlazado: última palabra ('en') + MotionPill para evitar pastillas huérfanas */}
          <span className="inline-flex items-center gap-[0.22em] whitespace-nowrap mr-[0.24em] align-baseline">
            <ScrollWord 
              word={wordsGroup1[wordsGroup1.length - 1]} 
              progress={scrollYProgress} 
              range={getNextRange()} 
              shouldReduceMotion={shouldReduceMotion}
            />
            <span 
              className="inline-flex align-middle rounded-full overflow-hidden shrink-0 shadow-xs"
              style={{
                height: '0.68em',
                width: '1.85em',
              }}
              aria-hidden="true"
            >
              <MotionPill className="w-full h-full" width={100} height={36} />
            </span>
          </span>

          {/* Frase 3 con revelación de color */}
          {wordsGroup2.map((w, idx) => (
            <ScrollWord 
              key={`w2-${idx}`} 
              word={w} 
              progress={scrollYProgress} 
              range={getNextRange()} 
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}

          {/* Frase 4: palabras previas a la pastilla */}
          {wordsGroup3.slice(0, -1).map((w, idx) => (
            <ScrollWord 
              key={`w3-${idx}`} 
              word={w} 
              progress={scrollYProgress} 
              range={getNextRange()} 
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}

          {/* Bloque enlazado: última palabra ('en') + MotionPill para evitar pastillas huérfanas */}
          <span className="inline-flex items-center gap-[0.22em] whitespace-nowrap mr-[0.24em] align-baseline">
            <ScrollWord 
              word={wordsGroup3[wordsGroup3.length - 1]} 
              progress={scrollYProgress} 
              range={getNextRange()} 
              shouldReduceMotion={shouldReduceMotion}
            />
            <span 
              className="inline-flex align-middle rounded-full overflow-hidden shrink-0 shadow-xs"
              style={{
                height: '0.68em',
                width: '1.85em',
              }}
              aria-hidden="true"
            >
              <MotionPill className="w-full h-full" width={100} height={36} />
            </span>
          </span>

          {/* Frase 5 con revelación de color */}
          {wordsGroup4.map((w, idx) => (
            <ScrollWord 
              key={`w4-${idx}`} 
              word={w} 
              progress={scrollYProgress} 
              range={getNextRange()} 
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* 3. FILA INFERIOR: TEXTO DE APOYO + PRINCIPIOS (cols 1–4) Y MÉTRICAS --ice (cols 5–12) */}
        <div className="w-full mt-[clamp(32px,4vw,56px)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Izquierda (cols 1–4): texto de apoyo, 3 principios con StarBullet y enlace */}
          <div className="lg:col-span-4 flex flex-col justify-between py-1">
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-normal mb-5">
              {st.subtext}
            </p>

            {/* Lista de 3 principios con StarBullet y separador --line */}
            <div className="divide-y divide-line border-y border-line mb-5">
              {st.principles.map((principle, pIdx) => (
                <div key={pIdx} className="py-2.5 flex items-start gap-3">
                  <StarBullet size={12} className="text-accent mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-ink leading-snug">
                    {principle}
                  </span>
                </div>
              ))}
            </div>

            {/* Enlace "Ver proyectos →" */}
            <div>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink hover:text-accent transition-colors group"
              >
                <span>{st.view_projects}</span>
              </a>
            </div>
          </div>

          {/* Derecha (cols 5–12): contenedor de métricas --ice */}
          <div className="lg:col-span-8 flex items-center">
            <div 
              ref={metricsBoxRef}
              className="w-full h-full relative rounded-[28px] sm:rounded-[36px] p-[clamp(24px,3.5vw,40px)] overflow-hidden border border-white/70 bg-gradient-to-b from-[#CFE8FF] via-ice to-[#AFD6FF] shadow-[0_24px_50px_-16px_rgba(15,35,65,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center"
            >
              {/* Reflejo de luz superior tipo cristal líquido */}
              <div 
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(255,255,255,0.65),transparent)]" 
                aria-hidden="true" 
              />

              {/* Estrella de 8 puntas rotatoria en la esquina superior derecha */}
              <StarBullet 
                size={20} 
                rotate={true} 
                className="text-ink/45 absolute top-4 right-4 sm:top-6 sm:right-6 transition-opacity hover:opacity-100" 
              />

              {/* Grid de 4 métricas con separadores verticales refinados */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-0 sm:divide-x sm:divide-ink/10 w-full items-center">
                {st.metrics.map((m, idx) => (
                  <MetricItem 
                    key={idx} 
                    metric={m} 
                    isInView={isMetricsInView} 
                    shouldReduceMotion={shouldReduceMotion}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
