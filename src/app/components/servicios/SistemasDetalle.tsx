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
    },
    {
      nombre: "RUBEN'S",
      significado: "SISTEMA POS PARA PIZZERÍA",
      descripcion: "Gestión ágil enfocada en gastronomía. Sincronización en tiempo real con cocina (KDS), configuración manual de tasa BCV y cierres de caja diarios.",
      beneficios: [
        "Vista de ordenes para la cocina", 
        "Gestión de caja y cierres", 
        "Tasa BCV configurable",
        "Estadísticas de ventas diarias"
      ],
      color: "bg-brand-orange", // Repetimos el naranja para mantener la estética
      images: ["/IMG_7394.jpeg", "/IMG_7395.jpeg"]
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

        {/* Indicador de Swipe para Mobile */}
        <div className="flex lg:hidden items-center gap-2 mb-4 text-brand-orange font-mono text-sm font-bold uppercase tracking-wider animate-pulse">
          <span>Desliza para ver más</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Grid de Sistemas (Swipe en Mobile, Grid en PC) */}
        {/* Se añadió -mx-4 px-4 para que el scroll horizontal llegue hasta el borde de la pantalla en móviles sin cortarse feo */}
        <div className="-mx-4 px-4 lg:mx-0 lg:px-0 flex overflow-x-auto lg:grid lg:grid-cols-2 gap-4 md:gap-8 pb-8 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {proyectosSistemas.map((proyecto, index) => (
            <div 
              key={index} 
              // Mantiene el scroll en mobile y centra el 3er elemento en Desktop
              className={`group relative min-w-[85vw] sm:min-w-[60vw] lg:min-w-0 w-full flex flex-col snap-start h-full ${index === 2 ? 'lg:col-span-2 lg:max-w-4xl lg:mx-auto' : ''}`}
            >
              
              <div className={`absolute inset-0 ${proyecto.color} translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 md:group-hover:translate-x-5 md:group-hover:translate-y-5`}></div>
              
              <div className="relative bg-white border-4 border-black p-4 md:p-8 h-full flex flex-col z-10 text-center md:text-left">
                
                {/* Header de la Card */}
                <div className="mb-4 md:mb-6 border-b-4 border-black pb-3 md:pb-4 flex flex-col xl:flex-row xl:items-baseline xl:justify-start gap-x-4">
                  <h3 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase leading-none m-0 tracking-tighter text-brand-blue">
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

                {/* Área de Imágenes Reales - Apiladas al final */}
                <div className="grid grid-cols-2 gap-2 md:gap-5 mt-auto">
                  {proyecto.images.map((src, i) => (
                    <div key={i} className="aspect-[9/16] relative border-4 border-black bg-white overflow-hidden shadow-[3px_3px_0px_#000] md:shadow-[4px_4px_0px_#000] group-hover:border-brand-blue transition-colors">
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
