/**
 * Created by steven on 3/1/16.
 */
'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var start = new ListNode(0);
    var curNode; // point to current node.
    var node; // temp var for loop.
    start.val += l1.val, l1 = l1.next;
    start.val += l2.val, l2 = l2.next;

    curNode = start;
    while (1) {
        if (l1 === null && l2 === null) break;
        node = new ListNode(0);
        if (l1 !== null) node.val += l1.val, l1 = l1.next;
        if (l2 !== null) node.val += l2.val, l2 = l2.next;

        if (curNode.val > 9) {
            curNode.val %= 10;
            node.val += 1;
        }
        curNode.next = node;// assign this node to lastNode's next.
        curNode = node;// point curNode to this node.
    }
    if (curNode.val > 9) {
        curNode.val %= 10;
        curNode.next = new ListNode(1);
    }
    return start;
};
