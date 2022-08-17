
function WArray() {
    this.value = []; // 初始化 wArray对象 时，里面定义 一个空数组，将来用来装数据的容器
    this.length = 0;  //因为是空数组，所以现在的长度是0
    //缺少方法注释
    // this.push = function (item1) {     // 传递一个参数
    //1、当传入的参数 是同一类型、状态、个数时，可以用 && 短路与逻辑运算符 做判断
    //2、当传入的参数 是不同类型、状态、个数时，需要用 || 短路或逻辑运算符 做判断
    //3、缺少做判断 item1.length == 0  当传入的参数的长度为 0 ,没有意义的值时,就抛异常
    //     if (item1 == undefined && item1 == null) {   
    //         throw new error('入参不合法');      //3、抛出异常，记得 大写 new Error()
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
        // console.log(' item1.length: ', item1.length);

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
    };
    /**
     * valueof()方法返回数组本身。
     * @returns this.value
     */
    this.valueof = function () {
        //1、判断 this.value 中有没有元素，没有就抛出 异常
        if (this.value.length == 0) {
            throw new Error('无数据无法返回数组本身')
        };
      
        return this.value;
    }
    /**
     * toString()方法返回 数组的字符串形式
     * 1、判断 this.value 中有没有元素，没有就抛出 异常
     * @returns  stringResult
     */
    this.toString = function () {
        //1、判断 this.value 中有没有元素，没有就抛出 异常
        if (this.value.length == 0) {
            throw new Error('无数据无法返回数组本身')
        };
        // if (StringStr == undefined || StringStr == null || StringStr.length == 0) {
        //     StringStr = ',';// 当undefined/null/空字符串时，默认是逗号
        // }
        let stringResult = '';
        let StringStr = ',';
        for (var i = 0; i < this.value.length; i++) {
            let valString = this.value[i];
            stringResult += valString;
            stringResult += StringStr;
        }
        return stringResult;

    }


    /**
     * pop 方法用于删除数组的最后一个元素，并返回该元素。该方法会改变原数组
     * @returns pval
     */
    this.pop = function () {

        if (this.value.length == 0) {
            throw new Error('内部无数据已无法删除')
        }
        let pval = this.value[this.value.length - 1];
        this.value.length--;
        return pval;

    };
    /**
     * shift方法用于删除数组的第一个元素，并返回该元素。
     * @returns 
     */
    this.shift = function () {
        if (this.value.length == 0) {// 情况1： 当 value == []
            throw new Error('内部无数据已无法删除')
        }

        let sval = this.value[0];
        // 将数组的后一项赋值给前一项
        for (let i = 0; i < this.value.length; i++) {
            this.value[i] = this.value[i + 1];
        }
        if (this.value.length > 1) {//去掉数组最后一项
            this.value.length = this.value.length - 1;
        }

        return sval;
    };

    /**
     * unshift 方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。
     * @param  {...any} UNshift 
     * @returns 
     */
    this.unshift = function (...UNshift) {
        if (UNshift == undefined || UNshift == null || UNshift.length == 0) {
            throw new error('入参不合法');
        }
        let uval = [];

        for (let i = uval.length, j = 0; j < UNshift.length; i++, j++) {
            uval[i] = UNshift[j]
        }
        for (let k = uval.length, h = 0; h < this.value.length; k++, h++) {
            uval[k] = this.value[h]
        }
        this.length = uval.length;
        this.value = uval;
        return this.length;
    };
    /**
     * join 方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。
     * 如果不提供参数，默认用逗号分隔。
     * @param {*} item5 
     */
    this.join = function (joinStr) {
        if (joinStr == undefined || joinStr == null || joinStr.length == 0) {
            joinStr = ',';// 当undefined/null/空字符串时，默认是逗号
        }

        let result = "";
        for (let j = 0; j < this.value.length; j++) {
            let item = this.value[j];

            result += item;
            result += joinStr;
        }
        if (result[result.length - 1] == joinStr) {
            result = result.substring(0, result.length - 1)
            // result = result.slice(0, -1)
        }
        return result;

    };
    /**
     * concat()方法 用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部。
     * @param  {...any} ConcatArr 
     * @returns 
     */
    this.concat = function (...ConcatArr) {
        if (ConcatArr == undefined || ConcatArr == null || ConcatArr.length == 0) {
            throw new error('入参不合法');
        }
        for (let i = this.value.length, j = 0; j < ConcatArr.length; i++, j++) {
            this.value[i] = ConcatArr[j];
        }
        this.length += ConcatArr.length;
        return this.value;
    };
    /**
     * reverse()方法用于颠倒排列数组元素。返回变化后的数组
     * @returns this.value
     */
    this.reverse = function () {
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
    this.map = function () {
        let mapArr = [];
 
        return mapArr;
    }
    this.slice = function (...reverseArr) {

    }
}

let wArray = new WArray();
// wArray.push(5);
// wArray.push(4);
// wArray.push(3);

wArray.push('1', '2', '3', '4',);
console.log(`before: `, wArray);
// wArray.push();   //这里就没传递数据

// let ValueArr = wArray.valueof();
// console.log(`after: `, wArray);
// console.log(`after: ValueArr = `, ValueArr);

// let stringResult = wArray.toString();
// console.log(`after: `, wArray);
// console.log(`after: stringResult = `, stringResult);

// let popArray = wArray.pop();
// console.log(`after: `, wArray);
// console.log(`after: popArray = `, popArray);

// let shiftArray = wArray.shift();
// console.log(`after: `, wArray);
// console.log(`after: shiftArray = `, shiftArray);

// let UNshift = wArray.unshift('a', 'b')
// console.log(`after: `, wArray);
// console.log(`after:  UNshift = `, UNshift);

// let joinStr = wArray.join4('|');
// console.log(`after: `, wArray);
// console.log(`after: joinStr = `, joinStr);

// let ConcatArr = wArray.concat('[5,6],[8,9]');
// console.log(`after: `, wArray);
// console.log(`after: ConcatArr = `, ConcatArr);

// let reverseArr = wArray.reverse();
// console.log(`after: `, wArray);
// console.log(`after: reverseArr = `, reverseArr);

let mapArray = wArray.map();
console.log(`after: `, wArray);
console.log(`after: mapArray = `, mapArray);


  //原生js 实现 push() 、valueof() 、pop() 、 shift() 、 unshift() 、  concat() 、 reverse() 、 map() ，没完善  toSting()、join()











