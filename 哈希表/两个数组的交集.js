// // 记录开始时间
// const time = performance.now();

// console.log(time);

// let a = new Set([1, 2, 3]);
// let b = new Set([2, 3, 6]);
// let intersect = new Set([...a].filter(x => b.has(x)));

// // 记录结束时间
// const timend = performance.now();

// console.log(timend);

// console.log(Array.from(intersect));
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // 遍历长度少的数组，性能会好
    // 做一个交换
    if (nums1.length < nums2.length) {
        let temp = nums1
        nums1 = nums2
        nums2 = temp
        // console.log('1', nums1);
        // console.log('2', nums2);
    }

    let nums1Set = new Set(nums1)
    console.log(nums1Set);
    // 定义一个空Set 用来存储交集结果
    let reSet = new Set()
    for (let i = nums2.length - 1; i >= 0; i--) {
        if (nums1Set.has(nums2[i])) {
            reSet.add(nums2[i])
        }
    }
    return Array.from(reSet)
};

const nums1 = [2, 2], nums2 = [1, 2, 2, 1]

console.log(intersection(nums1, nums2));
