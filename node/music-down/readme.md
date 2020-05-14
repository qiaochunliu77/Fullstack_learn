## step 
 1. node Index.js kewords 拿到 关键词
    node 启动一个文件 === 启动一个进程 ()
    keyword传给我们的进程
 2. 搜索 发个请求
    brower:
    ajax（通过URL取回数据，并且不会刷新整个页面，多个请求有前后关系 出现回调地狱） -   基于浏览器的XmlhttpRequest对象
    js原生的api  fetch

    node: 
    爬虫 流 - node 原生的api http.get

    封装好库: 
    axios 从nodejs创建请求、支持promise异步

 3. 展示 支持 键盘上下键 inquirer 
 4. 回车下载 下载歌的内容 想办法拿到歌德url  已经拿到了 id  通过id去获取url


## npm
    -S --save 把当前依赖当做dependences
    -D --save-dev 把当前依赖当做 dev-dependences