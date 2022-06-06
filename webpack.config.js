const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const DIST_PATH = path.resolve(__dirname, 'client', 'dist');
const TEMPLATE_PATH = path.resolve(__dirname, 'client', 'template.html');

module.exports = {
  entry: {
    path: SRC_PATH
  },
  devtool: 'eval',
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  mode: 'development',
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
        test: /\.css$/,
        use: ['style-loader, css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: TEMPLATE_PATH })
  ]
};
