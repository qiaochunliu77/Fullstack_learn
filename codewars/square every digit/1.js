function squareDigits(num){
    //may the code be with you
    return parseInt(num.toString().split('').map((n) =>  n*n).join(''))
  }
  console.log(squareDigits(9119))