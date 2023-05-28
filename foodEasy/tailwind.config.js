/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.html',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.ts',
    './resources/**/*.tsx',
    './resources/**/*.php',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
              clifford: '#da373d',
              pink : '#f94d00',
              blueClear: '#6bd4fd',
              pinky : '#e95757'
            },
      width:{
        contentW: 'calc(100% - 190px)',
      }
    },
  },
  plugins: [],
}

