// add(1, 2).add(3).add(4).output()

// function add(...args) {
//     // 用reduce方法
//     let sum = args.reduce((total, cur) => {
//         return total + cur
//     }, 0)
//     chain = {
//         add: (...nextargs) => {
//             sum += nextargs.reduce((total, cur) => {
//                 return total + cur
//             }, 0)
//             // 要 return chain，否则无法链式调用
//             return chain
//         },
//         output: () => {
//             console.log(sum)
//         }
//     }

//     return chain
// }

// 原型和原型链的方法
function Add(...args) {
    this.sum = args.reduce((total, cur) => {
        return total + cur
    }, 0)
}
Add.prototype.add = function (...args) {
    this.sum += args.reduce((total, cur) => {
        return total + cur
    }, 0)
    return this
}

Add.prototype.output = function () {
    console.log(this.sum)
}

function add(...args) {
    return new Add(...args)
}

add(1, 2).add(3, 5, 7, 8).add(4).output()
