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
export default class Stack {
    private items: any[]
    constructor() {
        this.items = []
    }
    push(item: any) {
        return this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    clear() {
        this.items = []
    }
    size() :number {
        return this.items.length
    }
    toString() {
        return this.items.toString();
    }
}
