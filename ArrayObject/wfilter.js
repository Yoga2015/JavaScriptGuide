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
     * filter（）方法用于过滤 数组成员，满足条件的成员组成一个新数组返回。
     * @param {*} filterCallback 
     * @returns 
     */
    this.filter1 = function (filterCallback) {
        if (typeof filterCallback != 'function') {
            throw new Error("filterCallback 不是一个function")
        }
        let filtervalue = [];
        for (let i = 0; i < this.value.length; i++) {
            filtervalue.push(filterCallback(this.value[i]));
        }
        return filtervalue;

    }

    this.filter2 = function (filterCallback, out) {
        if (typeof filterCallback != 'function') {
            throw new Error("filterCallback 不是一个function")
        }
        if (out == undefined || out == null) {
            throw new Error("入参不合法")
        }
        let filtervalue = [];
        for (let i = 0; i < this.value.length; i++) {
            filtervalue.push.call(out, filterCallback(this.value[i], i, this));
        }

        return filtervalue;

    }

}


let wArray = new WArray();
wArray.push(1, 2, 3, 4, 5, 6);
console.log(`before: `, wArray);

let filterVal = function (element, index, Array) {
    if (!(index % 2 === 0)) {
        return index;
    }
}
let out = [];
let filterArr = wArray.filter2(filterVal, out);

console.log('after:', wArray);
console.log('after: out = ', out);

// let filterVal = function (element) {
//     if (element > 3) {
//         return element;
//     }
// }

// let filterArr = wArray.filter1(filterVal);

// console.log('after:', wArray);
// console.log('after: filterArr = ', filterArr);