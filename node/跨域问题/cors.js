const http = require('http');
http.createServer((req,res) => {
  res.writeHead(200, {
    // 源origin
    'content-type': 'text/plain',
    'Access-Control-Expose-Headers': 'content-type, Access-Control-Allow-Methods', //想让前端拿到的头部 可以是下面的任意一个
    'Access-Control-Allow-Origin': 'http://localhost:8080',// 允许的域
    'Access-Control-Allow-Methods': '*', //允许所有访问
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Credentials': true, // 凭证cookie，允许前端携带cookie
    'Access-Control-Max-Age': -1,    // preflight 预检请求结果缓存的时间  -1 禁用缓存
  })
  // cookie 随着http请求 自动发送
  let posts = ['js','react'];
  res.end(JSON.stringify(posts))
})
.listen(9090, () => {
  console.log(9090)
});

