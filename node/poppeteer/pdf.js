//  async await
// promise 是对回调的一种封装 封装出then这种api出来
const fs = require('fs')
const promise1 = new Promise((resolve,reject) => {
    fs.readFile('./package.json',(err,info) => {
        resolve(info)
    })
})
const promise2 = (info) => {
    new Promise((resolve,reject) => {
        fs.writeFile('./p.json', info,(err) => {
            if(!err) {
                resolve();
            }else{
                reject();
            }
        })
    })
}
const promise3 = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },time)
    })
}
// 写法上同步 执行起来异步 
// then  链式调用 

promise1.then((info) => {
    return promise2(info)
})
.then(() => {
    // 等着前面的promise 
    console.log('读写完成')
    return promise3(2000)
})
.then( ()=> {
    console.log('ok')
})

// 回调写法
// fs.readFile('./pakage.json',(err,info) => {
//     fs.writeFile('./p.json',info,(err) => {
//         if(!err) {
//             resolve();
//         }
//     })
// })

// 
async function run() {
    // await 接一个 promise 那么后面的代码就会等待 等promise resolve了才会执行 
    // async + await 替代 .then 
    let info = await promise1  //promise1 info === resolve了什么 
    await promise2(info);
    await promise3(2000)
    console.log('ok')
}

// promise是用回调封装了一层
// 只是以then api 保证了 异步任务的 顺序
// 回调 -> promise -> async + await
// Xmlhttprequest -> axios 