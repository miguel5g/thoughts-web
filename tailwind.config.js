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
          DEFAULT: '#121214',
          light: '#202024',
          highlight: '#37373A',
        },
        white: {
          DEFAULT: '#fff',
          dark: '#e1e1e1',
        },
        aqua: '#00ffff',
      },
      minHeight: {
        36: '9rem',
      },
    },
  },
  plugins: [],
};
