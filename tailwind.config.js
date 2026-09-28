/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#F9F6F0',
        'sand': '#E5DCC5',
        'charcoal': '#2A2A2A',
        'olive': '#4A5340',
        'terracotta': '#C15C3D',
        'spice': '#A63D31',
        'mustard': '#D4A35C',
        'warm-brown': '#7C5A41',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'zoom-slow': 'zoomSlow 20s ease-out forwards',
      },
      keyframes: {
        zoomSlow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}