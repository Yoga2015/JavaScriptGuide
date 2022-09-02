
let arr = ['a', 'b', 'c'];

/**
 * 
 * @param {*} p1 
 * @returns 
 */



function wPop(p1) {

    if (!(p1 instanceof Array)) {
        throw new error('入参不合法')
    }

    let val = p1[p1.length - 1];
    p1.length--;
    return val;

}

console.log(wPop(arr));
console.log(arr);



this.pop = function () {
    if (this.value.length == 0) {// 情况1： 当 value == []
        return null;
    }

    // 情况2：当 value == 非空数组
    // let xValue = this.value;
    let xValue = this[this.length - 1];
    this.length--;

    // for (let i = 0; i < xValue.length - 1; i++) {
    //     this.value[i] = xValue[i];
    // }
    return xValue;
};
