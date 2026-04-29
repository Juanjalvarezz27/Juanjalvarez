'use client';

import { Database, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function SistemasDetalle() {
  const proyectosSistemas = [
    {
      nombre: "SIGEVE",
      significado: "SISTEMA DE GESTIÓN DE VENTAS",
      descripcion: "El fin del desorden operativo. Control absoluto de stock y ventas con conversión automática de tasas BCV en tiempo real.",
      beneficios: [
        "Control de stock físico", 
        "Ventas y estadísticas",
        "Tasas BCV automáticas", 
        "Reportes de flujo de caja"
      ],
      color: "bg-brand-orange",
      images: ["/Sigeve 1.png", "/Sigeve 2.png"]
    },
    {
      nombre: "SILAV",
      significado: "SISTEMA DE AUTOLAVADO",
      descripcion: "Digitalización total del sector automotriz. Unifica la gestión de servicios, clientes recurrentes y monedero virtual.",
      beneficios: [
        "Monedero digital", 
        "Gestión de servicios y precios", 
        "Registro de clientes y vehículos",
        "Control de pagos diarios"
      ],
      color: "bg-brand-blue",
      images: ["/Silav 1.png", "/Silav 2.png"]
    }
  ];

  return (
    <section className="relative py-24 bg-black font-space overflow-hidden">
      
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
              <span className="font-mono text-brand-orange font-black text-xl uppercase tracking-widest">PROYECTOS_01</span>
            </div>
            
            <h2 className="font-anton text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-none tracking-tight m-0 select-none">
            SISTEMAS <span className="text-white drop-shadow-[4px_4px_0px_#3b82f6]">A MEDIDA.</span>
            </h2>
          </div>
          
          <div className="border-l-8 border-brand-orange pl-5 py-2 max-w-sm mx-auto md:mx-0">
            <p className="font-space text-white text-lg md:text-xl leading-snug m-0 text-center md:text-left">
              Automatización diseñada para el <span className="font-bold text-brand-orange font-mono uppercase tracking-widest text-sm px-1 bg-white/10">control total</span> de tu negocio.
            </p>
          </div>
        </div>

        {/* Grid de Sistemas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10">
          {proyectosSistemas.map((proyecto, index) => (
            <div key={index} className="group relative w-full flex flex-col">
              
              <div className={`absolute inset-0 ${proyecto.color} translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6`}></div>
              
              <div className="relative bg-white border-4 border-black p-8 md:p-12 h-full flex flex-col z-10 text-center md:text-left">
                
                {/* Header de la Card */}
                <div className="mb-8 border-b-4 border-black pb-6 flex flex-col md:flex-row md:items-baseline md:justify-start gap-x-4">
                  <h3 className="font-anton text-6xl md:text-7xl lg:text-8xl uppercase leading-none m-0 tracking-tighter text-brand-blue">
                    {proyecto.nombre}
                  </h3>
                  <span className="font-anton text-xl md:text-2xl lg:text-3xl text-black uppercase tracking-tight mt-1 md:mt-0 opacity-90">
                    — {proyecto.significado}
                  </span>
                </div>

                <p className="font-space text-lg text-black font-bold leading-tight mb-8">
                  {proyecto.descripcion}
                </p>

                {/* Beneficios */}
                <div className="mb-12 flex flex-col gap-4 items-center md:items-start">
                  {proyecto.beneficios.map((beneficio, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={24} className="text-black shrink-0" strokeWidth={2.5} />
                      <span className="font-mono text-base md:text-lg font-black text-black uppercase tracking-tighter text-left">
                        {beneficio}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Área de Imágenes Reales - DISEÑO MÓVIL OPTIMIZADO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                  {proyecto.images.map((src, i) => (
                    <div key={i} className="aspect-[9/16] relative border-4 border-black bg-white overflow-hidden shadow-[4px_4px_0px_#000] group-hover:border-brand-blue transition-colors">
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