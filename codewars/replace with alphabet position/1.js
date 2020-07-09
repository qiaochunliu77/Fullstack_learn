function alphabetPosition(text) {
    let t = text.split('');
    let res = []
    for(let i = 0; i < t.length; i++){
        let code = t[i].charCodeAt();
        console.log(code)
        if(code>64 && code<91){
            res.push(code-64)
        }else if(code>96 && code<123) {
            res.push(code-96)
        }else{
           continue
        }
    }
    return res.join(' ');
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
  // 在此kata中，需要给定一个字符串，将每个字母替换为其在字母表中的位置。
  
  // 如果文本中的任何内容都不是字母，请忽略它，不要返回它。