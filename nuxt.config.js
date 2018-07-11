module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  // Load a Node.js module directly (here it's a Sass file)
    {src:'../node_modules/bulma/css/bulma.min.css', lang: 'css'}
  ],
  
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
