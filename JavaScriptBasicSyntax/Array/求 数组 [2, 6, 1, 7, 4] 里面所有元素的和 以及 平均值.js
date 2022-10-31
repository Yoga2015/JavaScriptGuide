/** 求 数组 [2, 6, 1, 7, 4] 里面所有元素的和 以及 平均值
 * 1、声明一个求和的变量 sum
 * 2、声明一个求平均值的变量 average
 * 3、for循环 变量这个数组，把里面每个数组元素加到 sum 里面。
 * 4、用求和变量 sum 除于 数组的长度就可以得到数组的平均值
 *  
*/
var arr = [2, 6, 1, 7, 4];
var sum = 0;
var average = 0;
for (var i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];  //我们加的是数组元素 arr[i] 不是计数器 i  
}
average = sum / arr.length;
console.log('数组中所有元素的和：' + sum);
console.log('数组中的元素的平均值：' + average);


/**  删除 数组 [2, 6, 1, 7, 4] 里面的第一个元素 2
 *  
 */

let arr1 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] != arr[0]) {
        arr1[arr1.length] = arr[i];
    }
}

console.log(arr1);
