//  轻量级的web开发框架 js

const Koa = require('koa'); // 引入koa模块
const fs = require('fs')
const app = new Koa(); // web server 
// 启动一个服务 函数可以封装一个服务 
// ctx ->context  http请求上下文环境(request response)
const func = (ctx) => {
    // 响应体 传送给请求的用户 已经把http协议返回了 后面的 请求就不会响应了
    ctx.response.body = 'func'
}
const main = (ctx) => {
    console.log(ctx)
    // 向访问网站的用户返回 
    // ctx.response.body = 'hello'
    ctx.response.type = 'text/html' //响应头
    // 2.异步读取
    fs.readFile('./template.html','utf-8',function(err,data){
        console.log(data)
            ctx.response.body = data
    })
    // 1. 同步读取文件
    // const html = fs.readFileSync('./template.html','utf-8')
    // console.log(html)
    // ctx.response.body = html
    // ctx.response.body = 
}
// app.use(func)
app.use(main) //启用了一个服务
app.listen(3000)