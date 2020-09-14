- SPA 
单页 只有index.html 一个入口文件 

- MPA
多页 多个html 

- SSR 

## webpack如何与多页应用结合 
技术栈不统一 但不同部门的页面要凑在一起 => 
微前端 解决前端特别大的应用 

做法：
不同部门的 html  从new 多个 HtmlWebpackPlugin 多入口 多页 
HtmlWebpackPlugin 插件 解决多个页面的 生成 ，每一个插件的chunks指向 上面 通过 entry 指定生成的chunks 
缺点：不够自动化 
