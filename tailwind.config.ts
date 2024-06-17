import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        ternary: 'rgb(var(--ternary) / <alpha-value>)',
        bodyText: 'rgb(var(--body-text) / <alpha-value>)',
        bodyText2: 'rgb(var(--body-text-2) / <alpha-value>)',
        footerBg: 'rgb(var(--footer-bg) / <alpha-value>)',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
