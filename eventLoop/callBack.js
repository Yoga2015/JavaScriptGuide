/* 回调函数的优点是简单、容易理解和实现，
缺点是不利于代码的阅读和维护，各个部分之间高度耦合（coupling），使得程序结构混乱、
流程难以追踪（尤其是多个回调函数嵌套的情况），而且每个任务只能指定一个回调函数。 */
function fn1(callback) {
    console.log(1)
    callback()
}
function fn2() {
    console.log(2)
}
fn1(fn2)

// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
// }
// function alertFinished() {
//     console.log('Finished my homework');
// }
// doHomework('math', alertFinished);


// function toRun(sequenceNumber, callback) {
//     console.log(`I am ${sequenceNumber} player ready to run `);
//     callback();
// }

// function Running() {
//     console.log(' I has finished running')
//     setTimeout(function () {
//         console.log('5秒后，下一位选手做好准本开跑')
//     }, 5000)
// }

// toRun(1, Running);
// toRun(2, Running);
// toRun(3, Running);