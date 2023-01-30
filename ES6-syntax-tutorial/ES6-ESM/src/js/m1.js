// 分别暴露
export let school = '黑马程序员';   //单个导出

export function teach() {
  console.log('我们可以教给你开发技能');
}


/* 
  我们想对外暴露一些数据，让外部的模块可以使用，
  这个模块里面的变量和函数，我们可以使用 export命令 暴露出去。
  在 HTML 文件中引入 ，引入的方式就和以前不一样了。
*/