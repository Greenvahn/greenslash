const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    colors: {
      blue: colors.blue,
      white: colors.white,
      neutral: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      black: colors.black,
      slashgreen: {
        DEFAULT: '#21D896',
        x100: '#D9E3E0',
        x300: '#A9E0CC',
        x500: '#81DDBC',
        x700: '#5BDBAD'
        
      },
    },
    fontFamily: {
      opensans: ['Open Sans', 'Verdana', 'sans-serif'],
      museomoderno: ['Museo Moderno']
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '200' : '200px'
     }
  },
  variants: {},
}