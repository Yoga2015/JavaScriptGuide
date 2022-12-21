function WArray() {
    this.value = []; // 初始化 wArray对象 时，里面定义 一个空数组，将来用来装数据的容器
    this.length = 0;  //因为是空数组，所以现在的长度是0
    /**
     * push（）方法用于在数组的末端添加 数组的元素，并返回添加新元素后的数组长度。
     * 如果入参不合法，将会抛错;
     * 如果运行出错，将会返回空数组。
     * @param  {...any} item1 
     * @returns 
     */
    this.push = function (...item1) {   // 当传入多个参数入来时 可用 ...形参名 表示

        if (item1 == undefined || item1 == null || item1.length == 0) {
            throw new error('入参不合法');
        }
        for (let i = this.value.length, j = 0; j < item1.length; i++, j++) {
            this.value[i] = item1[j]
        }

        this.length += item1.length;

        return this.length;
    };

    /**
     * some()类似 “断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。
     *它们接受一个函数作为参数，所有数组成员依次执行该函数。
     *该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。
     * @param {*} scallback 
     * @returns 
     */
    this.some = function (scallback) {
        if (typeof scallback != 'function') {
            throw new Error("scallback 不是一个function")
        }
        let someval = [];
        for (let i = 0; i < this.value.length; i++) {
            someval.push(scallback(this.value[i], i, this));
        }
        if (someval == 0) {
            return false;
        } else {
            return someval;
        }
    }
    /**
     * every()方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false。
     * @param {*} ecallback 
     * @returns 
     */
    this.every = function (ecallback) {
        if (typeof ecallback != 'function') {
            throw new Error("ecallback 不是一个function")
        }
        let everyval = [];
        for (let i = 0; i < this.value.length; i++) {
            everyval.push(ecallback(this.value[i], i, this));
        }
        return everyval;
    }

}

let wArray = new WArray();
wArray.push(1, 2, 3, 4, 5, 6);
console.log(`before: `, wArray);

let everyfun = function (element, index, arr) {
    false == !(element >= 3);
    return false;
}

let everyboolean = wArray.some(everyfun);
console.log('after:', wArray);
console.log('after: everyboolean = ', everyboolean);

// let somefun = function (element, index, arr) {
//     return element >= 3;
// }

// let someboolean = wArray.some(somefun);
// console.log('after:', wArray);
// console.log('after: someboolean = ', someboolean);