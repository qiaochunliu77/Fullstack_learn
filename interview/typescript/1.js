const getUserInfo = function (user) {

    return `name:${user.name}, age:${user.age}`
}
// 约定函数返回值是什么
getUserInfo({name: "koko", age: 12})
getUserInfo({name:'we'})
getUserInfo({name:'oo', size:10})