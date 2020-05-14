//  两个数 比较的时候
//  100% 交换 洗牌 
let arr = [0,1,2,3,4,5,6,7,8,9]
function shuffle(arr){
    let len = arr.length
    for(let i = 0; i < len; i++){
        let idx = Math.floor(Math.random() * (len - i));
        [arr[len - 1 - i],arr[idx]] = [arr[idx], arr[len-1-i]]
    }
    return arr
}
console.log(shuffle(arr))