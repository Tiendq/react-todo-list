module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: 'file',
      query: {
        name: '/images/[name].[hash:7].[ext]'
      }
    }]
  },
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    './scripts/app.js'
  ],
  output: {
    filename: 'app.js',
    path: __dirname + '/static',
    publicPath: '/static' // Must exist for HMR
  },
  sassLoader: {
    sourceMap: true,
    sourceComments: true,
    outputStyle: 'expanded'
  },
  devtool: 'source-map'
};
