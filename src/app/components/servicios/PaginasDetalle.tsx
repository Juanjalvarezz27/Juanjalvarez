'use client';

import { Globe, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PaginasDetalle() {
  const proyectosWeb = [
    {
      nombre: "DOMENICO D'ORAZIO",
      significado: "BRANDING & EVENTOS",
      descripcion: "Desarrollo de landing page premium enfocada en marca personal. Un sitio rápido, elegante y diseñado para convertir mediante una sección de contacto profesional y gestión de eventos.",
      beneficios: [
        "Diseño Premium & Elegante",
        "Optimización de Conversión",
        "Sección de Eventos Dinámica",
        "Arquitectura de Contacto Profesional"
      ],
      link: "https://domenico-dorazio.vercel.app/",
      images: ["/Dome1.png", "/Dome2.png"] 
    }
  ];

  return (
    <section className="relative py-24 bg-brand-blue font-space overflow-hidden">
      
      <style jsx>{`
        @keyframes moveDotsWeb {
          from { background-position: 0 0; }
          to { background-position: 32px 32px; }
        }
        .moving-dots-web {
          animation: moveDotsWeb 3s linear infinite;
        }
      `}</style>

      {/* Fondo de Puntos */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none z-0 moving-dots-web" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffffff 2.5px, transparent 2.5px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      <div className="relative z-10 max-w-[94%] mx-auto px-4">
        
        {/* Cabecera de Sección */}
        <div className="mb-16 md:mb-20 flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-b-4 border-black pb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-white shadow-[4px_4px_0px_#ff6b00]">
                <Globe size={24} className="text-white" />
              </div>
              <span className="font-mono text-white font-black text-xl uppercase tracking-widest drop-shadow-[2px_2px_0px_#000]">PROYECTOS_02</span>
            </div>
            
            {/* Título responsivo: text-6xl en mobile para impacto */}
            <h2 className="font-anton text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.8] tracking-tighter m-0 select-none">
              PÁGINAS <span className="text-brand-orange italic drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">WEB.</span>
            </h2>
          </div>
          
          <div className="border-l-8 border-brand-orange pl-5 py-2 max-w-sm mx-auto md:mx-0 bg-black/20 text-center md:text-left">
            <p className="font-space text-white text-lg md:text-xl leading-snug m-0">
              Tu vitrina digital abierta 24/7 con <span className="font-bold text-brand-orange font-mono uppercase tracking-widest text-sm px-1 bg-white/10">presencia premium</span>.
            </p>
          </div>
        </div>

        {/* Tarjeta de Proyecto */}
        <div className="flex justify-center">
          {proyectosWeb.map((proyecto, index) => (
            <div key={index} className="group relative w-full flex flex-col">
              
              <div className="absolute inset-0 bg-brand-orange translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              
              <div className="relative bg-white border-4 border-black p-6 md:p-12 lg:p-16 h-full flex flex-col z-10 text-center md:text-left items-center md:items-start">
                
                {/* Header de la Card */}
                <div className="mb-10 border-b-4 border-black pb-8 flex flex-col md:flex-row items-center justify-between w-full gap-6">
                  <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2">
                    <h3 className="font-anton text-5xl md:text-6xl lg:text-7xl uppercase leading-none m-0 tracking-tighter text-brand-blue">
                      {proyecto.nombre}
                    </h3>
                    <span className="font-anton text-xl md:text-2xl lg:text-3xl text-black uppercase tracking-tight opacity-90">
                      {proyecto.significado}
                    </span>
                  </div>
                  
                  <Link 
                    href={proyecto.link} 
                    target="_blank"
                    className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 font-anton text-xl uppercase border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group/btn shrink-0 w-full md:w-auto"
                  >
                    VISITAR <ExternalLink size={24} />
                  </Link>
                </div>

                {/* CUERPO */}
                <div className="flex flex-col gap-10 mb-12 w-full">
                  <p className="font-space text-lg md:text-xl lg:text-2xl text-black font-bold leading-snug w-full">
                    {proyecto.descripcion}
                  </p>

                  {/* Grid de Beneficios: Estilo lista premium en mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-4 md:gap-y-6 w-full">
                    {proyecto.beneficios.map((beneficio, i) => (
                      <div key={i} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start border-b border-gray-100 md:border-none pb-4 md:pb-0">
                        <CheckCircle2 size={28} className="text-brand-orange shrink-0" strokeWidth={2.5} />
                        <span className="font-mono text-base md:text-lg lg:text-xl font-black text-black uppercase tracking-tighter text-center md:text-left">
                          {beneficio}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Área de Imágenes: Full width en mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
                  {proyecto.images.map((src, i) => (
                    <div key={i} className="aspect-[4/3] md:aspect-[16/10] relative border-4 border-black bg-gray-100 overflow-hidden shadow-[8px_8px_0px_#000]">
                      <Image 
                        src={src} 
                        alt={`${proyecto.nombre} vista ${i + 1}`}
                        fill
                        unoptimized
                        className="object-contain p-2 md:p-4"
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}