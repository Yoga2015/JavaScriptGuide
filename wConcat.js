var a = ['a', 'b'];
var b = ['c', 'd', 'e'];

/**
 * 合并两个数组，并返回一个新数组。
 * 如果入参不合法，将会抛错;
 * 如果运行出错，将会返回空数组。
 * @param {*} arr0  数组对象
 * @param {*} arr1  数组对象
 * @returns 
 */
function wConcat2(arr0, arr1) {
    //instanceof 运算符 判断一个对象是某个对象的实例
    if (!(arr0 instanceof Array && arr1 instanceof Array)) {
        throw new Error('入参不合法！');
    }

    let arr = [];

    try {
        for (let i = 0; i < arr0.length; i++) {
            arr.push(arr0[i]);
        }

        for (let i = 0; i < arr1.length; i++) {
            arr.push(arr1[i]);
        }
    } catch (error) {
        //1、记录现场 写入日志
        //2、这里是在控制台输出error查看
        console.log(error)
    }

    return arr;
}

console.log(wConcat2(a, b));



//设计个绞肉机--怎么才是个好的产品？
//1. 程序运行正确性
// 怎么防止老百姓出错？ 什么时候会出错？ 出错了怎么办？ 出错了怎么通知老百姓(调用者)
//2. 程序运行效率
// 对应着绞肉机：一级能效、二级能效、三级能效 （是否耗很多电）
// 对应着程序代码：运行快慢 和 内存消耗量（格局打开--每次都想象成海量数据处理）
// 对应着《数据结构和算法》就是： 时间复杂度 和 空间复杂度

// airbnb编码规范 -> 设计模式 -> 运行效率《数据结构和算法》
// 可读性高 和 可维护性高  最重要！ 然后再在此基础上考虑 运行效率。

// 大学期间，要先学airbnb编码规范 和 数据结构和算法， 再来领悟 设计模式。


// function wConcat1(arr0, arr1) {
//     if (!(arr0 instanceof Array && arr1 instanceof Array)) {
//         throw new Error('入参不合法！');
//     }

//     let arr = [];

//     for (let i = 0; i < arr0.length; i++) {
//         arr[i] = arr0[i];
//     }

//     for (let i = arr0.length; i < arr1.length; i++) {
//         arr[i] = arr1[i];
//     }

//     return arr;
// }

// console.log(wConcat1(a, b));


