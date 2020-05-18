const express = require('express');
const data = require('./db.json');
// koa 是 express 的小孩子
const app = express();
// 请求谓语动词 
app.get('/', function(req, res) {
    // 原生 用 res.end(JSON.stringfy(express))
    // Content-type :application/json ;charset:utf-8
  res.json(data);
})
// restful URL 暴露一个资源  
// 一切皆资源 url /post资源的名词 
// app.get('/posts/:id',function(req,res) {
//     // http://www.baidu.com/post/:id/?key=1
//     // post/:id/ params
//     // ?key=1  keywords
//     let id = req.params.id
//     let post = data.posts.filter(post => post.id == id)
//     res.json(post[0].content)
// })
// 用户添加数据 用post
// app.post("/posts",)
// 设计一个url  访问第一首诗 
// app.listen(8081);