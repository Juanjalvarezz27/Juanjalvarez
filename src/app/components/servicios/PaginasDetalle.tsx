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
      beneficios: [],
      link: "https://domenico-dorazio.vercel.app/",
      images: ["/Domenico.jpg", "/Domenico2.jpg"],
      isMobileFormat: true
    },
    {
      nombre: "LICORERÍA RIZZO",
      significado: "CATÁLOGO B2B AL MAYOR",
      descripcion: "Catálogo digital de alto rendimiento. Filtrado interactivo y búsqueda de licores premium para impulsar las ventas al mayor.",
      beneficios: [],
      link: "https://catalogo-rizzo.vercel.app/",
      images: ["/rizzo1.jpg", "/rizzo2.jpg"],
      isMobileFormat: true
    },
    {
      nombre: "JUAN GRATEROL",
      significado: "MEDIA KIT DIGITAL",
      descripcion: "Landing page de impacto para atleta fitness y creador UGC. Diseño inmersivo para conectar marcas y proyectar una imagen profesional.",
      beneficios: [],
      link: "https://juangraterol.vercel.app/",
      images: ["/juangraterol1.jpg", "/juangraterol2.jpg"],
      isMobileFormat: true
    }
  ];

  return (
    <section id="paginas" className="relative py-24 bg-brand-blue font-space overflow-hidden scroll-mt-20">
      
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
            <h2 className="font-anton text-6xl sm:text-7xl lg:text-8xl text-white uppercase leading-none tracking-tighter m-0 select-none">
              PÁGINAS <span className="text-brand-orange italic drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">WEB.</span>
            </h2>
          </div>
          
          <div className="border-l-8 border-brand-orange pl-5 py-2 max-w-sm mx-auto md:mx-0 bg-black/20 text-center md:text-left">
            <p className="font-space text-white text-lg md:text-xl leading-snug m-0">
              Tu vitrina digital abierta 24/7 con <span className="font-bold text-brand-orange font-mono uppercase tracking-widest text-sm px-1 bg-white/10">presencia premium</span>.
            </p>
          </div>
        </div>

        {/* Indicador de Swipe para Mobile */}
        <div className="flex lg:hidden items-center justify-center gap-3 w-full mb-8 text-brand-orange animate-pulse">
          <span className="font-mono text-lg sm:text-xl font-black uppercase tracking-widest underline decoration-black decoration-2 sm:decoration-4 underline-offset-[6px]">
            Desliza para ver más
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Contenedor Carrusel/Grid */}
        <div className="-mx-4 px-4 lg:mx-0 lg:px-0 flex overflow-x-auto lg:grid lg:grid-cols-1 lg:max-w-4xl lg:mx-auto gap-4 md:gap-8 pb-8 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {proyectosWeb.map((proyecto, index) => (
            <div key={index} className="group relative min-w-[85vw] sm:min-w-[60vw] lg:min-w-0 w-full flex flex-col snap-start h-full">
              
              <div className="absolute inset-0 bg-brand-orange translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 md:group-hover:translate-x-5 md:group-hover:translate-y-5"></div>
              
              <div className="relative bg-white border-4 border-black p-4 md:p-8 h-full flex flex-col z-10 text-center md:text-left">
                
                {/* Header de la Card */}
                <div className="mb-4 md:mb-6 border-b-4 border-black pb-3 md:pb-4 flex flex-col xl:flex-row xl:items-baseline xl:justify-start gap-x-4">
                  <h3 className={`font-anton uppercase leading-none m-0 tracking-tighter text-brand-blue ${proyecto.nombre.length > 14 ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-5xl sm:text-6xl lg:text-7xl'}`}>
                    {proyecto.nombre}
                  </h3>
                  <span className="font-anton text-base md:text-xl lg:text-2xl text-black uppercase tracking-tight mt-1 xl:mt-0 opacity-90">
                    — {proyecto.significado}
                  </span>
                </div>

                <p className="font-space text-sm md:text-base lg:text-lg text-black font-medium leading-tight mb-5 md:mb-6">
                  {proyecto.descripcion}
                </p>

                {/* Beneficios con Diseño Redondeado */}
                {proyecto.beneficios && proyecto.beneficios.length > 0 && (
                  <div className="mb-6 md:mb-8 flex flex-wrap gap-2 md:gap-3 items-center justify-center">
                    {proyecto.beneficios.map((beneficio, i) => (
                      <div key={i} className="group/benefit flex items-center gap-2.5 bg-white border border-gray-200 px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all cursor-default">
                        <div className={`flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full ${i % 2 === 0 ? 'bg-brand-orange text-white' : 'bg-brand-blue text-white'} shadow-sm group-hover/benefit:scale-110 transition-transform`}>
                          <CheckCircle2 size={14} className="md:w-[16px] md:h-[16px]" strokeWidth={3} />
                        </div>
                        <span className="font-space text-[13px] sm:text-[14px] md:text-[15px] font-bold text-gray-800 uppercase tracking-tighter">
                          {beneficio}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Botón */}
                <div className="mb-8 flex justify-center md:justify-start">
                  <Link 
                    href={proyecto.link} 
                    target="_blank"
                    className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-3 font-anton text-lg uppercase border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group/btn shrink-0 w-full sm:w-auto"
                  >
                    VISITAR PROYECTO <ExternalLink size={20} />
                  </Link>
                </div>

                {/* Imágenes (Condicional Desktop/Mobile) */}
                <div className={`mt-auto gap-4 md:gap-5 ${proyecto.isMobileFormat ? 'grid grid-cols-2' : 'flex flex-col'}`}>
                  {proyecto.images.map((src, i) => (
                    <div key={i} className={`${proyecto.isMobileFormat ? 'aspect-[9/16]' : 'aspect-[16/10]'} relative border-4 border-black bg-gray-100 overflow-hidden shadow-[3px_3px_0px_#000] md:shadow-[4px_4px_0px_#000] group-hover:border-brand-blue transition-colors`}>
                      <Image 
                        src={src} 
                        alt={`${proyecto.nombre} vista ${i + 1}`}
                        fill
                        unoptimized
                        className="object-contain"
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