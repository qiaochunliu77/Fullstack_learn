// 编写一个名为 sumIntervals/sum _ interval ()的函数，
// 该函数接受一个间隔数组，并返回所有间隔长度的和。
// 重叠的间隔只能计算一次。区间间隔由一对整数以数组的形式表示。
// 间隔的第一个值总是小于第二个值。间隔示例: [1,5]是从1到5的间隔。这个间隔的长度是4。

// 1. 
function sumIntervals(intervals){
    var numbers = [];
    intervals.forEach( function(interval) {
      for (var i = interval[0] ; i < interval[1] ; i++) {
        if (numbers.indexOf(i) == -1) numbers.push(i);
      }
    });
    return numbers.length;
  }
//   1,2,3,4
//               7,8,9,10
//       3,4,5
  console.log(sumIntervals([
    [1,4],
    [7, 10],
    [3, 5]
 ]))

//  2. ？
function sumIntervals(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0] //递增排
    })
    let max = intervals[0][1]
    return intervals.reduce((pre, cur, i) => {
        if (i >= 1) {
            if (cur[0] < max) {
                cur[0] = max;
            }
            if(cur[1] > max) max = cur[1]
        }
        if(cur[1] < cur[0]) return pre = pre
        return pre = pre + (cur[1] - cur[0]);
    }, 0)
}