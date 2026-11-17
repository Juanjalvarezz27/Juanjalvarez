'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Container, SectionHeading, StarBullet, Grain } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';
import { getWhatsAppUrl } from '../../config/site';

// Estilos visuales para cada una de las 4 variantes de tarjeta
const VARIANT_STYLES = {
  dark: {
    card: 'bg-ink text-white border border-line-dark shadow-md',
    badge: 'border-white/20 text-white/90 bg-white/5',
    num: 'text-white/40',
    title: 'text-white',
    desc: 'text-white/70',
    itemText: 'text-white/90',
    starColor: 'text-accent',
    cta: 'text-white hover:text-accent',
    ctaArrow: 'text-accent',
  },
  light: {
    card: 'bg-surface text-ink border border-line shadow-xs',
    badge: 'border-line text-ink bg-bg',
    num: 'text-ink/40',
    title: 'text-ink',
    desc: 'text-ink-soft',
    itemText: 'text-ink',
    starColor: 'text-accent',
    cta: 'text-ink hover:text-accent',
    ctaArrow: 'text-accent',
  },
  accent: {
    card: 'bg-accent-deep text-white border border-white/20 shadow-md',
    badge: 'border-white/30 text-white bg-white/10',
    num: 'text-white/50',
    title: 'text-white',
    desc: 'text-white/90',
    itemText: 'text-white',
    starColor: 'text-white',
    cta: 'text-white hover:text-white/80',
    ctaArrow: 'text-white',
  },
  'surface-2': {
    card: 'bg-surface-2 text-ink border border-line/50 shadow-xs',
    badge: 'border-line text-ink bg-bg/80',
    num: 'text-ink/40',
    title: 'text-ink',
    desc: 'text-ink-soft',
    itemText: 'text-ink',
    starColor: 'text-accent',
    cta: 'text-ink hover:text-accent',
    ctaArrow: 'text-accent',
  },
};

// Sección de Servicios con animación cinemática reactiva al scroll en móvil y escritorio
export default function ServicesSection() {
  const { t, lang } = useLanguage();
  const serv = t.single_page.services_section;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Detección en tiempo real de la tarjeta activa según desplazamiento horizontal en móvil
  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
    if (scrollWidth <= offsetWidth) return;

    const children = Array.from(carouselRef.current.children) as HTMLElement[];
    if (children.length === 0) return;

    const containerCenter = scrollLeft + offsetWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveCard(closestIdx);
  };

  // Desplazamiento suave centrado al pulsar un indicador
  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const children = Array.from(carouselRef.current.children) as HTMLElement[];
    const target = children[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveCard(index);
    }
  };

  return (
    <section 
      id="servicios" 
      className="relative w-full bg-bg text-ink pt-[clamp(32px,4vw,48px)] pb-[clamp(64px,8vw,112px)] overflow-hidden"
    >
      <Container>
        {/* Encabezado editorial centrado en dos tonos */}
        <SectionHeading
          eyebrow={serv.eyebrow}
          part1={serv.title_ink}
          part2={serv.title_muted}
          subtitle={serv.subtitle}
          align="center"
          className="mb-12 lg:mb-16"
        />

        {/* Carrusel interactivo en móvil (<768px) con animación reactiva y retícula en tablet/desktop */}
        <div 
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex overflow-x-auto pb-6 pt-3 px-4 -mx-4 md:mx-0 md:px-0 md:pb-0 md:overflow-visible snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start no-scrollbar"
        >
          {serv.cards.map((card, idx) => {
            const variantKey = (card.id === 'sistemas'
              ? 'dark'
              : card.id === 'web'
              ? 'light'
              : card.id === 'automatizacion'
              ? 'accent'
              : 'surface-2') as keyof typeof VARIANT_STYLES;

            const styles = VARIANT_STYLES[variantKey];
            const isStaggered = idx === 1 || idx === 3;
            const whatsappUrl = getWhatsAppUrl(card.whatsappMsg);
            const isActive = activeCard === idx;

            return (
              <div
                key={card.id}
                className={`w-[84vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink transition-all duration-300 ease-out ${
                  isStaggered ? 'xl:translate-y-6' : ''
                } ${
                  shouldReduceMotion
                    ? ''
                    : isActive
                    ? 'scale-100 opacity-100'
                    : 'scale-[0.95] opacity-75 md:scale-100 md:opacity-100'
                }`}
              >
                {/* Animación cinemática de entrada al hacer scroll vertical */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 36, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ 
                    duration: 0.55, 
                    delay: shouldReduceMotion ? 0 : idx * 0.08, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`relative rounded-[28px] p-6 sm:p-7 min-h-[440px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group cursor-default select-none ${styles.card} ${
                    isActive ? 'shadow-xl' : 'shadow-xs'
                  }`}
                >
                  {/* Fondo decorativo con MotionPill desenfocada confinada dentro de la tarjeta */}
                  {variantKey === 'dark' && (
                    <div 
                      className={`absolute top-0 right-0 w-48 h-28 rounded-full bg-gradient-to-r from-accent to-accent-deep blur-2xl pointer-events-none transition-opacity duration-500 ${
                        isActive ? 'opacity-55 scale-105' : 'opacity-40'
                      }`}
                      aria-hidden="true"
                    />
                  )}

                  {/* Grano cinematográfico sobre la variante accent para textura táctil */}
                  {variantKey === 'accent' && (
                    <Grain className="absolute inset-0 rounded-[28px]" opacity={0.09} />
                  )}

                  {/* CABECERA DE LA TARJETA: Etiqueta pill y numeración mono */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wider border transition-colors ${styles.badge} ${
                      isActive ? 'border-accent/40' : ''
                    }`}>
                      {card.badge}
                    </span>
                    <span className={`font-mono text-sm font-semibold tracking-widest transition-colors ${styles.num} ${
                      isActive ? 'text-accent' : ''
                    }`}>
                      {card.num}
                    </span>
                  </div>

                  {/* CUERPO: Título, descripción completa e ítems con estrella de 8 puntas */}
                  <div className="relative z-10 flex-1 flex flex-col justify-between mt-6">
                    <div>
                      <h3 className={`font-display font-semibold text-[24px] sm:text-[26px] tracking-[-0.03em] leading-[1.1] mb-3 ${styles.title}`}>
                        {card.title}
                      </h3>

                      <p className={`text-sm leading-relaxed mb-6 ${styles.desc}`}>
                        {card.desc}
                      </p>

                      {/* Lista de características técnicas garantizadas */}
                      <ul className="space-y-2.5 mb-6">
                        {card.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5">
                            <StarBullet 
                              size={13} 
                              className={`mt-1 shrink-0 ${styles.starColor}`} 
                            />
                            <span className={`text-xs font-sans font-medium leading-snug ${styles.itemText}`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* PIE DE TARJETA: Enlace interactivo con área táctil accesible de 44px */}
                    <div className="pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] py-2.5 group/btn ${styles.cta}`}
                      >
                        <span>{serv.quote_cta}</span>
                        <span className={`transition-transform duration-200 group-hover/btn:translate-x-1 ${styles.ctaArrow} ${
                          isActive ? 'translate-x-0.5' : ''
                        }`}>
                          →
                        </span>
                      </a>
                    </div>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CONTROLES DE NAVEGACIÓN Y PROGRESO CINÉTICO EXCLUSIVO PARA MÓVIL (<768px) */}
        <div className="flex md:hidden items-center justify-between mt-4 px-2 select-none">
          {/* Puntos interactivos con hit-box accesible de 44px */}
          <div className="flex items-center gap-1" role="tablist" aria-label="Navegar tarjetas de servicio">
            {serv.cards.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                role="tab"
                aria-selected={activeCard === idx}
                aria-label={`Ver servicio ${idx + 1}: ${card.title}`}
                onClick={() => scrollToCard(idx)}
                className="p-3 flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`transition-all duration-300 rounded-full block ${
                    activeCard === idx
                      ? 'w-7 h-2 bg-accent shadow-xs'
                      : 'w-2 h-2 bg-line hover:bg-muted'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Insignia con contador mono y pista táctil */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ink-soft bg-surface border border-line px-3 py-1.5 rounded-full shadow-2xs">
            <span className="font-semibold text-accent">0{activeCard + 1}</span>
            <span className="text-line">/</span>
            <span>0{serv.cards.length}</span>
            <span className="text-[10px] text-ink/40 ml-1">
              {lang === 'es' ? '← Desliza →' : '← Swipe →'}
            </span>
          </div>
        </div>

      </Container>
    </section>
  );
}
