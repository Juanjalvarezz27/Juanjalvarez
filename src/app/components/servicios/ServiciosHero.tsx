'use client';

import { useLanguage } from "../../../i18n/LanguageContext";

export default function ServiciosHero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center pt-32 pb-20 bg-white font-space overflow-hidden">
      
      <style>{`
        @keyframes moveGridHero {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        .animate-grid-hero {
          animation: moveGridHero 2s linear infinite;
        }
      `}</style>

      {/* Fondo de Cuadrícula Animada con desvanecimiento en los bordes */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] animate-grid-hero" 
        style={{ 
          backgroundImage: 'linear-gradient(#bbb 1.5px, transparent 1.5px), linear-gradient(90deg, #bbb 1.5px, transparent 1.5px)', 
          backgroundSize: '40px 40px',
          opacity: 0.8
        }}
      ></div>

      <div className="relative z-10 w-full max-w-[94%] mx-auto px-4 flex flex-col items-center justify-center">
        
        {/* TÍTULO GIGANTE CON ESTILO JUAN ALVAREZ */}
        <div className="text-center mb-12 md:mb-16">
          {/* Se eliminó whitespace-nowrap para que no se salga de la pantalla en teléfonos pequeños y se ajustó el tamaño de fuente inicial */}
          <h1 className="w-full text-center font-anton text-[18vw] sm:text-[20vw] md:text-[14rem] lg:text-[16rem] uppercase leading-[0.85] md:leading-[0.9] tracking-normal md:tracking-tighter select-none m-0 flex flex-col items-center relative z-10 [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:4px_white] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            
            <span className="text-black block">{t.servicios_hero.title_1}</span>
            
            <span className="text-brand-blue block mt-2 md:mt-4">{t.servicios_hero.title_2}</span>
            
          </h1>
        </div>

        {/* ESLOGAN */}
        <div className="text-center relative">
          <p className="font-anton text-3xl md:text-5xl lg:text-6xl text-black uppercase leading-[1.1] tracking-tight m-0 border-t-8 border-brand-orange pt-8 inline-block px-4 md:px-12">
            <span dangerouslySetInnerHTML={{ __html: t.servicios_hero.desc_1 }} />
            <span className="text-brand-orange">{t.servicios_hero.desc_2}</span>
          </p>
        </div>

      </div>

      {/* Decoración técnica de bordes */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <span className="font-mono text-gray-400 text-sm font-bold uppercase tracking-widest">
          SYS_BUILD // V.2026.1
        </span>
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block">
        <span className="font-mono text-gray-400 text-sm font-bold uppercase tracking-widest">
          TRUJILLO, VZLA
        </span>
      </div>
      
    </section>
  );
}