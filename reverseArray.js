/* 
JavaScript反转数组

1. 反转数组

循环次数为数组的一半

实现代码：
let arr = [22, 55, 5, 88, 66, 77, 111, 3];
    //循环次数为数组的一半
    for (let i = 0; i < arr.length / 2; i++) {//0 1 2 3 
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }



2. 分析代码实现的过程

简单分析

数组第一个和最后一个交换
数组第二个和倒数第二个交换
数组第一个和倒数第三个交换
...............

步骤：

(1)数组第一个和最后一个交换

 let temp = arr[0];
 arr[0] = arr[arr.length - 1 - 0];
 arr[arr.length - 1] = temp;

 (2)数组第二个和倒数第二个交换
 let temp1 = arr[1];
 arr[1] = arr[arr.length - 1 - 1];
 arr[arr.length - 1 - 1] = temp1;
复制代码


(3)数组第一个和倒数第三个交换
 let temp2 = arr[2];
 arr[2] = arr[arr.length - 1 - 2];
 arr[arr.length - 1 - 1 - 1] = temp2;

以此类推..............



*/

let arr = [22, 55, 5, 88, 66, 77, 111, 3];
//循环次数为数组的一半
for (let i = 0; i < arr.length / 2; i++) {//0 1 2 3 
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);


let a = ['peng', 'chen', 'luo', 'li', 'lao', 'liang', 'wu'];
//循环次数为数组的一半
for (let i = 0; i < a.length / 2; i++) {//0 1 2 3 
    let temp = a[i];
    a[i] = a[a.length - 1 - i];
    a[a.length - 1 - i] = temp;
}
console.log(a);