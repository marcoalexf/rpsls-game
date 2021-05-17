module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        fit: 'fit-content'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: [
        'active'
      ]
    },
  },
  plugins: [],
}
