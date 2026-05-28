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
        'bg-alt': 'var(--color-bg-alt)',
        'bg-soft': 'var(--color-bg-soft)',
        structural: 'var(--color-structural)',
        walnut: 'var(--color-walnut)',
        olive: 'var(--color-olive)',
        charcoal: 'var(--color-charcoal)',
        terracotta: 'var(--color-terracotta)',
        gold: 'var(--color-gold)',
        amber: 'var(--color-amber)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Cormorant Garamond', 'Bodoni Moda', 'serif'],
        body: ['Inter', 'Manrope', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
