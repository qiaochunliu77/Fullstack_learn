import { LoginEntity } from '../model/login';

// isValidLogin的返回值是promise promise解决后的返回值是bool
export const isValidLogin = (loginInfo: LoginEntity):Promise<Boolean> => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(loginInfo.login === 'admin' && loginInfo.password ==='test')
        }, 500);
    })