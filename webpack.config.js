/**
 * Created by deepaksisodiya on 01/05/16.
 */

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename:'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};