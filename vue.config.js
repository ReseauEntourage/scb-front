const setTitle = () => (htmlWebpackPluginOptions) => {
  htmlWebpackPluginOptions[0].title = 'Simple Comme Bonjour';
  return htmlWebpackPluginOptions;
};

const chainWebpack = (config) => {
  config.plugin('html').tap(setTitle());
};

module.exports = {
  chainWebpack,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/main.scss";',
      },
    },
    extract: false,
  },
};
