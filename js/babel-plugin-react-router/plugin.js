// // babel/core @babel/types 

// // 自动化生成 routes文件 的import
 
// const plugin = ({types: t}) => {
//     return {
//         visitor: {
//             ObjectProperty(path) {
//                 const node = path.node
//                 // 只处理component
//                 if(node.key.name !== 'component'){
//                     return 
//                 }
//                 let source = node.value;
//                 // 创建一条import语句 
//                 // 在当前模块中 唯一的变量名 
//                 const program = path.findParent((p) => p.isProgram());
//                 let local = program.scope.generateUidIdentifier();
//                 let specifiers = [t.importDefaultSpecifier(local)]// 生成的不重复的标识符 // 拿到默认导入 
//                 // import local from 'XXX'
//                 let importStatement = t.importDeclaration(specifiers, source) // 添加一条import语句 

//                 // 将import 插入到页面最开头
//                 program.node.body.unshift(importStatement);

//                 // 替换 component key 的值 
//                 node.value = local;
//             }
//         }
//     }
// }

// module.exports = plugin

// @babel/core babel-types 
const plugin = function({ types: t }) {
    return {
      visitor: {
        ObjectProperty(path) {
          // 当前节点
          const node = path.node;
          if (node.key.name !== 'component') {
            return;
          }
          let source = node.value;
          // 当前模块里面唯一变量名
          const program = path.findParent((p) => p.isProgram());
  
          let local = program.scope.generateUidIdentifier();
          let specifiers = [t.importDefaultSpecifier(local)]
          // import local { useState } from 'XX'
          let importStatement = t.importDeclaration(specifiers, source)
          // 插入 import
          program.node.body.unshift(importStatement);
          // 替换 component 这个 key的值
          // componet: '/./'
          node.value = local
        }
      }
    }
  }
  module.exports = plugin