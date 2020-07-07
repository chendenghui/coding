/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-17 21:24:05
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 13:31:37
 */
// 链表迭代法
var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = pre;
        prev = cur;
        cur = next;
    }
    return prev;
};
//链表递归简化实现
var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while (curr) {
        [curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
};

//递归法
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let next = head.next; // next节点，反转后是最后一个节点
    let reverseHead = reverseList(next);
    head.next = null; // 裁减 head
    next.next = head; // 尾接
    return reverseHead;
};
