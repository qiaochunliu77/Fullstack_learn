## 分析redux 源码 
单向数据流 ，使用函数式编程的概念 （纯函数， action必须是个对象）
流程 统一 规范 用它规定的流程把这个状态改变 
不用redux的话 直接state+1 

源码 
定义一些用于判断不同action的常量。
actionCreator  ：用常量来定义一些action，这里一般可以用于数据请求。
createStore接收一个reducer, reducer用于修改state，它会返回默认的state，或者action修改了之后的state。
createStore会暴露两个方法 ，dispatch和getState, diapatch方法接收一个action，将state和action交给reducer方法执行，实现数据的修改。getState方法获取到最新修改的state。
注意：为获取state默认值，会先diapatch一次

redux-thunk中间件 洋葱模型（递归）
action原本必须为纯对象，react-redux扩展了原生redux中action。使action可以为函数，用于发送请求。
实现将一些异步的代码，如请求的发送封装到action中，具体和数据打交道的代码不用放在组件中，直接dispatch就可以拿到数据
