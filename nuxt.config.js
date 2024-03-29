const path = require('path')

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Github Pages repository name
  router: {
    base: '/portfolio',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'My Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/css/tailwind.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '@/plugins/particles.js',
    },
    {
      src: '@/plugins/locomotiveScroll-both.js',
    },
    {
      src: '@/plugins/locomotiveScroll-client.js',
      mode: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@vueuse/nuxt',
    '@nuxtjs/composition-api/module',
    // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {},
        autoprefixer: {},
      },
      preset: {
        stage: 1,
      },
    },
  },

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          home: 'home',
        },
        fr: {
          welcome: 'Bienvenue',
          home: 'accueil',
        },
      },
    },
  },

  tailwindcss: {
    // jit: false,
    exposeConfig: true,
  },
  // https://google-fonts.nuxtjs.org/options
  googleFonts: {
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    text: 'Hello world',
    families: {
      Cabin: true,
      Oswald: {
        wght: [300, 400, 600],
      },
    },
    download: true,
    inject: true,
  },
}
