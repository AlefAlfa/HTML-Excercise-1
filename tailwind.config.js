/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'blue-shadow': '0 0 30px rgba(59, 130, 246, 0.01)'  
      }
    },
  },
  plugins: [],
}

