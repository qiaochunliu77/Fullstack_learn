function comp(array1, array2) {
    //your code here
    if(array1.length == 0 || array2.length == 0) return false
    array1.sort((a,b) => a-b);
    array2.sort((a,b) => a-b);
    return array1.map(v => v*v).every((v,i) => v == array2[i])
}
let a = [121, 144, 19, 161, 19, 144, 19, 11],
    b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a,b))
// map 对数组每项进行处理，返回处理后的结果
// filter return返回符合要求的数组
// some 只要有一项符合条件就返回true
// every 全部项都满足才返回 