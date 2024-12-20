import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: '#A2937C',
        'dark-brown': '#6F5F4A',
        muted: '#F2F3EE',
      },
      keyframes: {
        'zoom-out': {
          '0%': { transform: 'scale(1.25)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'zoom-out': 'zoom-out 1s 300ms ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config
