// 定义模块                       m5.js 
var basicNum = 1;
var add = function (a, b) {
  return a + b;
};

// 导出模块内部数据  暴露出去
export { basicNum, add };