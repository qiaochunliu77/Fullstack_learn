const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
// 请求豆瓣250
// 浏览器输入一个url  请求页面
https.get('https://movie.douban.com/top250',function(res){
    // console.log(res)
    // 分段返回 ，自己拼接
    let html =''
    // 有数据产生的时候 回调拼接
    // 每取一次数据 通知一次 
    res.on('data',function (chunk){
        html += chunk;
    })
    // 数据返回完毕 拿到完整的html
    res.on('end',function (){
        // console.log(html);
        //  $ 解析玩的对象
        const $ = cheerio.load(html);
        // 25 
        // $ ("",this ) this循环当时这个电影
        let allFilms = [];
        $('li .item').each(function() {
            // this->循环时 当前这个电影 代指每一个item
            const title = $('.title',this).text();
            const start = $('.rating_num',this).text();
            const pic= $('.pic img',this).attr('src');
            // console.log(title,start,pic)
            // 存进数据库
            // 存成一个json文件 fs
            allFilms.push({
                title,start,pic
            })
            // 写到文件下面（文件名，文件内容, 回调函数）
            fs.writeFile('./films.json',JSON.stringify(allFilms),function(err){
                if(!err){
                    console.log('文件写入完毕');
                }
            })
            // 图片下载一下
            downloadImage(allFilms);
        })
    })
    // cheerl 引入第三方库 帮助后端node解析html页面
})

function downloadImage(allFilms){
    for(let i= 0 ;i < allFilms.length; i++){
        const picUrl = allFilms[i].pic;
        // 下载
        // 页面 url === html（普通文本 utf-8） 浏览器帮你渲染
        // 图片 url === 图片内容（binary） 浏览器也帮你渲染
        // xx.png 双击打开一个图片
        // 请求 ->拿到内容 -> 写进去
        // fs.writeFile('./xx.png',
        https.get(picUrl,function(res){
            // 修改获取图片 编码 默认 utf-8
            res.setEncoding('binary');
            let str = '';
            res.on('data',function (chunk) {
                str += chunk;
            })
            res.on('end',function(){
                // node 回调函数位置 通常在最后一个
                // 第一个参数 是err对象
                fs.writeFile(`./images/${i}.png`,str,'binary',function(err){
                    // console.log(err)
                    if(!err){
                        console.log(`第${i}张图片下载成功`);
                    }
                })
            })
        })
    }
}