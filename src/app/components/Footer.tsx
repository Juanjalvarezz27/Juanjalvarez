"use client";

import { MessageCircle, Share2 } from "lucide-react";
import Link from "next/link"; // Importación necesaria para la navegación
import { useLanguage } from "../../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-[#0d0d0d] flex flex-col font-space antialiased selection:bg-brand-orange selection:text-black z-20 overflow-hidden">
      
      {/* Fondo texturizado: Cuadrícula con Fade */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      ></div>

      <div className="relative z-10 w-full max-w-[92%] md:max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col items-center justify-between gap-16 md:gap-24">
        
        {/* =============================================================================
            CTA PRINCIPAL
            ============================================================================= */}
        <div className="flex flex-col items-center justify-center text-center gap-8 w-full">
          <h2 
            className="font-anton text-6xl md:text-8xl lg:text-[8rem] text-white uppercase leading-[0.9] md:leading-[0.85] tracking-tight m-0"
            dangerouslySetInnerHTML={{ __html: t.footer.title + `<span class="text-brand-orange italic">${t.footer.subtitle}</span>` }}
          />

          <p className="font-mono text-base md:text-xl text-gray-300 uppercase tracking-widest max-w-2xl">
            {t.footer.desc}
          </p>

          {/* Redirección a la ruta de contacto */}
          <Link href="/home/contacto">
            <button className="mt-4 bg-brand-blue border-4 border-white text-white font-anton text-3xl md:text-5xl px-10 py-5 uppercase transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#ffffff] transition-all duration-300">
              {t.footer.cta}
            </button>
          </Link>
        </div>

        {/* =============================================================================
            INFORMACIÓN OPERATIVA Y REDES
            ============================================================================= */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
            
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="font-anton text-3xl md:text-4xl text-white uppercase tracking-wider mb-2">
                Juan Álvarez
              </span>
              <span className="font-mono text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest">
                {t.footer.location_desc}<br/>
                <span className="text-brand-orange">{t.footer.location}</span>
              </span>
            </div>

            {/* Botones Sociales con Texto */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full sm:w-auto max-w-4xl mx-auto">
              
              {/* Botón Instagram */}
              <a 
                href="https://www.instagram.com/juanjalvarezz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white border-4 border-black transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#fb923c] transition-all flex items-center justify-center gap-3 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:scale-110 transition-transform">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span className="font-anton text-xl md:text-2xl text-black uppercase tracking-wide pt-1">{t.footer.social.instagram}</span>
              </a>

              {/* Botón WhatsApp */}
              <a 
                href="https://wa.me/584129164371" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-brand-orange border-4 border-black transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                <span className="font-anton text-xl md:text-2xl text-black uppercase tracking-wide pt-1">{t.footer.social.whatsapp}</span>
              </a>

              {/* Botón LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/juan-jose-sarmiento-alvarez-b41734375" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#0A66C2] border-4 border-black transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all flex items-center justify-center gap-3 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span className="font-anton text-xl md:text-2xl text-white uppercase tracking-wide pt-1">{t.footer.social.linkedin}</span>
              </a>

              {/* Botón Compartir */}
              <button 
                onClick={async () => {
                  try {
                    await navigator.share({
                      title: 'Juan Álvarez - Desarrollo y Sistemas',
                      url: 'https://juanjalvarezz.netlify.app'
                    });
                  } catch (err) {
                    navigator.clipboard.writeText('https://juanjalvarezz.netlify.app');
                    alert('¡Enlace copiado al portapapeles!');
                  }
                }}
                className="px-6 py-4 bg-brand-blue border-4 border-black transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all flex items-center justify-center gap-3 group"
              >
                <Share2 className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                <span className="font-anton text-xl md:text-2xl text-white uppercase tracking-wide pt-1">{t.footer.social.share}</span>
              </button>

            </div>
        </div>

      </div>
    </footer>
  );
}