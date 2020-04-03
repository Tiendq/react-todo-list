const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
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
        MiniCssExtractPlugin.loader, // Generate CSS files
        'css-loader', // Translates CSS into CommonJS
        {
          loader: 'sass-loader', // Compiles Sass to CSS
          options: {
            sassOptions: {
              outputStyle: 'compressed'
            }
          }
        }
      ],
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: 'file-loader',
      query: {
        name: '[name].[hash:7].[ext]',
        outputPath: __dirname + '/dist/images',
        publicPath: '/images/'
      }
    }]
  },
  entry: './scripts/app.js',
  output: {
    filename: '[name].[contenthash].js',
    path: __dirname + '/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  devtool: 'cheap-source-map'
};
