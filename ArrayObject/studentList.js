let scoreX = [10, 100, 121, 20, 100, 620];
10, 20, 100, 100, 121, 620

let studentList = [
    { name: 'liSi', age: 32, score: 10, id: 1500 },
    { name: 'zhangsan', age: 22, score: 100, id: 4300 },
    { name: 'zhaoLiu', age: 36, score: 121, id: 4200 },
    { name: 'xiangDa', age: 12, score: 20, id: 4590 },
    { name: 'wuDa', age: 75, score: 160, id: 6500 },
    { name: 'anDa', age: 72, score: 100, id: 1508 },
    { name: 'geDa', age: 70, score: 320, id: 4530 },
    { name: 'lunDa', age: 42, score: 100, id: 7505 },
    { name: 'feiDa', age: 22, score: 620, id: 4670 },
    { name: 'heDuo', age: 75, score: 100, id: 5500 }
];


// select * from student where age > 22 and age < 60 order by score desc;
// desc:  descend ;    asc: ascend
// asc: ascend -> 随着index 递增，数字元素递增
// desc: descend -> 随着index 递增，数字元素递减

// 1. 找到哪个db
// 2. 定位到student表
// 3. 创建的studentArr容器
// 4. for循环遍历表中每条records
// 3.1 遍历过程中判断 每条record的age是否符合 >22 & <60的条件，是则用studentArr容器装载

//4、将已装载入 studentArr容器中的 元素 进行降序\升序排列
// 4.1 
// 4.2
// 4.3 
//5、将studentArr容器中已降序排列好的元素 全部返回输出到 控制台 或者 页面


let arr = [3, 4, 6, 5, 8, 7, 1];

function bubbleSort() {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr;
}