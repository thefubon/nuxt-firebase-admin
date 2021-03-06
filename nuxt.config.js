import { resolve } from 'path'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtJS - Start Project',
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap' },
    ],
    script: [
      { src: '/js/nav.js', type: 'text/javascript', body: true, async: true, defer: true }
    ],
    bodyAttrs: {
      class: 'antialiased font-roboto bg-gray-100'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
    '~plugins/vue-scrollactive.js',
    '~plugins/vue-slick-carousel.js',
    '~plugins/vue-stripe-menu.js'
    //'~plugins/vue-clickaway.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
  ],

  axios: {
    baseUrl: process.env.BASE_URL || "https://nuxt-31297-default-rtdb.firebaseio.com",
  },

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
      /^\/en\/admin/, // path starts with /en/admin
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

  env: {
    baseUrl: process.env.BASE_URL || "https://nuxt-31297-default-rtdb.firebaseio.com",
    fbAPIKey: 'AIzaSyA6_EcqxkRDoOijDBMVrfz81eoZerYCz_8'
  },

  router: {
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: '*',
    //     component: resolve(__dirname, 'pages/index.vue')
    //   })
    // },

    linkActiveClass: 'active',
  },

  transition: {
    name: 'my-layouts',
    mode: 'out-in',
  },

  cli: {
    badgeMessages: ['??????????????!'],
    bannerColor: 'yellow'
  }
}
