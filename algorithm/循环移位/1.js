let arr = [1,2,3,4,5,6,7], k= 3;

// function RShift(list, k) {
//     const copy = [...list];
//     const n = list.length;
//     if(k % n == 0) return
//     for(let i = 0; i < n; i++){
//         // 时间复杂度 O(n)
//         // 空间复杂度 O(n)
//         // [k + i] % n
//         list[[k + i] % n] = copy[i]
//     }
//     return list;
// }

// 三次翻转法
// 1. [0, n-k-1]
// 2. [n-k, n-1]
// 3. [0, n-1]

// 时间复杂度 O(n)

function reverse(list, start, end) {
    let t = null;
    while(start < end) {
        t = list[start];
        list[start] = list[end];
        list[end] = t;
        start ++;
        end --;
    }
    return list
}
function Rshift(list , k) {
    const n = list.length;
    if(k % n == 0) return
    reverse(list, 0, n-k-1)
    reverse(list,n-k, n-1)
    reverse(list,0, n-1)
}
// console.log(RShift(arr, k))

// 左移 << 相当于乘2
// 右移 >> 相当于除2
// 10 << 2 ===> 20
// 将二进制全部左移 然后补全空出来的一项
// 1010
// 10100

// 将二进制全部右移 然后移除右边多出来的一项
// 1010
// 101

// 按位操作
    // 按位或 两位同时为“1”，结果才为“1”，否则为0
    // 1000 & 111 
    // 8 & 7 = 0
    // 按位与 参加运算的两个对象只要有一个为1，其值为1。
    // 1000 | 111 = 1111
    // 8 | 7 = 15
    // 按位异或 参加运算的两个对象，如果两个相应位为“异”（值不同），则该位结果为1，否则为0。
    // 8 ^ 7 = 15

    // 两数不适用四则运算 算和
    function sum(a, b) {
        if(a == 0)return b;
        if(b == 0)return a;
        let newA = a ^ b;
        let newB = (a & b) << 1;
        return sum(newA, newB)
    }
    console.log(sum(9, 3))
// 1001 ^ 0011 1010



