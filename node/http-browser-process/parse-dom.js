// import { emit } from "cluster";

let htmlStr = `<html>
<head></head>
<body>
    <img />
    <div></div>
</body>
</html>`
// token:html tag
let currentToken = null;
let stack = [ {type:'document', children: [] } ]
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2))

        // 引用类型 指向同一个地址 一个变了 另一个也变 
        // 维护一个栈 push pop 处理配对关系 
        
        // 作为栈顶元素的子节点 为了生成树 
        // if(!top.children) top.children = []

function emit(token){
    console.log(token)
    let top = stack[stack.length - 1]
    if(token.type === 'startTag') {
        let element = {
            type: 'element',
            attributes: [],
            tagName: token.tagName,
            children: [],
        }
        stack.push(element);
        top.children.push(element)
    }else if(token.type === 'endTag'){
        if(token.tagName !== top.tagName){
            throw new error('tagname match error');
        }else{
            stack.pop();
        }
    }else if(token.type === 'selfCloseToken'){
        let element = {
            type: 'element',
            attributes: [],
            tagName: token.tagName,
            children: []
        }
        top.children.push(element)
    }
    currentToken = null;
}

function parse(htmlString) {
    state = start;
    for(let c of htmlString){
        state = state(c)
    }
}
//开始 <
function start(c){
    if(c == '<'){
        return tagOpen;
    }else{
        return start;
    }
}
// 
function tagOpen(c){
    // <html>
    // </html>
    // console.log(c)
    if(c === '/'){
        return endTagOpen
    }else if(c.match(/[a-zA-Z]/)){
        currentToken = {
            type:'startTag',
            tagName:c
        }
        return tagName;
    }
}
//合法的标签名
function tagName(c) {
    if(c.match(/[a-zA-Z]/)){
        currentToken.tagName += c;
        return tagName;
    }else if(c.match(/[\t\n\f ]/)){
        return beforeAttibuteName
    }else if(c === '>'){
        //tag拼接结束
        emit(currentToken)
        return start;
    }
}
function beforeAttibuteName(c) {
    if(c === '/'){
        // 自闭合 单标签
        currentToken.type === 'selfCloseToken';
        return tagName;
    }
}
function endTagOpen(c){
    if(c.match(/[a-zA-Z]/)){
        currentToken = {
            type:'endTag',
            tagName:c
        }
        return tagName;
    }
}


