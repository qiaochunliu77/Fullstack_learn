
var levelOrder = function(root) {
    if(!root) return[]
    let queue = [root];                 //取出第一层队列
    let res = [];                       //结果集
    let num = 0;                        //层数
    while(queue.length){
        num ++;
        let rowNodes = queue.splice(0);
        for(let node of rowNodes){
            res.push(node.val)
            // 偶数层
            console.log('num',num)
            if(num%2 === 0){
                console.log('Oushu')
                if(node.right) queue.push(node.right);
                if(node.left) queue.push(node.left)
            }else{
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right)
            }
        }
    }
    return res;
};
console.log(levelOrder([3,9,20,null,null,15,7]))