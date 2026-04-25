import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#171717',
        'brand-orange': '#FF6B00',
        'brand-blue': '#2563EB',
      },
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderWidth: { '16': '16px' },
      boxShadow: { 'brutal-black-lg': '12px 12px 0px 0px rgba(0,0,0,1)' },
      
      // REGISTRO LIMPIO DE ANIMACIONES
      keyframes: {
        movingDots: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '24px 24px' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(15px, -15px) rotate(5deg)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-20px, 10px) rotate(-10deg)' },
        }
      },
      animation: {
        'moving-dots': 'movingDots 4s linear infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'float-medium': 'floatMedium 8s ease-in-out infinite',
        'float-rotate': 'spin 20s linear infinite', // Usamos 'spin' que ya viene en Tailwind
      }
    },
  },
  plugins: [],
};
export default config;