setTimeout(() => {
    console.log('我是第一个宏任务');
    Promise.resolve().then(() => {
        console.log('我是第一个宏任务里的第一个微任务');
    });
    Promise.resolve().then(() => {
        console.log('我是第一个宏任务里的第二个微任务');
    });
}, 0);

setTimeout(() => {
    console.log('我是第二个宏任务');
}, 0);

Promise.resolve().then(() => {
    console.log('我是第一个微任务');
});

console.log('执行同步任务');

/**
 * 最后的执行结果是：
// 执行同步任务
// 我是第一个微任务
// 我是第一个宏任务
// 我是第一个宏任务里的第一个微任务
// 我是第一个宏任务里的第二个微任务
// 我是第二个宏任务
 */
