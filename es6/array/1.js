const ages = [32,15,19,12];
//找到所有大于18的数字
// const nums = [];
// for(let age of ages){
//     if(age >= 18){
//         nums.push(age);
//     }
// }
// console.log(nums);

//过滤器
// console.log(age,index,o)
const adultArr = ages.filter(age => age >=18);
//some 是否有
const adultPresent = ages.some(age => age>18)
// console.log(adultPresent);

const allOldEnough = ages.every(age => age>18)
console.log(allOldEnough)


