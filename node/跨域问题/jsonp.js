const http = require('http');
const url = require('url');
http.createServer((req,res) => {
    let posts = ['js','react'];
    let myUrl = url.parse(req.url);
    let params = new URLSearchParams(myUrl.query)
    let methodName = params.get('callback')
    console.log(myUrl, methodName)
    res.end(`${methodName}(${JSON.stringify(posts)})`)
    // res.end(`onResponse(${JSON.stringify(posts)})`)
  
})
.listen(9090, () => {
  console.log('success in 9090')
});

