module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: './app/index.js',
  output: {
    filename: './bundle/bundle.js',
    sourceMapFilename: './bundle/bundle.js.map'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
    }]
  }
};
