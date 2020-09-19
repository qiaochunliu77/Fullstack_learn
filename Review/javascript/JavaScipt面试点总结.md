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

### 7.原型 原型链

![image-20200908143005021](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20200908143005021.png)

```
	在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们是不应该能够获取到这个值的，但是现在浏览器中都实现了 __proto__ 属性来让我们访问这个属性，但是我们最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对象的原型。


当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就
是我们新建的对象为什么能够使用 toString() 等方法的原因。

特点：JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。
```

### 8. 实现继承有哪些方法

```
1.构造函数
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

### 9. react中类组件和函数组件有什么不一样

```
函数组件
1. 内部没有state私有的数据，useState也是自己私有的
	无状态组件 没有自己的生命周期
2. 只有props来接受外界传递过来的数据
没有this
3. 由于删除了组件的生命周期，所以运行速度会相对快一些
4. 应用场景：一个组件只需要根据外界传来的props，渲染固定的页面结构
类组件
1. 除了有父类的props，还有this.state这个存放自己私有属性
	有状态组件，有自身的生命周期
	有自身的this
2. 应用：一个组件需要在不同阶段执行不同的业务逻辑

```
### 17.useMemo和useCallback的区别

```
1.useMemo是让函数在依赖不改变的情况下，不对这个值进行重新运算	
1.useCallback是对函数进行缓存，用于子组件引用父组件的函数，父组重新渲染，避免函数的引用发生改变

2.useMemo优化的是函数进行运算的开销
2.useCallback优化的组件重新渲染的开销
```

### memo和usememo的区别

```js
1. React.memo是高阶组件，一般用它包裹子组件
	对props做一个浅层的比较，如果props没有发生改变，则不会重新渲染次组件。
	父组件变化了，子组件不会重新渲染
2. useCallBack 缓存函数
	<ChildMemo name={name} onClick={ useCallback((newName: string) => setName(newName), []) }/>
	返回一个函数，只有当依赖项发生变化的时候，才会更新，返回一个新的函数。
3. useMemo 缓存值 当值变了才重新执行 
```

### PureComponent与memo

```
一旦父组件渲染，所以子组件都要跟着渲染，尽管这个子组件并没有任何改变。在这种情况下，这个子组件的渲染就变得多余。


```

### 面向对象语言的特征

封装，继承，多态 

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

### 前端工程化，代码模块化带来的问题

```
开发 测试 上线 自动化
```



### react和vue改变数据的方式，diff算法的差异

```
vue:数据和页面双向绑定，只要数据变了页面自动更新,vue知道页面依赖哪些数据 不需要domdiff 只需要在单个组件进行diff

react:通过setState改变 从根节点开始diff

时间复杂度：都是O(n),vue空间复杂度更高，因为要对数据跟页面由一个依赖关系的收集
```







### 11. 传统的diff和react 的diff有什么区别？好在哪里？



