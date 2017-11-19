var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


/*************************
**  LOADERS  **
*************************/

var jsxLoader = { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] };

var styleLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ExtractTextPlugin.extract({fallback: "style-loader", publicPath: "/public", use:[
    {loader: "css-loader"},
    {loader: "sass-loader"}
  ]})
};


/**************************************************
**************************************************/


module.exports = {
  entry: {
    app: [
      './src/entries/App.jsx'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },

  module: {
    rules: [jsxLoader, styleLoader]
  },

  plugins: [
    new ExtractTextPlugin({filename: "style.css", disable:true, allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin({ name: "common" }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    hot: false,
    inline: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: 3000
  }
};
