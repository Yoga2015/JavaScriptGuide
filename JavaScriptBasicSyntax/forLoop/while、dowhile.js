var i = 1;
while (i <= 5) {
    console.log('这是打印第一个' + i);
    i++;
}

// while循环 打印人的一生， 从 1岁到100岁

var i = 1;
while (i <= 100) {
    console.log('他' + i + '岁了');
    i++;
}

/** 求 1 - 100 之间所有整数的累加和
 * 
 *   求和公式：等差数列和=（首项 +末项）× 项数 ÷ 2
 *   
 *   1+2+3...+100 = (1+100)* 100  / 2
 *                = 101 * 100 /2
 *                = 101 * 50
 *                = 5050
 */

// while循环 计算1-100之间所有整数的和
var sum = 0;
var i = 1;
while (i <= 100) {
    sum = sum + i;
    i++;
}
console.log(sum)


//do...while循环 打印人的一生， 从 1岁到100岁
var i = 1;
do {
    console.log('他' + i + '岁了');
    i++;
} while (i <= 100)

//do...while循环 计算1-100之间所有整数的和
var sum = 0;
var i = 1;
do {
    sum = sum + i;
    i++;
} while (i <= 100)
console.log(sum)

/**弹出一个提示框，你爱我吗？
 * 如果输入我爱你，就提示结束，否则，一致询问。
*/
//while循环
var message = prompt('你爱我吗？');
while (message !== '我爱你') {
    message = prompt('你爱我吗？');
}
alert('我也爱你啊');

//do...while循环
do {
    var message = prompt('你爱我吗？');
} while (message !== '我爱你')
alert('我也爱你啊');


