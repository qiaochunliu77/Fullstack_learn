### 1. js数据类型

- 栈 ：原始数据类型（Number，String，boolean，null，undefined，Symbol，bigint）
- 堆：引用数据类型（Object）

```
两种类型的区别是：存储位置不同。
1.原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

2.引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；
引用数据类型在栈中存储了 指针，该指针指向堆中该实体的 起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
```

### 2.undefined 与 undeclared 的区别

``` 
已在作用域中声明但还没有赋值的变量，是 undefined 的。
相反，还没有在作用域中声明过的变量，是 undeclared 的。浏览器会报引用错误，ReferenceError
```

### 3.undefined 和 null 的区别

```
首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。

undefined 在 js 中不是一个保留字，这意味着我们可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

注意：typeof(Null) = Object （历史遗留问题）
undefined == null true
undefined === null false
```

### 4.常用的判断类型的方法

```js
1. typeof  能识别基本数据类型，但会将null，array，object统一归为object类型，可以识别function
2. instanceof  不能识别基本数据类型，可以识别引用 如array，object，function
	obj instanceof Object 看obj的原型链上是否有Object的原型
3. constructor obj.constructor === Object 
	null,undefined没有constructor方法，但他是不安全的，因为constructor的指向是可以被改变的
4. Object.prototype.toString.call 可以较全的判断
let num2 = 456;
console.log(Object.prototype.toString.call(num2) == '[object Number]')  //true
```

### 5. == 和 === 区别

|                         ==                         |           ===            |
| :------------------------------------------------: | :----------------------: |
|                   ==是非严格等于                   |      === 是严格等于      |
| ==判断的时候会进行类型转换，然后判断两边值是否相等 | 不会进行转换，直接比较值 |
|               undefined==null是true                |  undefined==null是false  |

### 6. 深拷贝浅拷贝是怎么实现的，有什么区别

- 深拷贝和浅拷贝是只针对Object和Array这样的引用数据类型的。
- 浅拷贝只是复制某个对象的指针（地址），对象只会被克隆最外面的一层，至于更深层的对象，依然是通过引用指向同一块堆内存。
- 深拷贝会创建一个一模一样的的对象，新旧对象不共享内存，修改新对象不会改到源对象
- 赋值 只是复制对象的指针，一个修改另一个也会跟着修改。

### 闭包

```
变量通过作用域链来查找，作用域链由词法作用域决定。
词法作用域就是指作用域是由代码中函数的 声明 的位置来决定的，词法作用域是静态的作用域。

在 JavaScript 中，根据词法作用域的规则，
内部函数总是可以访问其外部函数中声明的变量。当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。比如外部函数是 foo，那么这些变量的集合就称为 foo 函数的闭包。
如果该闭包会一直使用，那么它可以作为全局变量而存在；但如果使用频率不高，而且占用内存又比较大的话，那就尽量让它成为一个局部变量。
扯到useState原理
```



### 7.原型 原型链

![image-20200908143005021](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20200908143005021.png)

```
	在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们是不应该能够获取到这个值的，但是现在浏览器中都实现了 __proto__ 属性来让我们访问这个属性，但是我们最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对象的原型。


当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就
是我们新建的对象为什么能够使用 toString() 等方法的原因。

特点：JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。
```

### for in for of

```
for of 遍历可迭代对象 (Array,Map,Set,String,TypeArray类数组)
遍历值
可迭代对象：实现 Symbol.iterator（可迭代协议）内部有next方法
for in 遍历一个对象的除Symbol以外的可枚举属性
遍历属性
```

```
Map 对象保存键值对，并且能记住键的原始插入顺序。在迭代时会根据插入顺序来进行，for of 循环在每次迭代后会返回一个形式为[key,value]的数组。

与Object的不同:
Ma的键 可以是任意值，Object 的键必须是String或者Symbol。
Map是有序的，Object是无序的。
Map可以通过size属性获取个数。
Map是iterabel的，可以直接迭代。object需要先获取它的键然后才能迭代。
用法：
let a = new Map()
a.set(key,'value')
a.get(key)
```

```
Set 存储任何类型的唯一值。Set中的元素是唯一的。
可以存储undefined和NaN，NaN被认为是相同的值。
用法：
let myset = new Set()
myset.add(1);
myset.has(1) 
```

```
continue 跳过代码的剩余部分并进入下一个循环
break 终止循环
```

```
类数组
有length属性的对象
Array.isArray() 会返回false

常见的类数组：
arguments
dom相关的 Nodelist对象, 就是获取的dom列表集合

类数组转换成数组的方法：
    Array.from()
    Array.prototype.slice.call(likeArray)
    [...likeArray]
```

### 数组的方法

```
增加和删除
1. array.push(e1, e2, ...eN) 添加到末尾，返回数组长度
2. array.unshift(e1, e2, ...eN) 添加到开头，返回数组长度
3. array.pop() 删除最后一个元素 ，并返回最后一个元素
4. array.shift（） 删除第一个元素，并返回。数组为空，返回undefined
5. array.splice(start[deleteCount, item1, item2, ...])
返回一个被删除的数组。start,开始的位置。deleteCount，删除的个数。items,要添加进数组的元素。

1.join('') 连接
2.split('') 切割 
3.array.slice(start, end) 截取start开始，end结束(不包括) 
不修改原数组 ，返回新的数组
4.array.concat([item1[, item2[, . . . [,itemN]]]]) 合并 不修改原数组 返回一个新的数组 

元素在数组中的位置
1. indexOf()
2. find(callback) 找出第一个符合条件的数组元素
3. findIndex(callback) 找出第一个符合条件的位置
4. includes(ele, startIndex) 是否包含某值

数组的遍历及迭代
1. array.filter(callback) 过滤掉不符合的元素 返回通过的
2. array.every(callback) 每一个都要通过测试 返回true
3. array.some(callback) 只要有一个通过就返回true
4. array.map(callback) 不改变原数组，返回一个新的数组
5. array.forEach(callback) 为元素执行对应方法
6. array.reduce(callback)

不改变原数组：concat，slice，map 
forEach可以通过回调对原数组进行改变
```

https://www.jianshu.com/p/e1b43e56de08

### 柯里化





### 9. 0.1+0.2为什么不等于0.3？

0.1和0.2在转换成二进制后会无限循环，由于标准位数的限制后面多余的位数会被截掉，此时就已经出现了精度的损失，相加后因浮点数小数位的限制而截断的二进制数字在转换为十进制就会变成0.30000000000000004。

### 10. 如何理解BigInt?

```
BigInt是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。
```

因为在js 中，所有的数字都以双精度64位浮点格式表示，这导致 js 中的 Number 无法精确表示非常大的整数，会出现精度问题。也会有一定的安全问题。

创建BigInt, 只需要在数字末尾追加 n 即刻。

或者使用 BigInt 构造函数，BigInt("321321372198367981268")

### {} 和 [] 的 valueOf 和 toString 的结果是什么？

```
valueof() 取到对象的原始值
{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

[] 的 valueOf 结果为 [] ，toString 的结果为 ""
```

```
[].valueOf() // []
({}).valueOf() // {}
[].toString() // ""
({}).toString() // "[object Object]"
```

### javascript 代码中的 "use strict"; 是什么意思 ? 使用它区别是什么？

```
use strict 是一种es5添加的严格模式
使得js在更加严格的条件下运行

目的：
- 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的 Javascript 做好铺垫。

区别：
- 禁止使用with语句
- 禁止使用this关键字指向去全局对象 为undefined
- 对象不能有重名属性 
```

### 实现继承有哪些方法

```
1.构造函数
parent.call(this) 继承属性 
原型链 继承方法，属性(应用)  https://juejin.im/post/6844903833492013064#heading-2
2.原型继承
3.组合继承
	function Person(age){
		this.age = age;
	}
	function Student(age,name){
		Person.call(this,age)
		this.name = name;
	}
	Student.prototype = new Person()
	Programmer.prototype.constructor = Programmer // 修复构造函数指向
	
	let qmj = new Student(18,'qmj')
4.寄生继承
5.寄生组合继承...
```



### 面向对象语言的特征

```
封装，继承，多态 
```

### 静态属性

```
1. class es6
	class A () {
	static a = 1;// 继承的时候不会继承到静态属性
				// 继承的时候是继承 this上的属性和方法 
}
2. function es5
function A () {}
A.a = 1;// 静态属性
A.getIntialProps = () => {};// 静态属性 会直接执行 
```

#### 定义一个字符串，对这个字符串使用typeof，结果返回什么？既然返回结果是string，而属性和方法是对象才有的，那为什么会在我定义的字符串上可以使用split，join()，length等方法和属性？

```
let a = '123';
// a 上面就有split等方法了
// 其实在第一步有隐式类型转换的过程
=== new String(123)
```



### 常见移动web布局适配方法

1. 固定高度，宽度百分比:这种方法只适合简单要求不高的webApp，几乎达不到大型项目的要求，
   属于过时的方法。
2. Media Query(媒体查询)︰现在比较主流的适配方案，比如我们常用的样式框架Bootstrap就是
   靠这个起家的，它能完成大部分项目需求，但是编写过于复杂。
3. flex布局:主流的布局方式，不仅适用于移动Web，网页上也表现良好，这也是现在工作中用的最
   多的布局方式，那我们的项目尽量采用flex+rem的方式进行布局和完成移动端的适配。
4. 适配原理:将px替换成rem，动态修改html的font-size适配。它可以很好的根据根元素的字体大小
   来进行变化，从而达到各种屏幕基本一直的效果体验。

### http 和 https的区别 为什么https就更安全呢

http协议是明文传输数据，在传输过程中被窃取或者篡改，容易遭受中间人攻击。

所以为了访问更加安全，我么引入了加密方案，在tcp和http之间插入了一个安全层。安全层有两个职责，对发起http请求的数据进行加密操作和对接受到http的内容进行解密操作。

安全层一般有四种加密方法：

- 第一版 对称加密 加密和解密都是使用相同的秘钥(速度快 安全性低 )
- 第二版 非对称加密 有A,B两把秘钥，如果你是用A密钥来加密，那么只能使用B密钥来解密；反过来，使用B密钥加密，那么使用A密钥来解密 (速度慢 安全性高)
- 第三版 对称加密和非对称加密搭配使用 （黑客可以通过dns劫持，这样访问的就是黑客的服务器，黑客就可以获取我们的数据了）
- 第四版 添加数字证书 ca证书是权威部门颁发的 （更安全的方式）









