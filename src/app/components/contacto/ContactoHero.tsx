'use client';

import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function ContactoHero() {
  const { t } = useLanguage();
  const contactMethods = [
    {
      name: t.contacto_hero.items.whatsapp.name,
      description: t.contacto_hero.items.whatsapp.desc,
      value: "+58 412-9164371",
      href: "https://wa.me/584129164371",
      icon: <MessageCircle size={32} strokeWidth={2.5} />,
      color: "bg-brand-orange",
      tag: t.contacto_hero.items.whatsapp.tag
    },
    {
      name: t.contacto_hero.items.email.name,
      description: t.contacto_hero.items.email.desc,
      value: "jjsalvarezz@gmail.com",
      href: "mailto:jjsalvarezz@gmail.com",
      icon: <Mail size={32} strokeWidth={2.5} />,
      color: "bg-white",
      tag: t.contacto_hero.items.email.tag
    },
    {
      name: t.contacto_hero.items.instagram.name,
      description: t.contacto_hero.items.instagram.desc,
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
      tag: t.contacto_hero.items.instagram.tag
    },
    {
      name: t.contacto_hero.items.linkedin.name,
      description: t.contacto_hero.items.linkedin.desc,
      value: "Ir al perfil",
      href: "https://www.linkedin.com/in/juan-jose-sarmiento-alvarez-b41734375",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      color: "bg-[#0A66C2]",
      tag: t.contacto_hero.items.linkedin.tag
    }
  ];

  return (
    <section className="relative min-h-screen pt-32 md:pt-40 pb-20 bg-brand-blue font-space overflow-hidden">
      
      {/* Fondo de Puntos y Accesorios Brutalistas */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
           
      {/* Astérix gigante rotando en el fondo */}
      <div className="absolute -top-32 -left-32 text-[50rem] text-black opacity-10 pointer-events-none animate-[spin_40s_linear_infinite] leading-none select-none font-anton">
        *
      </div>
      
      <div className="absolute top-[45%] left-[-10%] w-[120%] h-16 md:h-20 bg-brand-orange border-y-8 border-black transform -rotate-3 z-0 flex items-center overflow-hidden shadow-[0_10px_0_rgba(0,0,0,0.5)]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 font-anton text-3xl md:text-5xl text-black uppercase tracking-widest">
          {t.contacto_hero.ticker.map((item, i) => <span key={i}>{item}</span>)}
          {t.contacto_hero.ticker.map((item, i) => <span key={i + 'dup'} aria-hidden="true">{item}</span>)}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[94%] mx-auto px-4 mb-20 md:mb-32">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center lg:items-end">
          <div className="lg:col-span-7 w-full text-center lg:text-left">
            <h1 
              className="font-anton text-[18vw] md:text-[9rem] lg:text-[11rem] text-white uppercase leading-[0.8] tracking-tighter drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] md:drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] m-0"
              dangerouslySetInnerHTML={{ __html: t.contacto_hero.title + `<span class="text-brand-orange italic">${t.contacto_hero.title_italic}</span>` }}
            />
          </div>
          <div className="lg:col-span-5 w-full lg:pb-4 flex flex-col items-center lg:items-end text-center lg:text-right">
            <p className="font-anton text-3xl md:text-5xl lg:text-6xl text-white uppercase leading-[1.1] tracking-tight m-0 max-w-md lg:max-w-none">
              {t.contacto_hero.desc_1}<span className="inline-block bg-brand-orange text-black px-4 py-1 transform -rotate-2 shadow-[4px_4px_0px_0px_#000] mt-2 mb-2 hover:rotate-2 transition-transform cursor-default">{t.contacto_hero.desc_tag}</span>
              <span dangerouslySetInnerHTML={{ __html: t.contacto_hero.desc_2 }} />
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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

        <div className="mt-24 border-t-8 border-black pt-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-none m-0">
              <span dangerouslySetInnerHTML={{ __html: t.contacto_hero.footer_title }} />
              <span className="inline-block bg-brand-orange text-black px-6 py-2 transform -rotate-1 shadow-[6px_6px_0px_0px_#000] mt-4">
                {t.contacto_hero.footer_tag}
              </span>
            </p>
          </div>
          <div className="bg-white text-black font-anton text-xl px-10 py-4 border-4 border-black uppercase tracking-widest shadow-[8px_8px_0px_0px_#000]">
            {t.contacto_hero.footer_name}
          </div>
        </div>
      </div>
    </section>
  );
}