const merge = require('webpack-merge');
const common = require('./webpack.common.js');
require('react-hot-loader/patch');
const path = require('path');
const webpack = require('webpack');
require("babel-core/register");
require("babel-polyfill");

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    publicPath: '/dist/',
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
