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
        myTheme: {
          primary: '#3888d4',
          secondary: '#86bdf1',
          accent: '#419ff9',
          neutral: '#132639',
          'base-100': '#f9fbfd',
        },
      },
    ],
  },
} satisfies Config;
