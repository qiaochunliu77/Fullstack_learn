/*
const mid1 = (next === 原始的dispactch) => (action) => {
    console.log('mid1 start')
    if (typeof action === 'function') {
        return action()
    }
    let res =  next(action);//交给下一个中间件
    console.log('mid1 end')
    return res
}
const mid2 = (next) => (action) => {
    console.log('mid2 start')
    next()
    console.log('mid2 end')
}
*/