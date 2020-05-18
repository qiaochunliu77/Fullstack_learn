- 博客网站 需要的技能
 React 做UI 组件化思维
 - 列表
 - 详情
 - 评论 
 node 做后端, 后台数据库 mysql mongodb
 怎么向应用提供数据呢 
 - 爬去别人的数据 
 - MVC Model(Mysql) - View(React) - Controller(Node)
 可以实现增删改查 但不用启用sql这么繁琐 
 - 
 
 JSON 是数据格式 

 yarn add json-server
 .\node_modules\.bin\json-server --watch db.json --port 3300

 使用json-server 来启动它 restful api格式
 /post/show/1 看某篇文章的url 
 /acounts/:1/transfer/:520/to/:2
 restful 动词 + url动词 
 资源
 /transaction 转账 POST 