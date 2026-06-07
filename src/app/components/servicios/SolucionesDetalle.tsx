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
      image: "/Formulario.png" // Actualizado para coincidir con image_4.png
    },
    {
      nombre: "DORSALES",
      significado: "ENTREGA SMART",
      descripcion: "Sistema de logística automatizada para la asignación y entrega eficiente de dorsales mediante QR.",
      beneficios: ["Cero colas", "Control total"],
      image: "/Dorsales.jpg" // Actualizado para coincidir con image_4.png
    },
    {
      nombre: "E-BOOK",
      significado: "DISEÑO DIGITAL",
      descripcion: "Maquetación editorial disruptiva diseñada para captar atención y proyectar valor profesional.",
      beneficios: ["Diseño Pro", "Multi-dispositivo"],
      image: "/book.png" // Actualizado para coincidir con image_4.png
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
              <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-white shadow-[4px_4px_0px_#fff]">
                <Lightbulb size={24} className="text-white" />
              </div>
              <span className="font-mono text-black font-black text-xl uppercase tracking-widest drop-shadow-[2px_2px_0px_#000]">SOLUCIONES_03</span>
            </div>
            
            <h2 className="font-anton text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.8] tracking-tighter m-0 select-none">
              SOLUCIONES <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">DIGITALES.</span>
            </h2>
          </div>
          
          <div className="border-l-8 border-black pl-5 py-2 max-w-sm mx-auto md:mx-0 bg-white/20 text-center md:text-left">
            <p className="font-space text-black text-lg md:text-xl leading-snug m-0">
              Herramientas específicas para <span className="uppercase tracking-widest text-sm px-1 bg-black text-white">potenciar</span> tu marca.
            </p>
          </div>
        </div>

        {/* Indicador de Swipe para Mobile */}
        <div className="flex lg:hidden items-center gap-2 mb-4 text-brand-orange font-mono text-sm font-bold uppercase tracking-wider animate-pulse">
          <span>Desliza para ver más</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
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
                  <h3 className="font-anton text-3xl md:text-4xl lg:text-5xl uppercase leading-none m-0 tracking-tighter text-brand-orange">
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

                {/* Checks convertidos en Píldoras/Tags para móvil */}
                <div className="mb-5 flex flex-row flex-wrap gap-2 w-full justify-center md:justify-start">
                  {solucion.beneficios.map((beneficio, i) => (
                    <div key={i} className="flex flex-row items-center gap-1.5 bg-gray-100 border-2 border-black px-2 py-1">
                      <CheckCircle2 size={14} className="text-brand-orange shrink-0" strokeWidth={3} />
                      <span className="font-mono text-[10px] md:text-[12px] font-bold text-black uppercase tracking-tighter">
                        {beneficio}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Imagen más apaisada para ahorrar altura */}
                <div className="aspect-[16/10] relative border-4 border-black bg-gray-100 overflow-hidden shadow-[4px_4px_0px_#000] w-full mt-auto group-hover:border-brand-orange transition-colors">
                  <Image 
                    src={solucion.image} 
                    alt={`${solucion.nombre} preview`}
                    fill
                    unoptimized
                    className="object-cover md:object-contain p-0 md:p-2" 
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