let arr = [0,1,2,3,4,5,6,7,8,9]
let res = [0,0,0,0,0,0,0,0,0,0]
// 伪随机
// sort会对原来array产生影响 每一次都是用前一次乱序完的结果
console.log(arr.sort(() => Math.random() -0.5))
// 两个数交换的概率 50%
// 两个数 可以交换 也可以不交换 实现乱序


// 每一个数字在每一位的概率是均等的 => 把数组重复乱序足够多的次数 
// 那么吧每一位上面结果计算出平均值 无限趋近于4.5

function shuffle(arr){
    return arr.sort(() => Math.random() - 0.5)
}
let t = 10000;
for(let i= 0 ; i < t; i++){
    let sorted = shuffle(arr.slice(0));
    for(let i = 0; i < sorted.length; i++){
        res[i] +=sorted[i]
    }
}
console.log(res.map(sum => sum / t))

// 正在进行比较的两个数 
// 升序 
// 小于0 那么a会排到b之前
// console.log(arr.sort((a, b) => a-b))
// // 降序
// console.log(arr.sort((a, b) => b-a))

// 相邻
function Bubble() {
    let len = arr.length;
    for(i = 0; i < len - 1; i++){
        for(let j = 0; j < len - 1 - i; j++){
            let k = j+1;
            if(arr[k] > arr[j]){
                [arr[k], arr[j]] = [arr[j], arr[k]]
            }
        }
    }
    console.log(arr)
}
Bubble(arr)