'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined' && !isOpen) {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/home/servicios" },
    { name: "Contacto", href: "/home/contacto" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] bg-white border-b-4 md:border-b-8 border-black font-space transition-transform duration-500 ease-in-out ${
          isVisible || isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full mx-auto flex justify-between items-center h-16 md:h-20 px-4 md:px-6">
          
          {/* LADO IZQUIERDO: LOGO + LÍNEA AZUL */}
          <Link href="/" className="flex items-center h-full group gap-3 md:gap-5 py-2">
            <div className="relative h-10 w-10 md:h-16 md:w-16">
              <Image src="/Logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col justify-center border-l-4 md:border-l-8 border-brand-blue pl-3 md:pl-4">
              <span className="font-anton text-xl md:text-3xl text-black uppercase leading-none pt-1">
                Juan Alvarez
              </span>
              <span className="hidden sm:block font-mono text-[10px] md:text-sm font-black text-brand-blue uppercase tracking-tighter mt-1">
                Soluciones digitales
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex h-full items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="h-full flex items-center px-10 font-anton text-3xl text-black uppercase border-l-8 border-black hover:bg-brand-blue hover:text-white transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden flex items-center justify-center text-black p-2">
            <Menu size={36} strokeWidth={3} />
          </button>
        </div>
      </nav>

      {/* OVERLAY DEL MENÚ MÓVIL */}
      <div 
        className={`fixed inset-0 bg-white z-[150] flex flex-col transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabecera */}
        <div className="w-full flex justify-between items-center h-16 px-4 border-b-4 border-black bg-white">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image src="/Logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="font-anton text-2xl text-black pt-1">MENÚ</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="bg-black text-white p-2 border-2 border-black active:bg-brand-blue"
          >
            <X size={28} strokeWidth={3} />
          </button>
        </div>

        {/* Links con Doble Fondo Azul (Sin Borde) y Flechas Naranjas */}
        <div className="flex flex-col flex-grow p-6 gap-6 bg-[#f4f4f4] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group/link relative"
            >
              {/* Sombra azul sólida sin borde */}
              <div className="absolute inset-0 bg-brand-blue translate-x-2 translate-y-2"></div>
              
              {/* Placa Principal */}
              <div className="relative flex items-center justify-between w-full bg-white border-4 border-black p-6 active:translate-x-1 active:translate-y-1 transition-all">
                <span className="font-anton text-4xl uppercase tracking-tight text-black group-active/link:text-brand-blue">
                  {link.name}
                </span>
                <ArrowRight size={36} strokeWidth={4} className="text-brand-orange" />
              </div>
            </Link>
          ))}
        </div>

        {/* FOOTER REDISEÑADO: MÍNIMO E IMPACTANTE */}
        <div className="bg-black text-white p-10 border-t-8 flex flex-col items-center text-center">
          <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-[0.3em] mb-2">
            Elevando el estándar digital
          </span>
          <h3 className="font-anton text-4xl uppercase leading-none mb-1">
            Juan Alvarez
          </h3>
          <div className="w-12 h-1 bg-brand-blue mt-4"></div>
        </div>
      </div>
    </>
  );
}