## 函数 
- 函数是一等对象
- 构造函数可以独立运行
- 对象属性-》原型对象-》 原型链 -》 Object -》 null

new的过程
    创建一个新对象
    将该对象的__proto__ 链接到 构造函数的Prototype

    函数return的优先级 大于 new的优先级
    构造函数如有返回值 为基本数据类型 忽略
    若为对象 则遵守函数返回值原则
     instanceof
     new
     hasownproperty
     Object.keys
     Object
