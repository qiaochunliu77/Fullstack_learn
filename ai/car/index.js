
var fs = require('fs');//文件系统 ->fs
var path = require('path');//路径模块
//读取文件
// fs.readFile('textdd.txt',function (err,data) {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// }) 

// function getDirFiles (startPath){
//     //子目录 孙目录 递归目录
//     // 1.一个大问题 分解成很多很多小问题
//     // 2.退出条件 当目录下无子目录
//     let result = [];
//     //process是node的核心模块，全局变量/进程
//     //process.cwd() ->返回当前项目(进程）根目录的物理路径
//     // console.log(path.join(process.cwd(),startPath),'---------');
//     //path.join 把几个路径拼接起来
//     //同步读取文件目录
//     let files = fs.readdirSync(
//         path.join(
//             process.cwd(),startPath
//             )
//         );
//     // console.log(files);
//     for(let file of files){
//         // console.log(file);
//         let stats = fs.statSync(
//             path.join(process.cwd(),startPath,file)
//             );//判断是文件还是文件夹
//         //stats ->状态
       
//         if(stats.isFile()){
//             result.push(file)
//         }
//         if(stats.isDirectory()){

//         }
//         console.log(stats);
//     }
//     return result;

// }

// console.log(process.cwd())
// console.log(getDirFiles('src'));

function getDirFiles(startPath){
    let result = [];
    function finder (parentPath){
        // console.log(path);
        let files = fs.readdirSync(parentPath);
        // files.forEach(var,index) =>{
        //     console.log(val,index);
        // }
        files.forEach(function(val, index){
            // console.log(val, index);
            let fPath = path.join(parentPath, val);
            if(!files.length) return
            // console.log(fPath)
            let status = fs.statSync(fPath);
            if(status.isDirectory()){
                finder(fPath);//递归
            }
            if(status.isFile()){
                result.push(fPath)
            }
        })
    }
    finder(
        path.join(process.cwd(),startPath)
    );
    return result;
}
console.log(getDirFiles('src'));