const http = require('http');

class MyKoa {
    constructor() {
    //   手写代码 源码分析
    console.log('ok')
    }
    // lisiten use
    // 有没有什么 es6的写法 
    listen(...args) {
        let server = http.createServer((req,res) => {
            res.end('hello world');
        })
        server.listen(...args);
    }
    use() {

    }
}


module.exports = MyKoa;