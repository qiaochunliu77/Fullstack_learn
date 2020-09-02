import Stack from './lib/stack';

const stack = new Stack();

stack.push('第一条数据');
stack.push('第二条数据')

stack.pop()
console.log(stack.toString())
console.log(stack.size())
console.log(stack.isEmpty())
console.log(stack.peek())
stack.clear();