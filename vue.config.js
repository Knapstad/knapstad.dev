const routes = require('./src/router/routes');

module.exports = {
  pluginOptions: {
    sitemap: {
      baseURL: 'https://knapstad.dev',
      routes,
    },
  },
  chainWebpack(config) {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      });
  },
};
