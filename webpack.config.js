'use strict';

module.exports = {
  entry: './src/entry.js',
  devtool: 'source-map',
  output: {
    path: './public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        optional: ['runtime', 'es7.asyncFunctions']
      }
    }]
  },
};
