const {done,obj} = require('./common1')
console.log(done)
console.log(obj)
// let done= common1.done; //基本数据类型
// let obj = common1.obj //引用 会变
setTimeout(() => {
    console.log(done)
    console.log(obj)
},5000)