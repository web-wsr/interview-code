var minSubArrayLen = function (target, nums) {
    // 双指针，滑动窗口
    let left = 0
    let right = 0
    let sum = 0
    let len = nums.length
    let ans = Infinity //特征值取一个
    while (sum < target) {
        sum += nums[right]
        while (sum >= target) {
            // 取出里面最小长度
            ans = Math.min(ans, right - left + 1)
            sum -= nums[left] //滑动窗口的核心，只要有一个滑动窗口满足条件，左边指针++，判断当前长度满足的条件，不满足跳出循环，去外层循环，右指针++
            left++
        }
        right++
    }
    return ans === Infinity ? 0 : ans
};
let target = 7
let nums = [2, 3, 1, 2, 4, 3]
console.log(minSubArrayLen(target, nums))