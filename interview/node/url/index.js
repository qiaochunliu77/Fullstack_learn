// const url = require('url');

const urlString = "http://baidu.com:8080/test/h?query=js#node";
// console.log(url.parse(urlString))
// queryString 有什么方法获得 ？
// 想到什么解决方法？

// 1. 正则写法
function getQueryString(urlStr) {  //获得查询对象
    var obj = new Object()
    if(urlStr.indexOf('?') != -1) {
        var queryStr = urlString.split('?')[1];
        if(urlString.indexOf('#') != -1){
            // 前端如果也有node 那样的url模块就好了
            queryStr = queryStr.split('#')[0]
        }
        // console.log(queryStr);
        var strs = queryStr.split('&');
        for( var i = 0; i< strs.length; i++){
            obj[strs[i].split('=')[0]] = strs[i].split('=')[1]
        }
    }
    console.log(obj)
    return obj;
}

getQueryString(urlString)