// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        albertus: ['"Albertus Nova"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        studio: {
          bg: '#F6F4F0',
          dark: '#2c3f36',
          accent: '#8ba89a',
        }
      }
    },
  },
  plugins: [],
}