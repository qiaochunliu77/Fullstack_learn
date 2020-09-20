function timeCompare(time1, time2) {
    let t1 = time1.split(':'), t2 = time2.split(':');
    let len = Math.max(t1.length, t2.length);
    for (let i = 0; i < len; i++) {
        let num1 = t1[i] ? parseInt(t1[i]) : 0;
        let num2 = t2[i] ? parseInt(t2[i]) : 0;
        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        }
    }
    return 0;
}

let times = ['14:30:40', '12:08:24', '6:20:02']
times.sort(timeCompare)
console.log(times)
let arr = [1, 2, 7, 3, 4]
arr.sort((a, b) => {
    if (a > b) {
        return 1 // 交换位置
    } else if (a < b) {
        return -1 // 
    } else {
        return 0
    }
})
arr.sort((a, b) => a - b)
console.log(arr)

// timeCompare('13:00:23', '12:57:14')