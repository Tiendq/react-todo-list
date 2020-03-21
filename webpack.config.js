module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        'style-loader', // Creates `style` nodes from JS strings
        'css-loader', // Translates CSS into CommonJS
        {
          loader: 'sass-loader', // Compiles Sass to CSS
          options: {
            sassOptions: {
              sourceComments: true,
              outputStyle: 'expanded'
            },
            sourceMap: true
          }
        }
      ],
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: 'file-loader',
      query: {
        name: '[name].[hash:7].[ext]',
        publicPath: '/static/images/',
        outputPath: '../images/'
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
    path: __dirname + '/static/scripts',
    publicPath: '/static/scripts' // Must exist for HMR
  },
  devtool: 'source-map'
};
