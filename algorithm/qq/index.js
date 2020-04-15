// 规则：
// 将第一个数字、删除，紧接着第二个数放到这串数字末尾，
// 再将第三个数字删除，并将第四个数字放到末尾，再将第五个数删除，
// 直到最后一个数，将最后一个数也删除，
// 删除的数连在一起就是qq

let nums = '631758924';
let arr = [];
// console.log(typeof nums);
// const a = nums.slice(1);
arr.push(nums[0]);
let c = nums[1];
nums = nums.substring(2);
nums+=c;
// nums = nums.substring(1);
console.log(nums,arr);
while(nums.length<2){
    
}