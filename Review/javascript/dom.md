## 冒泡 捕获

```
为了解决事件流/事件发生顺序的问题。
冒泡：事件会从最内层的元素开始向外层冒泡，span->div>body>html>document
捕获：由外层向内层；

怎么决定想让事件在哪一个阶段被调用？
element.addEventListener(event, function, useCapture)
useCapture：
true 在捕获阶段执行
false 默认 在冒泡阶段执行

阻止冒泡和捕获？
w3c的方法是e.stopPropagation()，IE则是使用e.cancelBubble = true
阻止默认事件？
w3c的方法是e.preventDefault()，IE则是使用e.returnValue = false;

利用事件流的特性，可以使用事件代理/事件委托，解决要给多个匀速绑定事件的问题。
eg：点击了li会冒泡到ul，就会触发绑定在ul上面的点击事件，再利用event.target找到实际发生的事件。

```



 event.currentTarget事件绑定给谁指向谁
 event.target鼠标点中哪个元素指向谁