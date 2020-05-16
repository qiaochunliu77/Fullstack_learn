const http = require('http');
const fs = require('fs');


http.createServer((req,res) => {
    // res.end()
    // 1. 前端会缓存 localstorage sessionstorage
    // 2. a.txt 请求一次就好
    // 3. 之后再请求 如果服务器端没有文件发生改变 就不用返回文件内容 直接使用前端缓存

    // 1. 怎么区分第一次和其他次 if-modified-since
    // 2. 怎么样判断文件是否修改了 if-none-match' == version
    // 3. 怎么告诉浏览器 直接用缓存的数据 304
    let stat = fs.statSync('./a.txt');
    if(req.headers['if-modified-since']){
        if(req.headers['if-modified-since'] == stat.mtime) {
            res.statusCode = 304
            res.end();
            return;
        }else{
            res.writeHead(200,{'Content-type' :'text/html;charset=utf-8'});
            res.end('修改了')
            return;
        }
    }
    // 同步 阻塞 

    // console.log(stat.mtime)
    // 下次再请求时 客户端会带上if-modified-since 字段
    res.setHeader('Last-modified', stat.mtime)
    fs.createReadStream('a.txt').pipe(res)
})
.listen(5200)