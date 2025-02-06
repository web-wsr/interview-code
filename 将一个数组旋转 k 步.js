/**
 * 输入一个数组[1,2,3,4,5,6,7 ]
 * k=3 ,即旋转3步
 * 输出[5,6,7,1,2,3,4]
 */

// 思路一：将后三个移动到最前面，依次pop，然后unshift到到最前面


const arr = [1, 2, 3, 4, 5, 6, 7]

function rotate1(arr, k) {
    if (!k || arr.length === 0) return arr
    for (let i = 1; i <= k; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}

console.log(rotate2(arr, 3))


// 思路二：将数组分为两部分，然后分别翻转，再合并

function rotate2(arr, k) {
    if (!k || arr.length === 0) return arr
    let len = arr.length
    const step = Math.abs(k % len) // 取绝对值
    let left = arr.slice(0, len - step)
    let right = arr.slice(len - step, len)
    return right.concat(left)
}

console.log(rotate2(arr, 3))