/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./main.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'index': "url('/img/index5.jpeg')",
      },
      fontFamily: {
        'rait': ['Dancing Script']
      }
      
    },
  },
  plugins: [],
}

