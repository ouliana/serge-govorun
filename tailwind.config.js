/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Comfortaa'],
    },
    // darkMode: 'class',
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
      },
      backgroundImage: {
        profile: "url('/profile.jpg')",
      },
    },
  },
  plugins: [],
};
