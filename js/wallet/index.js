// js es6支持class关键字
const UUID = require ('uuid');
class Wallet {
    // 属性和方法
    constructor (){ //构造函数里声明属性
        this._id = UUID.v1().replace(/-/g,''); //命名规则约定 _变量为私有
        //创建时间 不能改
        this._createTime =  new Date(); //类型转换 时间戳
        //余额
        this._balance = 0;
        this.modifyTime =  new Date();
    }
    getBalance() {
        return this._balance;
    }
    increaseBalance(increaseAmount) { //增加的量
        console.log('增加' + increaseAmount +'元');
        this._balance += increaseAmount
        console.log('当前余额：' + this.getBalance().toFixed(2));
        console.log('修改时间：' + this.getmodifyTime());
    }
    decreaseBalance(decreaseAmount) {
        console.log('减少'+decreaseAmount +'元');
        this._balance -= decreaseAmount
        console.log('当前余额：' + this.getBalance().toFixed(2));
        console.log('修改时间：' + this.getmodifyTime());
    }
    getCreateTime() {
        return this._createTime;
    }
    getId() {
        return this._id;
    }
    setId() {
        throw new Error('私有属性,不可修改');
    }
    getmodifyTime() {
        return this.modifyTime;
    }
}
const mywallet = new Wallet(); //实例化
// mywallet._id = '123'; //id属性只读，不能修改
// console.log(mywallet.getId()); //id是mywallet的public属性
console.log(mywallet.getCreateTime());
// console.log(mywallet.getBalance())
mywallet.increaseBalance(9.0);
// mywallet.decreaseBalance(8.1);
// console.log(mywallet.getBalance().toFixed(2));


// - npm init -y 
//   npm -> node package manager 不重复的钱包id，交给一个开发包去负责
//   node 项目
//   npm install uuid
//   uuid 生成一个唯一的id
//   封装 public constructor this.is
//        private
//   浮点数相加 js不精确问题学习
//   修改金额时，记录最后修改时间 ，设计这个私有属性