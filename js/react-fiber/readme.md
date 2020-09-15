## 流程
JSX -> babel -> createElement -> 虚拟dom（react元素）-> 对应平台的渲染器 reactDom/reactNative 渲染

setState -> 生成另外一棵虚拟dom -> dom diff 前后哪些地方需要更新 （reconcilers）->找出哪些地方需要更新 -> 应用更新

## stack reconcilers

## fiber reconcilers
react 15之前进行dom diff时：
递归的过程 我们遍历所有的虚拟dom的节点，这个时候js执行的时间是很长的，js计算和页面渲染是互斥的。

在React Fiber中，一次更新过程会分成多个分片完成，所以完全有可能一个更新任务还没有完成，就被另一个更高优先级的更新过程打断，这时候，优先级高的更新任务会优先处理完，而低优先级更新任务所做的工作则会完全作废，然后等待机会重头再来。

 
浏览器的一次eventLoop/frame :
- 宏任务
- 微任务
- requestAnimationFrame
- render
- requestIdleCallback 当这一帧有空闲时间的时候

之前js是老大，我想执行多久就执行多久(主动)
现在js主动让步， 我自己放在 requestIdleCallback 里面 
js和浏览器统一站在用户体验的角度
合作调度 

- 协程（纤程）
能够把可中断的任务切片处理。
能够调整优先级，重置并复用任务。

generator:yield

fiber:是一个数据结构 支持我们写出终止暂停重新启动的代码 
```js
fiber:{
    child:第一个子节点
    subling: 下一个兄弟
    return : 父节点
}
```
fiber：以单链表的形式表达一棵树

## 生命周期
render阶段：计算出哪些需要更新 可以被打断
Commit 阶段：之前render已经花费了好多时间，为了让用户尽快的看到页面，所以这个阶段会一气呵成
