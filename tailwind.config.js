/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

