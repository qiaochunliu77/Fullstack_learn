
### 1. react中类组件和函数组件有什么不一样

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

### 2. 性能优化

```
memo
styledcomponent
防抖节流 
图片懒加载  路由懒加载
usememo usecallback

```

### 3.useMemo和useCallback的区别

```
1.useMemo是让函数在依赖不改变的情况下，不对这个值进行重新运算	
1.useCallback是对函数进行缓存，用于子组件引用父组件的函数，父组重新渲染，避免函数的引用发生改变。
useCallback返回一个函数和依赖，依赖项的变化决定会否会重新返回一个函数。依赖为空数组，代表永远不会更新
eg：子组件需要用到父组件的函数，但是每次重新渲染，父组件都会重新声明一个函数，新旧尽管都一样，但是他们的引用不一样，还是会重新渲染。

2.useMemo优化的是函数进行运算的开销
2.useCallback优化的组件重新渲染的开销
```

### 4.component和purecomponent的区别

```
很相似。
区别在于React.Component并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。

如果赋予 React 组件相同的 props 和 state，render() 函数会渲染相同的内容，那么在某些情况下使用 React.PureComponent 可提高性能。
```

```
React.purcomponent 中的shouldcomponentUpdate() 仅做对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为法务检查深层次的差别，产生错误的对比结果。所以，仅在props和state较为简单时，才使用purecomponent,或者在深层数据结构发生变化时调用forceUpdate()来确保组件被正确的更新。也可以使用immutable对象加速嵌套数据的比较。
```

### 5.PureComponent与memo

```
memo为高阶组件，通过记忆组件渲染结果的方式来提高组件的性能表现。
memo仅检查props变更。如果函数组件被React.memo包裹，且其实现中拥有useState过着useContext的hook，当context发生变化时，它仍会重新渲染。
默认情况下只会做浅层对比，如果我们想要控制对比过程，可以将自定义的比较函数通过第二个参数传入来实现。
```

### 6.虚拟dom

```
真实页面对应一个DOM树。在我们传统页面的开发模式中，每次需要更新页面时，都需要手动操作dom来进行更新，而我们知道dom操作性能消耗很大。于是在react中出现了虚拟dom，他把真实dom树转换成js对象树。

每当数据更新时，他会重新计算虚拟dom树，并和上一次生成的dom树做对比，使用diff算法找出不同的部分，再将这些应用到真实的dom上。
```

### 7.什么选择使用框架而不是原生

```
优点：
	1. 组件化: 其中以 React 的组件化最为彻底,高度的组件化可以是我们的工程易于维护、代码易于复用。
	2. 天然分层: JQuery 时代的代码大部分情况下是面条代码,耦合严重,现代框架不管是 MVC、MVP还是MVVM 模式都能帮助我们进行分层，代码解耦更易于读写。
	3. 生态: 现在主流前端框架都自带生态,不管是数据流管理架构还是 UI 库都有成熟的解决方案，react全家桶 reux react-router react-router-dom 。
	4. 开发效率: 现代前端框架都默认自动更新DOM,而非我们手动操作,解放了开发者的手动DOM成本,提高开发效率,从根本上解决了UI 与状态同步问题.
```

### 8.useState原理

```
接受一个初始值，返回一个state和修改state的方法

原理 通过闭包 

包一个立即执行函数 声明我们私有的state 这个函数就是useState 函数里面接受

多个state 

useState 的核心理念就是闭包，它通过闭包让作用域里的变量,在函数执行完之后依旧保持，这样就可以确保我们的数据不会丢失。它在最外层通过IIFE(立即执行函数)将我们代码中的变量、函数的定义隔离出来，我们在外层声明一个私有的state,然后返回一个函数，它接受一个初始state作为参数，当我们调用这个函数的时候，它会先判断私有的state是否有值，如果有，使用私有state的值，如果没有，使用初始值。在这个函数里面还有一个setState函数，用于修改我们的私有state 变量，它接受一个新的 state参数，这里面会触发页面的重新渲染，最后我们将私有的state和setState 拼成一个数组返回出去。
```

```
let hooks = [];
let currentIndex = 0;// 当前组件用到的所有hook 闭包里面的变量
const useState = (function () {
  return function (initValue) {
    // currentIndex 组件里 hooks调用的顺序
    // 不能出现在任何的逻辑判断里面 if语句 
    // 1useState 2if() {useState} 3useState()
    // [[state, setState],[],[]]
    if (!hooks[currentIndex]) hooks[currentIndex] = [];//该索引不存在就初始化为一个数组
    let hookstate = hooks[currentIndex];
    hooks[currentIndex][0] = hookstate[0] || initValue;//等于上一次的值 或者 初始值
    function setState(newState) {
      hookstate[0] = newState;
      render()
    }
    hookstate[1] = setState;
    currentIndex++;
    return hookstate;
  }
})()
```

### 9.setState是异步还是同步

```
setState本身并不是异步，只是因为react的性能优化机制体现为异步。

1. setState在合成事件和钩子函数(生命周期)下为"异步"，在原生事件(addEventLisner)和setTimeout下为同步。
2. setState的异步并不是说是异步实现的，而是钩子函数和合成函数会在更新之前被调用，导致这两个没法立马拿到更新之后的值，形成了所谓的“异步”。
可以通过setState第二个参数callback拿到更新后的结果。
3. setState的批量更新优化也是建立在“异步”(合成事件，钩子函数)之上的，在原生事件和settimeout中不会更新。在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对齐进行覆盖，取最后一次的执行。如果是同时setState多个不同的值，在更新时会对齐进行合并批量更新。
```

### 10. hooks的实现原理

```
hooks 是通过一个总的数组或者链表来维护的，他将每个hooks函数放到数组里面，当我们声明hooks函数时，它都会依次按照顺序存起来，当我们调用相关的函数时，它也会按照顺序执行。所以以相同的顺序调用就是他的实现原理。这也是他不能放在 if的逻辑判断和循环语句之中的原因。
```

### 部署到上线的过程

react-app

yarn build 打包成静态资源 

final shell 连接了服务器 通过终端管理器 传上去 

将它 传到 var / html /www 修改ngnix的

在服务器上安装 n  nigix代理  通过

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

###  diff 算法

```
diff 算法基于两个假设
1. 相同的组件产生类似的dom结构，不同的组件产生不同的dom结构。
2. 同一层级的一组节点通过唯一的id进行区分。
diff 算法有三种策略：

	tree diff 对树进行分层比较，两棵树只会对同一层次的节点进行比较。
	component diff React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff 算法分析。
	element diff 当节点处于同一层级时，diff 提供了 3 种 节点操作，分别为 插入 移动 删除。
```





