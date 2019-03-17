const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, options) => {
  
  // Use env.<YOUR VARIABLE> here:
  //console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  //console.log('Production: ', env.production); // true
  //const env_mode = env.production ? 'production' : 'development';
  //console.log(env);
  //console.log(options);
  const isProduction = options.mode === 'production';
  console.log(isProduction);
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
            fallback: "style-loader",
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
  };
};