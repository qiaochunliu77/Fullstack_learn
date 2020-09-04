// 类型定义文件 
// 类型声明 和 业务分开  2  
interface IUser{
    name: string;
    age: number;
}
type IUserInfoFunc = (user:IUser) => string;
const getUserInfoo: IUserInfoFunc = (user) => {
     return `name:${user.name}, age:${user.age}`
}
