## 跨域 
    浏览器安全策略

    一个域向另一个域发出请求
    同源： 同协议 (http/https) 同端口 
    两个源不相同 产生跨域 

    CORS ： cross origin resouce share
## 1
 Access-Control-Allow-Origin': 'http://127.0.0.1:5500'

## http 头
请求头 
accept
响应头
set-Cookie:
通用头
Content0type
- 请求的时候带给后端的内容的类型
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