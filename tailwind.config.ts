import type { Config } from 'tailwindcss';
import daisyui from 'daisyui'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#d496c1",
          "secondary": "#fbd0ed",
          "accent": "#6981ce",
          "neutral": "#262626",
          "base-100": "#ffffff",
        },
      },
    ],
  },
} satisfies Config;
