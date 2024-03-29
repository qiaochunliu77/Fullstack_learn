/**
 * @param {string} s
 * @return {string}
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */
var replaceSpace = function (s) {
  if (!s || !s.length) {
    return "";
  }

  let emptyNum = 0,
    chNum = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === " ") {
      ++emptyNum;
    } else {
      ++chNum;
    }
  }

  const length = emptyNum * 2 + chNum;
  const chs = new Array(length);
  // i 是新字符串的下标
  // j 是原字符串的下标
  for (let i = 0, j = 0; j < s.length; ++j) {
    if (s[j] === " ") {
      chs[i++] = "%";
      chs[i++] = "2";
      chs[i++] = "0";
    } else {
      chs[i++] = s[j];
    }
  }

  return chs.join("");
};
console.log(replaceSpace("123 ubh"));
