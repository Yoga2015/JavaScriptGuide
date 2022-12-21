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
     * sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。
     * @returns  sortVal2
     */
    this.sort = function () {
        if (this.value.length == 0) {
            throw new Error("没有数据无法进行排序")
        }
        let sortVal = [];
        for (let i = 0; i < this.value.length; i++) {
            sortVal.push(this.value[i]);
        }
        let sortVal2 = [];
        let left = sortVal[0];
        let right = sortVal[sortVal.length - 1];
        if (left < right) {
            sortVal2.push(left, right);
        } else {
            sortVal2.push(right, left)
        }
        this.value = sortVal2
        return this.value;
    }
    /**
     * 冒泡排序
     * @returns 
     */
    this.sort2 = function () {
        if (this.value.length == 0) {
            throw new Error("没有数据无法进行排序")
        }
        let sortVal = [];
        for (let i = 0; i < this.value.length; i++) {
            sortVal.push(this.value[i])
        }
        for (let j = 0; j < sortVal.length; j++) {
            if (sortVal[j] > sortVal[j + 1]) {
                let temp = sortVal[j + 1];
                sortVal[j + 1] = sortVal[j];
                sortVal[j] = temp;
            }
        }

        return sortVal;
    };

};



let wArray = new WArray();
wArray.push(2, 1, 4, 3, 5, 7, 9, 8);
// wArray.push(1, 2, 4, 3, 6, 7,  8);
console.log(`before: `, wArray);

let sortArr2 = wArray.sort2();
console.log('after:', wArray);
console.log('after: sortArr2 = ', sortArr2);

// let sortArr = wArray.sort();
// console.log('after:', wArray);
// console.log('after: sortArr = ', sortArr);

