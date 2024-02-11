import type { Config } from 'tailwindcss';
import { useTheme } from 'next-themes';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './src/app/globals.css',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        main: 'linear-gradient(rgb(80, 0, 80), rgb(0, 0, 0))',
      },
      colors: {
        'background-start': {
          light: 'rgb(245, 240, 220)', // Light beige
          dark: 'rgb(80, 0, 80)',
        },
        'background-end': {
          light: 'rgb(210, 200, 180)', // Dark beige
          dark: 'rgb(0, 0, 0)',
        },
      },
      height: {
        header: '60px',
      },
      backgroundColor: {
        'header-black': 'black',
        'footer-black': 'black',
        'header-light': 'lightgray',
        'footer-light': 'lightgray',
      },
    },
    plugins: [require('flowbite/plugin')],
  },
};
export default config;
