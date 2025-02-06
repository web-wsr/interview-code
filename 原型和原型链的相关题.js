function Foo() {
    print = function () {
        console.log(1);
    } // print 函数是在全局作用域中定义的，不能通过 Foo 的实例来调用。
    return this
}
Foo.print = function () {
    console.log(2);
}
Foo.prototype.print = function () {
    console.log(3);
}
var print = function () {
    console.log(4);
}
function print() {
    console.log(5);
}

// 下面输出的结果
new Foo.print(); //2
Foo.print() // 2
print(); // 4
Foo().print();// 1  相当于执行window.print()   print 被定义为全局对象的一个属性，输出 1。
new Foo().print(); // 3
print() // 1