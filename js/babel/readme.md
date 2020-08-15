## babel -》 js编译器
    将浏览器较新的语法编译成为浏览器兼容的代码
cnpm i @babel/core @babel/cli @babel/preset-env @babel/preset-react -D
    core 核心
    cli 命令行工具
    preset-env 指明代码运行的环境
    preset-react 解析jsx插件 
npx babel app.js --out-dir dist.js （打包生成转换后的）
preset 组合的插件
plugins 将插件拆开使用 单独的插件 
## webpack
cnpm i webpack-cli babel-loader -D (-D开发时候的环境 )
-S（既要在开发环境中 又要在生产环境中）
cnpm i webpack-dev-server -D 热更新
npx webpack-dev-server 运行