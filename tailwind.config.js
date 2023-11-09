/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Roboto Condensed"'],
    },
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
      },
      backgroundImage: {
        profile: "url('/profile.jpg')",
      },
      animation: {
        slide: 'slide 5s linear',
        rotateDown: 'rotateDown 0.4s linear',
        rotateUp: 'rotateUp 0.4s linear',
        dropDown: 'dropDown 0.4s ease-in-out',
        dropUp: 'dropUp 0.4s ease-in-out',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(2em)', opacity: 0.1 },
          '5%': { transform: 'translateY(-2em)', opacity: 1 },
          '95%': { transform: 'translateY(-2em)', opacity: 1 },
          '100%': { transform: 'translateY(2em)', opacity: 0.1 },
        },
        dropDown: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },

        dropUp: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },

        rotateDown: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        rotateUp: {
          '0%': { transform: 'rotate(180deg)' },
          '50%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
