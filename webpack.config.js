'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/entry.js',
  devtool: 'source-map',
  output: {
    path: './public',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          [
            'css-loader?localIdentName=[local]__[hash:base64:5]',
            'postcss-loader',
            'sass-loader?outputStyle=expanded'
          ].join('!')
        ),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['runtime', 'es7.asyncFunctions', 'es7.classProperties'],
        },
      },
    ],
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-local-scope'),
  ],

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
};
