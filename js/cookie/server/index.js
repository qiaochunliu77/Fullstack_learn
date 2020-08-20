const http = require('http');
const fs = require('fs');
const { createContext } = require('vm');
let count = 10000;
let sessiontable = [{
  userName: 'liming', useId: 1001, login: true, expire: '2021', id: 01
}]
// 用户的登录状态保持
// 1 第一次登录完 后端写入 一个 cookie：userName=liming,useID=1001
// cookie: sessionId:01
// 2 cookie 每次都随着 http 请求自动发送
// 3 每次 后端 取出 cookie 信息 if(login) { 登录状态有效的 }
http.createServer((req, res) => {
  function isLogin() {
    if (req.headers['cookie']) {
      let cookie = req.headers['cookie'];
      // let [name, sessionId] = cookie.split('=');
      let cookies = cookie.split(';');
      let sessionCookie = cookies.find(cookie => cookie.includes('session'));
      let [name, sessionId] = sessionCookie.split('=');
      if (sessiontable.find((item) => {
        return item.id === Number(sessionId);
      })) {
        return true;
      } else {
        return false;
      }
    } else {return false;}
  }
  console.log(req.url);
  if (req.url.includes('/transfer')) {
    console.log(isLogin());
    if (!isLogin()) {
      res.end('un auth');
      return;
    }
    count -= 100;
    res.end('ok');
  } else if (req.url === '/count') {
    res.end(count + '');
  }  else if (req.url === '/islogin') {
    if (isLogin()) {
      res.end('login');
    } else {
      res.end('not login');
    }
  }
  else {
    const html = fs.readFileSync('./index.html', 'utf-8');
    res.setHeader('set-cookie', 'sessionid=1;samesite=lax');
    res.end(html);
  }
})
.listen(9090, () => {
  console.log(9090);
})

