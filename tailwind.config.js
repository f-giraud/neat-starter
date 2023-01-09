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
        }
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
