var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var loaders = [
  {
    "test": /\.jsx?$/,
    "exclude": /node_modules/,
    "loader": "babel-loader",
    "query": {
      "presets": [
      ],
      "plugins": ["transform-es2015-arrow-functions","transform-object-rest-spread"]
    }
  }
];

module.exports = {

  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('build'),
    filename: 'built.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  module: {
    loaders: loaders
  }
};
