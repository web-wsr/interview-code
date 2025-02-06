// 先进先出
// add delete length

var MyQueue = function () {
    // 用于入栈 栈
    this.stackIn = []
    // 用于出栈 栈
    this.stackOut = []

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // 判断stackOut是否为空
    const size = this.stackOut.length;
    if (size) {
        return this.stackOut.pop();
    }
    // 将stackIn中的元素全部出栈到 stackOut中
    while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop())
    }

    // 将stackOut中的元素全部出栈一个 实现队列中的出队功能
    const res = this.stackOut.pop()
    return res
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    const x = this.pop()
    // 将x重新压入stackOut
    this.stackOut.push(x)
    return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stackIn.length === 0 && this.stackOut.length === 0
};

var obj = new MyQueue()

