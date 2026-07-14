'use client';

import { Database, Globe, LayoutDashboard, Handshake } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function Benefits() {
  const { t } = useLanguage();
  const benefits = [
    {
      number: "01",
      icon: <Database className="w-6 h-6 md:w-8 md:h-8 text-black" strokeWidth={2.5} />,
      title: t.benefits.items[0].title,
      desc: t.benefits.items[0].desc,
      tags: t.benefits.items[0].tags,
      borderHover: "hover:border-brand-orange",
      shadowNormal: "shadow-[6px_6px_0px_#222]",
      shadowHover: "hover:shadow-[8px_8px_0px_#FF6B00]",
      iconBg: "bg-brand-orange text-black rounded-2xl",
      tagStyle: "bg-brand-orange/10 text-brand-orange border-brand-orange/30 rounded-full group-hover:bg-brand-orange group-hover:text-black group-hover:border-brand-orange",
      numberColor: "group-hover:text-brand-orange/20",
      bottomLine: "bg-brand-orange"
    },
    {
      number: "02",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-black" strokeWidth={2.5} />,
      title: t.benefits.items[1].title,
      desc: t.benefits.items[1].desc,
      tags: t.benefits.items[1].tags,
      borderHover: "hover:border-brand-blue",
      shadowNormal: "shadow-[6px_6px_0px_#222]",
      shadowHover: "hover:shadow-[8px_8px_0px_#2563EB]",
      iconBg: "bg-brand-blue text-black rounded-2xl",
      tagStyle: "bg-brand-blue/10 text-brand-blue border-brand-blue/30 rounded-full group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue",
      numberColor: "group-hover:text-brand-blue/20",
      bottomLine: "bg-brand-blue"
    },
    {
      number: "03",
      icon: <LayoutDashboard className="w-6 h-6 md:w-8 md:h-8 text-black" strokeWidth={2.5} />,
      title: t.benefits.items[2].title,
      desc: t.benefits.items[2].desc,
      tags: t.benefits.items[2].tags,
      borderHover: "hover:border-white",
      shadowNormal: "shadow-[6px_6px_0px_#222]",
      shadowHover: "hover:shadow-[8px_8px_0px_#FFFFFF]",
      iconBg: "bg-white text-black rounded-2xl",
      tagStyle: "bg-white/5 text-white border-white/20 rounded-full group-hover:bg-white group-hover:text-black group-hover:border-white",
      numberColor: "group-hover:text-white/20",
      bottomLine: "bg-white"
    },
    {
      number: "04",
      icon: <Handshake className="w-6 h-6 md:w-8 md:h-8 text-black" strokeWidth={2.5} />,
      title: t.benefits.items[3].title,
      desc: t.benefits.items[3].desc,
      tags: t.benefits.items[3].tags,
      borderHover: "hover:border-brand-blue",
      shadowNormal: "shadow-[6px_6px_0px_#222]",
      shadowHover: "hover:shadow-[8px_8px_0px_#2563EB]",
      iconBg: "bg-brand-blue text-black rounded-2xl",
      tagStyle: "bg-brand-blue/10 text-brand-blue border-brand-blue/30 rounded-full group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue",
      numberColor: "group-hover:text-brand-blue/20",
      bottomLine: "bg-brand-blue"
    }
  ];

  return (
    <section className="relative bg-[#0a0a0a] font-space border-b-8 md:border-b-16 border-black overflow-hidden flex flex-col items-center">
      
      {/* FONDO PREMIUM: Cuadrícula Tech y Destellos (Flares) */}
      <div 
        className="absolute inset-0 opacity-20 z-0 pointer-events-none"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px)
          `, 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Destellos principales (Grandes y flotantes) */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-brand-blue/20 blur-[140px] rounded-full pointer-events-none z-0 animate-float-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/20 blur-[120px] rounded-full pointer-events-none z-0 animate-float-medium"></div>

      {/* Destellos secundarios (Concentrados y parpadeantes para efecto "chispa") */}
      <div className="absolute top-[20%] left-[15%] w-32 h-32 bg-brand-blue/40 blur-[50px] rounded-full pointer-events-none z-0 animate-pulse"></div>
      <div className="absolute top-[50%] right-[25%] w-48 h-48 bg-white/10 blur-[60px] rounded-full pointer-events-none z-0 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[15%] left-[40%] w-40 h-40 bg-brand-orange/30 blur-[50px] rounded-full pointer-events-none z-0 animate-pulse" style={{ animationDuration: '3s' }}></div>

      {/* Ticker de Estadísticas (Marquee Animado) */}
      <div className="w-full bg-brand-orange border-b-4 md:border-b-8 border-black flex overflow-hidden py-3 md:py-4 relative z-20">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-16 font-anton text-2xl md:text-4xl uppercase tracking-wider text-black">
          {t.benefits.ticker.map((item, i) => <span key={i}>{item}</span>)}
          {/* Duplicado para efecto infinito */}
          {t.benefits.ticker.map((item, i) => <span key={i + 'dup'} aria-hidden="true">{item}</span>)}
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="w-full max-w-[92%] md:max-w-7xl mx-auto py-20 md:py-32 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-12 items-center lg:items-start">
        
        {/* LADO IZQUIERDO: Título Impactante */}
        <div className="lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left lg:sticky lg:top-32">
          {/* Badge "Socio Tecnológico" Llamativo */}
          <div className="relative inline-flex mb-8 group cursor-default">
            {/* Efecto de brillo de fondo (Glow) */}
            <div className="absolute inset-0 bg-brand-orange blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Contenedor principal estilo brutalista: fondo sólido y sombra dura al hacer hover */}
            <div className="relative bg-brand-orange text-black font-mono text-xs md:text-sm font-black uppercase tracking-[0.2em] px-6 py-3 flex items-center gap-3 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 hover:shadow-[6px_6px_0px_rgba(255,255,255,0.1)]">
              {/* Punto parpadeante "Activo" */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
              </span>
              <span>{t.benefits.badge}</span>
            </div>
          </div>
          
          <h2 
            className="font-anton text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] text-white uppercase leading-[0.95] tracking-tight mb-8"
            dangerouslySetInnerHTML={{ __html: t.benefits.title + `<span class="text-gray-400">${t.benefits.subtitle}</span>` }}
          />
          
          <p className="font-space text-xl md:text-2xl text-gray-300 leading-snug mb-10 max-w-xl">
            {t.benefits.desc} <span className="text-white font-bold underline decoration-brand-orange decoration-4 underline-offset-4">{t.benefits.desc_highlight}</span>
          </p>

          {/* Sello de Garantía Brutalista */}
          <div className="relative inline-flex group">
            <div className="absolute inset-0 bg-brand-blue translate-x-2 translate-y-2 border-2 border-black"></div>
            <div className="relative bg-black border-2 border-brand-blue p-6 flex items-center gap-4 md:gap-5">
              <span className="font-anton text-5xl text-white leading-none">100%</span>
              <div className="flex flex-col">
                <span className="font-mono text-xs md:text-sm font-bold text-brand-orange uppercase tracking-widest">{t.benefits.guarantee.title}</span>
                <span className="font-anton text-xl md:text-2xl text-white uppercase mt-1 leading-tight">{t.benefits.guarantee.subtitle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: Grid de Beneficios Premium */}
        <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full pt-4 md:pt-0">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group relative w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-gray-700 rounded-3xl transition-all duration-300 p-6 md:p-8 flex flex-col hover:-translate-y-2 hover:-translate-x-1 ${benefit.borderHover} ${benefit.shadowNormal} ${benefit.shadowHover}`}
            >
              {/* Contenedor con overflow hidden para fondos y bordes */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                {/* Overlay de ruido/patrón tecnológico al hacer hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                {/* Número de fondo animado */}
                <div className={`absolute -bottom-4 -right-4 font-anton text-[7.5rem] text-white/5 transition-all duration-500 ${benefit.numberColor} group-hover:scale-110 group-hover:-translate-y-4 group-hover:-rotate-6`}>
                  {benefit.number}
                </div>
                
                {/* Borde inferior interactivo */}
                <div className={`absolute bottom-0 left-0 h-2 w-0 group-hover:w-full transition-all duration-500 ease-out ${benefit.bottomLine}`}></div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Cabecera Tarjeta: Icono + Título alineados */}
                <div className="flex flex-col xl:flex-row xl:items-center gap-4 mb-6">
                  {/* El icono sobresale hacia arriba y a la izquierda para romper la forma rectangular */}
                  <div className={`p-3 md:p-4 ${benefit.iconBg} shadow-[4px_4px_0px_#000] inline-flex self-start -mt-3 -ml-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:shadow-[6px_6px_0px_#000]`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-anton text-2xl text-white uppercase leading-[1.1] tracking-wide mt-2 xl:mt-0 transition-transform duration-300 group-hover:translate-x-2">
                    {benefit.title}
                  </h3>
                </div>

                {/* Textos y Tags */}
                <div className="flex flex-col gap-5 mt-auto">
                  <p className="font-space text-gray-400 text-base leading-snug font-medium transition-colors duration-300 group-hover:text-gray-200">
                    {benefit.desc}
                  </p>
                  
                  {/* Visual Tags como "píldoras" redondeadas */}
                  <div className="flex flex-wrap gap-2">
                    {benefit.tags.map((tag, i) => (
                      <span key={i} className={`font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 border transition-colors duration-300 ${benefit.tagStyle}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
