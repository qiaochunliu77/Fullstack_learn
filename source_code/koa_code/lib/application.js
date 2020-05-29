const http = require('http');

class MyKoa {
    constructor() {
    //   手写代码 源码分析
    this.fn = undefined;
    console.log('ok')
    }
    // lisiten use
    // 有没有什么 es6的写法 
    listen(...args) {
        let server = http.createServer(this.fn)
        server.listen(...args);
    }
    use(fn) {
        this.fn = fn;
    }
}


module.exports = MyKoa;