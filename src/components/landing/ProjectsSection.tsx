'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Container, SectionHeading, Button, StarBullet } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';
import { getProjects, type Project } from '../../data/projects';
import { getWhatsAppUrl } from '../../config/site';

// Mockup visual con aspect ratio 16/10 uniforme para escritorio, móviles en marco y proyectos en desarrollo
function ProjectMockup({ project, lang }: { project: Project; lang: 'es' | 'en' }) {
  const isMobile = Boolean(project.isMobileFormat);
  const isUpcoming = Boolean(project.isUpcoming);

  // Presentación arquitectónica para proyectos en desarrollo
  if (isUpcoming) {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#09090D] border-b border-white/10 flex items-center justify-center select-none group/mockup">
        {/* Cuadrícula técnica sutil */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:20px_20px]" 
          aria-hidden="true" 
        />
        {/* Resplandor radial de atmósfera neutra */}
        <div 
          className="absolute inset-0 bg-radial from-white/[0.04] to-transparent pointer-events-none" 
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

        {/* Chip en vivo superior izquierdo: Estado activo de ingeniería */}
        <div className="absolute top-3 left-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-white/90">
              {lang === 'es' ? 'En desarrollo' : 'In development'}
            </span>
          </div>
        </div>

        {/* Indicador mono de arquitectura inferior derecho */}
        <div className="absolute bottom-2.5 right-3 font-mono text-[9px] uppercase tracking-widest text-white/40 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-full backdrop-blur-xs">
          RELEASE // 2026
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#09090D] border-b border-white/10 flex items-center justify-center select-none">
      {/* Sutil resplandor radial de fondo */}
      <div 
        className="absolute inset-0 bg-radial from-white/[0.03] to-transparent pointer-events-none" 
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

          {/* Pill de dominio en esquina superior derecha */}
          <div className="absolute top-2.5 right-3 bg-black/60 backdrop-blur-md rounded-full px-2.5 py-0.5 border border-white/10 font-mono text-[9px] text-white/40 max-w-[150px] truncate">
            {project.slug}.dev
          </div>
        </div>
      ) : (
        // Mockup de navegador de escritorio con barra de control y aspect 16/10
        <div className="relative w-full h-full flex flex-col">
          <div className="h-7 bg-black/70 backdrop-blur-sm border-b border-white/10 px-3.5 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56] opacity-75 inline-block" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E] opacity-75 inline-block" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F] opacity-75 inline-block" />
            </div>
            <div className="bg-white/5 rounded-full px-3 py-0.5 font-mono text-[9.5px] text-white/40 truncate max-w-[200px]">
              {project.slug}.juanalvarez.dev
            </div>
            <div className="w-8" />
          </div>

          <div className="relative flex-1 w-full overflow-hidden bg-black">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Tarjeta individual de proyecto con dimensiones uniformes en grid de 3 columnas
function ProjectCard({
  project,
  lang,
  viewCaseLabel,
}: {
  project: Project;
  lang: 'es' | 'en';
  viewCaseLabel: string;
}) {
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
      <Link
        href={`/projects/${project.slug}`}
        className="group relative rounded-[28px] sm:rounded-[32px] bg-[#111115] border border-white/10 hover:border-white/25 hover:bg-[#15151B] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:-translate-y-1.5 cursor-pointer h-full"
      >
        {/* Mockup de la interfaz del proyecto */}
        <div className="w-full">
          <ProjectMockup project={project} lang={lang} />
        </div>

        {/* Ficha descriptiva con dimensiones uniformes */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            {/* Categoría y año / estado */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-white/50 group-hover:text-white/80 transition-colors">
                {categoryLabel}
              </span>
              {project.isUpcoming ? (
                <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-semibold text-white/80 bg-white/[0.06] border border-white/15 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {lang === 'es' ? 'En desarrollo' : 'In development'}
                </span>
              ) : (
                <span className="font-mono text-xs text-white/50 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                  {project.year}
                </span>
              )}
            </div>

            {/* Nombre del proyecto */}
            <h4 className="font-display font-semibold text-xl sm:text-[22px] text-white tracking-[-0.03em] leading-tight mb-2.5 group-hover:text-white transition-colors">
              {project.name}
            </h4>

            {/* Resumen conciso con altura mínima consistente para alinear tarjetas */}
            <p className="text-sm leading-relaxed text-white/70 font-normal mb-5 line-clamp-3 min-h-[60px]">
              {project.oneLiner}
            </p>
          </div>

          {/* Fila inferior: Stack tecnológico y enlace interactivo con inversión de color en hover */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-[10.5px] text-white/60 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/80 group-hover:bg-white group-hover:text-ink group-hover:border-white transition-all shrink-0 min-h-[44px]">
              <span className="hidden xs:inline">
                {project.isUpcoming ? (lang === 'es' ? 'Ver ficha' : 'View specs') : viewCaseLabel}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Encabezado editorial premium con jerarquía en dos tonos
function CategoryHeader({
  tag,
  part1,
  part2,
  desc,
  count,
  lang,
}: {
  tag: string;
  part1: string;
  part2: string;
  desc: string;
  count: number;
  lang: 'es' | 'en';
}) {
  return (
    <div className="mb-8 sm:mb-10 pb-5 border-b border-white/10 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          {/* Tag mono con StarBullet de acento editorial */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] font-mono text-[11px] uppercase tracking-widest text-white/80 font-semibold mb-3">
            <StarBullet size={10} rotate={true} className="text-accent" />
            <span>{tag}</span>
          </div>

          {/* Título en dos tonos editorial blanco y blanco/45 */}
          <h3 className="font-display font-bold text-[clamp(1.85rem,3.4vw,2.75rem)] text-white tracking-[-0.035em] leading-[1.05] mb-2.5">
            <span>{part1}</span>{' '}
            <span className="text-white/45">{part2}</span>
          </h3>

          {/* Descripción orientada a valor comercial */}
          <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed max-w-xl">
            {desc}
          </p>
        </div>

        {/* Píldora de proyectos activos en la vertical */}
        <div className="self-start md:self-auto shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs text-white/70 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
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

          {/* Barra de píldoras responsiva con shrink-0 estricto para evitar truncado o corte de texto */}
          <div className="w-full xl:w-auto shrink-0 overflow-x-auto no-scrollbar py-1">
            <div className="inline-flex items-center p-1.5 pr-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shrink-0 whitespace-nowrap shadow-xs">
              {filterOptions.map((opt) => {
                const isActive = activeFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setActiveFilter(opt.id)}
                    className={`relative px-4 py-2 min-h-[44px] rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer select-none flex items-center justify-center whitespace-nowrap shrink-0 ${
                      isActive ? 'text-ink font-semibold' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeFilterIndicator"
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 whitespace-nowrap">{opt.label}</span>
                  </button>
                );
              })}
            </div>
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
                />

                {/* Grid uniforme de 3 columnas para sistemas (activos y en desarrollo) */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                  {sistemasProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      lang={lang}
                      viewCaseLabel={ps.card_view_case}
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
                />

                {/* Grid de proyectos web */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                  {websProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      lang={lang}
                      viewCaseLabel={ps.card_view_case}
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
                />

                {/* Grid de proyectos de soluciones digitales */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                  {solucionesProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      lang={lang}
                      viewCaseLabel={ps.card_view_case}
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
    </section>
  );
}
