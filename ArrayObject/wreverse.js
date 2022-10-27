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
     * reverse()方法用于颠倒排列数组元素。返回变化后的数组
     * @returns this.value
     */
    this.reverse = function () {
        //1、判断 this.value中有没有元素，没有就抛出 异常
        if (this.value.length == 0) {// 情况1： 当 value == []
            throw new Error('内部无数据已无法删除')
        }
        for (let i = 0; i < this.value.length / 2; i++) {//0 1 2 3 
            let temp = this.value[i];
            this.value[i] = this.value[this.value.length - 1 - i];
            this.value[this.value.length - 1 - i] = temp;
        }
        return this.value;

    };
}

let wArray = new WArray();
wArray.push(1, 2, 3, 4, 5, 6);
console.log(`before: `, wArray);

let reverseArr = wArray.reverse();
console.log(`after: `, wArray);
console.log(`after: reverseArr = `, reverseArr);