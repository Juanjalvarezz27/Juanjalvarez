import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-brand-orange flex flex-col justify-center items-center text-center px-4 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28 border-b-8 md:border-b-16 border-black overflow-hidden font-space antialiased selection:bg-black selection:text-white group z-0">
      
      {/* 1. Textura Animada: Puntos Visibles */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none animate-moving-dots z-0" 
        style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>

      {/* 2. Dispositivos Flotantes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* LAPTOP */}
        <div className="absolute top-1/4 -left-20 md:left-5 w-56 h-56 md:w-96 md:h-96 opacity-50 md:opacity-70 animate-float-slow transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6">
          <Image 
            src="/Laptop.png" 
            alt="Laptop Tech" 
            fill
            className="object-contain drop-shadow-[10px_10px_0px_rgba(0,0,0,0.5)]"
            priority
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        
        {/* TELÉFONO */}
        <div className="absolute top-[65%] md:top-1/2 -right-16 md:right-10 w-48 h-48 md:w-80 md:h-80 opacity-50 md:opacity-70 animate-float-medium transition-transform duration-500 group-hover:-translate-x-8 group-hover:translate-y-4">
          <Image 
            src="/Phone.png" 
            alt="Phone Tech" 
            fill
            className="object-contain drop-shadow-[10px_10px_0px_rgba(0,0,0,0.5)]"
            priority
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* =============================================================================
          INFO DE CABECERA (LIMPIA SIN FONDOS)
          ============================================================================= */}
      <div className="absolute top-8 w-full px-6 md:px-8 flex justify-between items-start font-mono text-[10px] md:text-xs text-black uppercase font-black tracking-widest z-30 pointer-events-none">
        <div className="flex flex-col items-start text-left relative z-30">
          <span className="flex items-center gap-1.5 md:gap-2">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-black rounded-full animate-pulse"></div> 
            STATUS: ONLINE
          </span>
          <span>BUILD_ID: 0024-TRJ</span>
        </div>
        <div className="hidden md:flex flex-col items-end text-right relative z-30">
          <span>SOPORTE_SISTEMAS_24/7</span>
          <span>TRUJILLO_VENEZUELA</span>
        </div>
      </div>

      {/* CONTENEDOR DE ZONA SEGURA */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[92%] md:max-w-7xl mx-auto mt-12 md:mt-0">
        
        {/* Tu Nombre: CON BORDE BLANCO (-webkit-text-stroke) */}
        <h1 className="w-full text-center font-anton text-[15vw] sm:text-[18vw] md:text-[12vw] leading-[0.85] md:leading-[0.9] text-black uppercase tracking-tight md:tracking-tighter select-none mb-4 md:mb-8 relative z-10 [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:4px_white] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          JUAN<br className="block" />ALVAREZ
        </h1>

        {/* LA BOX CENTRAL */}
        <div className="relative inline-flex flex-col items-center group/box w-full max-w-sm md:max-w-2xl z-10">

          <div className="w-full bg-white border-4 md:border-8 border-black shadow-[6px_6px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000] px-6 py-6 md:px-10 md:py-8 transition-transform duration-300 group-hover/box:-translate-y-2 cursor-default flex flex-col items-center text-center">

            {/* Etiqueta Superior (Rol) */}
            <div className="inline-block bg-black text-white font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4 group-hover/box:rotate-0 transition-transform">
              Ingeniero Full-Stack
            </div>

            {/* Textos Principales */}
            <h2 className="font-anton text-3xl md:text-5xl lg:text-[3.5rem] text-black uppercase leading-[0.95] md:leading-[0.9] tracking-tight m-0">
              Desarrollo de Software
              <span className="block text-brand-blue mt-1 md:mt-2">& Soluciones Tech</span>
            </h2>

          </div>

          {/* STICKER DISPONIBLE AZUL */}
          <div className="absolute -bottom-4 right-0 md:-bottom-5 md:-right-4 bg-brand-blue text-white border-2 md:border-4 border-black px-4 py-1 md:px-5 md:py-2 shadow-[4px_4px_0px_0px_#000000] transform rotate-3 group-hover/box:-rotate-3 group-hover/box:scale-105 transition-all duration-300 flex items-center gap-2 md:gap-3 z-20 cursor-default">
            <span className="relative flex h-2 w-2 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-white"></span>
            </span>
            <span className="font-anton text-lg md:text-xl uppercase tracking-wider mt-1">
              Disponible
            </span>
          </div>

        </div>

        {/* NUEVO: BOTÓN CTA Y PRUEBA SOCIAL PARA ATRAER CLIENTES */}
        <div className="mt-12 md:mt-16 relative z-10 flex flex-col items-center">
          <Link href="/home/contacto" className="group/btn relative inline-flex items-center justify-center">
            {/* Sombra negra */}
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:translate-y-1"></div>
            {/* Botón principal */}
            <div className="relative bg-white border-4 border-black px-8 py-4 md:px-12 md:py-5 flex items-center gap-3 md:gap-4 group-hover/btn:bg-brand-blue transition-colors duration-300">
              <span className="font-anton text-2xl md:text-4xl uppercase tracking-wider text-black group-hover/btn:text-white transition-colors mt-1">
                Iniciar Proyecto
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-brand-orange group-hover/btn:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}