const { DomHandler } = require('domhandler');
const htmlparser2 = require('htmlparser2');
const fs = require('fs')
module.exports = function (source) {
    return new Promise((resolve, reject) => {
        const handle = new DomHandler((err, dom) => {
            if (err) {
                reject(err)
            }
            else {
                // console.log(dom)
                fs.writeFileSync('./dom.json',JSON.stringify(dom, null, 2))
                resolve(`
                `)
            }
        })
        const parse = new htmlparser2.Parser(handle);
        parse.write(source);
        parse.end();
    })
}
