// let promise = new Promise(function (resolve, reject) { 
//     console.log(1)
//     if (true) {
//         //异步操作成功
//         resolve(value);
//     } else { 
//         //异步操作失败
//         reject(new Error());
//     }
// });

/**
 * 上面代码中，Promise 构造函数接受一个函数作为参数，
 * 该函数的两个参数分别是resolve和reject。
 * 它们是两个函数，由JavaScript引擎提供，不用自己实现。
 * 
 * resolve 函数的作用是：
 * 将 Promise 实例的状态从 “未完成” 变为 “成功” （即从pending 变为 fulfilled）,
 * 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。
 * 
 * reject 函数的作用是：
 * 将Promise实例的状态从“未完成 ”变为“失败”（即从pending变为rejected），
 * 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
 * 
 */

// function timeout(ms) { 
//     return new Promise(function (resolve, reject) { 
//         setTimeout(resolve,ms,'done')
//     })
// }

// timeout(5000);


/**
 * Promise实例的then方法，用来添加回调函数。
 * then方法可以接受两个回调函数：
 * 第一个时异步操作成功时（变为fulfilled状态）时的回调函数；
 * 第二个时异步操作失败（变为rejected）时的回调函数（该参数可以省略）。
 * 一旦状态改变，就调用相应的回调函数
 */

let p1 = new Promise((resolve, reject) => { 
    resolve("成功")
})
p1.then(console.log, console.error);

let p2 = new Promise((resolve, reject) => {
    reject(new Error('失败'))
})
p2.then(console.log, console.error);
p2
    .then(console.log(1))
    .then(console.log(2))
    .then(console.log(3))
    .then(
        console.log,
        console.error
    );


