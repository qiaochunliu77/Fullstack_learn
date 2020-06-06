const css = require('css');
const images = require('images');
const layout = require('./layout');

let htmlStr = `<html>
  <head>
   <style>
   </style>
  </head>
  <body>
    <div class="wrap">
      <div class="main"></div>
      <div class="aside"></div>
    </div>
  </body>
</html>`
let cssStr = `
.wrap {
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 500px;
  height: 500px;
  background-color: rgb(255, 0, 0);
}
.main {
  width: 200px;
  height: 200px;
  background-color: rgb(0, 255, 0);
}
.aside {
  width: 100px;
  height: 100px;
  background-color: rgb(0, 0, 255);
}
`

let rules = css.parse(cssStr).stylesheet.rules

let currentToken = null;
let currentAttribute = null;
let stack = [ { type: 'document', children: [] } ];
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2))
// 拿到整棵树
// 遍历树 渲染每个 element
let tree = stack[0];
// 绘制到哪里去
// 容器
const viewPort = images(800, 600);
function render(view, element) {
  if (element.style) {
    let img = images(element.style.width, element.style.height);
    if (element.style['background-color']) {
      let color = element.style['background-color'];
      let start = color.indexOf('('), end = color.lastIndexOf(')')
      let rgb = color.substring(start + 1, end).split(', ').map(e => parseInt(e));
      img.fill(rgb[0], rgb[1], rgb[2]);
    }
    view.draw(img, element.style.x, element.style.y);
  }
  if (element.children) {
    for (let child of element.children) {
      render(view, child);
    }
  }
}
render(viewPort, tree)
viewPort.save('render.jpg')

/***
 * {
              "type": "element",
              "children": [],
              "attributes": [
                {
                  "name": "a",
                  "value": "a"
                },
                {
                  "name": "b",
                  "value": "b"
                }
              ],
              "tagName": "img"
  },
 */
function match(selector, ele) {
  if (!selector || !ele.attributes) {
    return false;
  }
  // #myid
  // {name: id, value：‘myid’}
  if (selector.charAt(0) === '#') {
    let idAttr = ele.attributes.find(e => e.name === 'id');
    if (idAttr && idAttr.value === selector.replace('#', '')) return true;
  } else if (selector.charAt(0) === '.') {
    let classAttr = ele.attributes.find(e => e.name === 'class');
    if (classAttr && classAttr.value === selector.replace('.', '')) return true;
  } else {
    if (ele.tagName === selector) return true;
  }
  return false;
}
function computerCss(ele) {
  // 计算 符合这个 ele 的所有 css 规则 || css 规则 应用到这个节点上面
  // 1: 靠 ele 属性 父节点，和 css 里面 选择器 匹配
  // 2：匹配 从后往前匹配  .parent .cls
  // tagName #id  .className
  // .parent .cls
  // div  || div .cls  || span #parentID .parent #id
  let elements = stack.slice(0).reverse();
  if (!ele.computerStyle) ele.computerStyle = {};
  // 所有 css 规则
  for (let rule of rules) {
    let selector = rule.selectors[0].split(' ').reverse();
    // 最后一项匹配上了
    if (!match(selector[0], ele)) {
      // 跳过本轮循环，往后的步骤
      continue;
    }
    // 看父级满不满足  
    // [{type: 'doc'}, {html}, [header]]
    // [#id .parent  #parentID  span]
    let j = 1;
    for (let i = 0; i < elements.length; i ++) {
      if (match(selector[j], elements[i])) j ++
    }
    // 匹配
    if (j >= selector.length) {
      // rule rule css 规则添加到 ele
      for (let delecare of rule.declarations) {
        const { property, value } = delecare;
        ele.computerStyle[property] = value
      }
    }



  }
  
}
function emit(token) {
  console.log(token);
  let top = stack[stack.length - 1];
  if (token.type === 'startTag') {
    // push pop 处理配对
    let element = {
      type: 'element',
      children: [],
      attributes: token.attributes,
      tagName: token.tagName
    }
    // 开始标签解析完了
    // 知道 attributes , 知道父节点
    computerCss(element);
    stack.push(element);
    // 作为栈顶的元素子节点，为了生成树
    // if (!top.children) top.children = [];
    top.children.push(element);
  } else if (token.type === 'endTag') {
    if (token.tagName !== top.tagName) {
      throw new Error('tagname match error')
    } else {
      // flex 布局 放到结束标签位置
      // 因为像 alignItems justifyContent 需要知道子元素的宽高的
      // 先保证 子元素宽高 已经解析出来了
      // 在这里计算 （x,y）
      // 栈顶元素就是 要布局的 容器
      layout(top)
      stack.pop();
    }
  } else if (token.type === 'selfCloseToken') {
    let element = {
      type: 'element',
      children: [],
      attributes: token.attributes,
      tagName: token.tagName
    }
    top.children.push(element);
  }
  currentToken = null;
}
function parse(htmlString) {
  state = start;
  for (let c of htmlString) {
    state = state(c);
  }
}
function start(c) {
  if (c === '<') {
    return tagOpen
  } else {
    return start
  }
}
function tagOpen(c) {
  // <html>: html tag 由 a-zA-Z  div span p 
  // </html>
  //  h t m l
  // console.log(c);
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName
  }
}
function tagName(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentToken.tagName += c;
    return tagName
  } else if (c.match(/[\t\n\f ]/)) {
    return beforeAttaibuteName
  } else if (c === '>') {
    // tag 拼接结束
    emit(currentToken);
    return start
  }
}
function beforeAttaibuteName(c) {
  if (c === '/') {
    currentToken.type = 'selfCloseToken';
    return tagName;
  } else if (c.match(/[a-zA-Z]/)) {
    currentAttribute = {
      name: c,
      value: ''
    }
    return attributeName
  } else if (c.match(/[\t\n\f ]/)) {
    return beforeAttaibuteName
  } else if (c === '>') {
    return tagName(c);
  }
}
function attributeName(c) {
  // class="cls"
  // ""
  if (c.match(/[a-zA-Z]/)) {
    currentAttribute.name += c;
    return attributeName;
  } else if (c === '=') {
    return attributeValue;
  }
}
function attributeValue(c) {
  // <div class="cls" id="myid" a="b"></div>
  if (c === '\"') {
    // nothing
    return attributeValue;
  } else if (c.match(/[a-zA-Z]/)) {
    currentAttribute.value += c;
    return attributeValue;
  } else {
    // 空格 >
    // 消耗了
    if (!currentToken.attributes) currentToken.attributes = [];
    currentToken.attributes.push(currentAttribute);
    currentAttribute = null;
    // 代理
    // 本状态内部处理完毕了这个 c，下一个状态也要针对 c 处理
    // 本状态内部处理完毕了这个 c，下一个状态处理到的字符就是 c 的后一个 字符
    return beforeAttaibuteName(c);
  }
}
function endTagOpen(c) {
  // </html>
  if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'endTag',
      tagName: c
    }
    return tagName;
  }
}