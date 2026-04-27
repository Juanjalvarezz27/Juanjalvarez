import { Globe, Cpu, Database, Rocket, ArrowUpRight, Zap } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-screen bg-brand-dark flex flex-col justify-start px-4 md:px-8 pt-12 pb-24 md:py-24 border-b-16 border-black overflow-hidden font-space antialiased selection:bg-brand-orange selection:text-black group z-0">
      
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none animate-moving-dots z-0" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="relative z-10 w-full max-w-[92%] md:max-w-7xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end gap-6 md:gap-4 mb-10 md:mb-20 border-b-8 border-white pb-6 w-full relative z-10">
          
          <h2 className="font-anton text-5xl md:text-7xl lg:text-[6.5rem] text-white uppercase leading-[0.85] tracking-tight relative z-10 text-center md:text-left">
            Webs & Sistemas.<br />
            <span className="text-brand-orange italic">Soluciones Reales.</span>
          </h2>

          <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 rounded-full border-4 md:border-8 border-brand-blue overflow-hidden shadow-brutal-orange relative bg-gray-800 transform -rotate-3 hover:rotate-0 transition-transform z-10">
            <img 
              src="/Me.png" 
              alt="Foto de Juan Álvarez" 
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* CONTENIDO CENTRAL*/}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch relative z-10 mb-16 md:mb-24">
          
          <div className="lg:w-5/12 flex flex-col justify-center gap-8 md:gap-12">
            <p className="font-space text-2xl md:text-4xl text-white font-bold leading-[1.1] tracking-tight text-center md:text-left m-0">
              Soy <span className="text-black font-black bg-brand-orange px-3 py-1 uppercase inline-block -rotate-2 transform hover:rotate-0 transition-transform">Juan Álvarez</span>. Mi objetivo es simple: desarrollar herramientas que te den el <span className="underline decoration-brand-blue decoration-4 md:decoration-8 underline-offset-4">control absoluto</span> de tu negocio.
            </p>

            <div className="relative inline-block mt-2 md:mt-4 self-center md:self-start group cursor-default z-10">
               <div className="absolute inset-0 bg-white translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 border-4 border-black"></div>
               <div className="relative bg-brand-blue border-4 border-black px-8 py-8 md:px-10 md:py-10 flex flex-col transform hover:-translate-y-1 transition-transform text-center md:text-left">
                  <span className="font-anton text-4xl md:text-5xl lg:text-7xl text-white uppercase leading-[0.85]">Tú Diriges.</span>
                  <span className="font-anton text-4xl md:text-5xl lg:text-7xl text-black uppercase leading-[0.85] mt-2">Yo Programo.</span>
               </div>
            </div>
          </div>

          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-4 lg:mt-0 flex-col relative z-10">
            <div className="order-1 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#2563EB] hover:-translate-y-2 transition-all flex flex-col justify-between min-h-[220px] group cursor-default relative">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-blue border-4 border-black rounded-full text-white transform group-hover:rotate-12 transition-transform duration-300">
                  <Globe className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                </div>
                <ArrowUpRight className="w-6 h-6 text-brand-blue opacity-40 group-hover:opacity-100 transition-all" strokeWidth={3} />
              </div>
              <h3 className="font-anton text-5xl md:text-4xl lg:text-5xl text-brand-blue uppercase leading-[0.9] mt-6">
                Páginas<br/>Web
              </h3>
            </div>

            <div className="order-2 bg-brand-orange border-4 border-black p-6 shadow-[8px_8px_0px_0px_#ffffff] hover:-translate-y-2 transition-all flex flex-col justify-between min-h-[220px] group cursor-default relative">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white border-4 border-black rounded-full text-brand-orange transform group-hover:-rotate-12 transition-transform duration-300">
                  <Cpu className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                </div>
                <ArrowUpRight className="w-6 h-6 text-white opacity-50 group-hover:opacity-100 transition-all" strokeWidth={3} />
              </div>
              <h3 className="font-anton text-5xl md:text-4xl lg:text-5xl text-white uppercase leading-[0.9] mt-6">
                Sistemas<br/>A Medida
              </h3>
            </div>

            <div className="order-4 sm:order-3 bg-brand-orange border-4 border-black p-6 shadow-[8px_8px_0px_0px_#ffffff] hover:-translate-y-2 transition-all flex flex-col justify-between min-h-[220px] group cursor-default relative">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white border-4 border-black rounded-full text-brand-orange transform group-hover:rotate-12 transition-transform duration-300">
                  <Database className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                </div>
                <ArrowUpRight className="w-6 h-6 text-white opacity-50 group-hover:opacity-100 transition-all" strokeWidth={3} />
              </div>
              <h3 className="font-anton text-5xl md:text-4xl lg:text-5xl text-white uppercase leading-[0.9] mt-6">
                Gestión<br/>Inventario
              </h3>
            </div>

            <div className="order-3 sm:order-4 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#2563EB] hover:-translate-y-2 transition-all flex flex-col justify-between min-h-[220px] group cursor-default relative">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-blue border-4 border-black rounded-full text-white transform group-hover:-rotate-12 transition-transform duration-300">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                </div>
                <ArrowUpRight className="w-6 h-6 text-brand-blue opacity-40 group-hover:opacity-100 transition-all" strokeWidth={3} />
              </div>
              <h3 className="font-anton text-5xl md:text-4xl lg:text-5xl text-brand-blue uppercase leading-[0.9] mt-6">
                Soluciones<br/>Digitales
              </h3>
            </div>
          </div>
        </div>

        {/* SECCIÓN GARANTÍA FINAL: INTERACTIVIDAD EXAGERADA */}
        <div className="relative w-full overflow-hidden border-4 md:border-8 border-white bg-brand-blue z-10 group/banner">
          
          {/* Capa 1: Fondo Aura Giratorio (Más rápido y visible en hover) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_10%,#fff_20%,transparent_30%,#fff_50%,transparent_70%,transparent_90%)] opacity-10 group-hover/banner:opacity-20 transition-opacity animate-[spin_15s_linear_infinite] group-hover/banner:animate-[spin_5s_linear_infinite] z-0 pointer-events-none"></div>

          {/* Capa 2: Cuadrícula Tech (Escala y mueve más agresivamente en hover) */}
          <div 
            className="absolute inset-0 opacity-30 transform group-hover/banner:scale-125 group-hover/banner:translate-y-4 transition-transform duration-700 ease-out pointer-events-none z-0" 
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.4) 2px, transparent 2px)', backgroundSize: '50px 50px' }}
          ></div>
          
          {/* Capa 3: Líneas de escaneo parpadeantes (Aparecen en hover) */}
          <div className="absolute inset-0 opacity-0 group-hover/banner:opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.5)_2px,rgba(0,0,0,0.5)_4px)] animate-pulse pointer-events-none z-0"></div>

          {/* Capa 4: Pulso central radial con tinte naranja en hover */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)] group-hover/banner:bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.4),transparent_60%)] transition-colors duration-700 animate-pulse z-0 pointer-events-none"></div>

          <div className="relative z-10 py-8 px-6 md:py-12 md:px-12 flex flex-col gap-6 md:gap-8 w-full items-center">
            
            {/* Contenedor Único y Centrado */}
            <div className="flex flex-col items-center justify-center text-center w-full">
              
              {/* Título: El Beneficio (Aumenta de tamaño ligeramente en hover) */}
              <div className="flex items-center justify-center w-full">
                <h4 className="font-anton text-[2.5rem] leading-[1.1] md:text-7xl lg:text-[6.5rem] text-black uppercase md:leading-[0.85] m-0 transform group-hover/banner:scale-105 transition-transform duration-500">
                  SOLUCIONES EFICIENTES,<br />
                  <span className="text-white">RÁPIDAS Y ESCALABLES.</span>
                </h4>
              </div>

            </div>

            {/* Bloque Inferior: STICKER */}
            <div className="relative w-full transform rotate-1 group-hover/banner:-rotate-1 transition-transform duration-500">
               {/* Sombra del Sticker */}
               <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 border-4 border-black"></div>
               
               {/* Cuerpo del Sticker */}
               <div className="relative bg-white border-4 border-black p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
                 <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-orange border-4 border-black rounded-full flex items-center justify-center flex-shrink-0 shadow-brutal-dark mb-2 md:mb-0 transform group-hover/banner:scale-110 transition-transform">
                    <Zap className="text-black w-7 h-7 md:w-8 md:h-8 fill-current" />
                 </div>
                 
                 <p className="font-mono text-base md:text-xl lg:text-2xl font-black text-black uppercase tracking-tight md:tracking-widest text-center md:text-left m-0 leading-tight flex-1">
                    Automatiza tu negocio y recupera tu tiempo. Digitalizamos tus procesos para que te enfoques en crecer.
                 </p>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}