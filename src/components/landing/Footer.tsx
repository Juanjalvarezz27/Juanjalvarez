'use client';

import React from 'react';
import { Container, MotionPill, Reveal } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';

// Footer editorial minimalista con wordmark monumental recortado
export default function Footer() {
  const { t } = useLanguage();
  const fn = t.single_page.footer_new;

  return (
    <footer className="relative w-full bg-bg text-ink pt-6 sm:pt-10 pb-0 overflow-hidden">
      <Container>
        {/* Línea mínima de copyright */}
        <p className="font-mono text-xs text-ink-soft text-center mb-4 sm:mb-6">
          {fn.copyright}
        </p>

        {/* Wordmark GIGANTE recortado en el borde inferior */}
        <div className="relative w-full overflow-hidden select-none">
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center translate-y-[18%]">
              <span className="font-display font-bold text-[clamp(3.5rem,15vw,14rem)] tracking-[-0.06em] text-ink leading-none whitespace-nowrap">
                juan álvarez
              </span>
              <span className="inline-flex align-baseline ml-2 sm:ml-4 mb-2 sm:mb-6 w-[28px] sm:w-[48px] h-[12px] sm:h-[18px] rounded-full overflow-hidden shrink-0 shadow-xs">
                <MotionPill width={48} height={18} className="w-full h-full" />
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </footer>
  );
}
