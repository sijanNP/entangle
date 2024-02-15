const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px'
    },
    borderColor: {
      DEFAULT: 'rgba(var(--color-text),.9)'
    },
    colors: {
      ...colors,
      bg: 'rgba(var(--color-bg))',
      text: 'rgba(var(--color-text))',
      danger: 'rgba(var(--color-error))',
      success: 'rgba(var(--color-success))',
    }

  },
  plugins: [],
}

