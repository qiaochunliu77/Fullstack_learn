const http = require('http');
const fs = require('fs');
const users = require('./users.json');
let version = 125
let server = http.createServer((req, res) => {
    // 判断是否存在该版本

    console.log(req.url)
    if (req.url == '/') {
        // res.setHeader('Etag',version)
        res.writeHead(200, { 'Content-Type': 'text.html;charset=utf-8' });
        fs.createReadStream('./index.html').pipe(res);
    }
    else if (req.url == '/version') {
        if (req.headers['if-none-match']) {
            console.log(Number(req.headers['if-none-match']) == version);

            if (Number(req.headers['if-none-match']) == version) {
                res.statusCode = 304; //没有改变版本
                res.end();
                return;
            }
            else {
                res.setHeader('Etag', version);
                res.end(JSON.stringify(version));
                return;
            }
        }
        res.setHeader('Etag', version)
        res.writeHead(200, { 'Content-Type': 'text/Number;charset=utf-8' });
        res.end(version.toString())
    }
    else if (req.url == '/users') {
        // res.setHeader('Etag',version)
        res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
        // fs.createReadStream('./users.json').pipe(res);

        res.end(JSON.stringify(users));
        // res.write(version);
        // JSON.stringify() 把JSON 类型 变成文本
        // console.log(JSON.stringify(users));
    }
});
server.listen(5000);

// Etag 发送过去 当再请求时 版本一样 发个304  就会使用客户端的内容
//  否则就再次请求并更新版本
