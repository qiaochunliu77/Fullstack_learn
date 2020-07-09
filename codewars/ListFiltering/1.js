function filter_list(l) {
    // Return a new array with the strings filtered out
    // 在此kata中，您将创建一个函数，该函数接受非负整数和字符串的列表，并返回一个新列表，其中将滤除字符串。
    let res = [];
    for (let i = 0; i < l.length; i++) {
        if(typeof(l[i]) == 'number'){
            res.push(l[i])
        }
    }
    return res;
}