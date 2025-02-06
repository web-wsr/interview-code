/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const result = [];
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    // 创建小顶堆
    const heap = new PriorityQueue({
        compare: (a, b) => a.value - b.value
    })
    for (let [key, value] of map) {
        heap.enqueue({ key, value })
        if (heap.size() > k) {
            // 删除堆顶元素 小频率的元素
            heap.dequeue()
        }
    }
    // 输出
    while (heap.size() > 0) {
        result.push(heap.dequeue().key)
    }
    return result
};