'use client';

import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight, Copy, Check } from 'lucide-react';
import { Container, Eyebrow, MotionPill, Grain } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';
import { SITE_CONFIG, getWhatsAppUrl } from '../../config/site';

// Sección final de contacto (#contacto) con estela, atajos directos y copia de correo
export default function ContactSection() {
  const { t } = useLanguage();
  const cs = t.single_page.contact_section;
  const [copied, setCopied] = useState(false);

  const defaultWhatsAppUrl = getWhatsAppUrl('Hola Juan, quiero conversar sobre un proyecto.');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silenciar errores de portapapeles
    }
  };

  return (
    <section 
      id="contacto" 
      className="relative w-full bg-bg pt-[clamp(64px,8vw,120px)] pb-[clamp(16px,2vw,32px)] overflow-hidden"
    >
      <Container>
        {/* Contenedor principal con fondo --ink y esquinas redondeadas de 40px */}
        <div className="relative rounded-[40px] bg-ink text-white p-[clamp(28px,6vw,96px)] border border-line-dark overflow-hidden shadow-2xl">
          
          {/* Grano táctil sutil */}
          <Grain opacity={0.07} className="rounded-[40px]" />

          {/* Estela cinética en la esquina inferior derecha: blur y opacidad optimizados para móvil */}
          <div 
            className="absolute -bottom-20 -right-20 w-[300px] sm:w-[480px] h-[180px] sm:h-[280px] pointer-events-none opacity-40 sm:opacity-70 animate-drift-estela -z-0"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E11D12] via-[#FF3D14] to-[#FFB36B] blur-[24px] sm:blur-[50px] -rotate-6 rounded-full mix-blend-screen" />
          </div>

          <div className="relative z-10">
            {/* Eyebrow blanco con estrella de 8 puntas */}
            <Eyebrow
              text={cs.eyebrow}
              variant="dark"
              rotateStar={true}
              className="mb-6 sm:mb-8"
            />

            {/* Titular monumental en dos tonos con MotionPill incrustada (oculta en <640px) */}
            <h2 className="font-display font-semibold text-[clamp(2.2rem,5.5vw,4.5rem)] tracking-[-0.04em] leading-[0.95] mb-6 select-none [text-wrap:balance]">
              <span className="text-white">{cs.title_part1}</span>{' '}
              <span className="text-muted">{cs.title_part2}</span>
              <span className="hidden sm:inline-flex align-middle ml-4 w-[120px] sm:w-[140px] h-[40px] sm:h-[48px] rounded-full overflow-hidden shrink-0 shadow-sm">
                <MotionPill width={140} height={48} className="w-full h-full" />
              </span>
            </h2>

            {/* Subtítulo descriptivo */}
            <p className="text-body-lg text-white/70 max-w-2xl font-normal leading-relaxed mb-10 sm:mb-14">
              {cs.subtitle}
            </p>

            {/* Atajos de consulta inmediata: 1 por fila a 48px en <640px, 2 en tablet, 3 en desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-12 sm:mb-16">
              {cs.chips.map((chip, idx) => (
                <a
                  key={idx}
                  href={getWhatsAppUrl(chip.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line-dark bg-white/5 hover:bg-accent hover:border-accent p-3.5 px-6 transition-all duration-250 flex items-center justify-between text-white font-mono text-xs uppercase tracking-wider group select-none min-h-[48px] h-[48px] shadow-xs"
                >
                  <span className="truncate mr-2 font-medium">{chip.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </a>
              ))}
            </div>

            {/* Botón principal WhatsApp XL y botón para copiar correo con toast accesible */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-8 border-t border-white/10">
              
              {/* Botón principal de WhatsApp (alto 64px) */}
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 px-8 rounded-full bg-accent hover:bg-accent-deep text-white font-sans font-medium text-base flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:-translate-y-0.5 active:translate-y-0 select-none group min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>{cs.cta_whatsapp}</span>
              </a>

              {/* Botón secundario para copiar correo */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="h-16 px-7 rounded-full border border-white/20 hover:border-white bg-transparent hover:bg-white/5 text-white font-sans font-medium text-base flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer select-none min-h-[44px]"
                aria-label="Copiar dirección de correo electrónico al portapapeles"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-accent">{cs.email_copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 text-white/70 shrink-0" />
                    <span>{cs.cta_email}</span>
                  </>
                )}
              </button>

              {/* Toast accesible para lectores de pantalla */}
              <div role="status" aria-live="polite" className="sr-only">
                {copied ? `${cs.email_copied}: ${SITE_CONFIG.email}` : ''}
              </div>

            </div>

            {/* Fila inferior con redes sociales y ubicación */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-10 mt-8 text-xs font-mono text-white/50 border-t border-white/10">
              <div className="flex items-center gap-3.5">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-white/20" aria-hidden="true">•</span>
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>

              <span>{SITE_CONFIG.location}</span>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
