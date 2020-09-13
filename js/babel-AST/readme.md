es6node -> es5code

import {zip} from 'lodash';
转换成 
import zip from 'loadash/zip;
方法：
1. code -> reg 处理字符串 -> 生成代码
2. code -> AST -> 树 CURD -> 另外一棵AST -> 另外一份代码 

html -> AST -> appendChild -> 另外一棵树AST -> 渲染 

我 今天 很高兴
分词
{
    person:'我',
    time:'今天'
}
https://astexplorer.net/  对代码进行分词

js词法 
js代码有什么组成，引擎关心 
- whiteSapce
- 换行
- comment
- token
    - 数字字面量
    - 字符串字面量
    - 符号 [] {} ()
    - 标识符 var 

babel的流程
js字符串 -> 状态机(词法分析) -> 语法分析() -> AST 