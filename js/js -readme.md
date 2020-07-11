
## this
    1.全局window
    2.functionName.call（obj,实参列表...）将this指向obj
    3.apply(obj,[实参列表]) 将this指向obj
## es6
 类数组 ->不是数组 不能用foreach，map等数组的api
 arguments 实参列表 类数组 
 document.querySelectorAll 选出来的是nodelist 类数组对象  
 - Array.prototype.forEach 可以重写数组的foreach方法 ，改变this指向 ，使得类数组能够用数组的api
 - .Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
 ...拓展运算符 b
 [...str] {...obj}  
## date 2020-4-27  -- 4-28
## DOM document 文档就是网页
- js -> html 转化
- appendChild
- 如何添加文本
ul>li>Textnode
document.createElement('tag') 标签节点 => nodeType值=1 可以添加属性值 
document.createTextNode(tag) 文本节点  => nodeType值=3

tag: 为对象 object 为标签 为文本
- nodeType

- 插入html标签 步骤
1. document.createElement('tag') 
2. document.createTextNode(student.name) 
3. oLi.appendChild(oA);

- insertBefore
 
## 面向业务编程
- this.state.liked  true/false html更新
- 分步
1. 动态的讲like botton 添加到页面上
2. likeButton  创建class 类 方便复用
3. 既要用 Html 快速完成DOM ，又要能添加事件
  - 要dom 节点对象
  - innerHTML
## this 指向  你不知道的javascript
- 作为对象方法的调用,this 指向对象本身
- 作为事件对象， this 指向事件发生的元素
  bind 可以强行去绑定函数内部的this指定
   

## 封装 class 复用
- constructor 声明属性 this.state
- render() 渲染到页面上
- changeLikeText()

  class LikeBotton {
      constructor () {

      }
      render() {

      }
      changeLikeText() {

      }
  }

  ## js api
  - 获取位置
    - clientX : 相对于浏览器视口
    - offsetX : 相对于事件的目标对象 被处罚元素  e.target
    - pageX : 相对于html文档 页面长 滚动条
    - screenX : 相对于用户显示屏
    - pageXOffset : x滚动条滚动过的像素数


## 作用域
- 作用域:程序存储和访问变量的规则
  包含：全局作用域
        块级作用域(用了let、const定义)
        函数作用域
- 作用域链：一层一层往外找

``` js
function addABC(){
  var a = 1,b = 2;
  
  function add(){
    return a+b+c;
  }
  return add;
}

var c = 3

var globalAdd = addABC()

console.log(globalAdd()) // 6
``` 
- 自由变量：像abc这样在函数中被使用，但既不是函数参数，也不是函数局部变量，而是一个不属于当前作用域的变量，此时它相对于当前作用域来说就是一个自由变量。
- 闭包：像add这样引用了自由变量的函数就叫闭包。

- LHS、RHS是引擎在执行代码时，查询变量的两种方式
``` js
  name = 'lqc'//LHS
  var myName = name;//RHS
```
- LHS  变量出现在赋值操作的左侧。意味着变量赋值或写入内存，查询的是变量的内存地址。
- RHS  变量出现在赋值操作的右侧。意味着变量查找或从内存读取，查询的是变量的内容。

## 词法作用域
  

