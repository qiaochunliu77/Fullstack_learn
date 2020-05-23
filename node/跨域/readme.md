## 跨域 
    img, script,link 都是跨域的
    浏览器安全策略

    一个域向另一个域发出请求
    同源： 同协议 (http/https) 同域名  同端口 
    两个源不相同 产生跨域 

## CORS ： cross origin resouce share

## 1
- 普通跨域请求：只需服务器端设置
 Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
- 带cookie跨域请求：前后端都需要进行设置
  前端 withCredentials: true,
  后端 'Access-Control-Allow-Credentials':true, //凭证 cokkies ，允许前端请
  设置为localhost 域名

  简单请求
    
  预检请求
  - options preflight 
  - post /api

## http 头
请求头 
    accept
响应头
    set-Cookie:
通用头
    Contenttype
- 请求的时候带给后端的内容的类型 application/x-www-form-urlencoded, multipart/form-data, text/plain
- 后端告诉前端给我资源的类型 ：MIME 


## JSONP
不同 xhr 不受跨域限制
img
src
link
script

借助了script
1. jsonp后端给你返回的是什么
    函数名+数据拼接的字符串
2. jsonp 原理 