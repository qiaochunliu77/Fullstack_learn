function solution(number) {
    let res = [];
    for (let i = 1; i <number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            res.push(i)
        }
    }
    let t = res.reduce((a, b) => {return a + b},0)
    return t
}
console.log(solution(10))