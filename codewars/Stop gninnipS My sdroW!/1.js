function spinWords(a){
    //TODO Have fun :)
    return  a.split(' ').map(element => {
        return (element.length > 4) ? element.split('').reverse().join('') : element
    }).join(' ')
  }
  console.log(spinWords('l czxczc a apple'))
