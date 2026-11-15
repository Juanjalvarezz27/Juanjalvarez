'use client';

import React, { useState, useRef, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';
import { getProjects, type Project } from '../../data/projects';
import { getWhatsAppUrl } from '../../config/site';

// Componente interactivo para inclinación 3D en la tarjeta destacada
function TiltBrowserMockup({
  project,
  shouldReduceMotion,
}: {
  project: Project;
  shouldReduceMotion: boolean | null;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Físicas suaves para la respuesta de inclinación
  const mouseX = useSpring(x, { stiffness: 120, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['4deg', '-4deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-4deg', '4deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mousePosX = (e.clientX - rect.left) / width - 0.5;
    const mousePosY = (e.clientY - rect.top) / height - 0.5;
    x.set(mousePosX);
    y.set(mousePosY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        shouldReduceMotion
          ? {}
          : {
              perspective: 1200,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      className="relative w-full transition-transform duration-200 will-change-transform"
    >
      {/* Estela naranja desenfocada detrás de la ventana simulada */}
      <div 
        className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-accent via-accent-deep to-transparent opacity-40 blur-3xl rounded-full -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Marco de navegador minimalista */}
      <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
        {/* Barra superior de control de ventana */}
        <div className="bg-black/60 px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-[11px] font-mono text-white/50 truncate max-w-[280px]">
            https://juanalvarez.dev/projects/{project.slug}
          </div>
          <div className="font-mono text-[10px] text-accent uppercase font-bold tracking-widest hidden sm:block">
            {project.category}
          </div>
        </div>

        {/* Captura de alta resolución */}
        <div className="relative w-full aspect-[16/10] bg-[#0A0A0C] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

// Hook para suscripción reactiva a puntero fino (desktop mouse) sin cascading renders
function useFinePointer() {
  return useSyncExternalStore(
    (callback) => {
      const media = window.matchMedia('(pointer: fine)');
      media.addEventListener('change', callback);
      return () => media.removeEventListener('change', callback);
    },
    () => window.matchMedia('(pointer: fine)').matches,
    () => false
  );
}

// Sección principal de proyectos con caso destacado, filtros fluidos y cursor magnético
export default function ProjectsSection() {
  const { t, lang } = useLanguage();
  const ps = t.single_page.projects_section;
  const shouldReduceMotion = useReducedMotion();

  const [activeFilter, setActiveFilter] = useState<'all' | 'sistemas' | 'webs'>('all');
  const [cursorActive, setCursorActive] = useState(false);
  const isFinePointer = useFinePointer();

  // Cursor personalizado que sigue al ratón
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 350, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 350, damping: 28 });

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (isFinePointer && !shouldReduceMotion) {
      window.addEventListener('mousemove', handleWindowMouseMove);
      return () => window.removeEventListener('mousemove', handleWindowMouseMove);
    }
  }, [isFinePointer, shouldReduceMotion, cursorX, cursorY]);

  // Lista de proyectos traducida dinámicamente según idioma
  const allProjects = getProjects(lang);
  const featuredProject = allProjects.find((p) => p.featured) || allProjects[0];

  // Filtro de proyectos
  const filteredList = allProjects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  // Proyecto destacado visible según filtro
  const showFeatured = activeFilter === 'all' || featuredProject.category === activeFilter;

  // Lista restante para la cuadrícula
  const restProjects = filteredList.filter((p) => (showFeatured ? p.slug !== featuredProject.slug : true));

  const filterOptions: Array<{ id: 'all' | 'sistemas' | 'webs'; label: string }> = [
    { id: 'all', label: ps.filters.all },
    { id: 'sistemas', label: ps.filters.sistemas },
    { id: 'webs', label: ps.filters.webs },
  ];

  const whatsappUrl = getWhatsAppUrl(ps.cta_whatsapp);

  return (
    <section
      id="proyectos"
      className="relative w-full bg-ink text-white rounded-t-[40px] py-[clamp(96px,12vw,180px)] overflow-hidden"
    >
      {/* Cursor circular flotante para desktop */}
      {isFinePointer && !shouldReduceMotion && (
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[88px] h-[88px] rounded-full bg-accent text-white font-mono text-[11px] uppercase font-bold tracking-wider flex items-center justify-center pointer-events-none z-50 shadow-xl shadow-accent/40 text-center leading-tight transition-opacity duration-200 ${
            cursorActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <span>{ps.card_view_case}</span>
        </motion.div>
      )}

      <Container>
        {/* CABECERA EDITORIAL Y FILTRO DE PÍLDORAS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <SectionHeading
            variant="dark"
            eyebrow={ps.eyebrow}
            part1={ps.title_part1}
            part2={ps.title_part2}
            subtitle={ps.subtitle}
          />

          {/* Barra de píldoras animada con layoutId */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md self-start lg:self-auto shrink-0">
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer select-none ${
                    isActive ? 'text-ink font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterIndicator"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CASO DESTACADO (LEYMA) */}
        {showFeatured && (
          <div
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
            className="w-full rounded-[40px] bg-[#131315] border border-line-dark p-7 sm:p-10 lg:p-14 mb-16 sm:mb-24 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Columna izquierda (5/12): Ficha técnica y solución */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                  {ps.featured_tag}
                </span>

                <h3 className="font-display font-semibold text-display-md text-white tracking-[-0.04em] leading-[1.05] mb-4">
                  {featuredProject.name}
                </h3>

                <p className="text-body-lg text-white/80 font-normal leading-relaxed mb-8">
                  {featuredProject.oneLiner}
                </p>

                {/* Bloque El Problema */}
                <div className="mb-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                    {ps.problem_label}
                  </span>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {featuredProject.problem}
                  </p>
                </div>

                {/* Bloque La Solución */}
                <div className="mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                    {ps.solution_label}
                  </span>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {featuredProject.solution}
                  </p>
                </div>

                {/* Bloque El Resultado (solo si existe y no está vacío) */}
                {featuredProject.result && featuredProject.result.trim() !== '' && (
                  <div className="border-l-2 border-accent pl-3.5 my-5">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold block mb-1">
                      {ps.result_label}
                    </span>
                    <p className="text-sm text-white leading-relaxed font-medium">
                      {featuredProject.result}
                    </p>
                  </div>
                )}

                {/* Chips de stack tecnológico */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs text-white/70 px-3 py-1 rounded-full border border-white/15 bg-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Botón hacia el caso de estudio */}
                <Link href={`/projects/${featuredProject.slug}`}>
                  <Button
                    variant="white"
                    showMotionPill={true}
                    icon={<ArrowUpRight className="w-4 h-4 text-ink" />}
                  >
                    {ps.view_case_btn}
                  </Button>
                </Link>
              </div>

              {/* Columna derecha (7/12): Mockup interactivo 3D con tilt */}
              <div className="lg:col-span-7">
                <TiltBrowserMockup
                  project={featuredProject}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>

            </div>
          </div>
        )}

        {/* CUADRÍCULA DEL RESTO DE PROYECTOS (2 columnas con desfase vertical) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          <AnimatePresence mode="popLayout">
            {restProjects.map((project, idx) => {
              const isSecondColumn = idx % 2 === 1;

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className={`w-full ${isSecondColumn ? 'md:translate-y-20' : ''}`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    onMouseEnter={() => setCursorActive(true)}
                    onMouseLeave={() => setCursorActive(false)}
                    className="group relative rounded-[28px] bg-[#131315] border border-line-dark hover:border-white/25 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg cursor-pointer h-full"
                  >
                    {/* Imagen superior con ratio 16/10 y zoom suave */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={
                          project.isMobileFormat
                            ? 'object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105'
                            : 'object-cover transition-transform duration-500 group-hover:scale-105'
                        }
                      />
                    </div>

                    {/* Contenido descriptivo del proyecto */}
                    <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                            {project.category === 'sistemas' ? 'Sistemas' : 'Webs & Tiendas'}
                          </span>
                          <span className="font-mono text-xs text-white/40">
                            {project.year}
                          </span>
                        </div>

                        <h4 className="font-display font-semibold text-[26px] sm:text-[28px] tracking-[-0.03em] text-white leading-tight mb-2.5">
                          {project.name}
                        </h4>

                        <p className="text-[15px] text-white/70 leading-relaxed font-normal mb-6 line-clamp-2">
                          {project.oneLiner}
                        </p>
                      </div>

                      {/* Fila inferior: Chips y flecha interactiva */}
                      <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.slice(0, 3).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="font-mono text-[11px] text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Flecha circular con rotación de 45° en hover */}
                        <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center text-white group-hover:text-accent transition-all shrink-0">
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CIERRE DE SECCIÓN: TEXTO CENTRADO Y BOTÓN DE COTIZACIÓN */}
        <div className="mt-28 sm:mt-36 pt-16 border-t border-white/10 text-center max-w-2xl mx-auto flex flex-col items-center">
          <h3 className="font-display font-semibold text-display-sm sm:text-display-md text-white tracking-[-0.03em] mb-6">
            {ps.cta_title}
          </h3>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="accent"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              {ps.cta_btn}
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
