// 链表
// 链表是一种物理结构（非逻辑结构）， 类似于数组
// 数组需要一段连续的内存区间，而链表是零散的
// 链表节点的数据结构{ value, next, prev }


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
var removeElements = function (head, val) {
    // 创建一个虚拟节点，方便处理头节点
    const ret = new ListNode(0, head)
    //让虚拟节点的next指向head 方便我们return
    ret.next = head
    // 定义一个指针，指向当前的虚拟节点，方便遍历 链表
    let cur = ret
    // next的指向为null 说明遍历结束
    while (cur.next) {
        if (cur.next.val === val) {
            // 跳过当前的节点，指向当前的节点的下一个节点 实现删除
            cur.next = cur.next.next
        } else {
            cur = cur.next  // 继续遍历
        }
    }
    return ret.next  // 返回头节点
};

