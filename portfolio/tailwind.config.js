/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px'
      }
    },
    fontFamily: {
      'Anton': ['Anton', 'sans-serif'],
      'Marker': ['Permanent Marker', 'cursive'],
    }
    
  },
  plugins: [],
}

