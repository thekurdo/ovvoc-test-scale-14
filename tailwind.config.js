const colors = require('tailwindcss/colors');
module.exports = {
  purge: { enabled: true, content: ['./src/**/*.jsx', './src/**/*.html'] },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: colors.indigo,
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
