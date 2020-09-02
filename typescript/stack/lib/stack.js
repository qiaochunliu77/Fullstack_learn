"use strict";
exports.__esModule = true;
// 数据结构由什么构成？
// ADT 数据和操作方法 
// 栈 FILO FIFO 
// 元数据 items:[]
// 方法 ：constructor this.item = []
// 入栈 push 
// 出栈 pop
// 获取栈顶元素  peek
// 数量 size
// 是否为空 isEmpty
// 清空 clear
// toString 输出
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        return this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.toString = function () {
        return this.items.toString();
    };
    return Stack;
}());
exports["default"] = Stack;
