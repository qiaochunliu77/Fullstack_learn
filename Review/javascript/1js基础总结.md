

## js手写基础

- 防抖 文本框输入 n秒只会执行一次 每次触发事件会重新计时
  
  节流 滚动事件监听 规定事件内再次触发事件 时间间隔内执行
  
  
  立即执行/非立即执行   时间戳/定时器
  
- this问题 call,apply  将函数挂在对象的属性上，执行，然后删除对象该属性。

- 深拷贝 递归 Map

- 继承 继承属性(Con.apply(obj,args)) 和继承方法 (Con.prototype = obj)

  - new  流程 (空对象，继承方法，继承属性,返回)
  - instance of 查找一个对象是否在另一个对象的原型链上 顺着对象的`__proto__`

## es6

- let const var的区别

    ```
    - var 是函数作用域，let/const 块级作用域，比如 for循环，var定义i，在for外部也能使用，let只能在for内部。
    - var存在变量提升 ，在变量未赋值之前使用值为undefined，let/const 不存在变量提升，在未赋值之前存在`暂时性死区`
    - const 赋值必须初始化，否则syntaxError
    - var可以被重新声明，let / const 不可以重复声明
    - let 值可以修改， const 不可以修改。
    - 但若const 为引用类型 ，若为引用数据类型，保存的是对象的指针，给对象增加属性并不影响；
    - var、let 和 const 区别的实现原理是什么？ var会预先分配内存空间，等到执行时再存储变量。let / const 不会预先分配，而是在栈内存找是否已经存在这个变量。
    ```

- 箭头函数与普通函数的区别

    ```
    1. 箭头函数更加简洁
    
    2. 每个函数 执行期上下文中都有一个this，箭头函数不会创建自身的执行期上下文，也就没有自身的this，它的this，取决于定义时所在的对象（也就是函数外层第一个普通函数的this），而不是使用时所在的对象。
    
       也就是 this是固定的，而普通函数是可变的
    
    3. 不能作为构造函数被new，因为没有prototype原型对象，也没有自己的this，call、apply无法改变箭头函数指向
    
    4. 没有arguements对象，可用rest参数替代
    
    5. 不能用作`Generator`函数，不可以使用yield关键字
    ```

    **不能使用箭头函数的场景**

    箭头函数使this 从 动态变为静态，下面场合不能使用：

    ```
    - 用来定义对象的方法，且这个方法要用到this
    - 需要动态this的时候
    - 如果函数体很复杂，有许多行，或者函数内部有大量读写操作，也不应该使用箭头函数，而是使用普通函数，提高代码可读性。
    ```

    

- 

## Link引入的css和import引入的css有啥区别

link html标签 
@import './a.css' css 语法
1. link引入的css可以同时加载，
@import 必须在页面加载完再加载 页面都加载完了又进css 页面会发生抖动
2. link是html 标签， 没有兼容性问题
@import是css2之后的 
3. js可以通过dom操作link 不能操作import 

## async defer

script标签上的 async 
1.<script src="script.js"></script>
立即加载
2.<script async src="script.js"></script>
异步
3.<script defer src="myscript.js"></script>
延迟

##  link a 

<a href = '' onClick={}>
Link === a
link没有默认跳转 转成historyapi上面的  无刷新的 




