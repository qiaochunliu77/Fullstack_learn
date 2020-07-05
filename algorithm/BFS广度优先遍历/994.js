
/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
    let queue = [];
    // 上下左右四个方向 
    let direction = [[-1,0],[1,0],[0,-1],[0,1]];
    let time = -1;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0;j<grid[0].length; j++){
            // console.log(grid[i][j])
            if(grid[i][j] === 2){
                queue.push({x:i,y:j})
            }
        }
    }
    while(queue.length){
        time++;
        // 每分钟找到所有当前的坏橘子
        let rowNodes = queue.splice(0);
        // 所有当前坏橘子的四个方向让他变化
        for(let {x,y} of rowNodes){
            for(let direct of direction){
                let x_new = x + direct[0];
                let y_new = y + direct[1];
                if(0 <= x_new && x_new < grid[0].length
                    && 0<= y_new && y_new<grid[0].length
                    && grid[x_new][y_new] ===1
                    ){
                        grid[x_new][y_new] = 2;
                        queue.push({x:x_new,y:y_new})
                }
            }
        }
    }
    for(let row of grid){
        if(row.includes(1)) return -1;
    }
    return Math.max(0,time)
};
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
