const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: "./app/main.ts",
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'bundle.js',
    sourceMapFilename: "[name].map.js"
  },
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader"
      }
    ]
  }
};
