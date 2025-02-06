function preOrderTraversal(root) {
    const stack = [];
    const res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        // 中
        if (node !== null) {
            res.push(node.val);
        } else {
            continue;
        }
        // 右
        stack.push(node.right);
        // 左
        stack.push(node.left);
    }
    return res;
}