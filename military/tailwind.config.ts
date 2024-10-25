import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        din: ['din-2014', 'sans-serif'], // Use the correct font-family name from Adobe Fonts
      },
    },
  },
  plugins: [],
};
export default config;
