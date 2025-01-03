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
        'light-brown': '#D7D1C3',
        'dark-brown': '#6F5F4A',
        'very-dark-brown': '#171310',
        muted: '#F2F3EE',
      },
    },
  },
  plugins: [],
} satisfies Config
