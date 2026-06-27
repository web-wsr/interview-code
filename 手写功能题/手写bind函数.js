function fn(q, b, c, s) {
  console.log("argument", q, b, c, s);
  console.log("this", this);
  return 123;
}

Function.prototype.myBind = function (ctx, ...args) {
  const fn = this;
  return function (...subArgs) {
    const allArgs = [...args, ...subArgs];
    // 如果是用new调用函数，直接返回这个函数
    if (new.target) {
      return new fn(...allArgs);
    } else {
      return fn.apply(ctx, allArgs);
    }
  };
};

const newFun = fn.myBind("ctx", 3, 4);
console.log(newFun(1, 2));
