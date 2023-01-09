colors = require('tailwindcss/colors')
module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue: colors.blue,
        darkblue: {
            '50': '#bbd1f1',
            '100': '#a6bedf',
            '200': '#91a9ca',
            '300': '#7e95b6',
            '400': '#6a809f',
            '500': '#586b86',
            '600': '#45556c',
            '700': '#333f50',
            '800': '#242e3b',
            '900': '#18202b'
        },
        gold: {
            '50': '#f6e5b8',
            '100': '#edd79a',
            '200': '#dec683',
            '300': '#ceb46e',
            '400': '#c0a660',
            '500': '#AF954E',
            '600': '#9a8241',
            '700': '#7b672f',
            '800': '#5b4b1e',
            '900': '#392e10'
        }
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
