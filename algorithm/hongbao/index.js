function hongbao (total,num){
    let arr = [];//声明一个数组
    let restAmount=total;
    let restNum = num;
    for (let i = 0;i < num - 1;i++){
        let amount = total/num;
        arr.push(amount);
        restAmount-=amount;
    }
    arr.push(restAmount); 
    return arr;
}
console.log(hongbao(5,40));
