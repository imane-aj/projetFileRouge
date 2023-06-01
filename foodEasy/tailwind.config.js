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
              pink : '#f5cdb2',
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

