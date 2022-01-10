const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
      colors: {
        gray: {
          light: '#202024',
          dark: '#121214',
        },
        white: {
          light: '#fff',
          dark: '#e1e1e1',
        },
        aqua: '#00ffff',
      },
    },
  },
  plugins: [],
};
