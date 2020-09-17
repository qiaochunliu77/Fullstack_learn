const http = require('http');
class Koa {
    constructor() {
        this.middleware = []
    }
    use(fn) {
        this.middleware.push(fn)

    }
    listen(port) {
        // 用原生node
        http.createServer((req, res) => {
            let THAT = this;
            // req 进来了 
            // 组合洋葱模型 串联中间件 
            let ctx = {
                set body (val) {
                    res.end(val)
                },
                set statusCode (code){
                    // res.
                }
            }
            function run() {
                dispatch(0)
                // 调用第index个中间件
                function dispatch(index) {
                    let fn = THAT.middleware[index];
                    // 调用next的时候 +1
                    if (!fn) return
                    fn(ctx, () => {
                        index++;
                        dispatch(index)
                    });
                }
            }
            run()
        })
            .listen(port)
    }
}
let app = new Koa()
app.use(async (ctx, next) => {
    console.log(1)
    await next() // === mid2
    console.log(2)
})
app.use(async (ctx, next) => {
    console.log(3)
    await next()
    ctx.body= 'XX' // set get 
    console.log(4)
})
app.listen(9090)

