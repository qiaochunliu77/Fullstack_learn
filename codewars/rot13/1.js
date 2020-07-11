function rot13(message) {
  //your code here
  // console.log( message.match(/[a-z,A-Z]/g).map((n) => {
  //   n.replace(String.fromCharCode(n.charCodeAt() + 13))
  // }
  // ))
  return message.split('').map((e) => {
    if (e.match(/^[a-zA-Z]$/)) {
      if (e.charCodeAt() >= 78 && e.charCodeAt() <= 90 || e.charCodeAt() >= 110 && e.charCodeAt() <= 122) return String.fromCharCode(e.charCodeAt() - 13)
      return String.fromCharCode(e.charCodeAt() + 13)
    }
    return e
  }).join('');
}
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
console.log(rot13('abcMIN09'))