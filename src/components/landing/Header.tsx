'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Reveal } from '../ui';
import { getWhatsAppUrl } from '../../config/site';

// Ícono SVG de WhatsApp para el menú móvil
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={`shrink-0 align-middle ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

// Header flotante con visibilidad reactiva a la dirección del scroll (Headroom)
export default function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const lastScrollY = useRef(0);
  const hamburgerButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Enlaces de navegación de la home
  const navLinks = [
    { name: lang === 'es' ? 'Inicio' : 'Home', href: '#inicio', id: 'inicio' },
    { name: lang === 'es' ? 'Servicios' : 'Services', href: '#servicios', id: 'servicios' },
    { name: lang === 'es' ? 'Proyectos' : 'Projects', href: '#proyectos', id: 'proyectos' },
    { name: lang === 'es' ? 'Proceso' : 'Process', href: '#proceso', id: 'proceso' },
    { name: lang === 'es' ? 'Contacto' : 'Contact', href: '#contacto', id: 'contacto' },
  ];

  // Control de visibilidad direccional: ocultar al bajar, mostrar al subir
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Al inicio de la página (< 50px) siempre visible
      if (currentScrollY < 50) {
        setIsVisible(true);
        setIsScrolled(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      setIsScrolled(true);

      const delta = currentScrollY - lastScrollY.current;

      // Umbral de 10px para filtrar micro-scrolls y rebote
      if (Math.abs(delta) > 10) {
        if (delta > 0 && currentScrollY > 120) {
          // Scroll hacia abajo: ocultar fuera del viewport
          setIsVisible(false);
        } else {
          // Scroll hacia arriba: revelar suavemente
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy para resaltar el enlace correspondiente a la sección visible
  useEffect(() => {
    const sectionIds = ['inicio', 'servicios', 'proyectos', 'proceso', 'contacto'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Cierre de menú móvil al redimensionar a desktop (≥1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Bloqueo de scroll y gestión de tecla Escape en menú móvil
  const handleCloseMenu = useCallback(() => {
    setMobileMenuOpen(false);
    hamburgerButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCloseMenu();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, handleCloseMenu]);

  return (
    <>
      <header 
        className={`fixed top-3 sm:top-4 inset-x-0 z-50 pointer-events-none flex justify-center px-3 sm:px-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`w-full max-w-[92vw] lg:max-w-[960px] mx-auto rounded-full bg-surface/90 backdrop-blur-xl backdrop-saturate-150 border border-black/[0.08] pointer-events-auto transition-all duration-300 flex items-center justify-between px-3 sm:px-4.5 ${
            isScrolled 
              ? 'h-[52px] lg:h-13 bg-white/95 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.95)]' 
              : 'h-[52px] lg:h-14 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.85)]'
          }`}
        >
          {/* LADO IZQUIERDO: Logo oficial horizontal de marca */}
          <Link href="#inicio" className="flex items-center group shrink-0 select-none" aria-label="Juan Álvarez">
            <div className="relative h-8 sm:h-8.5 lg:h-9 w-[114px] sm:w-[126px] group-hover:opacity-90 transition-opacity">
              <Image
                src="/logo-horizontal.png"
                alt="Juan Álvarez"
                fill
                sizes="(max-width: 640px) 114px, 126px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* CENTRO: Enlaces en cápsula segmentada visibles en ≥1024px */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/[0.035] p-1 rounded-full border border-black/[0.04]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative font-sans text-[13px] tracking-tight transition-all duration-200 px-3.5 py-1.5 rounded-full select-none flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-ink font-semibold bg-white shadow-2xs' 
                      : 'text-ink-soft hover:text-ink hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <span 
                      className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* LADO DERECHO (≥1024px): Selector de idioma + Botón Contáctame */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <button
              onClick={toggleLanguage}
              className="h-8 px-2.5 rounded-full text-[11px] font-mono font-semibold tracking-wider text-ink/75 hover:text-ink bg-black/[0.035] hover:bg-black/[0.07] border border-black/[0.05] transition-all cursor-pointer flex items-center justify-center select-none"
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center h-8 px-4 rounded-full bg-ink text-white hover:bg-[#1C1C1F] text-xs font-sans font-medium transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer select-none"
            >
              <span>{lang === 'es' ? 'Contáctame' : 'Contact me'}</span>
            </a>
          </div>

          {/* CONTROLES PARA DISPOSITIVOS MENORES A 1024px: Selector + Hamburguesa de 44x44px */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={toggleLanguage}
              className="h-9 px-2.5 rounded-full text-[11px] font-mono font-semibold text-ink bg-black/[0.04] border border-black/[0.06] cursor-pointer flex items-center justify-center"
              title="Cambiar idioma"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              ref={hamburgerButtonRef}
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="w-11 h-11 rounded-full flex items-center justify-center text-ink bg-black/[0.04] hover:bg-black/[0.08] active:bg-black/[0.12] border border-black/[0.06] transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* PANEL DE MENÚ MÓVIL A PANTALLA COMPLETA (100dvh, fondo --ink, safe-area) */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación principal"
          className="fixed inset-0 z-[100] bg-ink text-white flex flex-col justify-between p-6 sm:p-10 h-[100dvh] min-h-[100dvh] pt-[calc(1.5rem+env(safe-area-inset-top))] pb-[calc(1.5rem+env(safe-area-inset-bottom))] animate-fade-up overflow-y-auto"
        >
          {/* Header del menú móvil */}
          <div className="flex items-center justify-between border-b border-line-dark pb-5">
            <div className="relative h-9 w-[130px] shrink-0">
              <Image
                src="/logo-horizontal-white.png"
                alt="Juan Álvarez"
                fill
                sizes="130px"
                className="object-contain object-left"
                priority
              />
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="h-9 px-3 rounded-full text-xs font-mono font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/15 cursor-pointer"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>

              <button
                ref={closeButtonRef}
                onClick={handleCloseMenu}
                className="w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Lista de enlaces en formato display editorial con Reveal */}
          <nav className="flex flex-col gap-4 my-auto py-8">
            {navLinks.map((link, idx) => (
              <Reveal key={link.id} delay={idx * 0.06}>
                <a
                  href={link.href}
                  onClick={handleCloseMenu}
                  className="font-display font-semibold text-display-md text-white/90 hover:text-white transition-colors flex items-center justify-between group py-2"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </a>
              </Reveal>
            ))}
          </nav>

          {/* Footer del menú con botón accent de WhatsApp */}
          <div className="pt-6 border-t border-line-dark flex flex-col gap-3">
            <a
              href={getWhatsAppUrl(lang === 'es' ? 'Hola Juan, vi tu portafolio y quiero cotizar un proyecto.' : 'Hi Juan, I saw your portfolio and would like to request a quote.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCloseMenu}
              className="w-full min-h-[52px] flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-deep text-white font-sans font-medium text-body py-3.5 px-6 rounded-full transition-all shadow-md active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>{lang === 'es' ? 'Escríbeme a WhatsApp' : 'Chat on WhatsApp'}</span>
            </a>
            <span className="text-center font-mono text-label text-white/40">
              Trujillo, Venezuela (UTC-4)
            </span>
          </div>
        </div>
      )}
    </>
  );
}
