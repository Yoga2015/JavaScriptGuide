/** 
 * 要求：将数组 ['red', 'green', 'blue', 'pink'] 转换为 字符串，
 *      并且用 | 或者其他符合分割
 * 输出： red|green|blue|pink
 * 
 * 1、需要一个新变量用于存放转换完的字符串 str
 * 2、遍历原来的数组，分别把里面数据取出来，加到字符串里面
 * 3、同时在后面多加一个分隔符   
 * 
 * 和那个把所有元素取出来然后相加 是一样的，只是每个元素后面多加一个分隔符
 */

var arr = ['red', 'green', 'blue', 'pink'];
var str = '';
for (var i = 0; i < arr.length; i++) {

    // str += arr[i] + '|';  最后一位元素后面不要加 |

    str += arr[i];

    if (i != arr.length - 1) {
        str += '|'
    }
}
console.log(str)

