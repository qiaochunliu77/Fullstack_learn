function createPhoneNumber(number) {
    // 代码语义化连贯 易读
    return (
         number.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1)$2-$3')
    )
}
console.log(createPhoneNumber([0,1,2,3,4,5,6,7,8,9]))