
const http = require('http');
http.createServer((req,res) => {
  if(req.url.includes('/api')){
    let posts = ['js','php'];
    res.end(JSON.stringify(posts))
  }else if(req.url.includes('/p')){
    res.end('123')
  }
})
.listen(9090, () => {
  console.log('success in 9090')
});

