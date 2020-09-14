var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let obj = {}; // 就是不改变它原来的属性或者方法
// 给它添加一些需要的行为

Object.defineProperty(obj, 'a', {
  value: '1'
});

function log(target, key, descriptor) {
  console.log(target, '---------', key, '-------', descriptor);
  let originAdd = descriptor.value;

  descriptor.value = function (...args) {
    console.log('start');
    let res = originAdd.apply(this, args);
    return res;
  };

  return descriptor;
}

let Math = (_class = class Math {
  constructor() {
    this.c = 10;
  } // 能够输出日志 
  // 无侵入的 


  add(a, b) {
    // console.log('监听到了')
    // const sum =  'add';
    const sum = a + b + this.c;
    return sum;
  }

}, (_applyDecoratedDescriptor(_class.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class);
let m = new Math(); // add 不是原来的add 是我们修饰过得add === discrit.value 

console.log(m.add.toString());
console.log(m.add()); // 监听一下add方法有没有被调用