const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  starts: {
    colors: true
  }
}).listen(3000, err => {
  if (err) {
    return console.log(err)
  }
  console.log('Server running on port 3000')
})