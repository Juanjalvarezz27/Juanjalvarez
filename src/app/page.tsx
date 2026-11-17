'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/src/components/landing/Header';
import Hero from '@/src/components/landing/Hero';
import StatementSection from '@/src/components/landing/StatementSection';
import ServicesSection from '@/src/components/landing/ServicesSection';
import ProjectsSection from '@/src/components/landing/ProjectsSection';
import ProcessSection from '@/src/components/landing/ProcessSection';

// Carga diferida de componentes bajo el pliegue para optimizar TBT y LCP
const FAQSection = dynamic(() => import('@/src/components/landing/FAQSection'), { ssr: true });
const ContactSection = dynamic(() => import('@/src/components/landing/ContactSection'), { ssr: true });
const Footer = dynamic(() => import('@/src/components/landing/Footer'), { ssr: true });

// Portafolio Single-Page de Juan Álvarez con arquitectura editorial cinética
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-white font-sans relative w-full max-w-full overflow-x-clip antialiased">
      
      {/* Enlace accesible para saltar directo al contenido principal */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ink focus:text-white focus:rounded-full focus:font-mono focus:text-xs focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      {/* Header global sticky con monograma JA y scrollspy */}
      <Header />

      <main id="main-content">
        {/* 1. HERO EDITORIAL KINETIC (#inicio) - Claro */}
        <Hero />

        {/* 2. STATEMENT EDITORIAL CON MÉTRICAS INTEGRADAS - Claro */}
        <StatementSection />

        {/* 3. SERVICIOS Y PROPUESTA DE VALOR (#servicios) - Claro */}
        <ServicesSection />

        {/* 4. PROYECTOS EDITORIALES EN GRAN FORMATO (#proyectos) - Oscuro */}
        <ProjectsSection />

        {/* 5. PROCESO EDITORIAL CON TIMELINE VIVA (#proceso) - Claro */}
        <ProcessSection />

        {/* 6. PREGUNTAS FRECUENTES Y CONDICIONES DE TRABAJO - Claro */}
        <FAQSection />

        {/* 7. CTA FINAL CON ATRIBUTOS Y WHATSAPP DIRECTO (#contacto) - Oscuro */}
        <ContactSection />
      </main>

      {/* 8. FOOTER EDITORIAL CON WORDMARK MONUMENTAL - Claro */}
      <Footer />

    </div>
  );
}
