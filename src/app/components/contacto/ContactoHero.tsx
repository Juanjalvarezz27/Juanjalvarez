'use client';

import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";

export default function ContactoHero() {
  const contactMethods = [
    {
      name: "WhatsApp",
      description: "Chat directo para asesoría inmediata y dudas rápidas.",
      value: "+58 412-9164371",
      href: "https://wa.me/584129164371",
      icon: <MessageCircle size={32} strokeWidth={2.5} />,
      color: "bg-brand-orange",
      tag: "INMEDIATO"
    },
    {
      name: "Email",
      description: "Envía los detalles de tu proyecto para una propuesta formal.",
      value: "jjsalvarezz@gmail.com",
      href: "mailto:jjsalvarezz@gmail.com",
      icon: <Mail size={32} strokeWidth={2.5} />,
      color: "bg-white",
      tag: "PROYECTOS"
    },
    {
      name: "Instagram",
      description: "Sígueme para ver procesos de desarrollo y contacto por DM.",
      value: "@juanjalvarezz",
      href: "https://www.instagram.com/juanjalvarezz/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
      color: "bg-brand-orange",
      tag: "SOCIAL"
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 md:pt-40 pb-20 bg-brand-blue font-space overflow-hidden">
      
      {/* Fondo de Puntos */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

      <div className="relative z-10 w-full max-w-[94%] mx-auto px-4 mb-20 md:mb-32">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center lg:items-end">
          <div className="lg:col-span-7 w-full text-center lg:text-left">
            <h1 className="font-anton text-[18vw] md:text-[9rem] lg:text-[11rem] text-white uppercase leading-[0.8] tracking-tighter drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] md:drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] m-0">
              TU SOCIO <br /> 
              <span className="text-brand-orange italic">TECNOLÓGICO.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 w-full lg:pb-4 flex flex-col items-center lg:items-end text-center lg:text-right">
            <p className="font-anton text-3xl md:text-5xl lg:text-6xl text-white uppercase leading-[1.1] tracking-tight m-0 max-w-md lg:max-w-none">
              Diseño <span className="inline-block bg-brand-orange text-black px-4 py-1 transform -rotate-1 shadow-[4px_4px_0px_0px_#000] mt-2 mb-2">Sistemas Reales</span> <br />
              para negocios que <br />
              no se detienen.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {contactMethods.map((method) => (
            <a key={method.name} href={method.href} target="_blank" rel="noopener noreferrer" className="group relative w-full flex">
              {/* Sombra Naranja */}
              <div className="absolute inset-0 bg-brand-orange translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
              
              <div className="relative bg-white border-4 border-black p-8 w-full flex flex-col transition-transform group-active:translate-x-1 group-active:translate-y-1">
                
                {/* Header Card */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 ${method.color} border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000]`}>
                    <div className="text-black">{method.icon}</div>
                  </div>
                  <div className="bg-black text-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest">
                    {method.tag}
                  </div>
                </div>

                <h3 className="font-anton text-4xl uppercase text-black mb-4 tracking-tight">{method.name}</h3>

                {/* Texto Conciso */}
                <p className="font-space text-gray-700 text-lg leading-tight mb-8">
                  {method.description}
                </p>

                {/* Info Final */}
                <div className="mt-auto pt-6 border-t-4 border-black flex items-center justify-between">
                  <span className="font-mono text-sm font-black text-black uppercase tracking-tighter">
                    {method.value}
                  </span>
                  <div className="bg-black text-white p-2 border-2 border-black group-hover:bg-brand-blue transition-colors">
                    <ArrowUpRight size={20} strokeWidth={3} />
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

        {/* Footer Rediseñado con el estilo de resaltado */}
        <div className="mt-24 border-t-8 border-black pt-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-none m-0">
              SOLUCIÓN INMEDIATA <br/> 
              <span className="inline-block bg-brand-orange text-black px-6 py-2 transform -rotate-1 shadow-[6px_6px_0px_0px_#000] mt-4">
                A UN SOLO CLICK.
              </span>
            </p>
          </div>
          <div className="bg-white text-black font-anton text-xl px-10 py-4 border-4 border-black uppercase tracking-widest shadow-[8px_8px_0px_0px_#000]">
            JUAN ALVAREZ
          </div>
        </div>
      </div>
    </section>
  );
}