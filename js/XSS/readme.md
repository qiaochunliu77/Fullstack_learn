## 安装
cnpm i koa koa-views koa-router ejs -S
 ejs 模板引擎 <%- username %>
## 反射型
在前端 一来一回
## 存储型 
存储在后端 危害较大
## 预防xss攻击
转义 编码 
## 三种 XSS 攻击模式是
- 存储型 XSS 攻击、
- 反射型 XSS 攻击
- 基于 DOM 的 XSS 攻击。

共同点: 都需要往用户的页面中注入恶意脚本，然后再通过恶意脚本将用户数据上传到黑客的恶意服务器上。

不同点：注入的方式不一样，有通过服务器漏洞来进行注入的，还有在客户端直接注入的。
## 预防xss
- 转义 编码
    - html &lt; 小于号
