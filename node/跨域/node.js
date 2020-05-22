const http  = require('http');
http.createServer((req, res) => {
    res.writeHead(200,{
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500', //'*'
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers':'Content-type',
        'Access-Control-Allow-Credentials':true, //凭证 cokkies ，允许前端请求携带cookies
    })
    // cookies ：localstorage 
    let posts = ['js', 'php'];
    res.end(JSON.stringify(posts));
})
.listen(9090, () => {
    console.log(9090);
});