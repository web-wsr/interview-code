var removeElement = function (nums, val) {
    // 快慢指针
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (val !== nums[fastIndex]) {
            nums[slowIndex++] = nums[fastIndex]
        }
    }
    return slowIndex
};
const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const val = 2
console.log(removeElement(nums, val));


