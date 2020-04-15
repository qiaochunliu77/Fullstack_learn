## 类型
### 基本数据类型
Null
Undefined
String
Number
Boolean
### 复杂数据类型 引用 存在不同的栈内存中，地址不一样
Object
    array[]
    function(){}
    对象字面量{}
    正则表达式reg /-/g
    Date

## 定义变量的关键词
var:es5  无块级变量
let 有块级变量  可变
const  常量 不可变

## 
 == 进行隐式类型转换后，值相等
 === 不进行隐式类型转换 值相等 object === object 都是false

## 两种盒模型
width= (border+padding+content)
content-box 标准盒模型w3c(默认的) 
    宽高设置给content区域
border-box 怪异盒模型 ie的  
    宽高设置给 border及以内的区域  


## 栈内存
    小：基本数据类型
    赋值：互不相关
## 堆内存
    大：引用数据类型object
    大小容易调整
    obj1=obj
    两个指向同一个存储地址，一个变化了引起另一个变化
