const fs = require('fs');

function copy(sourceUrl, destUrl){
    // fs.readFile(sourceUrl,(err, info) => {
    //     if(!err){
    //         fs.writeFile(destUrl,info,(err) =>{
    //             if(!err){
    //                 console.log('succes')
    //             }
    //         })
    //     }
    // })

    const readSream = fs.createReadStream(sourceUrl)
    const writeStream = fs.createWriteStream(destUrl)
    readSream.pipe(writeStream)
    // pipe 管道 
}


copy('./readme.md', './copy.md')

// 不用流  读完一个文件 拿到内容