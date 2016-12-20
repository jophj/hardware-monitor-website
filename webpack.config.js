'use strict';

var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "cheap-eval-source-map",
  devServer: { contentBase: __dirname + '/dist', inline: true },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
};

module.exports = config;
