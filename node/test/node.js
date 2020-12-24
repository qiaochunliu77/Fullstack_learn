const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        // origin
        'Content-Type': 'application/json',  //前端拿到响应头 
        'Access-Control-Expose-Headers': 'Access-Control-Allow-Methods', //想让前端拿到的东西 可以是下面的任意一个
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
        'Access-Control-Allow-Methods': '*', //允许所有访问
        'Access-Control-Allow-Headers': 'content-type, X-Requested-With', //用于预检请求的响应
        'Access-Control-Max-Age': -1,    // preflight 预检请求结果缓存的时间  -1 禁用缓存
        'Access-Control-Allow-Credentials': true  // 凭证 cookie,允许前端请求携带cookie
    })
    let posts = ['js', 'php']
    res.end(JSON.stringify(posts));
})
    .listen(9090, () => {
        console.log('9090')
    });