## this

this是指当前执行上下文的一个属性，在非严格模式下，总是指向一个对象，在严格模式下可以是任意值。

### 全局上下文

无论是否在严格模式下， 在全局执行环境中 (在任何函数体外部) this 都指向全局对象。即指向 window。

### 函数上下文

在函数的内部， this 的值取决于函数被调用的方式。

- 非严格模式：this 默认指向全局对象即window
- 严格模式：如果进入环境中没有设置 this 的值， this 保持为 undefined

### 类上下文

在类的构造函数中， 类中所有非静态的方法都会被添加到 this 的原型中

### 作为对象的方法

当函数作为对象里的方法被调用时， this 被设置为调用该函数的对象。

### 作为构造函数

当一个函数用作构造函数时 (使用new关键字)， 它的 this 被绑定到正在构造的新对象。

### 作为一个DOM事件处理函数

当函数被用作事件处理函数时，它的this 指向触发事件的元素。



this的缺陷：

1. 函数中嵌套了函数， this不会指向外部，而是指向全局。

   （）=> {}  箭头函数不会创建自身的执行器上下文，所以继承了外部的this

     在外部将this保存在self变量中

2. 普通函数中的this指向全局

### call apply bind区别

- bind是永久绑定，不会立即调用，call,apply是临时绑定一个函数，绑定完会立即调用
- 用call() ，第一个采纳数使我们指定函数调用时需要的this，往后的参数就是foo调用时需要的形参
- 用apply调用，往后的参数就是foo调用时需要的形参，但是不是一个个参数展开放在后面，要用数组包起来。

```
    foo.apply(newObj,[]);
	foo.call(newObj,'a','b','c');
```

### 总结

看函数在哪里调用？

1. 默认： `this `指向 `window`
2. `obj.`：`this` 指向这个对象
3. `call` / `apply `和 `bind`：this 指向 第一个参数
4. `new`：`this` 指向 `new` 创建完的对象
5. 严格模式：this 指向 undefined
6. 箭头函数 看函数在哪里定义的，this 看外层函数
7. 严格模式（在函数内部 且没用设置 this的值）： this 指向 undefined

### call

修改函数的this指向，传入参数(参数不固定，一个个传），并执行。

Constructor.call(obj,  args)

Constructor.call()   默认指向window

原理：将函数挂在对象的属性上，执行，然后删除对象该属性。

如果不传参数， 默认指向为 window

```js
    Function.prototype._call = function (obj) {
        // 若传参为空 this默认指向window
        const context = obj || window;
        // this 为 函数a
        context.fn = this; //给obj增加一个属性为函数
        let arg = [];
        // 将参数列表第二项以后的遍历保存
        for (let i = 1; i < arguments.length; i++) 		   {
            arg.push(arguments[i])
        }
        context.fn(...arg)
        let resulit = context.fn(...arg);// 传参并执行
        delete context.fn;
        return resulit
    }
```

### apply

同call  参数为数组。

```js
    Function.prototype._apply = function (obj, arr) {
        const context = Object(obj) || window;
        context.fn = this;
        var result;
        // 若无参数 则直接执行
        console.log(arr)
        if (!arr) {
            result = context.fn()
        } else {
            console.log(context.fn(...arr))
            result = context.fn(...arr);
        }
        delete context.fn;
        return result
    }
```

### bind

返回一个新的函数 永久绑定

