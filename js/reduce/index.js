var arr = [1,2,3,4];
var num = arr.reduce(function(pre, cur, index, arr){
    console.log(pre, cur, index, arr)
    return pre + cur;
})
console.log(num)