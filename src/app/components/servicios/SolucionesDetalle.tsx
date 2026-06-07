'use client';

import { Lightbulb, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function SolucionesDetalle() {
  const soluciones = [
    {
      nombre: "META RUN",
      significado: "REGISTRO MASIVO",
      descripcion: "Arquitectura de datos optimizada para inscripciones masivas y validación de pagos en tiempo real.",
      beneficios: ["Gestión masiva", "Validación real"],
      image: "/Formulario.png"
    },
    {
      nombre: "AMOR EN PAUSE",
      significado: "E-BOOK DIGITAL",
      descripcion: "Maquetación editorial disruptiva diseñada para captar atención y proyectar valor profesional.",
      beneficios: ["Diseño Pro", "Multi-dispositivo"],
      image: "/book.png"
    },
    {
      nombre: "DORSALES",
      significado: "ENTREGA SMART",
      descripcion: "Sistema de logística automatizada para la asignación y entrega eficiente de dorsales mediante QR.",
      beneficios: ["Cero colas", "Control total"],
      image: "/Dorsales.jpg"
    }
  ];

  return (
    <section id="soluciones" className="relative py-24 bg-brand-orange font-space overflow-hidden scroll-mt-20">
      
      <style jsx>{`
        @keyframes moveDotsOrange {
          from { background-position: 0 0; }
          to { background-position: 32px 32px; }
        }
        .moving-dots-orange {
          animation: moveDotsOrange 3s linear infinite;
        }
      `}</style>

      {/* Fondo de Puntos Negros */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0 moving-dots-orange" 
           style={{ 
             backgroundImage: 'radial-gradient(#000000 2.5px, transparent 2.5px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      <div className="relative z-10 max-w-[96%] mx-auto px-4">
        
        {/* Cabecera de Sección Sincronizada */}
        <div className="mb-16 md:mb-20 flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-b-4 border-black pb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black">
                <Lightbulb size={24} className="text-white" />
              </div>
              <span className="font-mono text-black font-black text-xl uppercase tracking-widest">SOLUCIONES_03</span>
            </div>
            
            <h2 className="font-anton text-6xl sm:text-7xl lg:text-8xl text-white uppercase leading-[1.1] md:leading-none tracking-tight m-0 select-none">
              SOLUCIONES <br className="md:hidden" />
              <span className="text-black bg-white px-3 md:px-4 pt-1 md:pt-2 pb-0 md:pb-1 inline-block mt-2 md:mt-0 md:ml-2 border-4 border-black shadow-[4px_4px_0px_#000] transform -rotate-2">
                DIGITALES.
              </span>
            </h2>
          </div>
          
          <div className="border-l-8 border-black pl-5 py-2 max-w-sm mx-auto md:mx-0">
            <p className="font-space text-black text-lg md:text-xl leading-snug m-0 text-center md:text-left">
              Herramientas específicas para <span className="font-bold text-white font-mono uppercase tracking-widest text-sm px-1 bg-black">potenciar</span> tu marca.
            </p>
          </div>
        </div>

        {/* Indicador de Swipe para Mobile */}
        <div className="flex lg:hidden items-center justify-center gap-3 w-full mb-8 text-black animate-pulse">
          <span className="font-mono text-lg sm:text-xl font-black uppercase tracking-widest underline decoration-white decoration-2 sm:decoration-4 underline-offset-[6px]">
            Desliza para ver más
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Carrusel Swipe en Mobile, Grid de 3 Columnas en PC */}
        {/* Se añadió -mx-4 px-4 para que el scroll horizontal llegue hasta el borde de la pantalla en móviles */}
        <div className="-mx-4 px-4 lg:mx-0 lg:px-0 flex overflow-x-auto lg:grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-8 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {soluciones.map((solucion, index) => (
            <div key={index} className="group relative min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 w-full flex flex-col h-full snap-start">
              
              {/* Sombra de fondo negra */}
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              
              <div className="relative bg-white border-4 border-black p-4 md:p-6 h-full flex flex-col z-10 text-center md:text-left items-center md:items-start">
                
                {/* Header de la Card */}
                <div className="mb-4 border-b-4 border-black pb-3 flex flex-col md:flex-row md:items-baseline gap-x-3 w-full">
                  <h3 className="font-anton text-5xl sm:text-6xl lg:text-7xl uppercase leading-none m-0 tracking-tighter text-brand-orange">
                    {solucion.nombre}
                  </h3>
                  <span className="font-anton text-sm md:text-base text-black uppercase tracking-tight opacity-90">
                    {solucion.significado}
                  </span>
                </div>

                {/* Descripción equilibrada */}
                <p className="font-space text-sm md:text-base text-black font-medium leading-tight mb-5 flex-grow">
                  {solucion.descripcion}
                </p>

                {/* Beneficios con Diseño Redondeado */}
                {solucion.beneficios && solucion.beneficios.length > 0 && (
                  <div className="mb-6 md:mb-8 flex flex-wrap gap-2 md:gap-3 items-center justify-center md:justify-start w-full">
                    {solucion.beneficios.map((beneficio, i) => (
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

                {/* Imagen en formato vertical */}
                <div className="aspect-[3/4] relative border-4 border-black bg-gray-100 overflow-hidden shadow-[3px_3px_0px_#000] md:shadow-[4px_4px_0px_#000] w-full mt-auto group-hover:border-brand-orange transition-colors">
                  <Image 
                    src={solucion.image} 
                    alt={`${solucion.nombre} preview`}
                    fill
                    unoptimized
                    className="object-contain" 
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}