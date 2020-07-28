// 散列 / 哈希
const md5 = require('md5');
console.log(md5('abc'));
console.log(md5('abc'));
// 如果两次MD5的结果是一样的
// 两次原始的未加密的内容是一样的
// 长度是一样的
// 两次MD5(big.js)对比一下
// 协商：缓存 新的内容 
// 服务器判断是否可以缓存， 要先知道内容有没有发生变化
