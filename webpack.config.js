const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    'app': './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash:8].bundle.js",
    publicPath: '/',
    chunkFilename: "[name].[contenthash:8].chunck.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'sdfsdf',
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env.APP_NAME": JSON.stringify("test")
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },


  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,

    overlay: true,
    proxy: {

    }
  }
}