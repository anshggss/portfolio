/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '639px' }, // Applies below 640px
        'max-md': { 'max': '767px' }, // Applies below 768px
        'max-lg': { 'max': '1023px' }, // Applies below 1024px
      },
    },
  },
  plugins: [],
}

