
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
    borderOpacity: {
      '10': '0.1',
      '20': '0.2',
      '95': '0.95',

    },
    colors: {
      transparent: 'transparent',
      bg: 'rgba(var(--color-bg))',
      text: 'rgba(var(--color-text))',
      light: 'rgba(var(--color-text),.85)',
      danger: 'rgba(var(--color-error))',
      success: 'rgba(var(--color-success))',
      saleBg: 'rgba(var(--color-sale-bg))',
      saleText: 'rgba((var(--color-sale-text))',
      soldOutBg: 'rgba(var(--color-soldout-bg))',
      soldOutText: 'rgba(var(--color-soldout-text))'
    }

  },
  plugins: [],
}

