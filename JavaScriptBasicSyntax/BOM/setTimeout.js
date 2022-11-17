/**
 * setTimeout函数接受两个参数，
 * 第一个参数func | code是将要推迟执行的函数名或者一段代码，
 * 第二个参数delay是推迟执行的毫秒数。
 * */
// console.log(1);
// setTimeout('console.log(2)', 3000);
// console.log(3);


/**如果推迟执行的是函数，就直接将函数名，作为setTimeout的参数。 */

// function f1() {
//     console.log("I AM FUNCTION NAME ,after 1 second execute")
// }

// setTimeout(f1,1000)


/** setTimeout的第二个参数如果省略，则默认为0。 */

// setTimeout(f1)
// // 等同于
// setTimeout(f1, 0)

/** setTimeout还允许更多的参数。它们将依次传入推迟执行的函数（回调函数）。*/

setTimeout(function (a, b) { 
    console.log(a + b)
 },1000,2,2)

/**
 * 上面代码中，setTimeout() 共有4个参数，
   最后那两个参数，将在1000毫秒之后回调函数执行时，作为回调函数的参数
 */

/**
 * 如果回调函数是对象的方法，
 * 那么setTimeout使得方法内部的this关键字指向全局环境，而不是定义时所在的那个对象。
 */   
let x = 1;

let obj = {
    x: 2,
    y: function () { 
        console.log(this.x)
    }
};

setTimeout(obj.y, 1000) //输出的是1，而不是2。
//因为当obj.y在1000毫秒后运行时，this所指向的已经不是obj了，而是全局环境。

//为了防止出现这个问题，使用bind方法，将obj.y这个方法绑定在obj上面。
setTimeout(obj.y.bind(obj), 1000)
//另一种解决方法是 使用 call方法，将obj.y 这个方法临时绑定 obj 上面。
setTimeout(obj.y.call(obj), 1000)