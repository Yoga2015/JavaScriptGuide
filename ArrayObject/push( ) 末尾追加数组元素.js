let a = ['a', 'b']
let b = ['c', 'd'];

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



