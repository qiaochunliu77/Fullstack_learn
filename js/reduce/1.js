function reduce(arr, reduceCallback, initialValue) {
    // 参数校验
    if(!Array.isArray(arr) || !arr.length || 
    !typeof(reduceCallback) === 'function'){
        return []
    }else{
        // initialValue 0 1
        let hasInitailValue = initialValue !== undefined;
        let value = hasInitailValue ? initialValue : arr[0];
        for (let i = hasInitailValue ? 0 : 1; i < arr.length; i++){
            value = reduceCallback(value, arr[i], i, arr)
        }
        return value;
        
        // 1. initialValue false 少执行一次
        // for
        // 2. reduceCallback 怎么合并
    }
}
reduce([1,2,3,4], function(pre, cur, index, arr){
    return pre + cur;
}, 0)