// 链表
// 链表是一种物理结构（非逻辑结构）， 类似于数组
// 数组需要一段连续的内存区间，而链表是零散的
// 链表节点的数据结构{ value, next, prev }


var reverseList = function (head) {
    // 双指针
    if (!head || !head.next) return head
    let temp = null; // 保存cur的下一个节点
    let pre = null;
    let cur = head
    while (cur) {
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp

    }

    return pre
};