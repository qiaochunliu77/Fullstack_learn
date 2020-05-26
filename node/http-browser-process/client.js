// 源端口号  目的地端口号
// 客户端：http.get  xhr
const net = require('net');
class Xmlhttprequest {
  constructor() {
    this.method = null;
    this.url = null;
    this.headers = null;
    this.body = null;
    this.resStatusLine = null;
    this.resHeaders = null;
    this.response = null;
  }
  open(method, url) {
    this.method = method;
    this.url = url;
  }
  setHeader(headers) {
    this.headers = headers;
  }
  // 解析 
  parse(string) {
    const lines = string.split('\r\n');
    // console.log(lines)
    this.resStatusLine = lines[0];
    this.statusCode = this.resStatusLine.split(' ')[1];
    // [) slice
    // splice() 数组 splice(0,2,999,888) 截取后实现添加 
    this.resHeaders = lines.slice(1,lines.length-2);
    this.response = lines[lines.length - 1]
  }
  send(body) {
    // 浏览 http 请求  -> 拼接 http 报文
    this.body = body;
    const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
      client.write(`${this.method} ${this.url} HTTP/1.1\r\nHOST: 127.0.0.1\r\nContent-Type: application/json\r\nContent-Length: ${this.body.length}\r\n\r\n${this.body}\r\n`)
      client.end();
    })
    // 服务端返回给 浏览器的 也是一个原始的 http 报文 流
    // 这是一个buffer 流
    // chunk 是 <Buffer 48 54 54 50 2f 31 2e 31 20 32 30 30 20 4f 4b 0d 0a 44 61 74 65 3a 20 54 75 65 2c 20 32 36 20 4d 61 79 20 32 30 32 30 20 30 38 3a 34 34 3a 33 39 20 47 ... 53 more bytes>

    client.on('data', (chunk) => {
      // 服务端返回给浏览器 也是一个原始的http报文
      // 解析报文 
      console.log('receive:', JSON.stringify(chunk.toString()));
      this.parse(chunk.toString());
      this.onload();
    })
    client.on('end', () => {
      console.log('disconnect');
    })
  }
  
}
// ajax
const xhr = new Xmlhttprequest();
xhr.open("POST", "/");
xhr.setHeader({
  'Content-Type': 'application/json'
})
xhr.onload = function() {
  console.log(xhr.statusCode) //200
  console.log(xhr.response) //ok
  console.log(xhr.resHeaders) 
}
xhr.send(JSON.stringify({a: 1}))



// const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
//   let json = JSON.stringify({a: 1});
//   client.write('POST / HTTP/1.1\r\n');
//   client.write('HOST: 127.0.0.1\r\n');
//   client.write('Content-Type: application/json\r\n');
//   client.write('\r\n');
//   client.write(json)
//   client.write('\r\n');
// })
// client.on('data', (data) => {
//   console.log('receive:', data.toString());
//   client.end();
// })
// client.on('end', () => {
//   console.log('disconnect');
// })
