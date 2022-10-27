/** 求 1-100之间所有数的  总和 与 平均值
 * 
 * 1、需要定义一个  总和 变量 sum , 平均值 变量  average
 * 2、1-100之间这么多数字相加，需要用到 for 循环
 * 3、计算 总和 的公式： sum = （1+100）*100/2 
 * 4、计算 平均值 的公式：  average = sum /100
 * 5、输出 总和的计算结果 ：sum、平均值 的计算结果 ：average
 */
var sum = 0;
var average = 0;
for (var i = 1; i <= 100; i++) {
    // sum = sum + i;
    sum += i;
}
average = sum / 100;

console.log('1-100之间所有数的总和 ：' + sum);  // 5050
console.log('1-100之间所有数的平均值 ：' + average); // 50.5