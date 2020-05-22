- ES5声明变量只有两种方式：var和function。
- ES6有let、const、import、class再加上ES5的var、function共有六种声明变量的方式。
- 还需要了解顶层对象：浏览器环境中顶层对象是window，Node中是global对象。
- ES5中，顶层对象的属性等价于全局变量。(敲黑板了啊)
- ES6中，有所改变：var、function声明的全局变量，依然是顶层对象的属性；let、const、class声明的全局变量不属于顶层对象的属性，也就是说ES6开始，全局变量和顶层对象的属性开始分离、脱钩。

1. 考点 window.navigator.userAgent 用户代理
包含浏览器信息 
- 手机访问 or PC
为什么chrome userAgent 有Mozilla Safari这些东西？
浏览器的历史 
 JS为啥是当下最值得投资的语言？
 1989 博纳斯 李 万维网 HTTP 0.9
 1990 发布了第一款浏览器 不支持图片 css img js
 1993 NSCA 看到图片 Mosaic 马赛克 HTTP 1.0 支持 不同类型的文件 
   不支持iframe标签 
 1994 商业浏览器 NETscape Mozilla 十天 javascript
   支持iframe 
   网管 运维 根据userAgent 判断是否支持iframe
 1995 ie win95 
  ie  Mozilla 

 2002 Mozilla 浏览器 出现控制台
 2008 chrome v8引擎发布 js编译执行提升十倍效率 多进程架构 
 2009 node.js 出来了 Ryan Dahl 基于v8 js离开浏览器单独编译并运行 
  高性能 ，高并发 省机器
 2011 英特尔 王文睿 node-webkit
 2013 electron 桌面exe 应用
    eletron = chromium (开源版本) + node + 系统的api 
    快速 ，c# ， 一份代码在window，mac ，linux 
 2012 RN App 