const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {    
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ['Poor Story', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-caret-color')(),
  ],
}
