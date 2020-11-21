## js语言类型特点
js弱类型 动态语言 在运行时会检查数据类型
js八种数据类型分别是
String Number symbol Boolean null undefined bignum Object
基本数据类型是放在调用栈中的执行期上下文，也可以理解为存在栈中。
而 引用数据类型由于，数据可能会较多，全部存在栈中(执行期上下文)会导致程序运行效率慢
所以 引用数据类型 存在堆中 栈中有指向堆的引用 
即 原始类型的赋值会完整复制变量值，而引用类型的赋值是复制引用地址。

## 浅拷贝

只复制引用的地址

- Object.assign(target, source);(合并， 克隆)
```js
    let obj = {a:1,b:{m:3}}
    let obj1 = Object.assign({},obj)
    console.log(obj===obj1) //false
```
## 深拷贝

完全拷贝了一份

1. JSON.parse(JSON.stringify）
```js
    let w = { a: 1, b: { b: 2 } }
    let obj2 = JSON.parse(JSON.stringify(w))
    console.log(obj2)
```
缺点：
不能循环引用
所有的constructor都指向Object
如果对象中有函数，正则会出错

2. 递归
```js
    let map = new Map()
    function deepClone(obj){
        let res = {}
        if(map.get(obj)) return map.get(obj)
        map.set(obj,res)
        Object.keys(obj).forEach(k=> {
            if(typeof(obj[k]) === 'Object'){
                res[k] = deepClone(obj[k])
            }else{
                res[k] = obj[k]
            }
        })
        return res
    }
    let obj = {a:1,b:{b:1}}
    obj.t = obj
    let obj2 = deepClone(obj)
    console.log(obj,obj2 )
```


