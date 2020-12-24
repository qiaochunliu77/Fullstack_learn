const http = require('http');
http.createServer((req,res) => {
    let posts = ['js','react'];
    res.end(JSON.stringify(posts))
})
.listen(9090, () => {
  console.log('success in 9090')
});

// nginx -s reload 重新载入nginx配置文件

// ngnix 配置
// server {
//   listen       8084;
//   server_name  localhost;

//   #charset koi8-r;

//   #access_log  logs/host.access.log  main;

// location / {
//       root   html;
//       index  index.html index.htm;
//   }

// location /api{
//       proxy_pass http://localhost:9090;
//   }


