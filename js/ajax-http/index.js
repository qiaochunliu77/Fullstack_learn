// 导入 node里面的 http模块
// 启动服务
const http = require('http');
const fs = require('fs')
// 1.前端ajax 传输数据给后端  后端接受前端的数据
// 2.响应数据给前端
// 3.
const server = http.createServer(
    function(req,res){
        console.log("now",res.url)
        if(req.url.includes('search')){
            // search 搜索功能
            // 首页功能
            res.end(req.url.split('?')[1])
            return;
        }
    res.writeHead(200,{
        'Content-type':'text/html;charset=utf-8'
    })
    const file = fs.readFileSync('.ajax.html',{encoding:'utf-8'})
    res.end('file');
})
server.listen(8081,function(){
    console.log('server is running http:127.0.0.1:8081')
})