'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ArrowUpRight, CheckCircle2, FileText, Download } from 'lucide-react';
import { StarBullet, Button } from '../ui';
import type { Project } from '../../data/projects';
import { getWhatsAppUrl } from '../../config/site';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang?: 'es' | 'en';
}

// Descompone una razón en titular destacado y descripción explicativa para facilitar el escaneo visual
function parseReason(reason: string | { highlight: string; text: string }): { highlight: string; text: string } {
  if (typeof reason !== 'string') {
    return reason;
  }
  const colonIdx = reason.indexOf(':');
  if (colonIdx !== -1) {
    return {
      highlight: reason.slice(0, colonIdx).trim(),
      text: reason.slice(colonIdx + 1).trim(),
    };
  }
  const dashIdx = reason.indexOf('—');
  if (dashIdx !== -1) {
    return {
      highlight: reason.slice(0, dashIdx).trim(),
      text: reason.slice(dashIdx + 1).trim(),
    };
  }
  return {
    highlight: reason,
    text: '',
  };
}

// Modal responsivo de caso de estudio con galería interactiva, desglose de ingeniería y CTA comercial
export default function ProjectModal({
  project,
  isOpen,
  onClose,
  lang = 'es',
}: ProjectModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Reinicia la imagen activa cuando cambia de proyecto
  useEffect(() => {
    setActiveImageIdx(0);
  }, [project?.slug]);

  // Cierra el modal con la tecla Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Bloquea el scroll de la página principal mientras el modal esté abierto
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!project) return null;

  const isAccent = project.category === 'webs';
  const themeColor = isAccent ? 'text-accent' : 'text-ice';
  const themeBadgeBorder = isAccent ? 'border-accent/30 bg-accent/10 text-accent' : 'border-ice/30 bg-ice/10 text-ice';

  const categoryName = () => {
    if (project.category === 'sistemas') {
      return lang === 'es' ? 'Sistema a medida' : 'Custom System';
    }
    if (project.category === 'webs') {
      return lang === 'es' ? 'Página web' : 'Website';
    }
    return lang === 'es' ? 'Solución digital' : 'Digital Solution';
  };

  // Título persuasivo contextualizado según la categoría del proyecto
  const sectionTitle = () => {
    const accentGradient = "text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FF6D44] to-accent font-extrabold";
    if (project.category === 'webs') {
      return lang === 'es' ? (
        <>¿Por qué tu negocio <span className={accentGradient}>necesita este sitio</span>?</>
      ) : (
        <>Why your business <span className={accentGradient}>needs this website</span>?</>
      );
    }
    if (project.category === 'soluciones') {
      return lang === 'es' ? (
        <>¿Por qué tu negocio <span className={accentGradient}>necesita esta solución</span>?</>
      ) : (
        <>Why your business <span className={accentGradient}>needs this solution</span>?</>
      );
    }
    return lang === 'es' ? (
      <>¿Por qué tu negocio <span className={accentGradient}>necesita este sistema</span>?</>
    ) : (
      <>Why your business <span className={accentGradient}>needs this system</span>?</>
    );
  };

  const galleryImages = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  const hasPdf = Boolean(project.pdfUrl);
  const pdfItemIdx = hasPdf ? galleryImages.length : -1;
  const isPdfActive = hasPdf && activeImageIdx === pdfItemIdx;
  const totalSlides = galleryImages.length + (hasPdf ? 1 : 0);
  const currentImage = isPdfActive ? '' : (galleryImages[activeImageIdx] || project.image);

  const reasonsList = project.reasons && project.reasons.length > 0
    ? project.reasons
    : (project.businessBenefits
        ? project.businessBenefits.map((b) => `${b.title} — ${b.desc}`)
        : project.benefits || []);

  const whatsappMsg = lang === 'es'
    ? `Hola Juan, estuve viendo el caso de ${project.name} en tu portafolio y me gustaría cotizar un proyecto similar.`
    : `Hi Juan, I was reviewing the ${project.name} case study on your portfolio and I'd like to quote a similar project.`;

  const whatsappUrl = getWhatsAppUrl(whatsappMsg);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8 select-none">
          {/* Fondo difuminado con cierre al pulsar fuera */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

            {/* Diálogo principal con mayor amplitud de escenario (hasta 1140px en pantallas grandes) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative w-full max-w-5xl xl:max-w-[1140px] max-h-[94vh] sm:max-h-[90vh] bg-[#0E0E12] border border-white/12 rounded-[28px] sm:rounded-[36px] shadow-[0_28px_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-white z-10"
            >
            {/* Cabecera superior fija con información contextual y botón accesible de cierre */}
            <div className="sticky top-0 z-30 bg-[#0E0E12]/90 backdrop-blur-md border-b border-white/10 px-5 sm:px-8 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${themeBadgeBorder}`}>
                  <StarBullet size={10} rotate={true} className={themeColor} />
                  <span>{categoryName()}</span>
                </span>

                {project.isUpcoming && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-semibold text-accent bg-accent/10 border border-accent/30 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span>{lang === 'es' ? 'En desarrollo' : 'In development'}</span>
                  </span>
                )}
              </div>

              {/* Botón de cierre con hit-box de 44px */}
              <button
                type="button"
                onClick={onClose}
                aria-label={lang === 'es' ? 'Cerrar detalle del proyecto' : 'Close project details'}
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
              >
                <X className="w-5 h-5 transition-transform duration-200 hover:rotate-90" />
              </button>
            </div>

            {/* Contenido con scroll independiente responsivo */}
            <div className="overflow-y-auto px-5 sm:px-8 py-6 sm:py-8 space-y-7 sm:space-y-9 flex-1 select-text">
              {/* Bloque de identidad del proyecto */}
              <div>
                <h3
                  id="project-modal-title"
                  className="font-display font-bold text-2xl sm:text-4xl text-white tracking-[-0.035em] leading-[1.08] mb-3"
                >
                  {project.name}
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {project.oneLiner}
                </p>
              </div>

              {/* Visor de interfaz con adaptación precisa a los bordes según el tipo de dispositivo */}
              <div className="space-y-3.5">
                {isPdfActive && project.pdfUrl ? (
                  // Visor interactivo de documento PDF oficial integrado en la ventana de escritorio
                  <div className="relative w-full bg-[#0D0D12] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-2xl flex flex-col">
                    {/* Barra superior de ventana de escritorio */}
                    <div className="h-8.5 sm:h-9 bg-black/90 border-b border-white/10 px-3.5 sm:px-4.5 flex items-center justify-between shrink-0 select-none">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80 inline-block" />
                      </div>

                      <span className="font-mono text-[10px] text-emerald-400/80 uppercase tracking-widest">
                        DOCUMENTO // PDF OFICIAL
                      </span>
                    </div>

                    {/* Barra de utilidades del visor PDF */}
                    <div className="bg-[#121217] border-b border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 text-xs font-mono select-none">
                      <div className="flex items-center gap-2 text-white/80">
                        <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-semibold text-white truncate">
                          {lang === 'es' ? 'Informe clínico generado por el sistema' : 'Clinical report generated by the system'}
                        </span>
                        <span className="hidden md:inline text-white/40">// QR oficial y firma</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={project.pdfUrl}
                          download={`informe-${project.slug}.pdf`}
                          className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded-md text-[11px] transition-colors"
                        >
                          <Download className="w-3 h-3 text-emerald-400" />
                          <span>{lang === 'es' ? 'Descargar' : 'Download'}</span>
                        </a>
                        <a
                          href={project.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-md text-[11px] transition-colors"
                        >
                          <ArrowUpRight className="w-3 h-3" />
                          <span>{lang === 'es' ? 'Abrir completo' : 'Open full'}</span>
                        </a>
                      </div>
                    </div>

                    {/* Frame interactivo del PDF con ajuste de altura generoso */}
                    <div className="w-full h-[520px] sm:h-[620px] md:h-[680px] bg-[#222228] overflow-hidden relative">
                      <iframe
                        src={`${project.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                        className="w-full h-full border-0 block"
                        title={`${project.name} informe en PDF`}
                      />
                    </div>
                  </div>
                ) : project.isMobileFormat ? (
                  // Mockup smartphone responsivo para interfaces móviles
                  <div className="relative w-full py-5 sm:py-8 flex items-center justify-center bg-gradient-to-b from-[#0B0B10] to-[#040407] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-2xl">
                    <div 
                      className={`absolute inset-0 bg-radial ${isAccent ? 'from-accent/15 via-transparent' : 'from-ice/15 via-transparent'} to-transparent pointer-events-none`}
                      aria-hidden="true" 
                    />
                    <div className="relative w-[270px] sm:w-[310px] aspect-[9/18.2] rounded-[34px] sm:rounded-[38px] overflow-hidden border-[3.5px] border-[#222228] shadow-[0_24px_60px_rgba(0,0,0,0.95)] ring-1 ring-white/10 bg-black flex flex-col">
                      {/* Dynamic Island */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 ring-1 ring-white/15 flex items-center justify-end pr-2">
                        <span className="w-2 h-2 rounded-full bg-[#1A1A22] ring-1 ring-white/10" />
                      </div>

                      {/* Pantalla adaptada al borde interno */}
                      <div className="relative w-full h-full overflow-hidden bg-black">
                        <Image
                          src={currentImage}
                          alt={`${project.name} captura ${activeImageIdx + 1}`}
                          fill
                          sizes="(max-width: 640px) 270px, 310px"
                          className="object-cover object-top"
                          priority
                        />
                      </div>

                      {/* Reflejo angular sutil de cristal */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-10" 
                        aria-hidden="true" 
                      />
                    </div>
                  </div>
                ) : project.isUpcoming ? (
                  // Mockup 3D de hardware para proyectos en desarrollo
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[280px] sm:min-h-[420px] flex items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-[#0B0B10] to-[#040407] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-2xl">
                    <div 
                      className={`absolute inset-0 bg-radial ${isAccent ? 'from-accent/10 via-transparent' : 'from-ice/10 via-transparent'} to-transparent pointer-events-none`}
                      aria-hidden="true" 
                    />
                    <div className="relative w-[78%] h-[78%] max-w-[500px]">
                      <Image
                        src={currentImage}
                        alt={`${project.name} mockup`}
                        fill
                        sizes="(max-width: 768px) 70vw, 500px"
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] filter brightness-95"
                        priority
                      />
                    </div>
                  </div>
                ) : (
                  // Ventana de escritorio: navegador realista donde la captura se adapta al borde interno sin márgenes residuales
                  <div className="relative w-full bg-[#0D0D12] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-2xl flex flex-col">
                    {/* Barra superior de ventana de escritorio */}
                    <div className="h-8.5 sm:h-9 bg-black/90 border-b border-white/10 px-3.5 sm:px-4.5 flex items-center justify-between shrink-0 select-none">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80 inline-block" />
                      </div>

                      <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                        {project.name} // UI
                      </span>
                    </div>

                    {/* Contenedor de interfaz ajustado directamente a los bordes internos */}
                    <div className="relative w-full overflow-hidden bg-[#0A0A0E]">
                      <Image
                        src={currentImage}
                        alt={`${project.name} captura ${activeImageIdx + 1}`}
                        width={1920}
                        height={1080}
                        sizes="(max-width: 768px) 100vw, 1140px"
                        className="w-full h-auto max-h-[70vh] object-cover object-top block select-none"
                        priority
                      />
                    </div>
                  </div>
                )}

                {/* Barra de controles: Selector de capturas y enlace de alta resolución */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  {totalSlides > 1 ? (
                    <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
                      {galleryImages.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIdx(idx)}
                          className={`relative w-16 h-11 sm:w-20 sm:h-13 rounded-xl overflow-hidden border transition-all cursor-pointer shrink-0 bg-black ${
                            activeImageIdx === idx
                              ? 'border-accent ring-2 ring-accent/40 scale-102 shadow-md'
                              : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </button>
                      ))}

                      {/* 5to thumbnail para el PDF si el proyecto incluye informe oficial */}
                      {hasPdf && (
                        <button
                          type="button"
                          onClick={() => setActiveImageIdx(pdfItemIdx)}
                          className={`relative w-16 h-11 sm:w-20 sm:h-13 rounded-xl overflow-hidden border transition-all cursor-pointer shrink-0 flex flex-col items-center justify-center p-1 gap-1 ${
                            isPdfActive
                              ? 'border-emerald-400 ring-2 ring-emerald-400/40 bg-emerald-950/50 scale-102 shadow-md'
                              : 'border-emerald-500/30 bg-emerald-950/20 opacity-70 hover:opacity-100 hover:border-emerald-400/60'
                          }`}
                          title={lang === 'es' ? 'Ver informe clínico en PDF' : 'View clinical PDF report'}
                        >
                          <FileText className={`w-4 h-4 ${isPdfActive ? 'text-emerald-300' : 'text-emerald-400'}`} />
                          <span className={`font-mono text-[9px] font-bold uppercase tracking-wider ${isPdfActive ? 'text-emerald-300' : 'text-emerald-400/80'}`}>
                            PDF
                          </span>
                        </button>
                      )}

                      <span className="font-mono text-[11px] text-white/50 ml-1.5 shrink-0">
                        {activeImageIdx + 1} / {totalSlides}
                      </span>
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="flex flex-wrap items-center gap-2">
                    {isPdfActive ? (
                      <a
                        href={project.pdfUrl}
                        download={`informe-${project.slug}.pdf`}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-full transition-all"
                        title={lang === 'es' ? 'Descargar informe PDF oficial' : 'Download official PDF report'}
                      >
                        <Download className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{lang === 'es' ? 'Descargar PDF' : 'Download PDF'}</span>
                      </a>
                    ) : (
                      project.pdfUrl && (
                        <button
                          type="button"
                          onClick={() => setActiveImageIdx(pdfItemIdx)}
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-full transition-all cursor-pointer"
                          title={lang === 'es' ? 'Ver informe clínico oficial generado en PDF' : 'Open official clinical PDF report'}
                        >
                          <FileText className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{lang === 'es' ? 'Ver informe PDF' : 'View PDF Report'}</span>
                        </button>
                      )
                    )}



                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-white bg-accent hover:bg-accent-deep px-3.5 py-1.5 rounded-full transition-all group shadow-xs"
                      >
                        <span>{lang === 'es' ? 'Sitio en vivo' : 'Live site'}</span>
                        <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bloque comercial de impacto directo: ¿Por qué tu negocio necesita este sistema? */}
              <div className="space-y-4 pt-2">
                {/* Cabecera amplia y estilizada con aura lumínica */}
                <div className="flex items-center gap-3 border-b border-white/12 pb-4">
                  <div className="relative flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(255,77,46,0.9)] inline-block" />
                    <span className="absolute w-4 h-4 rounded-full bg-accent/30 animate-ping pointer-events-none" />
                  </div>
                  <h4 className="font-display font-bold text-lg sm:text-2xl lg:text-[25px] text-white tracking-[-0.03em] leading-tight">
                    {sectionTitle()}
                  </h4>
                </div>

                {/* Lista editorial fluida, espaciosa y con mayor presencia visual */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-1">
                  {reasonsList.map((item, rIdx) => {
                    const { highlight, text } = parseReason(item);
                    const num = String(rIdx + 1).padStart(2, '0');
                    return (
                      <div
                        key={rIdx}
                        className="flex items-start gap-3.5 py-3.5 sm:py-4 -mx-2.5 px-2.5 sm:-mx-3 sm:px-3 rounded-xl border-b border-white/[0.08] hover:border-accent/40 hover:bg-white/[0.03] transition-all duration-200 group"
                      >
                        {/* Indicador numérico monospace estilizado con acento y escala sutil */}
                        <span className="font-mono text-xs sm:text-sm font-bold text-accent shrink-0 mt-0.5 tabular-nums select-none group-hover:scale-105 transition-transform">
                          {num}.
                        </span>

                        {/* Bloque tipográfico ampliado con excelente legibilidad y jerarquía */}
                        <div className="min-w-0 flex-1">
                          <h5 className="font-sans font-semibold text-sm sm:text-[15px] text-white group-hover:text-white transition-colors leading-snug tracking-[-0.01em]">
                            {highlight || text}
                          </h5>
                          {highlight && text && (
                            <p className="font-sans text-xs sm:text-[13px] text-white/65 group-hover:text-white/85 leading-relaxed mt-1 transition-colors">
                              {text}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Pie de modal con llamadas a la acción inmediatas */}
            <div className="bg-[#0E0E12] border-t border-white/10 px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
              <span className="font-mono text-xs text-white/40 hidden md:inline">
                {project.name} // {categoryName()}
              </span>

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-full font-mono text-xs uppercase tracking-wider text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer min-h-[44px]"
                >
                  {lang === 'es' ? 'Cerrar' : 'Close'}
                </button>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button
                      type="button"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all cursor-pointer min-h-[44px]"
                    >
                      <span>{lang === 'es' ? 'Ver sitio web' : 'Visit website'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </a>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="accent"
                    className="w-full sm:w-auto text-xs font-mono uppercase tracking-wider min-h-[44px]"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    <span>{lang === 'es' ? 'Cotizar caso similar' : 'Quote similar case'}</span>
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
