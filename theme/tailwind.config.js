const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/design/**/*.*"],
  darkMode: 'media',
  theme: {
    extend: {
      textColor: {
        skin: {
          "btn-primary": "var(--btn-primary-text)",
          "btn-secondary": "var(--btn-secondary-text)",
        }
      },
      backgroundColor: {
        skin: {
          primary: "var(--btn-primary)",
          secondary: "var(--btn-secondary)", 
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}