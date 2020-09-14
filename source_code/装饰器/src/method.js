let obj = {}
// 就是不改变它原来的属性或者方法
// 给它添加一些需要的行为
Object.defineProperty(obj, 'a', {
    value:'1'
})
function log(target, key, descriptor) {
    // target 类 key 属性名 descriptor 属性方法 
    console.log(target,'---------',key,'-------',descriptor)
    let originAdd = descriptor.value;
    descriptor.value = function (...args) {
        console.log('start');
        let res = originAdd.apply(this, args);
        return res
    }
    return descriptor
}
class Math {
    constructor() {
        this.c = 10
    }
    // 能够输出日志 
    // 无侵入的 
    @log 
    add(a,b) {
        // console.log('监听到了')
        // const sum =  'add';
        const sum = a + b+this.c
        return sum
    }
}
let m = new Math();
// add 不是原来的add 是我们修饰过得add === discrit.value 
console.log(m.add.toString())
console.log(m.add())
// 监听一下add方法有没有被调用