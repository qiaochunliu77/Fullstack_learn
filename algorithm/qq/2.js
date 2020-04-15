let enc_qq = [6,3,1,7,5,8,9,2,4],//加密的qq
    qq = [],//真正的qq
    head = 0,//头指针
    tail = 9;
while(head < tail){
    // 把第一位拿出来
    qq.push(enc_qq[head]);
    // 指针后移一位
    head++;
    // 拿到第二位赋给原数组尾部
    enc_qq[tail] = enc_qq[head];
    tail++;
    head++;
}
console.log(qq.join(''));