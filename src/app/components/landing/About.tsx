import { Globe, Cpu, Database, Rocket } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-screen bg-brand-dark flex flex-col justify-center px-4 md:px-8 py-24 border-b-16 border-black overflow-hidden font-space antialiased selection:bg-brand-orange selection:text-black group">
      
      {/* Textura de fondo (Modo Oscuro) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="relative z-10 w-full max-w-[92%] md:max-w-7xl mx-auto">
        
        {/* =============================================================================
            ENCABEZADO
            ============================================================================= */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-6 md:gap-4 mb-16 md:mb-20 border-b-8 border-white pb-6">
          <h2 className="font-anton text-5xl md:text-7xl lg:text-[6.5rem] text-white uppercase leading-[0.85] tracking-tight relative z-10">
            Webs & Sistemas.<br />
            <span className="text-brand-orange italic">Soluciones Reales.</span>
          </h2>

          <div className="w-28 h-28 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 rounded-full border-4 md:border-8 border-white overflow-hidden shadow-brutal-orange relative bg-gray-800 transform -rotate-3 hover:rotate-0 transition-transform z-10 self-end md:self-auto">
            <img 
              src="https://i.pravatar.cc/300?img=11" 
              alt="Foto de Juan Álvarez" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* =============================================================================
            CONTENIDO (Ajustes de Color y Consistencia)
            ============================================================================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* COLUMNA IZQUIERDA: Manifiesto */}
          <div className="lg:w-5/12 flex flex-col justify-center gap-10 md:gap-12">
            <p className="font-space text-2xl md:text-4xl text-gray-300 font-bold leading-[1.1] tracking-tight">
              Soy <span className="text-black font-black bg-brand-orange px-3 py-1 uppercase inline-block -rotate-2 transform hover:rotate-0 transition-transform">Juan Álvarez</span>. Mi objetivo es simple: desarrollar herramientas que te den el <span className="text-white underline decoration-brand-blue decoration-4 md:decoration-8 underline-offset-4">control absoluto</span> de tu negocio.
            </p>

            {/* Tagline Rediseñado: Más grande y con sombra blanca */}
            <div className="relative inline-block mt-4 self-start group cursor-default">
               {/* Sombra blanca desfasada sugerida */}
               <div className="absolute inset-0 bg-white translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 border-4 border-black"></div>
               
               <div className="relative bg-brand-blue border-4 border-black px-8 py-8 md:px-10 md:py-10 flex flex-col transform hover:-translate-y-1 transition-transform">
                  <span className="font-anton text-4xl md:text-5xl lg:text-7xl text-white uppercase leading-[0.85]">Tú Diriges.</span>
                  <span className="font-anton text-4xl md:text-5xl lg:text-7xl text-black uppercase leading-[0.85] mt-2">Yo Programo.</span>
               </div>
            </div>
          </div>

          {/* =============================================================================
              COLUMNA DERECHA: Grid 2x2 (Colores y Círculos Corregidos)
              ============================================================================= */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            
            {/* Box 1: Páginas Web (Blanco y Azul) */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#2563EB] hover:-translate-y-2 transition-all flex flex-col justify-between min-h-[220px] group cursor-default">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-blue border-4 border-black rounded-full text-white transform group-hover:rotate-12 transition-transform duration-300">
                  <Globe className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                </div>
                <span className="font-mono text-xl font-black text-gray-300">/01</span>
              </div>
              <h3 className="font-anton text-4xl lg:text-4xl xl:text-5xl text-brand-blue uppercase leading-[0.9] mt-6">
                Páginas<br/>Web
              </h3>
            </div>

            {/* Box 2: Sistemas a Medida (Naranja, Texto Blanco, Círculo Blanco) */}
            <div className="bg-brand-orange border-4 border-black p-6 shadow-[8px_8px_0px_0px_#ffffff] hover:-translate-y-2 transition-all flex flex-col justify-between min-h-[220px] group cursor-default">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white border-4 border-black rounded-full text-brand-orange transform group-hover:-rotate-12 transition-transform duration-300">
                  <Cpu className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                </div>
                <span className="font-mono text-xl font-black text-black opacity-30">/02</span>
              </div>
              <h3 className="font-anton text-4xl lg:text-4xl xl:text-5xl text-white uppercase leading-[0.9] mt-6">
                Sistemas<br/>A Medida
              </h3>
            </div>

            {/* Box 3: Gestión Inventario (Naranja, Texto Blanco, Círculo Blanco) */}
            <div className="bg-brand-orange border-4 border-black p-6 shadow-[8px_8px_0px_0px_#ffffff] hover:-translate-y-2 transition-all flex flex-col justify-between min-h-[220px] group cursor-default">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white border-4 border-black rounded-full text-brand-orange transform group-hover:rotate-12 transition-transform duration-300">
                  <Database className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                </div>
                <span className="font-mono text-xl font-black text-black opacity-30">/03</span>
              </div>
              <h3 className="font-anton text-4xl lg:text-4xl xl:text-5xl text-white uppercase leading-[0.9] mt-6">
                Gestión<br/>Inventario
              </h3>
            </div>

            {/* Box 4: Soluciones Digitales (Blanco y Azul) */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#2563EB] hover:-translate-y-2 transition-all flex flex-col justify-between min-h-[220px] group cursor-default">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-blue border-4 border-black rounded-full text-white transform group-hover:-rotate-12 transition-transform duration-300">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                </div>
                <span className="font-mono text-xl font-black text-gray-300">/04</span>
              </div>
              <h3 className="font-anton text-3xl md:text-4xl xl:text-[2.75rem] text-brand-blue uppercase leading-[0.9] mt-6">
                Soluciones<br/>Digitales
              </h3>
            </div>

          </div>
        </div>

        {/* =============================================================================
            TICKET GARANTÍA (Texto aclarado)
            ============================================================================= */}
        <div className="mt-20 relative w-full lg:w-4/5 mx-auto group">
          <div className="absolute inset-0 bg-brand-orange translate-x-4 translate-y-4 border-4 border-black"></div>
          
          <div className="relative bg-white border-4 border-black p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 transition-transform transform group-hover:-translate-y-1">
            <div className="flex-shrink-0 bg-black text-white font-anton text-4xl md:text-5xl uppercase px-8 py-6 text-center transform -rotate-3 shadow-[4px_4px_0px_0px_#2563EB]">
              Tu Negocio<br/>
              <span className="text-brand-orange">24/7</span>
            </div>
            
            <div className="flex flex-col justify-center text-center md:text-left pt-2">
              <p className="font-space text-xl md:text-3xl text-black font-black uppercase leading-tight mb-4">
                Soluciones eficientes, rápidas y escalables.
              </p>
              <div className="border-t-4 border-black pt-4">
                <p className="font-mono text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest">
                  Olvídate del papel y el Excel. Digitaliza tu operativa con soporte técnico directo.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}