export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vuecoffe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // SSr false
  ssr: false,
  target: 'static',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/persistedState.js'
  },
  {
    // src: '~/plugins/apolloClient.js'
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
    // '@nuxtjs/composition-api/module',
    // '@nuxtjs/apollo'
  ],

  // apollo: {
  //   clientConfigs: {
  //     default: '~/graphql'
  //   }
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://laracoffe.herokuapp.com/api'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // serverMiddleware: [{ path: '/', handler: '~/server/index.js' }],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    },
    // transpile: ['gsap', '@vue/apollo-composable']
    transpile: ['gsap']
  },
  // env: {
  //   nuxtApiUrl: process.env.NUXT_API_URL 
  // // the variable from the .env file, which must be in the root of the project
  // }
}
