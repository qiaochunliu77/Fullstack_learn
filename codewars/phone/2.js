function createPhoneNumber(number) {
    number = number.join('')
    return (
         `(${number.substring(0,3)}) ${number.substring(3,6)}-${number.substring(6,10)}`
    )
}
console.log(createPhoneNumber([0,1,2,3,4,5,6,7,8,9]))