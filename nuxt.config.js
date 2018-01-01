module.exports = {
  modules: [
    ['@nuxtjs/google-analytics']
  ],
   'google-analytics': {
      id: 'UA-109853324-1'
    },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Good Soldier Podcast - Encouraging Independent Baptist Preachers.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Good Soldier Podcast is here to encourage Independent Baptist Preachers to fight the good fight of faith.' }
    ],
    // link: [
    //   // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // [['@nuxtjs/google-analytics', { ua: 'UA-109853324-1' }]]
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
