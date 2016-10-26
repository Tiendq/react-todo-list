/*var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("common.js");*/

module.exports = {
  module: {
    preLoaders: [{
      test: /\.js?$/,
      loader: "eslint",
      exclude: /node_modules|static/,
      query: {
        configFile: ".eslintrc.js",
        //formatter: require("eslint-stylish-config"), // with .stylishconfig file
        globals: ["$"]
      }
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      exclude: /node_modules|static/
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"],
      exclude: /node_modules|static/
    }]
  },
  sassLoader: {
    sourceMap: true,
    sourceComments: true,
    outputStyle: "expanded"
  },
  devtool: "source-map",
  entry: {
    app: "./scripts/app.js"
  },
  output: {
    filename: "[name].js",
    path: "./static/scripts",
    publicPath: "/static/scripts/"
  }
  // plugins: [commonsPlugin]
};
