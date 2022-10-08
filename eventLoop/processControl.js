
/**
 * 异步操作的流程控制
 *如果有多个异步操作，就存在一个流程控制的问题：
 *如何确定异步操作执行的顺序，以及如何保证遵守这种顺序。
 * @param {*} arg 
 * @param {*} callback 
 */
// function async(arg, callback) { 
//     console.log("参数为：" + arg + ",1秒后返回结果")
//     setTimeout(function () {
//         callback(arg * 2);
//     }, 1000);
// };

/**
 * 上面代码的async 函数是一个异步任务，非常耗时，每次执行需要1秒才能完成，
 * 然后再调用回调函数。
 */

var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
    console.log('参数为 ' + arg + ' , 1秒后返回结果');
    setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
    console.log('完成: ', value);
}

function series(item) {
    if (item) {
        async(item, function (result) {
            results.push(result);
            return series(items.shift());
        });
    } else {
        return final(results[results.length - 1]);
    }
}

series(items.shift());