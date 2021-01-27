module.exports = {
  devServer: {
    // disableHostCheck: true,
    host: 'localhost',
    proxy: 'http://localhost:3000',
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
