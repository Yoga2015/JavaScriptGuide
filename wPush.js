
// let a = ['a', 'b']
// let b = ['c', 'd'];


// function wPush1(arr1, arr2) {

//     if (!(arr1 instanceof Array && arr2 instanceof Array)) {
//         throw new Error("入参不合法！")
//     };

//     for (let i = arr1.length, j = 0; j < arr2.length; i++, j++) {
//         arr1[i] = arr2[j];
//     };

//     return arr1.length;
// }
// console.log(wPush1(a, b));


// let a = ['a', 'b']
// let b = ['c', 'd'];

/**
 * 在数组的末端添加 数组的元素，并返回添加新元素后的数组长度。
 * 如果入参不合法，将会抛错;
 * 如果运行出错，将会返回空数组。
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns arr
 */
function wPush2(arr1, arr2) {

    if (!(arr1 instanceof Array && arr2 instanceof Array)) {
        throw new Error("入参不合法！")
    };

    try {
        for (let i = arr1.length, j = 0; j < arr2.length; i++, j++) {
            arr1[i] = arr2[j];
        };
    } catch (error) {
        //1、记录现场 写入日志
        //2、这里是在控制台输出error查看
        console.log(error)
    }

    return arr1.length;
}


console.log(wPush2(a, b));
console.log(a);



/**
1、变量 是 在栈上 声明创建的。

2、对象 是在 堆内存 上 声明创建的 。

3、变量在Java里是有数据类型的，但在JavaScript中是没有数据类型的。

所以在js中 同一个变量可以被赋值为 string类型的实例对象、number类型的实例对象、boolean类型的实例对象。

4、当 变量 里存储的是 数组 或者 对象 的堆内存地址 时，
此时操作变量是间接操作 数组 或者 对象 的堆内存地址。
*/
