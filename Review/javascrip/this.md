## this

四种调用方式里的this：

- 构造函数 new ：指向新对象
- obj.fn() : 指向obj
- call,apply  指向call(obj)  Obj对象
- 普通调用 ：指向全局  

this的缺陷：

1. 函数中嵌套了函数， this不会指向外部，而是指向全局。

   （）=> {}  箭头函数不会创建自身的执行器上下文，所以继承了外部的this

     在外部将this保存在self变量中

2. 普通函数中的this指向全局

### call

修改函数的this指向，传入参数(参数不固定，一个个传），并执行。

Constructor.call(obj,  args)

Constructor.call()   默认指向window

原理：将函数挂在对象的属性上，执行，然后删除对象该属性。

```js
    Function.prototype._call = function (obj) {
        // 若传参为空 this默认指向window
        const context = obj || window;
        // this 为 函数a
        context.fn = this; //给obj增加一个属性为函数
        let arg = [];
        // 将参数列表第二项以后的遍历保存
        for (let i = 1; i < arguments.length; i++) {
            arg.push(arguments[i])
        }
        context.fn(...arg)
        let resulit = context.fn(...arg);// 传参并执行
        delete context.fn;
        return resulit
    }
```

### apply

同call 参数为数组。

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



太难了 不会