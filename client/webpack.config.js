const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, options) => {
  
  const isProduction = options.mode === 'production';
  
  return {
    entry: './src/app.js',

    mode: isProduction ? 'production' : 'development',
    
    devtool: isProduction ? 'none' : 'source-map',

    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'built'),
    },

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        }
      ]
    },
   
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new ExtractTextPlugin('[name].css')
    ],

    optimization: isProduction ? {
      minimizer: [
        new UglifyJsPlugin({
          test: /\.js(\?.*)?$/i,
        }),
      ],
    } : {},

  };
};