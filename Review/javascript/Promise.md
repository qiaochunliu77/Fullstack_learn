## 异步的实现方式

### 回调函数

将一个函数作为另一个主函数的参数来使用的函数。

回调函数分为异步回调和同步回调，区别就在于是否在主函数中执行了异步操作。

### Promise

Promise 对象用于表示一个异步操作的最终完成(或失败)，及其结果值。

Promise 有以下两个特点：

- 状态不受外界影响，有三种状态，只有异步操作的结果可以改变promise的状态：pending，fulfilled，rejected

- 一旦状态改变，就不会再变。

  - 初始状态 pending -> 调用 resolve fulfilled  
  - 初始状态 pending -> 调用 reject rejected 

#### 优点

1. 防止回调嵌套，回调地狱
2. 链式调用。

#### 缺点

 1. `.then` 实际上也是返回一个promise， 多次调用消耗性能。

 2. `Promise` 一旦创建它就会立即执行，无法中途取消。

 3. 当 Promise 处于 pending 状态时，无法确定它是成功还是失败。

 4. 如果不在then里面设置回调函数，Promise 内部的错误就不会反映到外部

    ```js
    let promise = new Promise(() => {
        throw new Error('error')
    });
    console.log(2333333);
    ```

    通常称为 '吃掉错误'。

### 组合

Promise.resolve() 和 Promise.reject() 是手动创建一个已经 resolve 或者 reject 的 Promise 快捷方法。

**.then** 定义在promise.prototype上，用来添加状态改变时候的回调函数。

注： then() 函数会返回一个和原来不同的新的Promise

**.catch** 是.then(undefined,reject)的别名，用来指定发生错误时候的回调函数。

**.finally** 不管成功与否都会执行的操作。本质上是then的特例，不管前面的 Promise 是`fulfilled`还是`rejected`，都会执行回调函数`callback`。

**.all()** 要等全部完成之后才会resolve

**.race()** 只要有一个就reslove

### 手写 Promise

```js
    // 三种状态：PENDING、FULFILLED、REJECTED
 	// resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
    const PENDING = Symbol('PENDING')
    const FULFILLED = Symbol('FULFILLED')
    const REJECTED = Symbol('REJECTED')

    function MyPromise(fn) {
        this.value = undefined; // 传递 resolve 完成的结果 放在 this 上以便于 其他函数 都能访问到
        this.status = PENDING // 默认状态
        this.onFulfilled = () => {}; // 成功时候的回调
        let self = this; // 防止 this 丢失

        function resolve(value) {
            self.value = value;
            self.status = FULFILLED; // 调用 resolve 表明成功
            self.onFulfilled(value); // 跑到这里来调用 onFulfilled
            // console.log(value);
        }

        function reject(value) {}
        fn(resolve, reject)// 立即执行
    }
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
        // onFulfilled( resolve 的结果) 这里是立即调用的 没有等待 resolve 调用 就执行 所以为 undefined
        if (this.status === FULFILLED) onFulfilled(this.value)
        else if (this.status === PENDING) {
            this.onFulfilled = onFulfilled; // onFulfilled 赋给 构造函数成功时的回调
        } else onRejected()
    }

    // 测试
    new MyPromise((resolve, reject) => {
            setTimeout(() => {
                resolve(1) // this 指向哪 看在哪里调用 普通调用 指向 window
            }, 2000)
        })
        .then((res) => {
            console.log(res)
        }, () => {})
```

### async await

`async` 声明一个函数是异步的 会返回一个**立即resolve**的promise对象,return返回的值，会成为then回调的参数，若无返回值则为undefined。

`await ` 等待一个表达式（这个表达式可以是常量，变量，promise，函数）的完成 ,await只能出现在async函数中。

作用：async会将其后函数的返回值封装成一个promise对象，而这个await会等待这个promise完成，并将其resolve的结果返回出来。

### genarator

