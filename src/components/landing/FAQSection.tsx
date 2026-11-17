'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus } from 'lucide-react';
import { Container, Eyebrow, MotionPill, Button, Grain, Reveal, ParticleAtmosphere } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';
import { getWhatsAppUrl } from '../../config/site';

// Ícono SVG inline estilizado para cada una de las 6 categorías de pregunta
function QuestionIcon({ type }: { type: string }) {
  const strokeWidth = 1.75;

  switch (type) {
    case 'price':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      );
    case 'clock':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'templates':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case 'rocket':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case 'database':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3 2.39 0 4.6-.31 6.18-.84" />
          <polyline points="19 14 22 17 19 20" />
          <line x1="15" y1="17" x2="22" y2="17" />
        </svg>
      );
    case 'chat':
    default:
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
  }
}

// Ícono SVG de WhatsApp
function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={`inline-block shrink-0 align-middle ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

// Burbuja conversacional de respuesta con avatar JA y efecto de escritura
function AnswerBubble({ 
  text, 
  shouldReduceMotion 
}: { 
  text: string; 
  shouldReduceMotion: boolean | null;
}) {
  const [isTyping, setIsTyping] = useState(!shouldReduceMotion);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setTimeout(() => setIsTyping(false), 400);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <div className="flex items-start gap-3">
      {/* Avatar JA */}
      <div className="w-7 h-7 rounded-[8px] bg-surface text-ink font-display font-bold text-[11px] flex items-center justify-center shrink-0 select-none shadow-xs mt-0.5">
        JA
      </div>

      {/* Burbuja de respuesta */}
      <div className="bg-white/[0.08] border border-line-dark text-white/85 px-4 py-3 rounded-2xl rounded-tl-xs text-[15px] leading-relaxed flex-1">
        {isTyping && !shouldReduceMotion ? (
          <div className="inline-flex items-center gap-1.5 py-1" aria-label="Escribiendo respuesta">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse delay-150" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse delay-300" />
          </div>
        ) : (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="leading-relaxed"
          >
            {text}
          </motion.p>
        )}
      </div>
    </div>
  );
}

// Tarjeta individual de acordeón conversacional
function FAQAccordionCard({
  item,
  index,
  isOpen,
  onToggle,
  buttonRef,
  onKeyDown,
  shouldReduceMotion,
}: {
  item: {
    q: string;
    shortQ: string;
    a: string;
    icon: string;
  };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  buttonRef: (el: HTMLButtonElement | null) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div
      className={`rounded-[28px] p-5 sm:p-6 transition-all duration-300 relative overflow-hidden group ${
        isOpen
          ? 'bg-ink text-white border border-line-dark shadow-md'
          : 'bg-surface text-ink border border-line shadow-xs hover:-translate-y-0.5 hover:shadow-sm'
      }`}
    >
      {/* MotionPill decorativa difuminada en esquina al abrir */}
      {isOpen && (
        <div className="absolute -bottom-3 -right-3 w-32 h-12 rounded-full overflow-hidden opacity-35 blur-[14px] pointer-events-none select-none" aria-hidden="true">
          <MotionPill width={128} height={48} className="w-full h-full" />
        </div>
      )}

      {/* Cabecera del ítem accesible */}
      <button
        ref={buttonRef}
        id={`faq-header-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
        onClick={onToggle}
        onKeyDown={onKeyDown}
        className="w-full text-left flex items-center justify-between gap-4 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-xl"
      >
        {/* Círculo con ícono según la categoría */}
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? 'bg-white/12 text-white'
              : 'bg-bg text-ink border border-line/60 group-hover:border-ink/20 group-hover:bg-white'
          }`}
        >
          <QuestionIcon type={item.icon} />
        </div>

        {/* Texto de la pregunta */}
        <span
          className={`font-display font-semibold text-[17px] sm:text-[18px] tracking-[-0.02em] leading-snug flex-1 transition-colors ${
            isOpen ? 'text-white' : 'text-ink'
          }`}
        >
          {item.q}
        </span>

        {/* Botón circular accesible de 44x44px con signo "+" rotatorio */}
        <div
          className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-45 border-accent text-accent bg-accent/10'
              : 'rotate-0 border-line text-ink group-hover:border-ink'
          }`}
          aria-hidden="true"
        >
          <Plus size={18} />
        </div>
      </button>

      {/* Contenido en formato de conversación viva al expandir */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${index}`}
            role="region"
            aria-labelledby={`faq-header-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-5 mt-4 border-t border-white/10 relative z-10">
              {/* Burbuja del usuario con pregunta corta */}
              <div className="flex justify-end mb-3.5">
                <div className="bg-accent text-white px-4 py-2.5 rounded-2xl rounded-tr-xs text-[15px] font-medium leading-relaxed max-w-full sm:max-w-[85%] shadow-xs break-words">
                  {item.shortQ}
                </div>
              </div>

              {/* Burbuja del asistente JA con respuesta directa */}
              <AnswerBubble 
                text={item.a} 
                shouldReduceMotion={shouldReduceMotion} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Tarjeta de contacto lateral con signo "?" monumental degradado
function ContactCard({
  faq,
}: {
  faq: {
    available_label: string;
    contact_card: {
      title: string;
      desc: string;
      btn: string;
      whatsapp_msg: string;
    };
  };
}) {
  const whatsappUrl = getWhatsAppUrl(faq.contact_card.whatsapp_msg);

  return (
    <div className="bg-ink text-white rounded-[40px] p-7 sm:p-8 relative overflow-hidden border border-line-dark shadow-xl group">
      {/* Grano editorial integrado */}
      <Grain />

      {/* Signo "?" GIGANTE decorativo con blur trasero y degradado */}
      <div
        className="absolute -right-4 sm:-right-8 -bottom-10 sm:-bottom-14 select-none pointer-events-none font-display font-bold text-[220px] sm:text-[280px] leading-none text-[#FF3D14] blur-[24px] opacity-60"
        aria-hidden="true"
      >
        ?
      </div>

      <div
        className="absolute -right-4 sm:-right-8 -bottom-10 sm:-bottom-14 select-none pointer-events-none font-display font-bold text-[220px] sm:text-[280px] leading-none"
        style={{
          background: 'linear-gradient(135deg, #1a0500 0%, #FF3D14 45%, #FFB36B 75%, #1a0500 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
        }}
        aria-hidden="true"
      >
        ?
      </div>

      {/* Contenido interactivo */}
      <div className="relative z-10 flex flex-col justify-between">
        {/* Cabecera con avatar JA y disponibilidad */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[12px] bg-surface text-ink font-display font-bold text-sm flex items-center justify-center shrink-0 shadow-xs select-none">
            JA
          </div>
          <div>
            <span className="font-sans font-semibold text-sm text-white block leading-tight">
              Juan Álvarez
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] text-white/70 uppercase tracking-wider">
                {faq.available_label}
              </span>
            </div>
          </div>
        </div>

        {/* Título y descripción */}
        <div className="mt-8 mb-6">
          <h3 className="font-display font-semibold text-[26px] sm:text-[28px] text-white leading-tight mb-2">
            {faq.contact_card.title}
          </h3>
          <p className="text-[15px] text-white/70 font-normal leading-relaxed">
            {faq.contact_card.desc}
          </p>
        </div>

        {/* Botón WhatsApp directo con ícono y texto perfectamente alineados */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button 
            variant="accent" 
            className="w-full justify-center"
            leftIcon={<WhatsAppIcon className="w-4 h-4 shrink-0" />}
          >
            <span>{faq.contact_card.btn}</span>
          </Button>
        </a>
      </div>
    </div>
  );
}

// Sección de preguntas frecuentes con layout en 2 columnas, acordeón conversacional y JSON-LD
export default function FAQSection() {
  const { t } = useLanguage();
  const faq = t.single_page.faq_section;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  // Alternancia de acordeón manteniendo solo uno abierto a la vez
  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Navegación accesible por teclado entre cabeceras con flechas arriba/abajo
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % faq.items.length;
      buttonRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + faq.items.length) % faq.items.length;
      buttonRefs.current[prevIndex]?.focus();
    }
  };

  // Datos estructurados Schema.org FAQPage para indexación en motores de búsqueda
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section 
      id="faq" 
      className="relative w-full bg-bg text-ink pt-[clamp(24px,3.5vw,48px)] pb-[clamp(64px,9vw,120px)]"
    >
      {/* Contenedor de retícula y auras ambientales con overflow-hidden para proteger la posición sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden="true">
        {/* Atmósfera de partículas flotantes en azul y rojo */}
        <ParticleAtmosphere variant="faq" />

        {/* Aura cálida poppy detrás de la tarjeta de contacto interactiva */}
        <div className="absolute top-1/4 left-0 -translate-x-1/4 w-[560px] h-[400px] rounded-full bg-gradient-to-br from-[#FF3D14]/18 via-[#FF3D14]/06 to-transparent blur-[85px] mix-blend-multiply" />

        {/* Aura fría azul hielo equilibrando el cuadrante derecho del acordeón */}
        <div className="absolute bottom-1/4 right-0 translate-x-1/4 w-[560px] h-[380px] rounded-full bg-gradient-to-bl from-[#38BDF8]/20 via-[#BFE0FF]/14 to-transparent blur-[85px] mix-blend-multiply" />
      </div>

      {/* Inyección semántica de JSON-LD para Google Search Console */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        {/* Marcadores técnicos editoriales en cabecera */}
        <div className="hidden lg:flex items-center justify-between text-ink/30 font-mono text-[10px] tracking-widest uppercase mb-6 pointer-events-none select-none">
          <span>+ SEC_05 // FAQ_SYSTEM</span>
          <span>CRITERIOS · INVERSIÓN · ALCANCES +</span>
        </div>

        {/* RETÍCULA DE 12 COLUMNAS (DESKTOP) Y FLUJO CONTINUO (TABLET/MÓVIL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMNA IZQUIERDA (cols 1–5): cabecera y tarjeta de contacto sticky en desktop sin overflow que lo bloquee */}
          <div className="lg:col-span-5 h-full">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div>
                <Eyebrow text={faq.eyebrow} className="mb-4" />
                <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.04em] leading-[1.05] text-ink mb-3 select-none [text-wrap:balance]">
                  <span>{faq.title_part1} </span>
                  <span className="text-muted">{faq.title_part2}</span>
                </h2>
                <p className="text-body-lg text-ink-soft max-w-[380px] font-normal leading-relaxed">
                  {faq.subtitle}
                </p>
              </div>

              {/* Tarjeta de contacto con "?" monumental */}
              <ContactCard faq={faq} />
            </div>
          </div>

          {/* COLUMNA DERECHA (cols 6–12): Acordeón conversacional en tarjetas */}
          <div className="lg:col-span-7 space-y-3">
            {faq.items.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <FAQAccordionCard
                  item={item}
                  index={idx}
                  isOpen={openIndex === idx}
                  onToggle={() => handleToggle(idx)}
                  buttonRef={(el) => {
                    buttonRefs.current[idx] = el;
                  }}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
