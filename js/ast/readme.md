<div id="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div>

JSON 描述一下
 

html document 什么关系
- url 输入页面后发生了什么 
1. download index.html 
    启动一个主进程 
2. 
    - tab 主进程 url
    启动一个 网络请求 进程2 
    - 渲染页面进程

    web应用 多进程架构
        当我们用chrome打开页面的时候 
        启动四个进程： 应用进程(pid 计算及资源调用的最小单元) 浏览器运行
        tab 负责一次页面渲染需要的 主进程
        两个子进程 
        Network Service http 请求200
        GPU 计算 高速css绘制
         
        GPU 加速 chrome 为了让页面加载更快 使用gpu 来
        绘制页面 这也是战胜ie的原因

        html 文本 text / html
        将 文本 -> dom 对象 内存 里面 浏览器怎么写的 
        