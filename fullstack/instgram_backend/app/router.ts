import { Application } from 'egg';
// egg.js 

export default (app: Application) => {
  const { controller, router } = app;
  // controller url -> controller -> render view 
  // 路由列表 nginx 服务器代理 ip地址 http://www.baidu.com -> ip -> 
  // 访问代理 nginx 80（负载均衡 内网的哪台机器 就近） -> 
  // Egg.js 7001
  // 后台路由 首页 /MVC Controller / index.html #root 负责启动首页 /api
  // 前端路由 react build js挂载 SPA更快 useEffect -> reducer action-> api -> 后台 /api/user /api后端给数据
  // 先解析ip地址 
  router.get('/', controller.home.index);
  // 登录接口
  router.get('/api/login',controller.login.index);

};
