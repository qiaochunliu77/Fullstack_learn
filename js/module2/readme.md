es-module 不管导出的是什么数据类型 都会相互影响 
commonJs 值的拷贝 引用数据类型如对象会改变 基本数据类型不变
## es-module
- rollup 打包工具
    命令行: npx rollup index.js --file output.js --format iife

a.js的 bar 和 math.js 的 bar 是引用关系

## commonJS
对于基本类型来说: 第一次导出是什么 以后就是什么。
但是对于对象，即引用类型来说，因为指向的是同一个地址 所以还是会发生改变。