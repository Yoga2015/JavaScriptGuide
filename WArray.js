
function WArray() {
    this.value = []; // 初始化 wArray对象 时，里面定义 一个空数组，将来用来装数据的容器
    this.length = 0;  //因为是空数组，所以长度是0
    //缺少方法注释
    // this.push = function (item1) {     // 传递一个参数
    //1、当传入的参数 是同一类型、状态、个数时，可以用 && 逻辑运算符 做判断
    //2、当传入的参数 是不同类型、状态、个数时，需要用 || 逻辑运算符 做判断
    //3、缺少做判断 item1.length == 0  当传入的参数的长度为 0 ,没有意义的值时,就抛异常
    //     if (item1 == undefined && item1 == null) {   
    //         throw new error('入参不合法');      //3、记得 大写 new Error()
    //     }
    //4、没做try...catch 包裹逻辑异常时处理
    //     this.value = item1;
    //     this.length++;     // 当传递一个参数过来 可以通过 ++ 自增+1 ，来同步 加入数据后，数组索引长度的变化
    //     // for (let i = val.length, j = 0; j < item.length; i++, j++) {
    //     //     val[i] = item[j]
    //     // }

    //     return this.length ;   //push()方法 是返回添加新元素后的数组长度
    // }
    /**
     * push（）方法用于在数组的末端添加 数组的元素，并返回添加新元素后的数组长度。
     * 如果入参不合法，将会抛错;
     * 如果运行出错，将会返回空数组。
     * @param  {...any} item1 
     * @returns 
     */
    this.push = function (...item1) {   // 当传入多个参数入来时 可用 ...形参名 表示
        console.log(' item1.length: ', item1.length);

        // if (item1 == undefined && item1 == null && item1.length == 0) {
        //     throw new Error('入参不合法');
        // }

        if (item1 == undefined || item1 == null || item1.length == 0) {
            throw new error('入参不合法');
        }
        for (let i = this.value.length, j = 0; j < item1.length; i++, j++) {
            this.value[i] = item1[j]
        }

        this.length += item1.length;

        return this.length;
    }

    this.pop = function () {
        if (this.value.length == 0) {// 情况1： 当 value == []
            return null;
        }

        // 情况2：当 value == 非空数组
        let xValue = this[this.length - 1];
        this.length--;
        return xValue;

    };
    this.join = function () {

    };
    this.shift = function () {
        if (this.value.length == 0) {// 情况1： 当 value == []
            return null;
        }
        let val = this[0];

        // 将数组的后一项赋值给前一项
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i + 1];
        }
        if (this.length > 1) {//去掉数组最后一项
            this.length = this.length - 1;
        }
        return val;
    }
    this.unshift = function () {
        if (this.value.length == 0) {// 情况1： 当 value == []
            return null;
        }

        // 情况2：当 value == 非空数组
        let arr = [];

        for (let i = 0; i < U2.length; i++) {
            arr.push(U2[i]);
        }

        for (let i = 0; i < U1.length; i++) {
            arr.push(U1[i]);
        }
        console.log(arr)
        return arr.length;
    }
}

let wArray = new WArray();
wArray.push(5);
wArray.push(4);
wArray.push(3);

wArray.push('1', '2', '9', '11');
console.log(`before: `, wArray);


// wArray.push();   //这里就没传递数据，

// let item = wArray.pop();
// console.log(`after: `, wArray);
// console.log(`after: item = `, item);

// let item = wArray.shift();
// console.log(`after: `, wArray);
// console.log(`after: item = `, item);










