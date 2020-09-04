## js数据类型

js八种数据类型分别是
String Number symbol Boolean null undefined bignum Object 基本 引用

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

- Promise

- let const var的区别

    - var 是函数作用域，let/const 块级作用域，比如 for循环，var定义i，在for外部也能使用，let只能在for内部。

    - var存在变量提升 ，在变量未定义之前使用值为undefined，let/const 不存在变量提升，在未定义之前存在`暂时性死区`
    - const 赋值必须初始化，否则syntaxError
    - var可以被重新定义，let不可以（强行定义则报错：变量已经被定义）
    - const不可以重复声明，若声明的变量是基本数据类型，则不能修改，若为引用数据类型，可以修改他的数据结构(属性)；
    - var、let 和 const 区别的实现原理是什么？ var会预先分配内存空间，等到执行时再存储变量。let不会预先分配，而是在栈内存找是否已经存在这个变量。const同
    - 解答：https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/133

- 箭头函数与普通函数的区别

    1.  箭头函数更加简洁
    2. 每个执行期上下文中都有一个this，箭头函数不会创建自身的执行期上下文，也就没有自身的this，它的this，取决于定义时所在的对象（也就是函数外层第一个普通函数的this），而不是使用时所在的对象。
    3.  不能作为构造函数被new，因为没有prototype原型对象，也没有自己的this，call、apply无法改变箭头函数指向
    4. 没有arguements对象，可用rest参数替代
    5. 不能用作`Generator`函数，不可以使用yield关键字

-  `async` 声明一个函数是异步的 会返回一个**立即resolve**的promise对象,return返回的值，会成为then回调的参数，若无返回值则为undefined。

    `await ` 等待一个async函数的完成  （等promise的结果),await只能出现在async函数中。

    作用：async会将其后函数的返回值封装成一个promise对象，而这个await会等待这个promise完成，并将其resolve的结果返回出来。

    ```js
    function sayHi(name) {
      return new Promise((resolved, rejected) => {
        setTimeout(() => {
          resolved(name);
        }, 2000)
      })
    }
    
    async function sayHi_async(name) {
      const sayHi_1 = await sayHi(name)
      console.log(`你好， ${sayHi_1}`)
      const sayHi_2 = await sayHi('李四')
      console.log(`你好， ${sayHi_2}`)
      const sayHi_3 = await sayHi('王二麻子')
      console.log(`你好， ${sayHi_3}`)
    }
    
    sayHi_async('张三')
    // 你好， 张三
    // 你好， 李四
    // 你好， 王二麻子
    ```

    

    

-  





## Promise

回调函数的问题：

1. 回调函数执行多次
2. 回调函数没有执行
3. 回调函数有时同步执行有时异步执行

应用 ：红绿灯问题

缺点：1. promise内部的错误并不会影响执行，解决：在回调catch里捕获错误。

			2. 只能有一个完成值，解决：数组解构
   			3. 一旦创建，无法取消
            			4. 无法得知pendding的状态

promise内部 同步

then 异步 

all(全部执行成功才resolve)，race（有一个就resolve), 限流（优化，只能同时进行？个）

## webpack

使用create-react-app脚手架内置的webpack配置，再用npm run build打包。若要修改，则用npm run eject(删除.git | 代码提交)暴露配置文件，再进行修改。

**## webpack优化**

去npm官网搜，按照提示做。

**### 上线时候的优化**

\1. 项目体积较大，可以将第三方库(react/react-dom)等独立出来单独加载，这样就不用每次打开的时候都重新加载，提高首屏加载速度。

externals

 // externals: {

 //  react: 'React'

 // },

https://webpack.js.org/configuration/externals/#root

\2. webpack将多个模块打包之后的代码集合称为chunk，为了将一些很少变化的库(react,redux,lodash)与业务代码分开，或者是一些在不同入口公共使用的公共模块，我们用splitChunk将他们分开打包。

webpack4之后

optimization.splitChunks: {

   chunks: 'all',  // all 所有的 import // async import() 

   cacheGroups: {

​    vendors: {

​     test: /[\\/]node_modules[\\/]/,

​    },

   }

  }

\3. style.loader 让css被包在style标签中插入到js中，js和css混在一起，这样会导致js没加载完，页面也没有css样式。

每个js文件中的css独立打包，防止样式命名冲突。

优点：按需加载，独立打包。

webpack4之后 MiniCssExtractPlugin.loader 防止命名冲突

https://www.npmjs.com/package/mini-css-extract-plugin

\4. 图片压缩 imagemin plugin for webpack

new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })

**### 提升打包速度** 

并行打包HappyPack。 

webpack是node写的工具，但是node是单线程的。不能并发处理，只能一个个处理。在我自己写的小demo中没有得到检验，反而打包好像更慢了。适用于大型项目。

HappyPack的基本原理是将这部分任务分解到多个子进程中去并行处理，子进程处理完成后把结果发送到主进程中。

https://www.npmjs.com/package/happypack



**### DLL**

预先把动态链接库打包一次，每次只需要引入。

这样可以把第三方基础库分离，即每次只打包项目自身的业务代码。

新建webpack.dll.config.js

package.json "dll":"webpack --config webpack.dll.js"

先运行npm run dll



## react

fiber

hooks

redux





## 12

