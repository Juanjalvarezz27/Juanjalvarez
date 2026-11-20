'use client';

import React from 'react';
import { Container, MotionPill } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';

// Footer editorial minimalista con wordmark monumental y descendente de 'j' preservado
export default function Footer() {
  const { t } = useLanguage();
  const fn = t.single_page.footer_new;

  return (
    <footer className="relative w-full bg-bg text-ink pt-2 sm:pt-4 pb-0 overflow-hidden">
      <Container>
        {/* Línea mínima de copyright legible con wrap en móvil */}
        <p className="font-mono text-xs text-ink-soft text-center mb-2 sm:mb-3 px-4 [text-wrap:balance]">
          {fn.copyright}
        </p>

        {/* Wordmark monumental: sin recorte del descendente para que se lea 'juan álvarez' y no 'iuan álvarez' */}
        <div className="relative w-full overflow-hidden select-none px-2 sm:px-4 pb-2 sm:pb-4">
          <div className="flex items-center justify-center">
            <span className="font-display font-bold text-[clamp(2.25rem,13.5vw,13.5rem)] tracking-[-0.05em] text-ink leading-none whitespace-nowrap">
              juan álvarez
            </span>
            <span className="inline-flex align-baseline ml-2 sm:ml-4 mb-1 sm:mb-3 w-[28px] sm:w-[48px] h-[12px] sm:h-[18px] rounded-full overflow-hidden shrink-0 shadow-xs">
              <MotionPill width={48} height={18} className="w-full h-full" />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
