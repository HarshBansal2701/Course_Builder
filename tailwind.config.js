/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-red': 'rgb(175, 39, 62)',
        'custom-red-hover': 'rgb(190,59,82)',
      },
    },
  },
  plugins: [],
}

