/** 筛选数组
 *  将数组 [2,0,6,1,77,0,52,0,25,7] 中大于等于10的元素选出来，放入新数组
 * 1、 需要一个新数组用于存放筛选之后的数据，新建一个空数组 newArr
 * 2、遍历 arr 数组，找出大于等于10 的数组元素，依次追加给newArr数组
 *   for循环 的 计数器 i 进行 条件判断 ，当  i >= 10  的元素 ，依次追加给 newArr数组
 * 
 * 注意： 采用 数据名 + 索引  的格式接收数据
 * 3、新数组里面的个数，用 length 不断累加
 */

var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];
var j = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {

        //新数组索引号应该从0 开始，依次递增

        // 方法1:
        newArr[j] = arr[i];
        j++;
    }
}

console.log(newArr);


// 方法2：
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];    //刚开始 newArr.length 就是 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        //新数组索引号应该从0 开始，依次递增
        // 方法2： 数组中length属性会自动检测数组中元素的变化，
        //         当里面存入一个值之后,再一次存入值时，只会在一个值之后追加
        newArr[newArr.length] = arr[i];

    }
}

console.log(newArr);


// 方法3：
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];    //刚开始 newArr.length 就是 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        //新数组索引号应该从0 开始，依次递增

        // 方法3：
        newArr.push(arr[i]);
    }
}

console.log(newArr);



// 将数组 [2,0,6,1,77,0,52,0,25,7] 中 小于10 的元素选出来，放入新数组
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];    //刚开始 newArr.length 就是 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
        //新数组索引号应该从0 开始，依次递增
        // 方法2： 数组中length属性会自动检测数组中元素的变化，
        //        当里面存入一个值之后,再一次存入值时，只会在一个值之后追加
        newArr[newArr.length] = arr[i];

        // 方法3：
        // newArr.push(arr[i]);
    }
}

console.log(newArr);


// 将数组 [2,0,6,1,77,0,52,0,25,7] 中 不等于  0 的元素选出来，放入新数组
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];    //刚开始 newArr.length 就是 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        //新数组索引号应该从0 开始，依次递增
        // 方法2： 数组中length属性会自动检测数组中元素的变化，
        //        当里面存入一个值之后,再一次存入值时，只会在一个值之后追加
        newArr[newArr.length] = arr[i];

        // 方法3：
        // newArr.push(arr[i]);
    }
}

console.log(newArr);


