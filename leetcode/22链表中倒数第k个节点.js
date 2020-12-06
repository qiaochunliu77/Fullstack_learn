/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 快慢双指针，取指定长度
var getKthFromEnd = function(head, k) {
  let left = head;
  let right = head;
  let t =0;
  while(t++ < k){
      right = right.next;
  }
  while(right){
      right = right.next;
      left = left.next;
  }
  return left;
};