// 读写文件
const fs = require('fs');
const {promisify}  = require('util');// 手写?

fs.readFile('./1.js', (err, content) => {
    if (!err) {
        // console.log(content)
        fs.stat('./1.js', (err, stat) => {
            console.log(stat)
        })
    }
})

// promise
let promiseReadfile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, content) => {
            if (err) {
                resolve(content)
            }
        })
    })
}
// promisify 怎么实现的
let readFilePromise = promisify(fs.readFile)
readFilePromise('./1.js')
.then(console.log)

function promisify1 (fn1) {
    return function (...args) {
        // promise 风格 
        return new Promise((resolve, reject) => {
            fn1(...args, (err, content) => {
                if(!err) resolve(content);
            })
        })
    }
}
console.log('11111111')
promisify1(fs.readFile)('./1.js')