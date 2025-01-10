/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1C75BC',
        'second-blue': '#26A9E0',
        'custom-gray': '#707070',
        'custom-orange': '#F56732'
      },
    },
  },
  plugins: [],
}
