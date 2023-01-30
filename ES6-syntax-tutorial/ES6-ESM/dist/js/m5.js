"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 定义模块                       m5.js 
var basicNum = 1;
var add = function add(a, b) {
  return a + b;
};

// 导出模块内部数据  暴露出去
exports.basicNum = basicNum;
exports.add = add;