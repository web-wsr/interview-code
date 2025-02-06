var sortedSquares = function (nums) {
    // 定义一个a,指定为数组序列号的最右边
    let a = nums.length - 1
    // 双指针
    // 定义一个返回的数组 result 固定长度和nums一致
    let result = new Array(nums.length).fill(0)
    // 指针i放置在最左侧，指针j放置在最右侧
    let i = 0, j = nums.length - 1
    while (i <= j) {
        if (nums[i] * nums[i] < nums[j] * nums[j]) {
            result[a--] = nums[j] * nums[j]
            j--
        } else {
            result[a--] = nums[i] * nums[i]
            i++
        }
    }
    return result
};
let nums = [-7, -3, 2, 3, 11]
console.log(sortedSquares(nums));