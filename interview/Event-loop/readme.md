1. setTimeout
2. Promise
3. 请求
4. addevent
5. 页面

浏览器内部有很多线程：
1. 定时器触发线程
2. http
3. GUI线程

什么是EventLoop
  浏览器协调用户交互，渲染，网络等任务
```js 
    setTimeout(() => {
    console.log(1);
    }, 0)
    Promise.resolve(3).then(console.log);
    console.log(2);
``` 
  宏任务 
    setTimeout 整体的一段scripts
    由宿主环境引起的任务
    
  微任务
    Promise.then MutationObserver Process.nextTick
    js本身引起的任务

## 流程
一个宏任务取出的同时 对应多个微任务取出
    只要宏任务队列不为空：
1. 从任务，宏任务队列里面取出**一个**执行
2. 从微任务队列里取出**所有的**执行，如果在这执行过程中又产生了微任务，那么重复第二步
3. 有可能进入浏览器的更新渲染
    1. reqAnimationFrame 回调
    2. 执行 IntersectionObserver 回调
    3. 重新绘制渲染
    4. 
我们的渲染是
一个宏任务-》一个微任务 -》渲染-》 一个宏任务-》一个微任务 -》渲染