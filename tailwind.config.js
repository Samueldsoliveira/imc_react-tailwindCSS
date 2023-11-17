/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '200px', 'max': '699px'},
        'md': {'min': '700px', 'max': '991px'},
        'lg': {'min': '992px'},
      
      }
    },
  },
  plugins: [],
}

