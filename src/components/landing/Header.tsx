'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Reveal } from '../ui';

// Header flotante con visibilidad reactiva a la dirección del scroll (Headroom)
export default function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const lastScrollY = useRef(0);

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

  // Bloqueo de scroll cuando el menú móvil a pantalla completa está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-3.5 inset-x-0 z-50 pointer-events-none flex justify-center px-3 sm:px-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`w-full max-w-[960px] mx-auto rounded-full bg-surface/85 backdrop-blur-xl backdrop-saturate-150 border border-black/[0.08] pointer-events-auto transition-all duration-300 flex items-center justify-between px-3 sm:px-4.5 ${
            isScrolled 
              ? 'h-13 py-1 bg-white/95 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.95)]' 
              : 'h-14 py-1.5 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.85)]'
          }`}
        >
          {/* LADO IZQUIERDO: Logo oficial 3D + Nombre */}
          <Link href="#inicio" className="flex items-center gap-2.5 group shrink-0 select-none">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0 ring-1 ring-black/10 group-hover:scale-105 transition-transform duration-200 bg-ink">
              <Image
                src="/Logo.png"
                alt="Juan Álvarez"
                fill
                sizes="(max-width: 640px) 32px, 36px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-display font-semibold text-xs sm:text-[14px] text-ink tracking-tight">
              Juan Álvarez
            </span>
          </Link>

          {/* CENTRO: Enlaces en cápsula segmentada con feedback táctil */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.035] p-1 rounded-full border border-black/[0.04]">
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

          {/* LADO DERECHO: Selector de idioma refinado + Botón Contáctame contrastado */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Selector de idioma */}
            <button
              onClick={toggleLanguage}
              className="h-8 px-2.5 rounded-full text-[11px] font-mono font-semibold tracking-wider text-ink/75 hover:text-ink bg-black/[0.035] hover:bg-black/[0.07] border border-black/[0.05] transition-all cursor-pointer flex items-center justify-center select-none"
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Botón píldora Contáctame */}
            <a
              href="#contacto"
              className="inline-flex items-center justify-center h-8 px-4 rounded-full bg-ink text-white hover:bg-[#1C1C1F] text-xs font-sans font-medium transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer select-none"
            >
              <span>{lang === 'es' ? 'Contáctame' : 'Contact me'}</span>
            </a>
          </div>

          {/* Botón hamburguesa y selector para móvil (<768px) */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={toggleLanguage}
              className="h-8 px-2.5 rounded-full text-[11px] font-mono font-semibold text-ink bg-black/[0.04] border border-black/[0.06] cursor-pointer"
              title="Cambiar idioma"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-ink bg-black/[0.04] hover:bg-black/[0.08] border border-black/[0.06] transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* PANEL DE MENÚ MÓVIL A PANTALLA COMPLETA */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-ink text-white flex flex-col justify-between p-6 sm:p-10 animate-fade-up">
          {/* Header del menú móvil */}
          <div className="flex items-center justify-between border-b border-line-dark pb-6">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-1 ring-white/20 bg-ink">
                <Image
                  src="/Logo.png"
                  alt="Juan Álvarez"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="font-sans font-semibold text-base text-white">
                Juan Álvarez
              </span>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>

          {/* Lista de enlaces en formato display editorial con Reveal */}
          <nav className="flex flex-col gap-4 my-auto">
            {navLinks.map((link, idx) => (
              <Reveal key={link.id} delay={idx * 0.08}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-semibold text-display-md text-white/90 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </a>
              </Reveal>
            ))}
          </nav>

          {/* Footer del menú con CTA de WhatsApp */}
          <div className="pt-6 border-t border-line-dark flex flex-col gap-3">
            <a
              href="https://wa.me/584129164371?text=Hola%20Juan,%20vi%20tu%20portafolio%20y%20quiero%20cotizar%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-deep text-white font-sans font-medium text-body py-4 rounded-full transition-all"
            >
              <MessageCircle size={18} />
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
