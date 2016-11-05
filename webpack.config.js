module.exports = {
  module: {
    preLoaders: [{
      test: /\.js?$/,
      loader: "eslint",
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"],
      exclude: /node_modules/
    }]
  },
  entry: {
    app: "./scripts/app.js"
  },
  output: {
    filename: "[name].js",
    path: "./static/scripts",
    publicPath: "/static/scripts/"
  },
  sassLoader: {
    sourceMap: true,
    sourceComments: true,
    outputStyle: "expanded"
  },
  devtool: "source-map"
};
