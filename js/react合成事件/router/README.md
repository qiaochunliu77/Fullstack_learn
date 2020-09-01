## vue-router
     <router-link> 主页导航
     <router-view> 渲染下一级路由
- 路由传参
     ``` js
      <router-link :to="{name:'hi1',params:{username:'jspang'}}">Hi页面1</router-link>
      ```
      name为路径的name params内部存参数
    <p>{{$route.params.username}}</p>
    扩展this，把router凡在this的prototype
- 用url来传参数