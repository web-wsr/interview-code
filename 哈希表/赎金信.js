/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const resHash = Array(26).fill(0);
    const base = 'a'.charCodeAt()
    // 取value值 用for of 遍历
    for (const s of magazine) { // 记录 magazine里各个字符出现次数
        resHash[s.charCodeAt() - base]++
    }
    for (const s of ransomNote) { // 对应的字符个数做--操作
        const index = s.charCodeAt() - base
        if (!resHash[index]) return false // 如果没记录过直接返回false 这里很关键 ransomNote：‘a’  magazine：‘b’
        resHash[index]--
    }
    return true
};