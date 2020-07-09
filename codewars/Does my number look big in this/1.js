function narcissistic(value) {
    let len = value.toString().length;
    let res = 0;
    for(let i = 0 ;i < len; i++){
        let r = value.toString().substr(i,1);   //每一位数字
        res += Math.pow(r,len)
    }
    return res == value ? true : false
  }
  console.log(narcissistic(1634))
//   slice(2) 2到最后
//   substring(2) 2到最后

//   slice(起点，终点)
//   subString(起点，终点)
//   subStr(起点，长度)