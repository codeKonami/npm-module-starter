const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './lib/add.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'add.min.js',
    libraryTarget: 'umd',
    library: 'add',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
  ]
}
