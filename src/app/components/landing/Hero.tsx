import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-brand-orange flex flex-col justify-center items-center text-center px-4 border-b-16 border-black overflow-hidden font-space antialiased selection:bg-black selection:text-white">
      
      {/* Textura de fondo técnica */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      ></div>

      {/* Info de cabecera técnico-industrial */}
      <div className="absolute top-8 w-full px-8 flex justify-between items-start font-mono text-[10px] md:text-xs text-black uppercase font-black tracking-widest z-20">
        <div className="flex flex-col items-start text-left">
          <span>STATUS: ONLINE</span>
          <span>BUILD_ID: 0024-TRJ</span>
        </div>
        <div className="hidden md:block text-right">
          <span>SOPORTE_SISTEMAS_24/7</span>
          <span>TRUJILLO_VENEZUELA</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        
        {/* Tu Nombre - Centrado Absoluto con Flexbox */}
        <h1 className="w-full flex flex-col items-center justify-center font-anton text-[28vw] md:text-[14vw] leading-[0.85] md:leading-[0.75] text-black uppercase tracking-tighter select-none mb-8">
          <span>JUAN</span>
          <span>ALVAREZ</span>
        </h1>

        {/* La Box Central - Fuerte y Geométrica */}
        <div className="relative inline-flex flex-col items-center group w-[90%] md:w-auto mx-auto mt-2">
          <div className="w-full flex flex-col items-center justify-center font-space text-base md:text-3xl text-black font-black border-4 border-black px-4 md:px-12 py-5 md:py-6 bg-white shadow-brutal-black-lg transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 text-center">
            <span className="block text-[10px] md:text-sm font-mono mb-2 text-brand-blue uppercase font-bold tracking-wider">Full-Stack Engineer</span>
            <span>DESARROLLADOR DE SOFTWARE</span>
            <span>& SOLUCIONES TECH</span>
          </div>
          
          {/* Badge de disponibilidad simplificado - Estilo Sticker */}
          <span className="absolute -top-6 -right-2 md:-right-6 bg-brand-blue text-white font-mono text-[10px] md:text-xs px-3 py-1 border-2 border-black -rotate-6 shadow-brutal-black uppercase font-black tracking-widest z-10">
            Disponible
          </span>
        </div>

      </div>

      {/* Adorno lateral vertical de ingeniería */}
      <div className="absolute bottom-10 left-8 font-mono text-[10px] text-black hidden md:block uppercase font-bold opacity-40">
        &copy; 2026 PORTFOLIO_BUILD
      </div>
      
      {/* Indicador de Scroll Centrado con Icono Lucide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-1 z-20 text-black">
        <ArrowDown className="w-6 h-6 stroke-[3]" />
        <span className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Deslizar</span>
      </div>
    </section>
  );
}