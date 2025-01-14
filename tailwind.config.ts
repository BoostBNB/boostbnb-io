import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

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
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#F9A8D4',
          secondary: '#fbd0ed',
          accent: '#081647',
          neutral: '#262626',
          'base-100': '#fdf2f8',
          'base-200': '#fbcfe8',
          'base-300': '#f9a8d4',
        },
      },
    ],
  },
} satisfies Config;
