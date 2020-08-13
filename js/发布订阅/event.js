const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
let m = 0;
// 只订阅一次
myEmitter.on('price',() => {
    console.log('hhh')
})
myEmitter.on('price',() => {
    console.log('hhh')
})
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('price');
// 打印: 1
myEmitter.emit('event');
