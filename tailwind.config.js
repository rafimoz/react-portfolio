/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ECDFCC',
        secondary: '#181C14',
      },
      fontFamily: {
        aboreto: ['Aboreto', 'system-ui'],
        bodoni: ['Bodoni Moda', 'serif'],
        allura: ['Allura', 'cursive'],
      },
    },
  },
  plugins: [],
}

