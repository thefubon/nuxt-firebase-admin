import { resolve } from 'path'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt',
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'assets' //https://cdn.nuxtjs.org
  },

  // The dist folder is named dist by default but can be configured
  generate: {
    dir: 'public'
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
    // host: '0.0.0.0', // default: localhost,
    timing: false
  },

  cli: {
    badgeMessages: ['Заебись!'],
    bannerColor: 'yellow'
  }
}
