import {add , min, bar} from './math.js';
console.log(add(1,2))
console.log(min(3,2))
console.log(bar)
setTimeout(() => {
    console.log(bar)
},5000)
// tree-shaking: min 没有打包 