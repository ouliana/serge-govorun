/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Comfortaa'],
    },
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [],
};
