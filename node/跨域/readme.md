## 跨域 
    img, script,link 都是跨域的
    浏览器安全策略 是浏览器不能跨域 
    本地5050 端口向 服务端9090 发起请求 跨域

    一个域向另一个域发出请求必须
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
 ``` cookie 就是 存在前端的，cookie 和 服务器会话 一起用。```
    1：可以通过后端设置  
    2：可以通过前端设置  document.cookie = 'abc=123'

  1. 简单请求
 请求方法是以下三种方法之一：
    HEAD
    GET
    POST
 HTTP的头信息不超出以下几种字段：
    Accept
    Accept-Language
    Content-Language
    Last-Event-ID
    Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

  2. 预检请求
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

JSONP方案原理就是通过动态创建script标签，利用标签内src属性发送同步请求，并利用回调函数的方式实现异步数据的回调从而完成与后台交互的功能。当然除了jsonp方案使用script标签发送请求的办法外，还能通过img标签的src属性也同样能发送请求(这个不是jsonp)。

  可以通过浏览器控制台Network选项查看发现，JSONP发出去的请求类型是script，img标签src属性发出去的请求类型是JSON，他们都不是 xhr， 因为没有形成跨域的第三个条件，因此不会触发浏览器跨域检查策略。这就是为什么JSONP 方案能处理解决跨域问题的原因。

我们标记dataType为jsonp来标识这是一个jsonp请求，jQuery会帮助我们事先动态创建script标签并设置为异步请求和发送请求等功能，并将script标签插入到html的头部上 

借助了script
1. jsonp后端给你返回的是什么
    函数名+数据拼接的字符串
2. jsonp 原理  

jsonp
1. 使用jquery
