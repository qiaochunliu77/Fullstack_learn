//十六进制
// const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65,0x72]);

// console.log(buf.toString())


//1. 字符串的每一位  去找他的ascii
//2. map 由0x + charCodeAt 字符串拼接
//3. Buffer from


const array = 'hello world'.split('').map(function(x) {
    return '0x'+ x.charCodeAt(0).toString(16)
})
console.log(array)
const buff = Buffer.from(array)
console.log(buff)

// 最关键的地方 存储的本质 内存 物理单元
// 高层的string -> 底层的buffer
// 分部思维
//  1. 字符串每一位 去找他的ascii
//  2. map 0x + charCodeAt 字符串拼接
//  3. Buffer from 