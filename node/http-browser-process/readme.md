## req
浏览器： xhr fetch
node： http.get()

不同api发出请求 -> http -> 一样

http： 超文本传输
- 调用xhr
- 浏览器拼接报文
    http1.1报文(纯文本)：
    - 首行
    - 首部
    - \r\n
    - 实体

## 解析报文 
split ('\r\n')

限制：必须等到拿到一个完整的报文
现实：报文传输，可以允许我们，分段传输。

## 解析 
状态机 
FSM(Finite State Machine)

浏览器解析报文：body (html),headers,响应行
html怎么渲染出来了？浏览器也要解析html
js怎么就被执行？浏览器也要解析js
解析成什么

## 解析原理
代码都是字符串
- 词法分析：代码切割成一个个最小的单位
- 语法分析：生成抽象语法数
- 生成目标代码



