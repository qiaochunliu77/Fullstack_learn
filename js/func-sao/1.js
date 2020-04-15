/**
 * 
 * @param {number} w 
 * @param {number} h 
 */
function area(w,h) {
    if(arguments.length < 2){
        console.log('error')
        // throw new Error('error');
        return;
    }
    if(typeof w !== 'number' && typeof h !== 'number'){
        console.log('参数不够')
        return;
    }
    return w*h;
}
console.log(area(1.2,'we'));
// var area = function(w,h) {

// }

// let getArea = (w,h) => w*h;