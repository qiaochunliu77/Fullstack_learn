
    // function disemvowel(str) {
    //     return str.split('').filter((n) => {
    //           return !(n == 'a' || n == 'e' || n == 'i' || n == 'o' || n == 'u' ||n == 'A' || n == 'E' || n == 'I' || n == 'O' || n == 'U')
    //       }).join('')
    //   }
      function disemvowel(str) {
        return str.replace(/[aeiou]/)
      }

  console.log(disemvowel('This website is for losers LOL'))