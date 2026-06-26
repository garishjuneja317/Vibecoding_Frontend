import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oceanic:   "#172B36",  // Background / Primary Dark
        nocturnal: "#114C5A",  // Surface / Highlight Dark
        forsythia: "#FFC801",  // Primary Accent 1 (gold)
        saffron:   "#FF9932",  // Primary Accent 2 (orange)
        arctic:    "#F1F6F4",  // Light base text
        mystic:    "#D9E8E2",  // Mystic Mint secondary text
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
        '900': '900ms',
      },
      boxShadow: {
        'glow-gold':   '0 0 30px rgba(255,200,1,0.4)',
        'glow-gold-lg':'0 0 60px rgba(255,200,1,0.5)',
        'glow-saffron':'0 0 30px rgba(255,153,50,0.4)',
        'glow-arctic': '0 0 25px rgba(241,246,244,0.3)',
        'glass':       '0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'gradient-gold':  'linear-gradient(135deg, #FF9932, #FFC801)',
        'gradient-nocturnal': 'linear-gradient(180deg, #114C5A, #172B36)',
      },
      animation: {
        'blob':         'blob 16s infinite ease-in-out',
        'orb':          'orbPulse 8s ease-in-out infinite',
        'float':        'floatY 5s ease-in-out infinite',
        'float-slow':   'floatYSlow 8s ease-in-out infinite',
        'pulse-ring':   'pulseRing 2.8s cubic-bezier(0.455,0.03,0.515,0.955) infinite',
        'rotate-slow':  'rotateSlowly 25s linear infinite',
        'shimmer':      'shimmer 5s linear infinite',
        'fade-in':      'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        blob: {
          '0%':   { transform: 'translate(0,0) scale(1) rotate(0deg)' },
          '25%':  { transform: 'translate(70px,-60px) scale(1.15) rotate(45deg)' },
          '50%':  { transform: 'translate(-50px,40px) scale(0.88) rotate(90deg)' },
          '75%':  { transform: 'translate(40px,25px) scale(1.1) rotate(135deg)' },
          '100%': { transform: 'translate(0,0) scale(1) rotate(360deg)' },
        },
        orbPulse: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%':      { opacity: '0.45', transform: 'scale(1.5)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '33%':      { transform: 'translateY(-10px)' },
          '66%':      { transform: 'translateY(-6px)' },
        },
        floatYSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        pulseRing: {
          '0%':   { boxShadow: '0 0 0 0 rgba(255,200,1,0.5)' },
          '70%':  { boxShadow: '0 0 0 14px rgba(255,200,1,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255,200,1,0)' },
        },
        rotateSlowly: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-250% center' },
          '100%': { backgroundPosition: '250% center' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

