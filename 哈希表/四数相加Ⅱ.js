/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 * 
 *  输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
    输出：2
    解释：
    两个元组如下：
    1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
    2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const twoSumMap = new Map();
    let count = 0;
    //  统计nums1和nums2数组元素之和，和出现的次数，放到map中
    // 取value值 就用for...of
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            const sum = n1 + n2
            twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1)
        }
    }
    // 找到如果 0-(c+d) 在map中出现过的话，就把map中key对应的value也就是出现次数统计出来
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            const sum = n3 + n4
            if (twoSumMap.has(-sum)) {
                count += twoSumMap.get(-sum)
            }
        }
    }
    // return twoSumMap   Map(3) { -1 => 1, 0 => 2, 1 => 1 }
    return count
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));