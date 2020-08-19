    扩展原型链的集中几种方法：
    1.Object.setPrototypeOf(obj, newobj)
    2.obj.prototype = 
    3.let obj = Object.create(foo.prototype) 
    创建一个对象 并将原型链指向foo.prototype
    4.obj.__proto__ =

    修改this指向：
    call(thisObj, arg1, arg2, arg3, arg4);
    apply(thisObj, [args]);