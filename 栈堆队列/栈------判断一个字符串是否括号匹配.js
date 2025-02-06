/**
 * 判断一个字符串是否括号匹配
 * @param  {String} str
 */
/**
 * 判断左右括号是否匹配
 * @param  left  左括号
 * @param  right  右括号
 */
function isMatch(left, right) {
    if (left === '{' && right === '}') return true
    if (left === '[' && right === ']') return true
    if (left === '(' && right === ')') return true
    return false
}
function matchBracket(str) {
    const length = str.length
    const stack = []
    if (length === 0) return true
    const leftSymbols = '([{'
    const rightSymbols = ')]}'

    for (let i = 0; i < length; i++) {
        if (leftSymbols.includes(str[i])) {
            // 左括号 压栈
            stack.push(str[i])
        } else if (rightSymbols.includes(str[i])) {
            // 右括号 判断栈顶的左括号是否与右括号匹配，匹配就出栈
            const top = stack[stack.length - 1]
            if (isMatch(top, str[i])) {
                stack.pop()
            } else {
                // 不匹配 返回false
                return false
            }
        }
    }

    return stack.length === 0
}




// 栈  push() pop()
// 1 声明一个空栈 stack
// 2 for 循环遍历字符串 声明char 装入字符
// 3 push装入栈中，取出倒数两个栈值 后进先出
// 4 判断两个栈是否匹配 匹配就pop 推出 
// 5 最后返回判断stack的length === 0 返回一个布尔值
// var isValid = function (s) {
//     const stack = [];
//     // 创建一个map 映射
//     const map = {
//         ')': '(',
//         ']': '[',
//         '}': '{'
//     }
//     for (i = 0; i < s.length; i++) {
//         const char = s[i];
//         stack.push(char);
//         // 判断条件: stack.length >= 2,才会执行下面的操作
//         if (stack.length >= 2) {
//             const lastOne = stack[stack.length - 1]
//             const lastTwo = stack[stack.length - 2]
//             if (map[lastOne] === lastTwo) {
//                 stack.pop(lastOne)
//                 stack.pop(lastTwo)
//             }
//         }

//     }
//     return stack.length === 0;
// };

// var isValid = function (s) {
//     const stack = []
//     for (let i = 0; i < s.length; i++) {
//         let symbol = s[i]
//         switch (symbol) {
//             case '(':
//                 stack.push(')')
//                 break;
//             case '[':
//                 stack.push(']')
//                 break;
//             case '{':
//                 stack.push('}')
//                 break;
//             default:
//                 const top = stack.pop()
//                 if (top !== symbol) {
//                     return false
//                 }
//         }
//     }
//     return stack.length === 0
// }

// 测试
const str1 = '{a[b({c)d]e}'
const str2 = "()"
const str3 = "()[]{}"
console.log(matchBracket(str1)) // false
console.log(matchBracket(str2))
console.log(matchBracket(str3)) 
