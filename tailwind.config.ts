import type { Config } from 'tailwindcss';
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
        heading: 'Funnel Sans',
        body: 'Funnel Sans',
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
          accent: '#6981ce',
          neutral: '#262626',
          'base-100': '#fff0fa',
        },
      },
    ],
  },
} satisfies Config;
