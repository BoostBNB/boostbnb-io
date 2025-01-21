import tailwindcssMotion from 'tailwindcss-motion';
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssIntersect from 'tailwindcss-intersect';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    daisyui,
    tailwindcssMotion,
    tailwindcssIntersect,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.img-hover-scale': {
          transition: 'transform 0.4s',
          transform: 'scale(1)',
          '&:hover': {
            transform: 'scale(1.005)',
          },
        },
      });
    }),
  ],

  // Tailwind Config
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        sans: ['Funnel Sans', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },

  // DaisyUI Config
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#3888d4',
          secondary: '#86bdf1',
          accent: '#419ff9',
          neutral: '#081647',
          'neutral-content': '#ffffff',
          'base-100': '#f9fbfd',
        },
      },
    ],
  },
} satisfies Config;
