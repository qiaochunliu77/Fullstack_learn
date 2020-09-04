// 面向接口的编程是一切高级编程范式的开端
// 使用设计模式 写js的时候使用范式 
// 参数是对象 可以转成接口
interface IUser{
    name: string;
    age: number;
}
const getUser = (user:IUser):string => {
    return `name:${user.name}, age:${user.age}`
}