// 函数 
// next 
const mid1 = (next) => (action) => {
    console.log('mid1 start')
    if (typeof action === 'function') {
        return action()
    }
    let res =  next(action);//交给下一个中间件 
    console.log('mid1 end')
    return res
}
// 对象
const mid2 = (next) => (action) => {
    console.log('mid2 start')
    next()
    console.log('mid2 end')
}
// applymiddleware 
// redux已经加载完了 两个中间件 
// mid1(mid2(最原始的dispatch))
const middlewares = [mid1, mid2]
// compose flow 组合 
function myFlow(fns) {
    // 组合所有的函数
    // 第一个函数的结果给下一个函数
    // fn3(fn2(fn1()))
    return function (defaultValue) {
        let res = defaultValue;
        while (fns.length) {
            let first = fns.shift();
            res = first(res)
        }
        return res
    }
}
// chain完之后 拿到的就是 mid2 的结果 
const chain = myFlow(middlewares)
// 中间得到上一次的结果 也是个函数 
let = nbDispatch = chain(() => {
    console.log('就是redux源码 内部 最原始 只能处理action 是纯对象的 dispatch函数')
}); 
nbDispatch({a:1})