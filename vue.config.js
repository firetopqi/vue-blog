const url = 'http://127.0.0.1:9999'
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    disableHostCheck: true,
    port: 3000,
    proxy: {
      '/api': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}