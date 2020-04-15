function climb(n){
    // if(n < 0) {return 0}
    // if(n = 0) {return 1}
    if(n == 1 || n == 2) {return n}
    return climb(n - 1) + climb(n - 2);
}

console.log(climb(4));