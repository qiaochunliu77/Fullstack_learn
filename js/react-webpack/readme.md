## webpack
使用create-react-app脚手架内置的webpack配置，再用npm run build打包。若要修改，则用npm run eject(删除.git | 代码提交)暴露配置文件，再进行修改。
## webpack优化
去npm官网搜，按照提示做。
### 上线时候的优化
1. 项目体积较大，可以将第三方库(react/react-dom)等独立出来单独加载，这样就不用每次打开的时候都重新加载，提高首屏加载速度。
externals
  // externals: {
  //   react: 'React'
  // },
https://webpack.js.org/configuration/externals/#root

2. webpack将多个模块打包之后的代码集合称为chunk，为了将一些很少变化的库(react,redux,lodash)与业务代码分开，或者是一些在不同入口公共使用的公共模块，我们用splitChunk将他们分开打包。
webpack4之后
optimization.splitChunks: {
      chunks: 'all',   // all 所有的 import // async import() 
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      }
    }

3. style.loader 让css被包在style标签中插入到js中，js和css混在一起，这样会导致js没加载完，页面也没有css样式。
每个js文件中的css独立打包，防止样式命名冲突。
优点：按需加载，独立打包。
webpack4之后 MiniCssExtractPlugin.loader 防止命名冲突
https://www.npmjs.com/package/mini-css-extract-plugin

4. 图片压缩  imagemin plugin for webpack
new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })

### 提升打包速度  
并行打包HappyPack。 
webpack是node写的工具，但是node是单线程的。不能并发处理，只能一个个处理。在我自己写的小demo中没有得到检验，反而打包好像更慢了。适用于大型项目。
HappyPack的基本原理是将这部分任务分解到多个子进程中去并行处理，子进程处理完成后把结果发送到主进程中。
https://www.npmjs.com/package/happypack

### DLL
预先把动态链接库打包一次，每次只需要引入。
这样可以把第三方基础库分离，即每次只打包项目自身的业务代码。
新建webpack.dll.config.js
package.json  "dll":"webpack --config webpack.dll.js"
先运行npm run dll
