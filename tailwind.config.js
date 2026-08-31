/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        maroon: {
          50: '#fbf3f2',
          100: '#f7e6e3',
          200: '#eecdc6',
          300: '#e0a99d',
          400: '#cc7a68',
          500: '#b8564140',
          600: '#a23f30',
          700: '#843024',
          800: '#6b2a20',
          900: '#58261f',
          950: '#32100c',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f6edd3',
          200: '#ecd9a3',
          300: '#e0bf6b',
          400: '#d4a23c',
          500: '#c0882a',
          600: '#a36b21',
          700: '#824e1e',
          800: '#6c3f1e',
          900: '#5c351d',
          950: '#341b0c',
        },
        sand: {
          50: '#faf7f2',
          100: '#f3ece1',
          200: '#e7d8c4',
          300: '#d8be9e',
          400: '#c69e74',
          500: '#b88458',
          600: '#a96d49',
          700: '#8d5740',
          800: '#734839',
          900: '#5f3d32',
          950: '#341f1a',
        },
      },
    },
  },
  plugins: [],
};
