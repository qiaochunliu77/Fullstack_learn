
    var levelOrder = function(root) {
        if(!root) return []
        let queue = [root];
        let res = [];
        // 下一层要拿到上一层的所有元素
        // 遍历上一层的所有元素 取出所有的left right
        while(queue.length){
            let cal = []
            let rowNodes = queue.splice(0);    //出队列 删去第一层的元素 
            for(let node of rowNodes){         //拷贝一份后遍历
                cal.push(node.val)
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            res.push(cal)
        }
        return res;
    }
console.log(levelOrder([1,2,3,7,4]))
