module.exports = {
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    });
    config
      .plugin('html')
      .tap(([firstArgument, ...rest]) => [
        {
          ...firstArgument,
          title: 'Nile',
        },
        ...rest,
      ]);
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
