const path = require('path');// 引入node模块 绝对路径 
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  // 规则
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      // jsx -> createment
      // jpg -> base64      file-loader
      {
        test:/.md$/,
        use: {
          loader: path.resolve(__dirname, './src/md-loader.js')
        }
      },
      {
        test:/.vue$/,
        use:{
          loader: path.resolve(__dirname,'./src/vue.loader.js')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
  ]
}
module.exports = config