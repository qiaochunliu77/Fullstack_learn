const Koa = require('koa');
const app = new Koa();

// logger
// use中间件 
// ctx {req,res} 请求和响应 
app.use(async (ctx, next) => {
  await next();// 下一个中间件 
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

// 请求经过中间件 
// next去到下一个中间件 