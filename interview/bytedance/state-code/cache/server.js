const express = require('express');
const md5 = require('md5')
const app = express();
// GET路由
app.get('/big.js', (req, res) => {
    console.log('here')
    const fs = require('fs');
    const jsContent = fs.readFileSync('./big.js', 'utf-8');
    // content-type
    // 强缓存 ：200 from memory/dist cache 请求不会到达服务器 直接由浏览器决定要不要使用缓存
    // 强缓存就是给资源设置个过期时间，客户端每次请求资源时都会看是否过期；只有在过期才会去询问服务器
    // 1. expires 明确 2020 7 21 客户端时间可以设置和修改 
    // 2. cache-control 相对的时间 

    res.setHeader('Cache-Control', 'max-age=20');
    // 协商缓存，请求会到达服务器
    // 20之后， 请求 会携带一个（if-none-match的字段）到达服务器
    // if-none-match 浏览器发现上一次请求 服务器 有Etag设置 浏览器自动发送一个
    // last-modified 记录资源最后修改的时间。启用后，请求资源之后的响应头会增加一个 last-modified 字段
    // last-modify-since 
    // 服务器 对比前后两次文件 有没有变化 从时间考虑 有缺陷 
    const Etag = md5(jsContent);
    const oldEtag = req.headers['if-none-match'];
    if(Etag == oldEtag) {
        // 文件没有变化
        // 从缓存里面读取 304(last modified)
        res.sendStatus(304).end('')
    }
    res.setHeader('Etag', Etag);
    res.end(jsContent);
    return ;
})
app.listen(9090,() => {
    console.log(9090);
})

function memorize(func) {
    let cache = {};
    return function(...args) {
      let k = JSON.stringify(args);
      if (cache[k] !== undefined)  {
        console.log('from cache')
        return cache[k]
      }
      // 计算
      let res = func(...args)     // 函数调用需要参数，
      cache[k] = res;
      console.log('cal')
      return res;
    }
  }
  
