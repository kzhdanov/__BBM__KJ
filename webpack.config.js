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
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
}
