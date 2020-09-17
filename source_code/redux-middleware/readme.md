## 中间件 
redux源码 内部 最原始 只能处理action 是纯对象的 dispatch函数
使用了中间件后 可以处理 action为函数等类型 的dispatch
所以 中间件就是 对action的各种处理 
### 实现 洋葱模型 
使用compose/flow 组合 , 这个处理不了 next交由下一个处理
## redux-thunk
纯粹使用redux时，你需要dispatch的是一个action对象，
当你使用redux-thunk后，你dispatch的是一个function，redux-thunk中间件会自动调用这个function，并且传递dispatch方法作为其第一个参数，于是我们就能在这个function内根据我们的请求状态：开始，请求中，请求成功／失败，dispatch我们期望的任何action了，这也是为什么它能支持异步dispatch action
```
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
```


