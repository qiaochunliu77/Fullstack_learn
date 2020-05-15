const http = require('http');
const fs = require('fs');
const users = require('./users.json');
let version = 1234567
let server = http.createServer((req,res)=>{
    // If-None-Match
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text.html;charset=utf-8'});
        fs.createReadStream('./index.html').pipe(res);
    }
    else if(req.url =='/users'){
        res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
        // fs.createReadStream('./users.json').pipe(res);
        // res.setHeader('Etag',version)
        res.end(JSON.stringify(users));
        // send 文本 Buffer
        // JSON.stringify() 把JSON 类型 变成文本
        // console.log(JSON.stringify(users));

    }
    // if(req.headers['if-none-match']){
    //     console.log(Number(req.headers['if-none-match']) == version);
    //     if(Number(req.headers['if-none-match']) == version){
    //         res.statusCode = 304;   //没有改变版本
    //         res.end();
    //         return;
    //     }
    //     else{
    //         res.setHeader('Etag',version);
    //         res.end('hello world2');
    //         return;
    //     }
    // }
    // res.setHeader('Etag','12345678')
    // res.end('hello world');
});
server.listen(5000);