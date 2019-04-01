const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'built'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin('[name].css')
  ],
 
};
