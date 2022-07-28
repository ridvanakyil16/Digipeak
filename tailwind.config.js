/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '97': '31rem',
      },
      colors: {
        'my-purple': '#c300ff',
        'my-orange': '#edb059',
        'my-bg-grey': 'rgba(127,127,127,0.12)',
        'my-dark-grey': '#2e3234',
        'my-yellow': '#FFAA00',
        'my-blue': '#0153ff'
      },
      borderRadius: {
        '2,5xl': "20px",
      },
      boxShadow: {
        'my-shadow': '0px 2px 18px 0px rgb(0 0 0 / 30%)',
      },
      borderWidth: {
        '3': "3px",
      }
    },
  },
  plugins: [],
}
