/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'heading': ['Rampart One', 'sans-serif'],
        'hero': ['Audiowide', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

