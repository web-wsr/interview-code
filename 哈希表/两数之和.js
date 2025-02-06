// 具体思路： 用map存储遍历过的元素 map的key 为元素的值 ，value为元素的下标   将target - nums[i] 进行匹配
// Map对象的方法:
// set(key, val): 向Map中添加新元素
// get(key): 通过键值查找特定的数值并返回
// has(key): 判断Map对象中是否有Key所对应的值，有返回true,否则返回false
// delete(key): 通过键值从Map中移除对应的数据
// clear(): 将这个Map中的所有元素删除
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 建立一个map对象
    let reMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (reMap.get(target - nums[i]) !== undefined) {  // 遍历当前元素，并在map中寻找是否有匹配的key
            return [reMap.get(target - nums[i]), i]
        }
        // 如果没找到匹配对，就把访问过的元素和下标加入到map中
        reMap.set(nums[i], i)
    }
    return []
};

const nums = [2, 7, 11, 15]
const target = 18
console.log(twoSum(nums, target));