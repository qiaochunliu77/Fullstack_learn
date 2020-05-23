const http  = require('http');
http.createServer((req, res) => {
    res.writeHead(200,{
        // 设置响应头 
        'Access-Control-Allow-Origin': 'http://localhost:5500', //'*'
        'Access-Control-Allow-Methods': '*', //允许所有访问
        'Access-Control-Allow-Headers':'Content-type',
        'Access-Control-Allow-Credentials':true, //凭证 cokkies ，允许前端请求携带cookies
    })
    // cookies ：localstorage 
    let posts = ['js', 'php'];
    res.end(JSON.stringify(posts));
})
.listen(9090, () => {
    console.log('9090');
});   