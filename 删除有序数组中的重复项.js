var removeDuplicates = function (nums) {
    // 快慢指针
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[slowIndex] !== nums[fastIndex]) {
            slowIndex++
            nums[slowIndex] = nums[fastIndex]
        }
    }
    return slowIndex + 1
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums));