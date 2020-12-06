/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 传入的就是要删去的节点
// 将下一个节点的值赋给当前节点
// 将下下个节点指向node的下一个节点
// 跳过node
var deleteNode = function(node) {
  // 跳过node节点
  node.val = node.next.val;
  node.next = node.next.next;
};