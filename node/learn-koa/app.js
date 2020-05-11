const http = require('http')
// web编程的基石 http协议 
http
    .createServer((req,res) =>{
        // req 访问者 通过浏览器访问
        // res 服务器 返回数据 
    if(req.url === '/') {
        res.end('加')
        res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
    }else if(req.url === 'about'){
        res.end('about')
    }
})
.listen(1314)