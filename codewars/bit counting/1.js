// 编写一个函数，该函数以整数作为输入，并返回该数字的二进制表示形式中等于1的位数。您可以保证输入为非负数。

// 示例：1234is 的二进制表示形式10011010010，因此函数5在这种情况下应返回


var countBits = function(n) {
    // Program Me
    return n.toString(2).split('').filter((a) => {return a>0}).length
  };
  console.log(countBits(1234))