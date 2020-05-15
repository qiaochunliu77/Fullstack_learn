//  两个数 比较的时候
//  100% 交换 洗牌 
// 后
// 从 后往前 取一个数 a
// 从 未洗牌的区间内随机取出一个数 b
// a b 交换 从后往期重复这个过程
let arr = [0,1,2,3,4,5,6,7,8,9]
function shuffle(arr){
    let len = arr.length
    for(let i = 0; i < len; i++){
        //b 0 ~ len-i
        let idx = Math.floor(Math.random() * (len - i));
        //a arr[len - 1 - i]
        [arr[len - 1 - i],arr[idx]] = [arr[idx], arr[len-1-i]]
    }
    return arr
}
console.log(shuffle(arr))