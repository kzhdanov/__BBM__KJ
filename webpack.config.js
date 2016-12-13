var webpack = require('webpack');

module.exports = {
  entry: "./public/js/main.js",
  
  output: {
    filename: "./public/js/build/main.js",
  },
  sourceMap: true,
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.html$/,
        loader: 'underscore-template-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
}
