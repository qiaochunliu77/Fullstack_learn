zhaomeng.com  ->  react
time.zhaomeng.com -> geek
xxx.zhaomeng.com -> 
api.zhaomeng.com -> node

ngnix.cofig
 server {
        listen   80;
        server_name api.zhaomeng.com;

        location / {
            proxy_pass http://127.0.0.1:9090;
        }
    }

## pm2  进程守护 
pm2.json
{
    "apps":{
        "name": "file-upload",
        "script": "./index.js",
        "exec_mode":"cluster_mode",//自动负载均衡
        "instances": "max"
    }
}
npm install pm2 -g
pm2 --version
启动
pm2 start pm2.json
停止
pm2 stop pm2.json
删除
pm2 delete pm2.json


