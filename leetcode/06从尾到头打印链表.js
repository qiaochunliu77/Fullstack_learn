/**
 * Definition for singly-linked list.
 *  输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  // 1. 顺序后指链表，求数组长度
  // 2. 新建一个固定长度的数组
  // 3. 从链表头部开始遍历，每一项从尾部开始
  let curr = new ListNode(head);
  let length = 0;
  while (curr.next !== null) {
    length++;
    curr = curr.next;
  }
  let arr = new Array(length);
  while (curr.next !== null) {
    length--;
    arr[length] = curr.val();
    curr = curr.next;
  }
  return arr;
};
reversePrint([1, 3, 4]);
