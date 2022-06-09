const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const DIST_PATH = path.resolve(__dirname, 'client', 'dist');
const TEMPLATE_PATH = path.resolve(__dirname, 'client', 'template.html');

module.exports = {
  mode: 'development',
  entry: [
    SRC_PATH,
    'webpack-hot-middleware/client?path=/__live_reload&timeout=100&reload=true'
  ],
  devtool: 'eval',
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH,
    publicPath: '/',
    clean: true
  },
  devServer: {
    hot: true,
    contentBase: DIST_PATH,
    publicPath: '*'
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader, css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: TEMPLATE_PATH,
      title: 'Lizano&apos;s Glass Haus'
    }),
    new HotModuleReplacementPlugin(),
  ]
};
