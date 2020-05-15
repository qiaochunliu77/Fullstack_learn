const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
    if(req.url === '/files' && req.method.toLowerCase === 'post'){
        // 处理文件
        pathFile(req,res);
    }else{
        fs.createReadStream('./index.html').pipe(res);
    }
    
})
.listen(9090,() => {
    console.log(9090)
})
function pathFile (req,res) {
    let body = ''
    let boundary = req.headers['content-type'].split('boundary=')[1]
    req.on('data',(chunk) => {
        body += chunk;
    })
    req.on('end',() => {
        let lists = body.split('--'+boundary);
        for(let list of lists){
            // 文件上传
            let lines = list.split('\r\n')
            if(lines[1].includes('filename=')){
                let startIndex = lines[1].indexOf('filename=');
                fileName = lines[1].substring(startIndex);
                console.log('filename',fileName)
                fs.writeFile(`./${fileName}`,lines[4],{encoding:'binary'},(err)=> {
                    if(!err){
                        res.end('ok')
                    }else{
                        res.end(err.toString())
                    }
                })
            }
            
        }
    })
    // console.log(boundary)
}
