'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Container, SectionHeading, Button, StarBullet } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';
import { getProjects, type Project } from '../../data/projects';
import { getWhatsAppUrl } from '../../config/site';
import ProjectModal from './ProjectModal';

// Mockup visual con aspect ratio 16/10 uniforme para escritorio, móviles en marco y proyectos en desarrollo
function ProjectMockup({ 
  project, 
  lang,
  theme = 'ice',
}: { 
  project: Project; 
  lang: 'es' | 'en';
  theme?: 'ice' | 'accent';
}) {
  const isMobile = Boolean(project.isMobileFormat);
  const isUpcoming = Boolean(project.isUpcoming);
  const isAccent = theme === 'accent';

  // Presentación arquitectónica para proyectos en desarrollo
  if (isUpcoming) {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#09090D] border-b border-white/10 flex items-center justify-center select-none group/mockup">
        {/* Cuadrícula técnica sutil */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:20px_20px]" 
          aria-hidden="true" 
        />
        {/* Resplandor radial de azul hielo de ingeniería */}
        <div 
          className="absolute inset-0 bg-radial from-ice/20 via-ice/5 to-transparent pointer-events-none" 
          aria-hidden="true" 
        />
        
        {/* Render 3D de hardware flotante */}
        <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-7">
          <div className="relative w-[76%] h-[76%] transition-transform duration-500 group-hover:scale-105">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 70vw, 30vw"
              className="object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.85)] filter brightness-95"
            />
          </div>
        </div>

        {/* Chip en vivo superior izquierdo: Estado activo con naranja/rojo poppy */}
        <div className="absolute top-3 left-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/15 border border-accent/35 backdrop-blur-md shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
              {lang === 'es' ? 'En desarrollo' : 'In development'}
            </span>
          </div>
        </div>

        {/* Indicador mono de arquitectura inferior derecho con azul hielo */}
        <div className="absolute bottom-2.5 right-3 font-mono text-[9px] uppercase tracking-widest text-ice/70 bg-ice/10 border border-ice/20 px-2 py-0.5 rounded-full backdrop-blur-xs">
          RELEASE // 2026
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${isMobile ? 'aspect-[16/10]' : 'aspect-[16/8.5]'} overflow-hidden bg-[#09090D] border-b border-white/10 flex items-center justify-center select-none`}>
      {/* Sutil resplandor radial temático (Azul hielo o Naranja/Rojo Poppy) */}
      <div 
        className={`absolute inset-0 bg-radial ${isAccent ? 'from-accent/15 via-accent/5' : 'from-ice/15 via-ice/5'} to-transparent pointer-events-none`} 
        aria-hidden="true" 
      />

      {isMobile ? (
        // Mockup de pantalla móvil centrada con dynamic island y reflejo realista
        <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4">
          <div className="relative h-[94%] aspect-[9/17.5] rounded-[20px] overflow-hidden border-[2.5px] border-[#26262E] shadow-[0_18px_40px_rgba(0,0,0,0.9)] ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105 bg-black">
            {/* Dynamic island superior */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-7 h-1.5 bg-[#141418] rounded-full z-20 ring-1 ring-white/10" />
            
            {/* Pantalla con captura completa en object-cover */}
            <div className="relative w-full h-full overflow-hidden bg-black">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 70vw, 30vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Reflejo angular sutil de cristal */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none z-10" 
              aria-hidden="true" 
            />
          </div>
        </div>
      ) : (
        // Mockup de navegador de escritorio con barra de control minimalista y estado en vivo
        <div className="relative w-full h-full flex flex-col">
          <div className="h-7 bg-black/70 backdrop-blur-sm border-b border-white/10 px-3.5 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56] opacity-75 inline-block" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E] opacity-75 inline-block" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F] opacity-75 inline-block" />
            </div>

            {project.url && (
              <span className="font-mono text-[10px] text-accent/90 font-medium tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>{lang === 'es' ? 'En vivo' : 'Live'}</span>
              </span>
            )}
          </div>

          <div className="relative flex-1 w-full overflow-hidden bg-black">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Tarjeta individual de proyecto con disparador interactivo hacia el modal de caso
function ProjectCard({
  project,
  lang,
  viewCaseLabel,
  theme = 'ice',
  onOpenModal,
}: {
  project: Project;
  lang: 'es' | 'en';
  viewCaseLabel: string;
  theme?: 'ice' | 'accent';
  onOpenModal: (project: Project) => void;
}) {
  const isAccent = theme === 'accent';

  const getCategoryLabel = () => {
    if (project.category === 'sistemas') {
      return lang === 'es' ? 'Sistema a medida' : 'Custom System';
    }
    if (project.category === 'webs') {
      return lang === 'es' ? 'Página web' : 'Website';
    }
    return lang === 'es' ? 'Solución digital' : 'Digital Solution';
  };

  const categoryLabel = getCategoryLabel();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="h-full col-span-1"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpenModal(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenModal(project);
          }
        }}
        className={`group relative rounded-[28px] sm:rounded-[32px] bg-[#111115] border border-white/10 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1.5 cursor-pointer h-full select-none focus-visible:outline-2 focus-visible:outline-accent ${
          isAccent
            ? 'hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(255,61,20,0.22)]'
            : 'hover:border-ice/40 hover:shadow-[0_20px_50px_-15px_rgba(191,224,255,0.18)]'
        }`}
      >
        {/* Mockup de la interfaz del proyecto */}
        <div className="w-full">
          <ProjectMockup project={project} lang={lang} theme={theme} />
        </div>

        {/* Ficha descriptiva con dimensiones uniformes */}
        <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            {/* Categoría y estado con color temático de marca */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className={`font-mono text-xs uppercase tracking-wider font-semibold transition-colors ${
                isAccent ? 'text-accent' : 'text-ice'
              }`}>
                {categoryLabel}
              </span>
              {project.isUpcoming && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-semibold text-accent bg-accent/10 border border-accent/30 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {lang === 'es' ? 'En desarrollo' : 'In development'}
                </span>
              )}
            </div>

            {/* Nombre del proyecto */}
            <h4 className="font-display font-semibold text-xl sm:text-[22px] text-white tracking-[-0.03em] leading-tight mb-2.5 group-hover:text-white transition-colors">
              {project.name}
            </h4>

            {/* Resumen conciso con altura mínima consistente para alinear tarjetas */}
            <p className="text-sm leading-relaxed text-white/70 font-normal mb-4 line-clamp-3 min-h-[58px]">
              {project.oneLiner}
            </p>

            {/* Stack tecnológico en fila dedicada horizontal sin solapamiento */}
            <div className="flex flex-wrap items-center gap-1.5 mb-5">
              {project.stack.slice(0, 3).map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-[10.5px] text-white/60 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md whitespace-nowrap max-w-full truncate"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Fila inferior de acciones: Botones equilibrados a ancho completo */}
          <div className="pt-4 border-t border-white/10 mt-auto">
            {project.url ? (
              <div className="flex items-center gap-2 sm:gap-2.5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 font-mono text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all min-h-[42px] cursor-pointer group/btn"
                  title={lang === 'es' ? 'Visitar sitio web en vivo' : 'Visit live website'}
                >
                  <span>{lang === 'es' ? 'Visitar web' : 'Live site'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover/btn:text-white transition-colors" />
                </a>

                <div
                  className={`flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 font-mono text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-full border transition-all min-h-[42px] ${
                    isAccent
                      ? 'border-accent/30 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent'
                      : 'border-ice/30 bg-ice/10 text-ice group-hover:bg-ice group-hover:text-ink group-hover:border-ice'
                  }`}
                >
                  <span>{viewCaseLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ) : (
              <div
                className={`w-full inline-flex items-center justify-center gap-1.5 font-mono text-xs font-semibold px-4 py-2.5 rounded-full border transition-all min-h-[42px] ${
                  isAccent
                    ? 'border-accent/30 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent'
                    : 'border-ice/30 bg-ice/10 text-ice group-hover:bg-ice group-hover:text-ink group-hover:border-ice'
                }`}
              >
                <span>{project.isUpcoming ? (lang === 'es' ? 'Ver ficha técnica' : 'View specs') : (lang === 'es' ? 'Ver caso de estudio' : 'View case study')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Encabezado editorial premium con jerarquía temática en azul hielo y naranja/rojo poppy
function CategoryHeader({
  tag,
  part1,
  part2,
  desc,
  count,
  lang,
  theme = 'ice',
}: {
  tag: string;
  part1: string;
  part2: string;
  desc: string;
  count: number;
  lang: 'es' | 'en';
  theme?: 'ice' | 'accent';
}) {
  const isAccent = theme === 'accent';

  return (
    <div className="mb-8 sm:mb-10 pb-5 border-b border-white/10 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          {/* Tag mono con color temático de la marca */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border font-mono text-[11px] uppercase tracking-widest font-semibold mb-3 ${
            isAccent 
              ? 'border-accent/30 bg-accent/10 text-accent' 
              : 'border-ice/30 bg-ice/10 text-ice'
          }`}>
            <StarBullet size={10} rotate={true} className={isAccent ? 'text-accent' : 'text-ice'} />
            <span>{tag}</span>
          </div>

          {/* Título en dos tonos con color temático de marca */}
          <h3 className="font-display font-bold text-[clamp(1.85rem,3.4vw,2.75rem)] text-white tracking-[-0.035em] leading-[1.05] mb-2.5">
            <span>{part1}</span>{' '}
            <span className={isAccent ? 'text-accent' : 'text-ice'}>{part2}</span>
          </h3>

          {/* Descripción orientada a valor comercial */}
          <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed max-w-xl">
            {desc}
          </p>
        </div>

        {/* Píldora de proyectos activos en la vertical con pulso temático */}
        <div className="self-start md:self-auto shrink-0">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border font-mono text-xs shadow-2xs ${
            isAccent
              ? 'bg-accent/5 border-accent/20 text-accent/90'
              : 'bg-ice/5 border-ice/20 text-ice/90'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isAccent ? 'bg-accent' : 'bg-ice'}`} />
            <span>
              {count} {lang === 'es' ? 'proyectos' : 'projects'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sección principal de proyectos segmentada editorialmente en las 3 verticales
export default function ProjectsSection() {
  const { t, lang } = useLanguage();
  const ps = t.single_page.projects_section;
  const cm = ps.category_meta;

  const [activeFilter, setActiveFilter] = useState<'all' | 'sistemas' | 'webs' | 'soluciones'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects = getProjects(lang);

  const filterOptions: Array<{ id: 'all' | 'sistemas' | 'webs' | 'soluciones'; label: string }> = [
    { id: 'all', label: ps.filters.all },
    { id: 'sistemas', label: ps.filters.sistemas },
    { id: 'webs', label: ps.filters.webs },
    { id: 'soluciones', label: ps.filters.soluciones },
  ];

  // Separación por verticales con proyectos integrados
  const sistemasProjects = allProjects.filter((p) => p.category === 'sistemas');
  const websProjects = allProjects.filter((p) => p.category === 'webs');
  const solucionesProjects = allProjects.filter((p) => p.category === 'soluciones');

  const whatsappUrl = getWhatsAppUrl(ps.cta_whatsapp);

  return (
    <section
      id="proyectos"
      className="relative w-full bg-ink text-white rounded-t-[40px] pt-[clamp(64px,8vw,112px)] pb-[clamp(56px,7vw,80px)] overflow-hidden"
    >
      <Container>
        {/* Cabecera editorial y barra de filtros: apilada en <1280px para evitar compresión y en fila en ≥1280px */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 sm:gap-8 mb-12 lg:mb-16">
          <SectionHeading
            variant="dark"
            eyebrow={ps.eyebrow}
            part1={ps.title_part1}
            part2={ps.title_part2}
            subtitle={ps.subtitle}
            className="flex-1 max-w-2xl"
          />

          {/* Barra de filtros responsiva con ajuste dinámico flex-wrap y botones táctiles accesibles */}
          <div className="w-full xl:w-auto flex flex-wrap items-center gap-2 sm:gap-2.5">
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setActiveFilter(opt.id)}
                  className={`relative px-3.5 sm:px-5 py-2 sm:py-2.5 min-h-[44px] rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer select-none flex items-center justify-center border ${
                    isActive
                      ? 'bg-white text-ink border-white font-semibold shadow-md'
                      : 'bg-white/5 text-white/75 hover:text-white hover:bg-white/10 border-white/10'
                  }`}
                >
                  <span className="relative z-10">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENEDOR SEGMENTADO POR VERTICALES EDITORIALES CON ANIMATE PRESENCE */}
        <div className="space-y-16 sm:space-y-24">
          <AnimatePresence mode="popLayout">

            {/* VERTICAL 1: SISTEMAS A MEDIDA */}
            {(activeFilter === 'all' || activeFilter === 'sistemas') && (
              <motion.div
                key="sistemas-vertical"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CategoryHeader
                  tag={cm.sistemas.tag}
                  part1={cm.sistemas.part1}
                  part2={cm.sistemas.part2}
                  desc={cm.sistemas.desc}
                  count={sistemasProjects.length}
                  lang={lang}
                  theme="ice"
                />

                {/* Grid uniforme de 3 columnas para sistemas en azul hielo */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                  {sistemasProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      lang={lang}
                      viewCaseLabel={ps.card_view_case}
                      theme="ice"
                      onOpenModal={setSelectedProject}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* VERTICAL 2: PÁGINAS WEB Y CONVERSIÓN */}
            {(activeFilter === 'all' || activeFilter === 'webs') && (
              <motion.div
                key="webs-vertical"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CategoryHeader
                  tag={cm.webs.tag}
                  part1={cm.webs.part1}
                  part2={cm.webs.part2}
                  desc={cm.webs.desc}
                  count={websProjects.length}
                  lang={lang}
                  theme="accent"
                />

                {/* Grid de proyectos web en naranja/rojo poppy */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                  {websProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      lang={lang}
                      viewCaseLabel={ps.card_view_case}
                      theme="accent"
                      onOpenModal={setSelectedProject}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* VERTICAL 3: SOLUCIONES DIGITALES ESPECIALIZADAS */}
            {(activeFilter === 'all' || activeFilter === 'soluciones') && (
              <motion.div
                key="soluciones-vertical"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CategoryHeader
                  tag={cm.soluciones.tag}
                  part1={cm.soluciones.part1}
                  part2={cm.soluciones.part2}
                  desc={cm.soluciones.desc}
                  count={solucionesProjects.length}
                  lang={lang}
                  theme="ice"
                />

                {/* Grid de proyectos de soluciones digitales en azul hielo */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                  {solucionesProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      lang={lang}
                      viewCaseLabel={ps.card_view_case}
                      theme="ice"
                      onOpenModal={setSelectedProject}
                    />
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* CIERRE DE SECCIÓN CON LLAMADA A LA ACCIÓN LIMPIA */}
        <div className="mt-20 sm:mt-24 text-center max-w-2xl mx-auto flex flex-col items-center">
          <h3 className="font-display font-semibold text-display-sm sm:text-display-md text-white tracking-[-0.03em] mb-6 [text-wrap:balance]">
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

      {/* Modal de caso de estudio en arquitectura editorial cinética */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
}
