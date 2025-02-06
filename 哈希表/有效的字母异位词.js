// 用哈希法就要想到三种数据结构：数组，map，Set
// 数值小：数组
// 数值大：Set
// 有键值对：map


// 在字母异位词检查中，减去 "a".charCodeAt(0) 的目的是将字符映射到一个从 0 开始的索引范围，以便使用数组来记录每个字符的出现次数。具体来说：

// 字符 'a' 的编码值是 97，减去 97 后得到 0。
// 字符 'b' 的编码值是 98，减去 97 后得到 1。
// 字符 'c' 的编码值是 99，减去 97 后得到 2。
// 以此类推，直到字符 'z' 的编码值是 122，减去 97 后得到 25。
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let resHash = new Array(26).fill(0)

    const base = 'a'.charCodeAt()
    for (let i of s) {
        // 对应的下标值0 就会++
        resHash[i.charCodeAt() - base]++
    }
    for (let i of t) {
        resHash[i.charCodeAt() - base]--
    }
    // resHash.some(item => item !== 0) 用于检查数组 resHash 中是否存在任何一个元素不等于 0。如果存在这样的元素，则返回 false，表示存在不等于 0 的元素，即存在字母数量不一致的情况。
    // 命中 说明没减完，不是有效字母异位词
    if (resHash.some(item => item !== 0)) return false
    return true


};



console.log(isAnagram('anagram', 'nagaram'));

