
// var arr1 = [1, 2, 3, 4, 'A', 'B', 'C'];
// var arr2 = [];
// Array.prototype.copyShift = function () {
//     var result = [],
//         newArr = [];
//     result = this[0];
//     for (var i = 1; i < this.length; i++) {// 将数组的第二个至最后一项的值赋值给newArr
//         newArr[newArr.length] = this[i];
//     }
//     for (var i = 0; i < newArr.length; i++) { //newArr赋值给原数组
//         this[i] = newArr[i];
//     }
//     this.length = newArr.length;
//     return result;
// };
// console.log(arr1.copyShift());  // 1
// console.log(arr1); // [2, 3, 4, 'A', 'B']
// console.log(arr2.copyShift()); // undefined
// console.log(arr2); // []


/**
 * shift()用于从数组中删除第一个元素，并会返回该元素的值， 
 * @param {*} S1 
 * @returns 从数组中删除的元素
 */
function wShift(S1) {
    if (!(S1 instanceof Array)) {
        throw new error('入参不合法')
    }

    let val = S1[0];

    // 将数组的后一项赋值给前一项
    for (let i = 0; i < S1.length; i++) {
        S1[i] = S1[i + 1];
    }
    if (S1.length > 1) {//去掉数组最后一项
        S1.length = S1.length - 1;
    }

    return val;

}

let arr = ['a', 'b', 'c'];
console.log(wShift(arr));
console.log(arr);







