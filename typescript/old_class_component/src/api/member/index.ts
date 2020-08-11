import { MemberEntity } from '../../model';
import { members } from './mockData';

// 组件 函数 变量的类型
// 取数据 promise异步 真实接口

// 函数约束
// : Promise返回值类型为promise
// <MemberEntity[]> 返回值里面 members的类型
const fetchMembers = (): Promise<MemberEntity[]> => {
    return Promise.resolve(members);
};

export const memberAPI = {
    fetchMembers,
};