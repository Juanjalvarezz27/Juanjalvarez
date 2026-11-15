'use client';

import React from 'react';
import { Container, SectionHeading, StarBullet, Grain, Reveal } from '../ui';
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

// Sección de Servicios con 4 tarjetas escalonadas en desktop y carrusel snap en móvil
export default function ServicesSection() {
  const { t } = useLanguage();
  const serv = t.single_page.services_section;

  return (
    <section 
      id="servicios" 
      className="relative w-full bg-bg text-ink py-[clamp(80px,12vw,160px)] overflow-hidden"
    >
      <Container>
        {/* Encabezado editorial centrado en dos tonos */}
        <SectionHeading
          eyebrow={serv.eyebrow}
          part1={serv.title_ink}
          part2={serv.title_muted}
          subtitle={serv.subtitle}
          align="center"
          className="mb-16 lg:mb-24"
        />

        {/* Contenedor responsivo: 4 cols en desktop (con desfase), 2x2 en tablet (sin desfase) y snap carousel en móvil */}
        <div className="flex overflow-x-auto pb-8 pt-2 px-4 -mx-4 md:mx-0 md:px-0 md:pb-0 md:overflow-visible snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start no-scrollbar">
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

            return (
              <div
                key={card.id}
                className={`w-[84vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink ${
                  isStaggered ? 'lg:translate-y-16' : ''
                }`}
              >
                <Reveal delay={idx * 0.08}>
                  <div
                    className={`relative rounded-[28px] p-7 sm:p-8 min-h-[520px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group cursor-default select-none ${styles.card}`}
                  >
                    {/* Fondo decorativo con MotionPill desenfocada para variante dark */}
                    {variantKey === 'dark' && (
                      <div 
                        className="absolute -top-12 -right-12 w-48 h-24 rounded-full bg-gradient-to-r from-accent to-accent-deep blur-2xl opacity-40 pointer-events-none"
                        aria-hidden="true"
                      />
                    )}

                    {/* Grano cinematográfico sobre la variante accent para textura táctil */}
                    {variantKey === 'accent' && (
                      <Grain className="absolute inset-0 rounded-[28px]" opacity={0.09} />
                    )}

                    {/* CABECERA DE LA TARJETA: Etiqueta pill y numeración mono */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wider border ${styles.badge}`}>
                        {card.badge}
                      </span>
                      <span className={`font-mono text-sm font-semibold tracking-widest ${styles.num}`}>
                        {card.num}
                      </span>
                    </div>

                    {/* CUERPO: Título, descripción e ítems con estrella de 8 puntas */}
                    <div className="relative z-10 mt-auto pt-10">
                      <h3 className={`font-display font-semibold text-[26px] sm:text-[28px] tracking-[-0.03em] leading-[1.1] mb-3.5 ${styles.title}`}>
                        {card.title}
                      </h3>

                      <p className={`text-sm leading-relaxed mb-6 line-clamp-2 ${styles.desc}`}>
                        {card.desc}
                      </p>

                      {/* Lista de características técnicas garantizadas */}
                      <ul className="space-y-2.5 mb-8">
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

                      {/* PIE DE TARJETA: Enlace interactivo con desplazamiento a WhatsApp */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors group/btn ${styles.cta}`}
                      >
                        <span>{serv.quote_cta}</span>
                        <span className={`transition-transform duration-200 group-hover/btn:translate-x-1 ${styles.ctaArrow}`}>
                          →
                        </span>
                      </a>
                    </div>

                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
