var moveZeroes = function (nums) {
    // 快慢指针
    let slowindex = 0
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            nums[slowindex++] = nums[fastIndex]
        }
    }
    for (let i = slowindex; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};

let nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums));
