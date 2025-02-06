var MyStack = function () {
    this.queue1 = []
    this.queue2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    while (this.queue1.length > 1) {
        // 队列中除了最后一个元素，其他元素都移到另一个队列中
        this.queue2.push(this.queue1.shift())
    }
    // 再把queue2中的元素全部再移回queue1中 
    while (this.queue2.length) {
        this.queue1.push(this.queue2.shift())
    }
    // 此时return 出来 queue1中栈顶元素
    return this.queue1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    const x = this.pop()
    // 只是查看栈顶的元素，不删除 重新压入
    this.queue1.push(x)
    return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue1.length && !this.queue2.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */