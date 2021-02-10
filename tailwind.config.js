const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      indigo: colors.indigo,
    },
    fontFamily: {
      'header': ['Playfair Display', 'serif'],
      'body': ['Lato', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
