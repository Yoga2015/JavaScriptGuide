let promise = new Promise(function (resolve, reject) { 
    console.log(1)
    if (true) {
        //异步操作成功
        resolve(value);
    } else { 
        //异步操作失败
        reject(new Error());
    }
});

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

function timeout(ms) { 
    return new Promise(function (resolve, reject) { 
        setTimeout(resolve,ms,'done')
    })
}

timeout(5000);