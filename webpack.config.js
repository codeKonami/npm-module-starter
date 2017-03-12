const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './lib/add.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'add.min.js',
    libraryTarget: 'umd',
    library: 'add'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
