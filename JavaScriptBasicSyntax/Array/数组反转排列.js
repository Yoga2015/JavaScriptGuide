/** 数组反转排序
 * 将数组  ['red', 'green', 'blue', 'pink', 'purple'] 的 内容反过来，
 * 存放到新数组
 * 
 * var arr =  ['red', 'green', 'blue', 'pink', 'purple']
 * 
 *            ['purple', 'pink', 'blue', 'green', 'red']
 * 
 * 核心： 把 arr 数组中 最后一个元素  取出来  给 新数组 作为第一个
 * 
 * 1、 把 第 4 个 给 新数组 第 0 个
 * 2、 把 第 3 个 给 新数组 第 1 个
 * 3、 把 第 2 个 给 新数组 第 2 个
 * 4、 把 第 1 个 给 新数组 第 3 个
 * 5、 把 第 0 个 给 新数组 第 4 个
 * 
 * 注意：取第几个出来 是跟 索引号有关系 ，所以跟着索引号来。
 *   length属性会自动检测数组中元素的变化 
 *   newArr.length 从无到有，依次递增的过程
 * 
 * 1、声明一个 新数组  newArr
 * 2、把 旧数组索引号 第 4个取过来 （arr.length -1）, 
 *    给 新数组索引号 第 0个元素  （newArr.length）
 * 3、我们采用 递减的方式  i-- 
 * 
 */

var arr = ['red', 'green', 'blue', 'pink', 'purple'];

var newArr = [];

for (var i = arr.length - 1; i >= 0; i--) {

    newArr[newArr.length] = arr[i]

}

console.log(newArr);
