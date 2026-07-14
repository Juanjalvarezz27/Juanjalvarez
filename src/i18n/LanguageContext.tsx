'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { es } from './dictionaries/es';
import { en } from './dictionaries/en';

type Language = 'es' | 'en';
type Dictionary = typeof es;

interface LanguageContextProps {
  lang: Language;
  t: Dictionary;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // REGLA CRÍTICA: el estado inicial SIEMPRE debe ser 'es'
  // tanto en servidor como en el primer render del cliente para evitar Hydration Mismatch
  const [lang, setLang] = useState<Language>('es');

  // SOLO después de que React haya hidratado el DOM, leemos localStorage de forma segura
  useEffect(() => {
    try {
      const saved = localStorage.getItem('app_lang');
      if (saved === 'en') {
        setLang('en');
      }
    } catch {
      // Silenciar errores de localStorage (ej. modo privado estricto)
    }
  }, []); // Sin dependencias: se ejecuta UNA sola vez tras el montaje

  const toggleLanguage = () => {
    setLang(prev => {
      const next: Language = prev === 'es' ? 'en' : 'es';
      try {
        localStorage.setItem('app_lang', next);
      } catch {
        // Silenciar errores de localStorage
      }
      return next;
    });
  };

  const t = lang === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};
