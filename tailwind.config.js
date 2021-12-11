const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', ...defaultTheme.fontFamily.sans],
        SFMono: '"SFmono", sans-serif'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'bg': '#222831',
      'orange-bg': '#FD7014'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'orange-text': '#FD7014'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'orange-border': '#FD7014'
    })
  },
  plugins: [],
}