/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            const n2 = stack.pop();
            const n1 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(n1 + n2);
                    break;
                case '-':
                    stack.push(n1 - n2);
                    break;
                case '*':
                    stack.push(n1 * n2);
                    break;
                case '/':
                    stack.push(n1 / n2 | 0);
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }
    let result = stack[0];
    return result;
};