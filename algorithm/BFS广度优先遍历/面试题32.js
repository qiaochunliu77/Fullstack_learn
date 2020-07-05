
    // 层序遍历
    // 广度优先遍历
    // 使用队列
    var levelOrder = function(root) {
        if(!root) return []
        let queue = [root];
        let res = []
        // 下一层要拿到上一层的所有元素
        // 遍历上一层的所有元素 取出所有的left right
        while(queue.length){
            let rowNodes = queue.splice(0);    //出队列 删去第一层的元素 
            for(let node of rowNodes){         //拷贝一份后遍历
                res.push(node.val)
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
        }
        return res;
    }
    
console.log(levelOrder([3,9,20,null,null,15,7]))

    // let queue = [XXX]
    // while(queue.length){
    //     出队列
    //     入队列的逻辑
    // }
