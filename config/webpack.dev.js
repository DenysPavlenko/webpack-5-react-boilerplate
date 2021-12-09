const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  stats: 'minimal',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
