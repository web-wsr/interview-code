const input = [
  { id: 1, name: "Alice", dept: "HR", status: "active" },
  { id: 2, name: "Bob", dept: "IT", status: "inactive" },
  { id: 3, name: "Charlie", dept: "HR", status: "active" },
];

const classfiy = function (arr) {
  let result = {};
  // 初始化结构对象
  arr.forEach((item) => {
    if (!result[item.dept]) {
      result[item.dept] = [];
    }
  });
  // 过滤掉inactive
  arr.forEach((item) => {
    if (item.status !== "inactive") {
      result[item.dept].push(item.name);
    }
  });
  return result;
};

console.log(classfiy(input));
