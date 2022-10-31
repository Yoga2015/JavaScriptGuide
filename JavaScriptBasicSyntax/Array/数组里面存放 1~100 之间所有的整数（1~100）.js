
/** 数组里面存放 1~100 之间所有的整数（1~100）
 * 核心原理：使用循环来追加数组。
 * 1、新建一个 空数组 arr
 * 2、循环的计数器 i 可以作为数组元素 存入
 * 3、由于数组的索引号是从 0开始的，因此计数器从 0 开始更合适 ，
 *    存入的数组元素要 +1
 */

var arr = [];
for (var i = 0; i < 100; i++) {
    // arr = i ; 不要直接给数组名赋值 否则以前的元素都没了
    arr[i] = i + 1;
}
console.log(arr);



/** 筛选数组
 *  将数组 [2,0,6,1,77,0,52,0,25,7] 中大于等于10的元素选出来，放入新数组
 * 1、新建一个空数组 newArr
 * 2、遍历 arr 数组，找出大于等于10 的数组元素，依次追加给newArr数组
 *   for循环 的 计数器 i 进行 条件判断 ，
 *   当  i >= 10  的元素 ，依次追加给 newArr数组
 */

var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];
var j = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        //新数组索引号应该从0 开始，依次递增
        newArr[j] = arr[i];
        j++;
    }
}

console.log(newArr);

var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];    //刚开始 newArr.length 就是 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        //新数组应该从0 开始，依次递增
        newArr[newArr.length] = arr[i];

        newArr.push(arr[i]);
    }
}

console.log(newArr);

