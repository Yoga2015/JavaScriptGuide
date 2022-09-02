/**
 *  unshift() 用于在数组的第一个位置添加元素，
 *  并返回添加新元素后的数组长度,
 *  不创建新的创建，而是直接修改原有的数组。
 * @param {*} U1 
 * @returns 
 */
function UnShift(U1, U2) {
    if (!(U1 instanceof Array && U2 instanceof Array)) {
        throw new error('入参不合法')
    }
    let arr = [];

    for (let i = 0; i < U2.length; i++) {
        arr.push(U2[i]);
    }

    for (let i = 0; i < U1.length; i++) {
        arr.push(U1[i]);
    }
    console.log(arr)
    return arr.length;
    // return arr;

}

let arr1 = ['1', '2', '3'];
let arr2 = ['4', '5']

console.log(UnShift(arr1, arr2))


