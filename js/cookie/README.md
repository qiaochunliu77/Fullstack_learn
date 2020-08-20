## cookie
cookie 是服务器端返回给客户端的数据 每次请求都会带上它
cookie的值：
name
value
Domain: cookie 生效的域名 baidu.com map.baidu.com
path:  /a/b  /c   /a  / 生效的路径
expires: 过期时间 默认就是当前 session 失效
httpOnly：cookie 只在http传输，js 无法操作的（cookie 可以有后端的 set-cookie 响应头设置， 也可以有前端 js document.cookie='' 设置）
secure：只在 https 的环境下面生效

cookie 只要符合 domain + path 的生效范围 就会随着 http请求发送
CSRF
sameSite：lax strict(cookie只在同域(juejin.im)生效) none

www.a.com 当前域名 cookie（a.com + /）
www.b.com 请求 www.a.com 

 合法的 localhost:9090
 hack  [localhost:9099]  zhaomeng.com:9099
 防止CRFS攻击的策略：
1. 利用cookie的someSite属性 在跨站点的时候不携带cookie
 samesite:lax localhost的某些get请求在zhaomeng.com发出也能带cookie
 samesite:strict localhost 的请求 只有在 localhost发出才会带cookie
 sameSite: none localhost的get请求不管在什么域发出都会携带 cookie
2. 
 csrf_token: 
 用户登录完 服务端 给你一个 token abcd
 前端存起来 localstorage 
 之后的 请求 都要携带 这个 token 
 这样 对于 zhaomeng.com 是没有这个 token 它发出去没有 token
3. 
 浏览器 在请求头中 会给每个请求一个 reffer 字段，表明这个请求来源
 服务端检测 来源
