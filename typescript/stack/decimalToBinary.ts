import Stack from './lib/Stack';

// 转换成二进制数 
const decimalToBinary = function (decNumber) {
    const stack = new Stack()
    let number = decNumber;
    let rem ; // 余数
    let binaryString = '';
    // 4
    while(number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    // 链表最后一位出栈 -》 反转结果
    while(!stack.isEmpty()) {
        binaryString += stack.pop().toString(); // 依次最后出栈
    }
    return binaryString;
}

const find = function (){
    
}
console.log(decimalToBinary(4))