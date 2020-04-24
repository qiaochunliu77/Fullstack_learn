// 将一个字符串改变成另一个字符串他的莱文斯坦距离是多少
// 做最短的距离的
var a = "mitcmu",
    b = "mtacnu";
var n = 6,m = 6;
// 各种策略都尝试 用递归 f(n, m)  f(0, 0)
// 回溯


var minDist = Infinity
function lwstBT(i, j, dist){
    // dist 
    // 退出条件
    if(i == n || j == m){
        if(i<n) edist += (n-i);
        if(j<m)) edist += (m-j)
        if(edist<minDist) minDist = edist;
        return ;
    }
    if(a[i] == b[j]){
        lwstBT(i++, j++, edist) //两个相等 ij后指  编辑距离不改变
    }else{
        lwstBT(i+1, j, edist + 1) //删除a[i] 或者 b[j]前添加一个
        // 增
        // 删
        lwstBT(i, j+1, edist + 1);  //删除b[i] 或者 a[j]前添加一个
        lwstBT(i+1, j+1, edist + 1)  //替换为相同字符
        // 改
    }
}
lwstBT(0,0,0)
