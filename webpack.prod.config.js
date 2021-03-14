const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  mode: 'production',
  // devtool: 'inline-source-map',
  devtool: 'source-map',
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].[contenthash:6].bundle.js",
    publicPath: '/',
    chunkFilename: "js/[name].[contenthash:6].chunck.js"
  },

  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 3,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      // name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      title: 'qweqweqwe',
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env.APP_NAME": JSON.stringify("test")
    }),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [['@babel/preset-env', {
            //   targets: {
            //     "chrome": "58",
            //     "ie": "11"
            //   },
            //   useBuiltIns: "usage",
            //   corejs: 3
            // }]]
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


  // devServer: {
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   port: 3000,

  //   overlay: true,
  //   proxy: {

  //   }
  // }
}