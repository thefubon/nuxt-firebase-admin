import { resolve } from 'path'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt 2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap' }
    ],
    bodyAttrs: {
      class: 'antialiased font-roboto'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-slick-carousel.js', // https://github.com/gs-shop/vue-slick-carousel
    '~plugins/vue-scrollactive.js', // https://github.com/eddiemf/vue-scrollactive
    // '~plugins/vue-clickaway.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'ru',
        file: 'ru.js'
      },
      {
        code: 'en',
        file: 'en.js'
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'assets'
  },

  // The dist folder is named dist by default but can be configured
  generate: {
    dir: 'dist',
    exclude: [
      /^\/admin/, // path starts with /admin
      /^\/users/, // path starts with /users
    ]
  },

  alias: {
    'img': resolve(__dirname, './assets/img')
  },

  loading: {
    color: '#ffcc00',
    height: '1px'
  },

  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost,
    timing: false
  },

  cli: {
    badgeMessages: ['Заебись!'],
    bannerColor: 'yellow'
  }
}
