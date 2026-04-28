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
    <section className="relative py-24 bg-brand-orange font-space overflow-hidden">
      
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

        {/* Grid de 3 Columnas en PC - Layout que respira */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {soluciones.map((solucion, index) => (
            <div key={index} className="group relative w-full flex flex-col h-full">
              
              {/* Sombra de fondo negra */}
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
              
              <div className="relative bg-white border-4 border-black p-6 md:p-8 h-full flex flex-col z-10 text-center md:text-left items-center md:items-start">
                
                {/* Header de la Card */}
                <div className="mb-6 border-b-4 border-black pb-4 flex flex-col md:flex-row md:items-baseline gap-x-3 w-full">
                  <h3 className="font-anton text-5xl xl:text-6xl uppercase leading-none m-0 tracking-tighter text-brand-orange">
                    {solucion.nombre}
                  </h3>
                  <span className="font-anton text-xl text-black uppercase tracking-tight opacity-90">
                    {solucion.significado}
                  </span>
                </div>

                {/* Descripción equilibrada (2 líneas) */}
                <p className="font-space text-lg text-black font-bold leading-tight mb-6 flex-grow">
                  {solucion.descripcion}
                </p>

                {/* Checks organizados y limpios */}
                <div className="mb-8 flex flex-col md:flex-row gap-3 w-full md:gap-x-6">
                  {solucion.beneficios.map((beneficio, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start border-b border-gray-100 md:border-none pb-3 md:pb-0">
                      <CheckCircle2 size={24} className="text-brand-orange shrink-0" strokeWidth={2.5} />
                      <span className="font-mono text-base font-black text-black uppercase tracking-tighter text-center md:text-left">
                        {beneficio}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Imagen Vertical - Sin Recortes - Centrada en Móvil */}
                <div className="aspect-[3/4] relative border-4 border-black bg-gray-100 overflow-hidden shadow-[4px_4px_0px_#000] w-full mt-auto">
                  <Image 
                    src={solucion.image} 
                    alt={`${solucion.nombre} preview`}
                    fill
                    unoptimized
                    className="object-contain p-2 md:p-4" // 'contain' para que la imagen vertical se vea entera
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