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
    this.map0 = function (callback) {
        //1、判断 this.value中有没有元素，
        if (this.value.length == 0) {
            throw new Error('内部无数据');
        }
        let mapArr2 = [];
        for (let i = 0; i < this.value.length; i++) {
            let mapArr1 = [];
            mapArr1 += this.value[i];
            mapArr2 += mapArr1;
            mapArr2++;
        }
        return mapArr2;
    };

    this.map1 = function (callback) {
        if (typeof callback != 'function') {
            throw new Error('callback is not a function!');
        }

        let mapArr2 = new WArray();
        for (let i = 0; i < this.value.length; i++) {
            //mapArr2[i] = callback(this.value[i]);
            mapArr2.push(callback(this.value[i]));
        }
        return mapArr2;
    };
    /**
     * map（）方法 将数组的 所有成员 依次 传入参数，
     * 然后把每一次的执行结果 组成一个新的数组返回,原数组没有变化。
     * @returns mapArr
     */
    this.map2 = function (callback) {
        if (typeof callback != 'function') {
            throw new Error('callback is not a function!');
        }

        let mapArr2 = [];
        for (let i = 0; i < this.value.length; i++) {
            // mapArr2[i] = callback(this.value[i]);
            mapArr2.push(callback(this.value[i]));
        }
        return mapArr2;
    }
}

let wArray = new WArray();
wArray.push(1, 2, 3, 4,);
console.log(`before: `, wArray);

let callbackWei = function (x) {
    return x + 1;
}
let mapArr = wArray.map2(callbackWei);

console.log(`after: `, wArray);
console.log(`after: mapArr = `, mapArr);