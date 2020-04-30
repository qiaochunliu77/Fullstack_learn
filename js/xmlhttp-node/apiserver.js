const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req,res) {
    // 用户发送根路径 https://www.baidu.com/
    // req 用户请求的数据
    // get 参数放到url里面
    // post 参数放到 实体
    if(req.url === '/' ){
        // 返回一段html
        // 异步读取文件
        const html = fs.readFileSync('./index.html','utf-8')
        res.end(html);
        // 后端返回内容的类型
        // http状态吗
        // 1xx 消息提示
        // 2xx 200成功
        // 3xx 301/301重定向
        // 4xx 客户端相关 401未授权 
        // 5xx 服务端相关
        // res.writeHead(200,{
        //     'Content-Type':'text/html'
        // })
        // res.end(`<h2>123</h2>`)
    }else if(req.url === '/getPosts'){
        let posts = [
            {title:'js',star:1000},
            {title:'php',star:2000}
        ]
        res.end(JSON.stringify(posts));
    }
    // console.log(req.url)
    // res.end('hello,server')
})
server.listen(8080,function () {
    console.log('server is running 8080')
})