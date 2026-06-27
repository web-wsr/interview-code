var groupAnagrams = function (strs) {
  const map = {}; // 用对象作为哈希表
  for (const str of strs) {
    // 将字符串转为字符数组排序后重组为字符串作为键
    const sortedStr = str.split("").sort().join("");
    if (!map[sortedStr]) {
      map[sortedStr] = []; // 初始化新分组
    }
    map[sortedStr].push(str); // 将原字符串加入对应分组
  }
  //   return map;
  return Object.values(map); // 返回所有分组的值
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
