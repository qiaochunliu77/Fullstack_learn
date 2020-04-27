// 导入 node http 模块（处理网络）
const http = require('http');
// 导入 fs fileSystem 文件系统 处理文件读写
const fs = require('fs');
//req:前端ajax 传输数据给后端 
//res: 响应数据给前端
//
const server = http.createServer(function (req, res) {
    console.log('当前正在请求', req.url);
    if(req.url.includes('search')) {
        //搜索功能
        res.end(res.url.split('?')[1]);
        return;
    }
    //console.log('hello world');
    res.writeHead(200, {
        'Content-Type': 'text/html:charset:utf-8'
    })
    //读取文件内容
    const file = fs.readFileSync('./ajax.html',{ encoding : 'utf8'});
    res.end('<h2> hello world </h2>')

});
server.listen(8081, function() {
    console.log('server is running http:127.0.0.1:8081');
})