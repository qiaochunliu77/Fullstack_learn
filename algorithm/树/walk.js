/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root) {
    let arr = [];
    function helper(node) {
        let val = root.val;
        arr.push(val);
        // 遇到左子树 也要 root left right 
        helper(node.left);
        helper(node.right);
    }
    helper(root)
    return arr;
};
// 递归 函数调用栈
// 循环 stack

var preorderTraversal = function(root) {
    let res = [];
     if (root) {
       res.push(root.val);
       res = res.concat(preorderTraversal(root.left));
       res = res.concat(preorderTraversal(root.right));
     }
     return res;
  };