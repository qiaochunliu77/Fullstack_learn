const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
const HappyPack = require('happypack');

// 1. 分离基础库（react/react-dom）可以缓存时间比较久的
// 业务代码：经常变动的

// extenals
// 
const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // externals: {
  //   react: 'React'
  // },
  // chunk

  // npm4之后才有的
  optimization: {
    splitChunks: {
      chunks: 'all',   // all 所有的 import // async import() 
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      }
    }
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        // use: ['babel-loader'],
        use: 'happypack/loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:5]'
            }
          }
        }
        ],
        //css-loader css 这个模块
        //style-loader css内容 插到html 的 style标签之内
        // css-module
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/ip6x2.png', to: './' },
      ],
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new MiniCssExtractPlugin(),
    new HappyPack({
      // 3) re-add the loaders you replaced above in #1:
      loaders: ['babel-loader']
    }),
    // Dll X.dll 动态链接库
    // reactdom已经被打包过了 只需要引入
    // 当我们需要使用动态链接库时 首先会找到manifest文件 得到name值记录的全局变量名称 然后找到动态链接库文件 进行加载
    new webpack.DllReferencePlugin({
      //   /**
      //    * 在这里引入 manifest 文件
      //    */
      manifest: require('../dist/dll/vendor-manifest.json'),
    })
  ]
}
module.exports = config

// dist 存着 就是一个 最终打包的结果
// dist 最终上线的一个 文件夹
