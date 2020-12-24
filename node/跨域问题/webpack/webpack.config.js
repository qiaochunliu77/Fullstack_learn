const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports={
  entry:"./src/index.js",
  output:{
      path:__dirname,
      filename:"dist/bundle.js"
  },
  devServer: {
    compress: true, // 启动 gzip压缩
    hot: true, // 启动 热更新
    contentBase: path.join(__dirname, "public"),
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:9090",
        pathRewrite: {"^/api" : ""}
      }
    }

  },
  module: {
    rules: [
      { test: /.css$/, use: [{ loader: 'style-loader'}, {loader: 'css-loader'}]}
    ]
  },
  plugins: [
    // 无需手动新建html，自动插入
    new HtmlWebpackPlugin({ 
      title: 'test app',
      // filename: 'public/public.html'
    })
  ]
};