// 解构
const {add,minus} = require('./math')

function expected(result) {
    return {
        toBe:function(value) {
            if(result !== value){
                throw new Error('result ！== expected')
            }
        }
    }
}
function test(desc,fn) {
    //fn 有没有抛出错误
    try {
        fn()
        console.log(`${desc} 通过`)
    } catch (error) {
        console.log(`${desc} 不通过`)
    }
}


test('测试加法',()=>{
    expected(minus(3,7)).toBe(-4)
})
test('测试减法',()=>{
    expected(add(3,7)).toBe(10)
})