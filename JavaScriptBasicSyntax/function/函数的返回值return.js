// 函数是做某件事或者实现某种功能，做完之后得返回结果给人家

function 函数名(形参, 形参) {
    函数体;
    return 需要返回的结果;
}
console.log(函数名(实参,实参));

// 1、我们函数只是实现某种功能，最终的结果需要返回给函数的调用者 函数名（）
//    通过return 实现的

//求任意两个数的和
function add(x, y) {
    return x + y;
}

console.log(add(1, 1)); // 2



// 函数返回值注意事项

// 1、return 终止函数
function add(x, y) {
    return x + y;   //return 后面的代码不会被执行
    alert('我不会被执行的哦')
}

console.log(add(1, 1)); // 2


// 2 return 只能返回一个值
function add(x, y) {
    return x, y;  //返回的结果是最后一个值
}

console.log(add(1, 2));


//3、 我们求任意两个数的 加减乘数结果 ，并返回一个数组
function getResult(num1, num2) {
    return [num1 + num2, num1 - num2, num1 * num2, num1 / num2]
}

var sum = getResult(1, 2);
console.log(sum)


/**
 * 4、函数 都是有返回值的：
 *    如果 有 return ，则返回 return 后面的值，
 *    如果 没有 return ，则返回 undefined
*/
function add() {
    return 888;
}
console.log(add());  //返回 888

function add() {

}
console.log(add());  //返回 undefined


/** 

break，continue，return的区别

break : 结束当前的循环体 （如for、while） 
continue ： 跳出本次循环，继续执行下一次循环  （如for、while）
return ： 不仅可以退出循环，还能够返回 return 语句中的值，
             同时还可以结束当前的函数体内的代码

*/