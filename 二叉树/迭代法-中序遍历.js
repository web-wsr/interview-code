function midOrderTraversal(root) {
    const stack = []
    const res = []
    // 指针
    let cur = root
    // 循环体 
    while (stack.length || cur) {
        // 一路向左
        if (cur) {
            stack.push(cur)
            // 左
            cur = cur.left
        } else {
            cur = stack.pop()
            // 中
            res.push(cur.val)
            // 右
            cur = cur.right
        }
    }
    return res
}