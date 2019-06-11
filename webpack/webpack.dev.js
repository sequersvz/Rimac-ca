const merge = require('webpack-merge')
const common = require('../webpack.common')
const ENV = require('../env')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: ENV[process.env.NODE_ENV].PORT,
    open: true,
    hot: true,
    // overlay: true,
    historyApiFallback: true,
    stats: 'errors-only',
  },
})
