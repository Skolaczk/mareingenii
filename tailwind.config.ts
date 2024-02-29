import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      serif: ['var(--font-serif)'],
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: '#101722',
        secondary: '#EDE9E2',
      },
      screens: {
        xs: '450px',
      },
      fontSize: {
        '9xl': ['110px', '1'],
      },
    },
  },
} satisfies Config;

export default config;
