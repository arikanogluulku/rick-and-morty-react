const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, './src/style/abstracts/**.scss'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      Utilities: path.resolve(__dirname, 'src/utils/'),
    },
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Rick And Morty App',
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  devServer: {
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
};
