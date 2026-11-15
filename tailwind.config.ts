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
        // Kinetic Editorial Tokens
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)',
        },
        'ink-soft': 'var(--ink-soft)',
        muted: 'var(--muted)',
        'muted-strong': 'var(--muted-strong)',
        accent: {
          DEFAULT: 'var(--accent)',
          deep: 'var(--accent-deep)',
        },
        'accent-deep': 'var(--accent-deep)',
        ice: 'var(--ice)',
        line: {
          DEFAULT: 'var(--line)',
          dark: 'var(--line-dark)',
        },
        'line-dark': 'var(--line-dark)',

        // Paleta NVision / Swiss Neo-Brutalism (Legacy)
        'raven': '#08080A',
        'raven-card': '#111115',
        'powder': '#BCE0FD',
        'powder-soft': '#D9EEFF',
        'poppy': '#E60012',
        'poppy-intense': '#FF1A1A',
        'poppy-deep': '#7A0009',
        'muted-ice': '#94A3B8',
        'brand-dark': '#08080A',
        'brand-orange': '#E60012',
        'brand-blue': '#BCE0FD',
      },
      fontFamily: {
        display: ['var(--font-inter-tight)', 'sans-serif'],
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        helvetica: ['var(--font-inter)', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        anton: ['var(--font-anton)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        section: '40px',
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5.5vw, 5.25rem)', { lineHeight: '0.92', letterSpacing: '-0.045em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '0.94', letterSpacing: '-0.045em' }],
        'display-md': ['clamp(2rem, 4vw, 3.75rem)', { lineHeight: '0.96', letterSpacing: '-0.04em' }],
        'body-lg': ['clamp(1.05rem, 1.4vw, 1.25rem)', { lineHeight: '1.55' }],
        'body': ['1rem', { lineHeight: '1.55' }],
        'label': ['0.75rem', { letterSpacing: '0.08em', lineHeight: '1' }],
      },
      borderWidth: { '16': '16px' },
      boxShadow: { 
        'brutal-black-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
        'glow-poppy': '0px 0px 40px -5px rgba(230,0,18,0.4)',
        'glow-powder': '0px 0px 30px -5px rgba(188,224,253,0.3)',
      },
      
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
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        meshFloat1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.15)' },
        },
        meshFloat2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-35px, 35px) scale(0.9)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        motionGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        driftEstela: {
          '0%, 100%': { transform: 'translateX(-3%) rotate(-6deg)' },
          '50%': { transform: 'translateX(3%) rotate(-6deg)' },
        },
        cardFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(3deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' },
        }
      },
      animation: {
        'moving-dots': 'movingDots 4s linear infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'float-medium': 'floatMedium 8s ease-in-out infinite',
        'float-rotate': 'spin 20s linear infinite',
        'marquee': 'marquee 15s linear infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'mesh-float-1': 'meshFloat1 12s ease-in-out infinite',
        'mesh-float-2': 'meshFloat2 15s ease-in-out infinite',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'motion-gradient': 'motionGradient 8s ease-in-out infinite alternate',
        'drift-estela': 'driftEstela 12s ease-in-out infinite alternate',
        'card-float': 'cardFloat 6s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
};
export default config;