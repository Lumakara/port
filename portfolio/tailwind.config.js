/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#030412',
        midnight: '#06091f',
        navy: '#161a31',
        indigo: '#1f1e39',
        storm: '#282b4b',
        aqua: '#33c2cc',
        mint: '#57db96',
        royal: '#5c33cc',
        lavender: '#7a57db',
        fuchsia: '#ca2f8c',
        coral: '#ea4884',
        sand: '#d6995c',
        orange: '#cc6033',
        'neo-yellow': '#FBFF48',
        'neo-pink': '#FF70A6',
        'neo-blue': '#3B82F6',
        'neo-green': '#33FF57',
        'neo-purple': '#A855F7',
        'neo-orange': '#FF9F1C',
        'neo-red': '#FF2A2A',
        'neo-white': '#FFFDF5',
        'neo-black': '#121212',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(51, 194, 204, 0.5)',
        'neon-pink': '0 0 20px rgba(234, 72, 132, 0.5)',
        'hard': '4px 4px 0px 0px #000',
        'hard-sm': '2px 2px 0px 0px #000',
        'hard-lg': '8px 8px 0px 0px #000',
        'hard-xl': '12px 12px 0px 0px #000',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'orbit': 'orbit var(--orbit-duration, 20s) linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) rotate(-2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(51, 194, 204, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(51, 194, 204, 0.6)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-radius, 100px)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-radius, 100px)) rotate(-360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
