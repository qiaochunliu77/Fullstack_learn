// 实现一个函数 move _ zeros，它接受两个参数，首先是一个数字数组 arrNum，其次是一个布尔值 isRight (默认值为 true) 
// ，如果 isRight 为 false，返回数组中所有的0到右，如果 isRight 为 true，则返回左。


function move_zeros(arrNum, isRight=true){
    let zero = [];
    let result  = arrNum.filter(function(num) {
        if(num == 0) zero.push(num)
        return num > 0
    })
    if(!isRight) {
        return  zero.concat(result)
    }else{
        return result.concat(zero)
    } 
}
console.log( move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0],true));