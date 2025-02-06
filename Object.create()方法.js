
var person = Object.create(null);
person.name = '张三';
person.getName = function () {
    console.log('1', this.name);

}

// console.log(person.__proto__ === null);
// console.log(person.__proto__);
// console.log(Object.getPrototypeOf(person));
// person.getName();

const fn = person.getName;
console.log(fn())

