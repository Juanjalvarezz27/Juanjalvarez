import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-brand-orange flex flex-col justify-center items-center text-center px-4 md:px-8 border-b-16 border-black overflow-hidden font-space antialiased selection:bg-black selection:text-white group">
      
      {/* 1. Textura Animada */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none animate-moving-dots z-0" 
        style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      ></div>

      {/* 2. Dispositivos Flotantes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* LAPTOP - Se queda igual */}
        <div className="absolute top-1/4 -left-20 md:left-5 w-56 h-56 md:w-96 md:h-96 opacity-40 md:opacity-60 animate-float-slow transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6">
          <Image 
            src="/Laptop.png" 
            alt="Laptop Tech" 
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* TELÉFONO - CORREGIDO: Más abajo en mobile (top-[65%]) */}
        <div className="absolute top-[65%] md:top-1/2 -right-16 md:right-10 w-48 h-48 md:w-80 md:h-80 opacity-40 md:opacity-60 animate-float-medium transition-transform duration-500 group-hover:-translate-x-8 group-hover:translate-y-4">
          <Image 
            src="/Phone.png" 
            alt="Phone Tech" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Info de cabecera */}
      <div className="absolute top-8 w-full px-6 md:px-8 flex justify-between items-start font-mono text-[10px] md:text-xs text-black uppercase font-black tracking-widest z-30">
        <div className="flex flex-col items-start text-left relative z-30">
          <span>STATUS: ONLINE</span>
          <span>BUILD_ID: 0024-TRJ</span>
        </div>
        <div className="hidden md:flex flex-col items-end text-right relative z-30">
          <span>SOPORTE_SISTEMAS_24/7</span>
          <span>TRUJILLO_VENEZUELA</span>
        </div>
      </div>

      {/* CONTENEDOR DE ZONA SEGURA */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[92%] md:max-w-7xl mx-auto">
        
        {/* Tu Nombre */}
        <h1 className="w-full text-center font-anton text-[26vw] md:text-[12vw] leading-[0.85] md:leading-[0.9] text-black uppercase tracking-normal md:tracking-tighter select-none mb-6 whitespace-nowrap relative z-10">
          JUAN<br className="block" />ALVAREZ
        </h1>

        {/* La Box Central */}
        <div className="relative inline-flex flex-col items-center group/box w-full md:w-auto mt-2 z-10">
          <div className="w-full flex flex-col items-center justify-center font-space text-base md:text-2xl text-black font-black border-4 border-black px-4 md:px-12 py-4 md:py-6 bg-white shadow-brutal-black-lg transition-transform group-hover/box:-translate-x-1 group-hover/box:-translate-y-1 relative z-10 text-center">
            <span className="block text-xs md:text-sm font-mono mb-2 text-brand-blue uppercase font-bold tracking-wider">Full-Stack Engineer</span>
            <span className="block leading-tight uppercase font-black">Desarrollador de software</span>
            <span className="block leading-tight uppercase font-black">& Soluciones Tech</span>
          </div>
          
          <span className="absolute -top-5 -right-1 md:-top-6 md:-right-6 bg-brand-blue text-white font-mono text-[10px] md:text-xs px-3 py-1 border-2 border-black -rotate-6 shadow-brutal-black uppercase font-black tracking-widest z-20">
            Disponible
          </span>
        </div>
      </div>
      
      {/* Indicador de Scroll */}
      <div className="absolute bottom-4 w-full flex flex-col items-center text-center animate-bounce z-20 text-black">
        <ArrowDown className="w-6 h-6 stroke-[3]" />
        <span className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mt-1 text-center">
          Deslizar
        </span>
      </div>
    </section>
  );
}