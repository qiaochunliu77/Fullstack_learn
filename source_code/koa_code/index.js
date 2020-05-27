const Koa = require("./lib/application"); // 全栈
const app = new Koa();

// // 手写koa
app.use((req,res) => {
    res.end('HELLO WORLD')
})


app.listen(3001, () => {
    console.log('你的应用在3000端口')
});