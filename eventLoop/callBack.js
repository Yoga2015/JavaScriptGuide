// 普通函数

// 创建一个普通函数：
function add(a, b) {  //这就是普通函数，直接放入两个值，执行结果
    var c = a + b;
    console.log(c);
}

// 调用普通函数
add(2, 4);    // 6   这很简单


/* 回调函数

从结构上来说它是需要一个主函数的，它是把回调函数作为主函数的一个参数存在的，
它的执行顺序是：主函数 执行完再执行回调函数。 */

//先创建 一个主函数
function A(callback) {
    callback();     //这里是重点 ，下面 A(B)调用了函数，所以作为形参的callback， 被 B 赋值，
                    //所以这里就成了 B() ;也就是下面那个函数
    console.log('这是主函数');
}

//然后 创建回调函数
function B() {
    console.log("这是回调函数")
}

// 通过主函数调用回调函数
A(B)  
 
// 得到结果是 :
这是回调函数
这是主函数 

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