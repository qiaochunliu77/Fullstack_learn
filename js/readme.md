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