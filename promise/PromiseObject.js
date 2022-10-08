// 回调 传统写法 ：
// 缺点: 修改 step2 时，还要考虑会不会影响到step3、 step4
step1(function (value1) {
    step2(function (value2) {
        step3(function (value3) {
            step4(function (value4) {
                //......
            });
        });
    });
});

//Promise 写法
//当修改 step2 ，就不用考虑会不会影响 step3 、step4 ，因为它们之间是拆分开的
(new Promise(step1))
    .then(step2)
    .then(step3)
    .then(step4)

/**
 * // 比较上面两种方式：
 * Promise的写法更容易读，而且更好的把step 的每一个方法拆分开，达到更好的封装和解耦。
 */

/**
 * Promise 是一种异步方式，Promise的写法相对来说会让人摆脱回调的苦恼，
 * 就是不必一层层嵌套相关的方法，解决 过高的相互依赖，耦合程度。
 * ES6规定，Promise对象是一个构造函数，用来生成Promise实例对象。
 */


//创建一个Promise实例对象
let promise = new Promise(function (resolve, reject) {
    console.log("我是一个promise对象");
    if (resolve) {
        resolve(value);   //异步操作成功
        console.log("Promise实例对象传回一个值（value）,状态变为 fulfilled")
    } else { 
        reject(error);
    }
 })