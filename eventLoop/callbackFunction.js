var myNumber = undefined;
// 声明一个函数
function addOne() {
    setTimeout(function () {
        var myNumber = 10;
    }, 2000);

};
addOne(); // 调用函数

console.log(myNumber)

//代码一行行向下执行，遇到 setTimeout()、磁盘I/O 、ajax请求（网络I/O），b，先执行同步代码 ，
