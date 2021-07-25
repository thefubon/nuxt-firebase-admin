module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './lang/**/*.{js,json}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
      },
      animation: {
        'left': 'left 1s ease-in-out 250ms 1 both',
        'right': 'right 1s ease-in-out 1250ms 1 both',
      },
      keyframes: {
        'left': {
          'from': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '100',
          },
        },
        'right': {
          'from': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '100',
          },
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
