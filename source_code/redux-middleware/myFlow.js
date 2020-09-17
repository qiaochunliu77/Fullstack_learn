
const fn1 = (str) => {
    return str + 'str'
}
const fn2 = (str) => {
    return str.toUpperCase()
}
const fn = _.flow([fn1,fn2]);
