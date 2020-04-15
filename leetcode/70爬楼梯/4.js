var m = new Map();//实例化一个map对象
m.set(1,"black");
console.log(m.has(1));
m.set({x:1},3);
let i = 1;
m.forEach((item,key,mapObj) => {
    console.log(item,key,mapObj)
    i++;
})
console.log(i);