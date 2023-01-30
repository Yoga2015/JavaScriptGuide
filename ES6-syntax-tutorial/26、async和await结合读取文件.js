// async和await结合 读取文件

// 1、引入fs 模块
const fs = require('fs');

// 读取 【静夜思】
function readJingYeSi() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/静夜思.md', (error, data) => {
      // 如果失败
      if (error) reject(error);
      //如果成功
      resolve(data);
    });
  });
};

// 读取 【画】
function readHua() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/画.md', (error, data) => {
      // 如果失败
      if (error) reject(error);
      //如果成功
      resolve(data)
    });
  });
};

// 读取 【村居】
function readCunJu() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/村居.md', (error, data) => {
      // 如果失败
      if (error) reject(error);
      //如果成功
      resolve(data)
    });
  });
};

// 声明一个 async 函数
async function main() {
  // 获取 静夜思 内容
  let JingYeSi = await readJingYeSi();
  // 获取 画 内容
  let Hua = await readHua();
  // 获取 村居 内容
  let CunJu = await readCunJu();

  console.log(JingYeSi.toString());
  console.log(Hua.toString());
  console.log(CunJu.toString());
}

main();