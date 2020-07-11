## commonJS 
导出：
mudule.exports = function() {}
mudule.exports = {}
导入：
import
1. commonJS 一定要代码运行起来才知道引入了哪些模块
2. 可以出现在逻辑分支里

## es-mudule
1. import/export 不论你写在哪 都会提前执行
2. 在代码静态分析（不用执行代码）就可以分析出你引入了哪些模块


AMD
CMD
UMD
CJS
es