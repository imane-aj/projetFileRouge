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
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
   },
  theme: {
    extend: {
      colors: {
              clifford: '#da373d',
              pink : '#FFA500',
              blueClear: '#6bd4fd',
              pinky : '#e95757',
              lightBroun : '#848484'
            },
      width:{
        contentW: 'calc(100% - 190px)',
      }
    },
  },
  plugins: [],
}

