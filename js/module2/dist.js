'use strict';

const add = (a, b) => a + b;
const min = (a, b) => a - b;

var bar = 'bar';
setTimeout(() => {
    bar = 'biz';
},3000);

console.log(add(1,2));
console.log(min(3,2));
console.log(bar);
setTimeout(() => {
    console.log(bar);
},5000);
// tree-shaking: min 没有打包
