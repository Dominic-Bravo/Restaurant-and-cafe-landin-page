// tailwind.config.js for color variables and 60/30/10 rule
import { join } from 'path';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, 'app/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        structural: 'var(--color-structural)',
        accent: 'var(--color-accent)',
        cream: '#F7F2EA',
        espresso: '#4B3425',
        olive: '#6B705C',
        terracotta: '#C97B63',
        charcoal: '#2D2D2D',
        gold: '#C6A969',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        body: ['Inter', 'Manrope', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
