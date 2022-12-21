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
     * 1、splice方法用于删除原数组的一部分成员，
     * 1.1、并可以在删除的位置添加新的数组成员，返回值是被删除的元素。
     * 注意，该方法会改变原数组。
     */
    this.splice = function (start, end) {
        let sliceArr1 = [];
        let sliceArr2 = [];
        if (start === undefined || null || 0) {
            return start = 0;
        }
        if (end === undefined || null || 0) {
            return [];
        }

    };
}

let wArray = new WArray();
wArray.push(1, 2, 3, 4, 5, 6);
console.log(`before: `, wArray);

let spliceArray = wArray.splice(1, 2);
console.log('after:', wArray);
console.log("after : sliceArray = ", spliceArray)