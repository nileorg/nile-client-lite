module.exports = {
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'it',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
