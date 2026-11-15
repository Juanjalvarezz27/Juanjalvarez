import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, ArrowUpRight } from 'lucide-react';
import Header from '@/src/components/landing/Header';
import Footer from '@/src/components/landing/Footer';
import { Container, Button, StarBullet } from '@/src/components/ui';
import { PROJECTS_DATA, getProjectBySlug } from '@/src/data/projects';
import { getWhatsAppUrl } from '@/src/config/site';

// Genera los parámetros estáticos para cada uno de los 9 proyectos del portafolio
export function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((slug) => ({
    slug,
  }));
}

// Vista detallada de caso de estudio para /projects/[slug]
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, 'es');

  if (!project) {
    notFound();
  }

  const whatsappMsg = `Hola Juan, estuve viendo el caso de ${project.name} y me gustaría cotizar un proyecto similar.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMsg);

  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-white font-sans relative w-full overflow-x-hidden antialiased">
      {/* Header global sticky */}
      <Header />

      <main className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        <Container>
          {/* Enlace de regreso al índice de proyectos */}
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-ink transition-colors mb-10 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Volver a proyectos</span>
          </Link>

          {/* Cabecera del caso de estudio */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <StarBullet size={12} />
              <span>
                {project.category === 'sistemas' ? 'Sistema a Medida' : 'Sitio Web & Conversión'} · {project.year}
              </span>
            </div>

            <h1 className="font-display font-bold text-display-md sm:text-display-lg tracking-[-0.04em] text-ink leading-[1.02] mb-6">
              {project.name}
            </h1>

            <p className="text-body-lg text-ink-soft font-normal leading-relaxed max-w-3xl">
              {project.oneLiner}
            </p>
          </div>

          {/* Barra de metadatos técnicos y enlace en vivo */}
          <div className="bg-surface border border-line rounded-3xl p-6 sm:p-8 mb-16 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft block mb-2">
                Stack tecnológico
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs text-ink bg-bg border border-line px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider bg-ink text-white hover:bg-[#1C1C1F] px-5 py-3 rounded-full transition-all self-start md:self-auto shrink-0 group"
              >
                <span>Visitar sitio en vivo</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>

          {/* Desglose editorial: Problema y Solución */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 sm:mb-24">
            <div className="bg-surface border border-line rounded-[28px] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-3">
                  01 · El problema
                </span>
                <p className="text-body text-ink leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>
            </div>

            <div className="bg-surface border border-line rounded-[28px] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-3">
                  02 · La solución
                </span>
                <p className="text-body text-ink leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Galería de capturas del sistema */}
          <div className="space-y-8 sm:space-y-12 mb-20 sm:mb-28">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-[16/10] bg-[#111115] border border-line rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-md"
              >
                <Image
                  src={img}
                  alt={`${project.name} captura ${idx + 1}`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className={project.isMobileFormat ? 'object-contain p-4 sm:p-8' : 'object-cover'}
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>

          {/* Cierre de llamado a la acción comercial */}
          <div className="bg-ink text-white rounded-[36px] p-8 sm:p-16 text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="font-display font-semibold text-display-sm sm:text-display-md tracking-[-0.03em] mb-4">
              ¿Quieres un resultado como este para tu negocio?
            </h2>
            <p className="text-body text-white/70 max-w-xl mx-auto mb-8 font-normal">
              Conversemos directamente por WhatsApp para analizar la arquitectura y presupuesto de tu proyecto.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" icon={<ArrowUpRight className="w-4 h-4" />}>
                Cotizar mi proyecto
              </Button>
            </a>
          </div>
        </Container>
      </main>

      {/* Footer editorial con wordmark */}
      <Footer />
    </div>
  );
}
