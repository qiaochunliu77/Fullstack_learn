/**
 * @author lqc
 * @date 2020-4-14
 * @func 爬楼梯算法
 * @param {@type number} n 
 * @return {}
 */


function climStairs(n){
    if(n >= 40) throw new Error('内存会溢出');
    if(n == 1) return 1;
    if(n == 2) return 2;
    return climStairs(n-1)+climStairs(n-2);
}
console.log(climStairs(1))