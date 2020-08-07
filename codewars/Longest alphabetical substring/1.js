function longest(str) {
    // Good luck :)
    let res = str.split('');
    res.reduce((all, now, index, arr) => {
        if (now.charcodeAt(0) < arr[index + 1].charcodeAt(0)) {
            all.push(now)
        }
        return all
    })
}

console.log(longest('abcdeapbcdef'))