module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(58, 54%, 65%)',
          dark: 'hsl(58, 54%, 55%)'
        },
        secondary: {
          DEFAULT: 'hsl(55, 6%, 65%)',
          dark: 'hsl(55, 6%, 30%)'
        }
      }
    }
  },
  plugins: []
}
