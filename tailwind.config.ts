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
      boxShadow: {
        'brutal-black': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-blue': '8px 8px 0px 0px #2563EB',
        'brutal-orange': '8px 8px 0px 0px #FF6B00',
        'brutal-black-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
      },
      borderWidth: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
      }
    },
  },
  plugins: [],
};

export default config;