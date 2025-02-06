/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};