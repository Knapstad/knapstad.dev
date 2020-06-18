const routes = require('./src/router/routes');

module.exports = {
  pluginOptions: {
    sitemap: {
      baseURL: 'https://knapstad.dev',
      routes,
    }
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            // optional options
            /*
                        options: {
                            renderer
                        }
                        */
          },
        ],
      }],
    },
  },
};
