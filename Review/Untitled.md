14.什么是Immutable? Immutable数据的优势?
deepcopy（深拷贝）来避免被修改，但这样做造成了CPU和内存的浪费。
Immutable可以很好地解决这些问题
其它节点则进行共享。
优点:
1. Immutable降低了Mutable带来的复杂度
2．结构共享节省内存
3.undo/Redo，Copy/Paste，甚至时间旅行这些功能做起来小菜一碟
4．拥抱函数式编程Immutable本身就是函数式编程中的概念，纯函数式编程比面向对象更适用于前端开发。
因为JavaScript 中的对象一般是可变的(Mutable)，因为使用了引用赋值，新的对象简单的引用了原始对象，改变新的对象将影响到原始对
象。虽然这样做可以节约内存，但当应用复杂后，这就造成了非常大的隐患。为了解决这个问题，一般的做法是使用shallowCopy(浅拷贝）或
Immutable数据就是一旦创建，就不能再被更改的数据。对Immutable对象的任何修改或添加删除操作都会返回一个新的Immutable对
象。Immutable实现的原理是(持久化数据结构)，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免深拷贝把
所有节点都复制一遍带来的性能损耗，Immutable使用了结构共享，即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，
字100%回|