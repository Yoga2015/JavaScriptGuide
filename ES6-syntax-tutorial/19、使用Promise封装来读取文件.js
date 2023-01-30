// 1、引入 fs 模块
const fs = require('fs');

// 2、调用方法读取文件   （这是一个异步方法）
// fs.readFile('./resources/静夜思.md', (err, data) => {
//   //  如果失败，则抛出失败
//   if (err) throw err;
//   // 如果没有出错，则输出内容 ，此时 data 是一个 buffer
//   console.log(data);  // <Buffer e9 9d  ... 39 more bytes>
//   console.log(data.toString());  // toString() 方法可以把 二进制格式的内容  转为  人类能识别的内容
// })

// 3、使用 Promise
const p = new Promise(function (resolve, reject) {
  fs.readFile('./resources/静夜思.md', (err, data) => {
    // 判断如果失败
    if (err) reject(err);
    // 如果成功
    resolve(data);
  })
});

p.then(function (value) {
  console.log(value.toString());
}, function (reason) {
  console.log('读取失败');   //验证读取失败：把文件的路径故意改成错的
})