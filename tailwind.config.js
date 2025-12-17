/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#D4AF37',
          500: '#C5A028',
          600: '#B49020',
        },
        cream: '#FDFCF5',
        royal: {
          800: '#1E3A8A',
          900: '#0F172A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'], // For the names
      }
    },
  },
  plugins: [],
}
