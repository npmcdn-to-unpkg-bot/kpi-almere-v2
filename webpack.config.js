var path = require('path');
var IgnorePlugin =  require("webpack").IgnorePlugin;
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new IgnorePlugin(/(^fs$|xlsx|xls|^path$)/),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        loader: 'transform/cacheable?brfs'
      },
      { test: /\.(png|jpg|svg|woff|eot|ttf|otf)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      webworkify: 'webworkify-webpack'
    }
  }
};
