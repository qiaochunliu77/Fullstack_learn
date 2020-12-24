在我们日常开发过程中，经常会遇到跨域问题。为什么会跨域，怎么解决？

首先，跨域是相对于同源策略而言。协议，域名，端口都相同，即为同源。

浏览器通过**同源策略**限制从一个源加载的文档或脚本与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制。

eg：

![image-20201222154534479](/Users/qiaochun/Library/Application Support/typora-user-images/image-20201222154534479.png)

从 http://localhost:8080 到 http://localhost:9090 域的访问，被同源策略阻止了。

## 几种解决方案

### cors

[Cross Origin Resource Share](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

跨域资源共享：是一种基于http头的机制，通过增加http响应首部字段，允许服务器声明浏览器有权访问哪些源站的哪些资源。

另外，对那些可能对服务器数据产生副作用的 HTTP 请求方法，浏览器必须首先使用 OPTIONS 方法发起一个预检请求，从而获知服务端是否允许该跨源请求。服务器确认允许后，才会发起真实的http请求。

带cookie的跨域请求，前后端都需要设置withCredential
#### 简单请求

某些请求不会触发预检请求，这样的请求称为**简单请求**。

若请求满足所有下述条件，则为简单请求：
- 请求方法是以下三种方法之一：
    HEAD
    GET
    POST
- HTTP的头信息不超出以下几种字段：
    Accept
    Accept-Language
    Content-Language
    Content-Type：只限于三个值text/plain、application/x-www-form-urlencoded、multipart/form-data。
    DPR
    Downlink
    Save-Data
    Viewport-Width
    Width


#### 预检请求

浏览器需要先使用OPTIONS方法发送一个请求到服务器，以获知服务器是否允许该实际请求。这样可以避免跨域请求对服务器端的数据造成影响。

1. 以option的方式 发出

2. 真实请求 

   携带cookie的跨域请求，前后端都必须设置withCredentials：true。

#### http响应首部字段

```
Access-Control-Allow-Origin: <origin> | * //  允许访问的域
Access-Control-Expose-Headers:'Access-Control-Allow-Methods' // 想让前端拿到的头部 可以是下面的任意一个
Access-Control-Max-Age: <delta-seconds> // 预检请求结果缓存的时间  -1 禁用缓存
Access-Control-Allow-Credentials: true // 是否允许前端携带cookie
Access-Control-Allow-Methods: <method> | * // 允许访问的http方法
Access-Control-Allow-Headers: 'content-type' // 
```

## jsonp 

img ,script, link 这些标签可以引入外部资源，但不受跨域限制。

​	JSONP方案原理就是通过动态创建script标签，利用标签内src属性发送同步请求，并利用回调函数的方式实现异步数据的回调从而完成与后台交互的功能。

​	可以通过浏览器控制台Network选项查看发现，JSONP发出去的请求类型是script，img标签src属性发出去的请求类型是JSON，他们都不是 xhr，因此不会触发浏览器跨域检查策略。这就是为什么JSONP 方案能处理解决跨域问题的原因。

## nginx反向代理
正向代理：隐藏真实客户端
在客户端与服务器之间实现一个代理服务器，客户端所有请求先经过代理服务器，请求成功后再返回给客户端。eg：公司内网
反向代理：隐藏真实服务器端
一般在服务器端，客户端发起的请求先被反向代理服务器收到，再由服务器决定转发到哪个目标服务器。

##  webpack-dev-server
webpack-dev-server 结合 proxy 接口代理.

```
devServer: {
    contentBase: "./dist",
    port: 8084,
    open: true,
    // 热替换
    hotOnly: true, // 模块刷新，不会做页面刷新
    // 解决跨域（代理的原理）
    proxy: {
      // 当碰到/api时，直接服务器代理到9090接口
      "/api": {
        target: "http://localhost:9090",
      },
    },
```