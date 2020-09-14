var _class;

// 装饰class的时候 能够拿到这个类是啥 
// 装饰器 可以 
// 装饰类 
// 类里面的属性 
// 类里面的方法
function observer(target) {
  target.displayName = 'XXXX';
  return target;
}

let Com = observer(_class = class Com {
  render() {
    return '123';
  }

}) || _class;

console.log(Com.displayName);