var a = ['a', 'b'];
var b = ['c', 'd', 'e'];

/**
 * 合并两个数组，并返回一个新数组。
 * 如果入参不合法，将会抛错;
 * 如果运行出错，将会返回空数组。
 * @param {} arr0 数组对象
 * @param {*} arr1 数组对象
 * @returns 
 */
function wConcat(arr0, arr1) {
    if (!(arr0 instanceof Array && arr1 instanceof Array)) {
        throw new Error('入参不合法！');
    }

    var arr = [];
    try {
        for (var i = 0; i < arr0.length; i++) {
            arr[i] = arr0[i];
        };
        for (var i = 0; i < arr1.length; i++) {
            arr[i] = arr1[i];
        };
     
        arr.push.apply(arr, arr0, arr1) //这就将a、b合并到了arr中了
    } catch (error) {
        console.log(error);
    }

    return arr;
}
console.log(wConcat(a, b));   //也可以加 sort() 进行按字典排序


//设计个绞肉机--怎么才是个好的产品？
//1. 程序运行正确性
    // 怎么防止老百姓出错？ 什么时候会出错？ 出错了怎么办？ 出错了怎么通知老百姓(调用者)
//2. 程序运行效率
    // 对应着绞肉机：一级能效、二级能效、三级能效 （是否耗很多电）
    // 对应着程序代码：运行快慢 和 内存消耗量（格局打开--每次都想象成海量数据处理）
    // 对应着《数据结构和算法》就是： 时间复杂度 和 空间复杂度