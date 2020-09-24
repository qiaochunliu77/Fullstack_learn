手写promisify
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
promisify1(fs.readFile)('./1.js')