/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcf9',
          100: '#faf7f2',
          200: '#f3ede3',
          300: '#e9e0d1',
        },
        charcoal: {
          700: '#3d3833',
          800: '#2d2926',
          900: '#1c1916',
        },
        coral: {
          50: '#fdf3f0',
          100: '#fae5dd',
          200: '#f5cabd',
          300: '#efa78f',
          400: '#e8825f',
          500: '#e0683f',
          600: '#c8542d',
          700: '#a44124',
        },
        sage: {
          50: '#f3f5f0',
          100: '#e3e8dc',
          200: '#c7d1b8',
          300: '#a3b18a',
          400: '#86916a',
          500: '#6b7652',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
