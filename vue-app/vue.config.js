console.log("vue.config.js is loaded");

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:7071', // Changed from http:// to https://
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
