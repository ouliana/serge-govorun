/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Roboto Condensed"'],
    },
    // darkMode: 'class',
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
        '9/20': '9 / 20',
      },
      backgroundImage: {
        profile: "url('/profile.jpg')",
      },
      animation: {
        slide: 'slide 5s linear',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(2em)', opacity: 0.1 },
          '5%': { transform: 'translateY(-2em)', opacity: 1 },
          '95%': { transform: 'translateY(-2em)', opacity: 1 },
          '100%': { transform: 'translateY(2em)', opacity: 0.1 },
        },
      },
    },
  },
  plugins: [],
};
