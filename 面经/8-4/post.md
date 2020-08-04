## GET POST
- GET
    把参数包含在URL中
- POST
    通过request body传递参数
    是放在querystring  body里面(a=1&b=2)

在浏览器 img link script GET参数只能放到url 里面去了

xmlhttprequest http postMan 只要客户端服务端约定好 参数放在哪不受限制

从协议本身来看 并没有限制 GET 传递参数不能放到body里面
POST 传递参数也可以放到querystring里面

- 语义不一样 GET POST
- GET 资源可以缓存，POST 不能缓存
- GET url 长度有限(浏览器)，POST req body 不限制
- GET 不安全, POST  更安全 其实都是不安全的, http 明文传输， https
