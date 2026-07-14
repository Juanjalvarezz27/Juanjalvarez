'use client';

import { Database, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function SistemasDetalle() {
  const { t } = useLanguage();
  const proyectosSistemas = [
    {
      nombre: t.sistemas_detalle.items[0].nombre,
      significado: t.sistemas_detalle.items[0].significado,
      descripcion: t.sistemas_detalle.items[0].descripcion,
      beneficios: t.sistemas_detalle.items[0].beneficios,
      color: "bg-brand-orange",
      images: ["/IMG_7394.jpeg", "/IMG_7395.jpeg"]
    },
    {
      nombre: t.sistemas_detalle.items[1].nombre,
      significado: t.sistemas_detalle.items[1].significado,
      descripcion: t.sistemas_detalle.items[1].descripcion,
      beneficios: t.sistemas_detalle.items[1].beneficios,
      color: "bg-brand-blue",
      images: ["/Leyma1.png", "/Leyma2.png"],
      isDesktopFormat: true
    },
    {
      nombre: t.sistemas_detalle.items[2].nombre,
      significado: t.sistemas_detalle.items[2].significado,
      descripcion: t.sistemas_detalle.items[2].descripcion,
      beneficios: t.sistemas_detalle.items[2].beneficios,
      color: "bg-brand-orange",
      images: ["/Sigeve 1.png", "/Sigeve 2.png"]
    },
    {
      nombre: t.sistemas_detalle.items[3].nombre,
      significado: t.sistemas_detalle.items[3].significado,
      descripcion: t.sistemas_detalle.items[3].descripcion,
      beneficios: t.sistemas_detalle.items[3].beneficios,
      color: "bg-brand-blue",
      images: ["/Silav 1.png", "/Silav 2.png"]
    }
  ];

  return (
    <section id="sistemas" className="relative py-24 bg-black font-space overflow-hidden scroll-mt-20">
      
      <style jsx>{`
        @keyframes moveDots {
          from { background-position: 0 0; }
          to { background-position: 32px 32px; }
        }
        .moving-dots {
          animation: moveDots 2s linear infinite;
        }
      `}</style>

      {/* Fondo de Puntos Movimiento */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-0 moving-dots" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffffff 2.5px, transparent 2.5px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      <div className="relative z-10 max-w-[94%] mx-auto px-4">
        
        {/* Cabecera Principal */}
        <div className="mb-16 md:mb-20 flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-b-4 border-white pb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center border-2 border-white">
                <Database size={24} className="text-black" />
              </div>
              <span className="font-mono text-brand-orange font-black text-xl uppercase tracking-widest">{t.sistemas_detalle.badge}</span>
            </div>
            
            <h2 className="font-anton text-6xl sm:text-7xl lg:text-8xl text-white uppercase leading-none tracking-tight m-0 select-none">
              {t.sistemas_detalle.title_1} <span className="text-white drop-shadow-[4px_4px_0px_#3b82f6]">{t.sistemas_detalle.title_2}</span>
            </h2>
          </div>
          
          <div className="border-l-8 border-brand-orange pl-5 py-2 max-w-sm mx-auto md:mx-0">
            <p className="font-space text-white text-lg md:text-xl leading-snug m-0 text-center md:text-left">
              {t.sistemas_detalle.desc_1}<span className="font-bold text-brand-orange font-mono uppercase tracking-widest text-sm px-1 bg-white/10">{t.sistemas_detalle.desc_2}</span>{t.sistemas_detalle.desc_3}
            </p>
          </div>
        </div>

        {/* Indicador de Swipe para Mobile */}
        <div className="flex lg:hidden items-center justify-center gap-3 w-full mb-8 text-brand-orange animate-pulse">
          <span className="font-mono text-lg sm:text-xl font-black uppercase tracking-widest underline decoration-white decoration-2 sm:decoration-4 underline-offset-[6px]">
            {t.sistemas_detalle.swipe}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Grid de Sistemas (Swipe en Mobile, Grid en PC) */}
        {/* Se añadió -mx-4 px-4 para que el scroll horizontal llegue hasta el borde de la pantalla en móviles sin cortarse feo */}
        <div className="-mx-4 px-4 lg:mx-0 lg:px-0 flex overflow-x-auto lg:grid lg:grid-cols-2 gap-4 md:gap-6 pb-8 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {proyectosSistemas.map((proyecto, index) => (
            <div 
              key={index} 
              className="group relative min-w-[85vw] sm:min-w-[60vw] lg:min-w-0 w-full flex flex-col snap-start h-full"
            >
              
              <div className={`absolute inset-0 ${proyecto.color} translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 md:group-hover:translate-x-5 md:group-hover:translate-y-5`}></div>
              
              <div className="relative bg-white border-4 border-black p-4 md:p-6 h-full flex flex-col z-10 text-center md:text-left">
                
                {/* Header de la Card */}
                <div className="mb-4 border-b-4 border-black pb-3 flex flex-col xl:flex-row xl:items-baseline xl:justify-start gap-x-3">
                  <h3 className="font-anton text-4xl sm:text-5xl lg:text-5xl xl:text-6xl uppercase leading-none m-0 tracking-tighter text-brand-blue">
                    {proyecto.nombre}
                  </h3>
                  <span className="font-anton text-sm md:text-base lg:text-lg text-black uppercase tracking-tight mt-1 xl:mt-0 opacity-90">
                    — {proyecto.significado}
                  </span>
                </div>

                <p className="font-space text-sm md:text-base lg:text-lg text-black font-medium leading-tight mb-5 md:mb-6">
                  {proyecto.descripcion}
                </p>

                {/* Beneficios con Diseño Redondeado en 2x2 */}
                <div className="mb-6 md:mb-8 grid grid-cols-2 gap-2 md:gap-3 w-full">
                  {proyecto.beneficios.map((beneficio, i) => (
                    <div key={i} className="group/benefit flex items-center justify-start gap-2.5 sm:gap-3 bg-white border border-gray-200 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl md:rounded-full shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all cursor-default w-full text-left">
                      <div className={`shrink-0 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full ${i % 2 === 0 ? 'bg-brand-orange text-white' : 'bg-brand-blue text-white'} shadow-sm group-hover/benefit:scale-110 transition-transform`}>
                        <CheckCircle2 size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={3} />
                      </div>
                      <span className="font-space text-[12px] sm:text-[13px] md:text-[14px] font-bold text-gray-800 uppercase tracking-tighter leading-snug">
                        {beneficio}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Área de Imágenes Reales - Condicional */}
                {proyecto.isDesktopFormat ? (
                  <div className="mt-auto relative w-full aspect-[16/11] md:aspect-[16/10] z-10 mt-4">
                    {/* Imagen 1 - Atrás/Izquierda */}
                    <div className="absolute top-0 left-0 w-[75%] h-[85%] border-4 border-black bg-gray-50 shadow-[4px_4px_0px_rgba(0,0,0,1)] z-10 transform -rotate-2 group-hover:rotate-0 hover:!z-30 hover:scale-105 transition-all duration-300">
                      <Image 
                        src={proyecto.images[0]} 
                        alt={`${proyecto.nombre} vista 1`}
                        fill
                        unoptimized 
                        className="object-contain p-2" 
                      />
                    </div>
                    {/* Imagen 2 - Adelante/Derecha */}
                    <div className="absolute bottom-0 right-0 w-[75%] h-[85%] border-4 border-black bg-gray-50 shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20 transform rotate-2 group-hover:rotate-0 hover:scale-105 transition-all duration-300">
                      <Image 
                        src={proyecto.images[1] || proyecto.images[0]} 
                        alt={`${proyecto.nombre} vista 2`}
                        fill
                        unoptimized 
                        className="object-contain p-2" 
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-auto gap-3 md:gap-4 grid grid-cols-2">
                    {proyecto.images.map((src, i) => (
                      <div key={i} className="relative border-4 border-black bg-gray-100 overflow-hidden shadow-[3px_3px_0px_#000] md:shadow-[4px_4px_0px_#000] group-hover:border-brand-blue transition-colors aspect-[4/5]">
                        <Image 
                          src={src} 
                          alt={`${proyecto.nombre} vista ${i + 1}`}
                          fill
                          unoptimized 
                          className="object-contain p-2" 
                        />
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
