/*var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("common.js");*/

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      exclude: /node_modules|static/
    }]
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
