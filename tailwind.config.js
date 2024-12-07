module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(58, 54%, 65%)',
          dark: 'hsl(58, 54%, 55%)',
          darker: 'hsl(58, 54%, 50%)',
        },
        secondary: {
          light: 'hsl(55, 6%, 85%)',
          DEFAULT: 'hsl(55, 6%, 65%)',
          dark: 'hsl(55, 6%, 30%)'
        },
        accent: {
          light: 'hsl(14, 84%, 85%)',
          DEFAULT: 'hsl(14, 84%, 65%)',
          dark: 'hsl(14, 84%, 55%)',
        }
      }
    }
  },
  plugins: []
}
    