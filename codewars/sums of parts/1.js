function partsSums(ls) {
    // your code
    let sum = ls.reduce((a,b)=> a+b)
    ls.unshift(0)
    let res = ls.map((item ) => {
        return sum-=item
    })
    return res
}
console.log(partsSums([0, 1, 3, 6, 10]))