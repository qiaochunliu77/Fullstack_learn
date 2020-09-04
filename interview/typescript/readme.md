聊 
    js弱类型 -》 强类型 
    声明-> 类型校验interface -> type
    优点:
    类型约束 适用于大型项目 多人合作 让js不出问题 从基本的类型声明 到可以使用接口interface关键字 到自定义类型
    缺点：
    用户表单填错了，队友， 代码中的潜在bug
    应用场景：
    userInfo
猜
    ts + react 最好的应用demo
    - login 
    interface{username: string, password: string}
    type userLoginFunc api 返回值为bool 
    - model user(name, age, avatar, hobbies...)
    