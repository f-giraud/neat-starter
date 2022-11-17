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
        castro: {
            '50': '#f6f2f4',
            '100': '#ede6e9',
            '200': '#d2bfc8',
            '300': '#b799a7',
            '400': '#804d65',
            '500': '#4a0023',
            '600': '#430020',
            '700': '#38001a',
            '800': '#2c0015',
            '900': '#240011'
        }
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
