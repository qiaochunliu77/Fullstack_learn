function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";
    numbers.map((number) => {
        format.replace('x', numbers[i]);
    })
}
console.log(createPhoneNumber([0,1,2,3,4,5,6,7,8,9]))