function alphabetPosition(text) {
return text
.toUpperCase()
.match(/[a-z]/gi)
.map((c) => c.charCodeAt()-64)
.join(' ')
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
  // 在此kata中，需要给定一个字符串，将每个字母替换为其在字母表中的位置。

  // 如果文本中的任何内容都不是字母，请忽略它，不要返回它。