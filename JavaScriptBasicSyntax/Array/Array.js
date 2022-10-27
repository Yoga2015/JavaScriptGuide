var arr = [1, 2, 3];

//获取（访问）数组元素

/**1、通过数组的索引 ：
 * 索引（下标）： 用来访问数组元素的序号（数组下标从0开始） 数组名[索引号]
*/
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);  //数组下标从0开始,这里已经越界了

/** 怎么把数组里面的元素全部取出来？
 * 
 * 规律：从代码中我们可以发现，从数组中取出每一个元素时，代码是重复的，
 *      有所不一样的是索引值在递增。  
 * 循环。
 * 
*/

// 通过 遍历  把数组里面的元素全部取出来
for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}


var arr1 = [2, 6, 1, 7, 4];
var sum = 0;
for (var i = 0; i <= arr1.length; i++) { 
    sum = sum + arr1[i];
}
console.log(sum)
