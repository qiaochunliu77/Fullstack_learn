const _ = require('lodash')
// classA
function fn1(str) {
    return str+'1'
}
// classB
function fn2(str){
    return str.toUpperCase()
}
// 组合在一起？ 
// 面向对象 ？继承
// 函数式编程 ？flow
const fn = _.flow([fn1,fn2]);
console.log(fn('abc'))

// reduce也可以实现
// 手写组合
function myFlow(fns) {
    // 组合所有的函数
    // 第一个函数的结果给下一个函数
    return function (defaultValue) {
        let res = defaultValue;
        while (fns.length) {
            let first = fns.shift();
            res = first(res)
        }
        return res
    }
}