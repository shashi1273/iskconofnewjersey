/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F9EFC1',
          DEFAULT: '#DAA520',
          dark: '#B8860B',
          darker: '#8B6508',
        },
        dark: '#121212',
        charcoal: '#1E1E1E',
        elevated: '#2D2D2D',
        muted: '#A0A0A0',
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 8px 24px rgba(0,0,0,0.6), 0 0 15px rgba(218,165,32,0.2)',
      },
    },
  },
  plugins: [],
};
