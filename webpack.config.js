var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("common.js");

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules|static/,
      loader: "babel"
    }]
  },
  devtool: "source-map",
  entry: {
    app: "./scripts/app.js"
  },
  output: {
    path: "./static/scripts",
    filename: "[name].js"
  },
  plugins: [commonsPlugin]
};
