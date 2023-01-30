// 引入 fs 模块
const fs = require('fs');

// 多个异步任务
// 1、读取多个文件   回调地狱容易重名，不易被发现，调试很不方便   
fs.readFile('./resources/村居.md', (err, data1) => {
  fs.readFile('./resources/画.md', (err, data2) => {
    fs.readFile('./resources/静夜思.md', (err, data3) => {
      let result = data1 + '\r\n' + data2 + '\r\n' + data3;
      console.log(result);
    });
  });
});

// 实际中会有这样的场景，比如读取数据库，读取用户，读取完用户之后，
// 要根据用户，再去读取，用户的其他信息，比如说详细信息，。再比如说用户的订单 等等等等

// 就是必须得有用户，才能有后续的行为 或者后续的数据，
// 他们之间是有递进关系的，所以我们按照这种层级方式来做。


// 2、使用Promise实现
const p = new Promise((resolve, reject) => {
  fs.readFile('./resources/村居.md', (err, data) => {
    resolve(data);
  });
});

p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/画.md', (err, data) => {
      resolve([value, data]);
    });
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/静夜思.md', (err, data) => {
      // 压入
      value.push(data);
      resolve(value);
    });
  })
}).then(value => {
  console.log(value.join('\r\n'));
})

