// const num = 12345;

// // 将数值转换为字符串
// const str = num.toString();

// // 将字符串拆分为字符数组
// const charArray = str.split('');

// // 将字符数组转换为数字数组
// const numArray = charArray.map(Number);

// console.log(numArray); // 输出: [1, 2, 3, 4, 5]

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    // 声明一个集合，用来判重，while的出口
    let reSet = new Set();
    let totalCount;
    while (totalCount !== 1) {
        // 1. 转换为字符串
        // 2. 转换为字符数组
        let arr = (totalCount || n).toString().split('');
        totalCount = arr.reduce((total, cur) => {
            return total + cur * cur
        }, 0);

        // 出口，有重复的值，说明不能满足快乐数
        if (reSet.has(totalCount)) return false
        // 注意顺序，第一次添加，第二次判断
        reSet.add(totalCount)

    }
    return true
};

console.log(isHappy(2));




