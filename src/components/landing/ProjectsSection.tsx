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

// Mockup visual con aspect ratio 16/10 para pantallas de escritorio y vista centrada para móviles
function ProjectMockup({ project }: { project: Project }) {
  const isMobile = Boolean(project.isMobileFormat);

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0A0A0C] border-b border-white/10 flex items-center justify-center">
      {/* Sutil resplandor radial de fondo */}
      <div 
        className="absolute inset-0 bg-radial from-white/[0.04] to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {isMobile ? (
        // Mockup de pantalla móvil centrada con object-contain sobre fondo oscuro
        <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4">
          <div className="relative h-[90%] aspect-[9/18.5] rounded-[18px] overflow-hidden border-[2.5px] border-[#2A2A30] shadow-2xl transition-transform duration-500 group-hover:scale-105 bg-black">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-[#1C1C20] rounded-full z-10" />
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 70vw, 30vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        // Mockup de navegador de escritorio con barra de control y aspect 16/10 con object-cover
        <div className="relative w-full h-full flex flex-col">
          <div className="h-7 bg-black/60 backdrop-blur-sm border-b border-white/10 px-3.5 flex items-center justify-between shrink-0 select-none">
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

          <div className="relative flex-1 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Tarjeta individual de proyecto con soporte para formato destacado horizontal en LEYMA
function ProjectCard({
  project,
  lang,
  viewCaseLabel,
  isFeatured = false,
}: {
  project: Project;
  lang: 'es' | 'en';
  viewCaseLabel: string;
  isFeatured?: boolean;
}) {
  const getCategoryStyles = () => {
    if (project.category === 'sistemas') {
      return {
        label: lang === 'es' ? 'Sistema a medida' : 'Custom System',
        badgeColor: 'text-cyan-400',
        cardHover: 'hover:border-cyan-500/40 hover:shadow-[0_12px_40px_-10px_rgba(56,189,248,0.2)]',
        actionBtn: 'border-cyan-500/20 bg-cyan-500/5 group-hover:border-cyan-400 group-hover:bg-cyan-500/15 text-cyan-300 group-hover:text-cyan-200',
      };
    }
    if (project.category === 'webs') {
      return {
        label: lang === 'es' ? 'Página web' : 'Website',
        badgeColor: 'text-accent',
        cardHover: 'hover:border-accent/40 hover:shadow-[0_12px_40px_-10px_rgba(255,61,20,0.2)]',
        actionBtn: 'border-accent/20 bg-accent/5 group-hover:border-accent group-hover:bg-accent/15 text-orange-300 group-hover:text-accent',
      };
    }
    return {
      label: lang === 'es' ? 'Solución digital' : 'Digital Solution',
      badgeColor: 'text-emerald-400',
      cardHover: 'hover:border-emerald-500/40 hover:shadow-[0_12px_40px_-10px_rgba(52,211,153,0.2)]',
      actionBtn: 'border-emerald-500/20 bg-emerald-500/5 group-hover:border-emerald-400 group-hover:bg-emerald-500/15 text-emerald-300 group-hover:text-emerald-200',
    };
  };

  const catStyle = getCategoryStyles();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className={`h-full ${isFeatured ? 'xl:col-span-2' : ''}`}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={`group relative rounded-[28px] sm:rounded-[32px] bg-[#121215] border border-white/10 transition-all duration-300 overflow-hidden flex ${
          isFeatured ? 'flex-col xl:flex-row' : 'flex-col'
        } justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer h-full ${catStyle.cardHover}`}
      >
        {/* Mockup de la interfaz del proyecto */}
        <div className={isFeatured ? 'w-full xl:w-1/2 shrink-0 h-full flex flex-col justify-center' : 'w-full'}>
          <ProjectMockup project={project} />
        </div>

        {/* Ficha descriptiva limpia */}
        <div className={`p-6 sm:p-7 flex-1 flex flex-col justify-between ${isFeatured ? 'xl:p-8 xl:border-l xl:border-white/10' : ''}`}>
          <div>
            {/* Categoría y año */}
            <div className="flex items-center justify-between gap-4 mb-2.5">
              <span className={`font-mono text-xs uppercase tracking-wider font-semibold ${catStyle.badgeColor}`}>
                {catStyle.label}
              </span>
              <span className="font-mono text-xs text-white/50 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                {project.year}
              </span>
            </div>

            {/* Nombre del proyecto */}
            <h4 className="font-display font-semibold text-xl sm:text-[23px] text-white tracking-[-0.03em] leading-tight mb-2.5 group-hover:text-white transition-colors">
              {project.name}
            </h4>

            {/* Resumen conciso */}
            <p className="text-sm leading-relaxed text-white/70 font-normal mb-5 line-clamp-3">
              {project.oneLiner}
            </p>
          </div>

          {/* Fila inferior: Stack tecnológico y enlace interactivo de 44px */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
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

            <div className={`inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1.5 rounded-full border transition-all shrink-0 min-h-[44px] ${catStyle.actionBtn}`}>
              <span className="hidden xs:inline">{viewCaseLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Encabezado editorial premium con color y jerarquía distintiva por vertical
function CategoryHeader({
  tag,
  part1,
  part2,
  desc,
  count,
  lang,
  colorScheme,
}: {
  tag: string;
  part1: string;
  part2: string;
  desc: string;
  count: number;
  lang: 'es' | 'en';
  colorScheme: {
    badge: string;
    part2Color: string;
    pulseDot: string;
  };
}) {
  return (
    <div className="mb-8 sm:mb-10 pb-5 border-b border-white/10 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          {/* Tag mono con StarBullet estilizado de la vertical */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border font-mono text-[11px] uppercase tracking-widest font-semibold mb-3 ${colorScheme.badge}`}>
            <StarBullet size={10} rotate={true} />
            <span>{tag}</span>
          </div>

          {/* Título en dos tonos con color distintivo de vertical */}
          <h3 className="font-display font-bold text-[clamp(1.85rem,3.4vw,2.75rem)] text-white tracking-[-0.035em] leading-[1.05] mb-2.5">
            <span>{part1}</span>{' '}
            <span className={colorScheme.part2Color}>{part2}</span>
          </h3>

          {/* Descripción orientada a valor comercial */}
          <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed max-w-xl">
            {desc}
          </p>
        </div>

        {/* Píldora de proyectos activos en la vertical */}
        <div className="self-start md:self-auto shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs text-white/80 shadow-2xs">
            <span className={`w-2 h-2 rounded-full animate-pulse ${colorScheme.pulseDot}`} />
            <span>
              {count} {lang === 'es' ? 'proyectos' : 'projects'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fila compacta para proyectos en desarrollo
function UpcomingCard({
  project,
  lang,
  uIdx,
  viewCaseLabel,
}: {
  project: Project;
  lang: 'es' | 'en';
  uIdx: number;
  viewCaseLabel: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 p-4 sm:p-5 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 sm:gap-4 transition-all hover:bg-white/[0.06] min-h-[88px]"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 font-mono text-xs shrink-0 font-bold">
          0{uIdx + 1}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] uppercase font-semibold text-cyan-400">
              {lang === 'es' ? 'Sistema a medida' : 'Custom system'}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-semibold">
              {lang === 'es' ? 'En desarrollo' : 'In progress'}
            </span>
          </div>
          <h5 className="font-display font-semibold text-base sm:text-lg text-white truncate group-hover:text-amber-300 transition-colors">
            {project.name}
          </h5>
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-white/70 group-hover:text-amber-300 shrink-0 transition-colors">
        <span className="hidden sm:inline">{viewCaseLabel}</span>
        <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 group-hover:border-amber-400 group-hover:bg-amber-400/20 flex items-center justify-center transition-all">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
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

  // Separación por verticales
  const sistemasProjects = allProjects.filter((p) => p.category === 'sistemas' && !p.isUpcoming);
  const sistemasUpcoming = allProjects.filter((p) => p.category === 'sistemas' && p.isUpcoming);
  const websProjects = allProjects.filter((p) => p.category === 'webs');
  const solucionesProjects = allProjects.filter((p) => p.category === 'soluciones');

  const whatsappUrl = getWhatsAppUrl(ps.cta_whatsapp);

  // Esquemas de color para cada vertical
  const colorSchemes = {
    sistemas: {
      badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      part2Color: 'text-cyan-400/80',
      pulseDot: 'bg-cyan-400',
    },
    webs: {
      badge: 'bg-accent/10 border-accent/30 text-accent',
      part2Color: 'text-accent',
      pulseDot: 'bg-accent',
    },
    soluciones: {
      badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      part2Color: 'text-emerald-400/80',
      pulseDot: 'bg-emerald-400',
    },
  };

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
                  count={sistemasProjects.length + sistemasUpcoming.length}
                  lang={lang}
                  colorScheme={colorSchemes.sistemas}
                />

                {/* Grid de proyectos de sistemas: LEYMA como tarjeta destacada 2-col */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-8">
                  {sistemasProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      lang={lang}
                      viewCaseLabel={ps.card_view_case}
                      isFeatured={project.slug === 'leyma'}
                    />
                  ))}
                </div>

                {/* Spots de proyectos en desarrollo dentro de Sistemas */}
                {sistemasUpcoming.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <StarBullet size={12} className="text-amber-400" />
                      <h5 className="font-mono text-xs uppercase tracking-widest text-white/60 font-semibold">
                        {ps.upcoming_title || (lang === 'es' ? 'Próximamente en sistemas' : 'Upcoming in systems')}
                      </h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sistemasUpcoming.map((project, uIdx) => (
                        <UpcomingCard
                          key={project.slug}
                          project={project}
                          lang={lang}
                          uIdx={uIdx}
                          viewCaseLabel={ps.upcoming_view_case || (lang === 'es' ? 'Ver ficha' : 'View preview')}
                        />
                      ))}
                    </div>
                  </div>
                )}
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
                  colorScheme={colorSchemes.webs}
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
                  colorScheme={colorSchemes.soluciones}
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
