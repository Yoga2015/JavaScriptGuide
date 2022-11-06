function LArray() {
    this.value = []; // 初始化 lArray对象 时，里面定义 一个空数组，将来用来装数据的容器
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

        try {
            for (let i = this.value.length, j = 0; j < item1.length; i++, j++) {
                this.value[i] = item1[j]
            }

            this.length += item1.length;
        } catch (error) {
            //1、记录现场 写入日志
            //2、这里是在控制台输出error查看
            console.log(error)
        }

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
    };

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
        // try {
        let stringResult = '';
        let StringStr = ',';
        for (var i = 0; i < this.value.length; i++) {
            let valString = this.value[i];
            stringResult += valString;
            stringResult += StringStr;
        }
        // } catch (error) {
        //     console.log(error)
        // }
        return stringResult;
    };

    /**
     * pop 方法用于删除数组的最后一个元素，并返回该元素。该方法会改变原数组
     * @returns pval
     */
    this.pop = function () {
        //1、判断 this.value 中有没有元素，没有就抛出 异常
        if (this.value.length == 0) {
            throw new Error('内部无数据已无法删除')
        }
        let pval2 = [];
        try {
            let pval2 = this.value[this.value.length - 1];
            this.value.length--;
        } catch (error) {
            console.log(error)
        }
        return pval2, this.value;

    };

    /**
     * shift方法用于删除数组的第一个元素，并返回该元素。
     * @returns 
     */
    this.shift = function () {
        //1、判断 this.value 中有没有元素，没有就抛出 异常
        if (this.value.length == 0) {// 情况1： 当 value == []
            throw new Error('内部无数据已无法删除')
        }
        let sval = this.value[0];
        try {
            // 将数组的后一项赋值给前一项
            for (let i = 0; i < this.value.length; i++) {
                this.value[i] = this.value[i + 1];  //i:元素下标 + 1
            }
            if (this.value.length > 1) {//去掉数组最后一项
                this.value.length = this.value.length - 1;
            }
        } catch (error) {
            console.log(error)
        }
        return sval;
    };

    /**
     * unshift 方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。
     * @param  {...any} UNshift 
     * @returns 
     */
    this.unshift = function (...UNshift) {
        //1、判断 入参是否合法 ，没有就抛出 异常
        if (UNshift == undefined || UNshift == null || UNshift.length == 0) {
            throw new error('入参不合法');
        }
        let uval = [];
        try {
            for (let i = uval.length, j = 0; j < UNshift.length; i++, j++) {
                uval[i] = UNshift[j]
            }
            for (let k = uval.length, h = 0; h < this.value.length; k++, h++) {
                uval[k] = this.value[h]
            }
            this.length = uval.length;
            this.value = uval;
        } catch (error) {
            console.log(error)
        }

        return this.length;
    };

    /**
     * join 方法以指定的参数作为分隔符，将所有数组成员连接成一个字符串返回。
     * 如果不提供参数，默认用逗号分隔。
     * @param  {...any} joinStr 
     */
    this.join = function (...joinStr) {
        //判断入参 joinStr，并且如果不提供参数，默认用逗号分隔。
        if (joinStr == undefined || joinStr == null || joinStr == 0) {
            joinStr = ','
        }
        let result = '';  //千万不要擅自修改原数组的数据，很难复原

        try {
            for (let i = 0; i < this.value.length; i++) {
                let item = this.value[i];
                result += item;
                // result += joinStr;  //但是最后一位元素后面是不能加 有分隔符的

                //通过下标判断最后一个元素是最准确的，这里通过下标来判断数组中最后一位元素
                if (i != this.value.length - 1) {  // 如果不是最后一个item, 就拼接。
                    result += joinStr;
                } else {
                    break;
                }
            }
        } catch (error) {
            console.log(error)
        }

        return result;

    };


    /**
     * concat()方法 用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部。
     * @param  {...any} ConcatArr 
     * @returns 
     */
    this.concat = function (...ConcatArr) {
        //1、判断 入参是否合法 ，没有就抛出 异常
        if (ConcatArr == undefined || ConcatArr == null || ConcatArr.length == 0) {
            throw new error('入参不合法');
        }
        try {
            for (let i = this.value.length, j = 0; j < ConcatArr.length; i++, j++) {
                this.value[i] = ConcatArr[j];
            }
            this.length += ConcatArr.length;
        } catch (error) {
            console.log(error)
        }

        return this.value;
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
        try {
            for (let i = 0; i < this.value.length / 2; i++) {//0 1 2 3 
                let temp = this.value[i];
                this.value[i] = this.value[this.value.length - 1 - i];
                this.value[this.value.length - 1 - i] = temp;
            }
        } catch (error) {
            console.log(error)
        }

        return this.value;

    };


    /**
     * slice（）方法用于提取目标数组的一部分，返回一个新数组，原数组不变。
     * @param  {...any} reverseArr 
     */
    this.slice = function (start, end) {
        let sliceArr1 = [];
        let sliceArr2 = [];
        if (start === undefined || null || 0) {
            return start = 0;
        }

        if (end === undefined || null || 0) {
            return end = this.value.length;
        }
        try {
            if (true) {
                start = start > this.value.length ? [] : start;
                end = start > end ? [] : end;

                for (let i = start; i < end; i++) {
                    sliceArr1.push(this.value[i]);
                }
                return sliceArr1;
            } else {
                if (start < 0 || end < 0 || end > start) {
                    sliceArr2 = this.value;
                    sliceArr2.reverse();
                    start = start > sliceArr2.length ? [] : start;
                    end = end < start ? [] : end;
                    let sliceArr3 = [];
                    for (let j = start; j < end; j++) {
                        sliceArr3.push(this.sliceArr2[j]);
                    }
                    return sliceArr3;
                }
            }
        } catch (error) {
            console.log(error)
        }
    };

    /**
     * splice方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，
     * 返回值是被删除的元素。注意，该方法会改变原数组。
     */
    this.splice = function () {

    };
    /**
     * sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。
     */
    /**
     * 冒泡排序
     * @returns 
     */
    this.sort = function () {
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

    /**
    * map（）方法 将数组的 所有成员 依次 传入参数，然后把每一次的执行结果 组成一个新的数组返回
    * @returns mapArr
    */
    this.map = function (callback) {
        if (typeof callback != 'function') {
            throw new Error("callback 不是一个 function")
        }
        let mapArr = [];
        try {
            for (let i = 0; i < this.value.length; i++) {
                mapArr[i] = callback(this.value[i]);
            }
        } catch (error) {
            console.log(error)
        }

        return mapArr;

    };

    /**
     *空数组out是forEach方法的第二个参数，
     * 结果，回调函数内部的this关键字就指向out。
     * @param {*} fcallback 
     * @param {*} out 
     * @returns 
     */
    this.forEach = function (fcallback, out) {
        if (typeof fcallback != 'function') {
            throw new Error("fcallback 不是一个 function")
        }
        if (out == undefined || out == null) {
            throw new Error('入参不合法')
        }
        try {
            for (let k = 0; k < this.value.length; k++) {
                // this.value.push.call(out, fcallback(this.value[k]));
                // fcallback(this.value[k]).call(out)
                out.push(fcallback.call(out, this.value[k]));
            }
        } catch (error) {
            console.log(error)
        }
        return out;
    };

    this.forEach2 = function (fcallback, out) {
        if (typeof fcallback != 'function') {
            throw new Error("fcallback 不是一个 function")
        }
        if (out == undefined || out == null) {
            throw new Error('入参不合法')
        }

        try {
            for (let k = 0; k < this.value.length; k++) {

                console.log(fcallback.call(out, this.value[k]));
            }
        } catch (error) {
            console.log(error)
        }
    };

    /**
     * filter（）方法用于过滤 数组成员，满足条件的成员组成一个新数组返回。
     * @param {*} filterCallback 
     * @returns 
     */
    this.filter = function (filterCallback, out1) {
        if (typeof filterCallback != 'function') {
            throw new Error("filterCallback 不是一个function")
        }
        if (out1 == undefined || out1 == null) {
            throw new Error("入参不合法")
        }
        let filtervalue = [];
        try {
            for (let i = 0; i < this.value.length; i++) {
                filtervalue.push.call(out1, filterCallback(this.value[i], i, this));
            }
        } catch (error) {
            console.log(error)
        }
        return filtervalue;

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
        try {
            for (let i = 0; i < this.value.length; i++) {
                someval.push(scallback(this.value[i], i, this));
            }
            if (someval == 0) {
                return false;
            } else {
                return someval;
            }
        } catch (error) {
            console.log(error)
        }

    };

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
        try {
            for (let i = 0; i < this.value.length; i++) {
                everyval.push(ecallback(this.value[i], i, this));
            }
        } catch (error) {
            console.log(error)
        }
        return everyval;
    };

    /**
    * reduce（）方法 求出数组所有成员的和。
    * 从左到右处理（从第一个成员到最后一个成员）相加
    * @param {*} reduceCallback 
    * @returns 
    */
    this.reduce = function (number) {
        if (this.value.length == 0) {
            throw new Error("没有数据无法进行排序")
        }
        if (number == undefined || number == null || number == 0) {
            throw new error('入参不合法');
        }
        try {
            let val = this.value;
            let val1 = new Number;
            val1 = ((val[0] + val[val.length - 1]) * val[val.length - 1] / 2) + number;
        } catch (error) {
            console.log(error)
        }

        return val1;
    };

    /**
     * indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。
     * @param {*} numberindex 
     * @returns 
     */
    this.indexOf = function (numberindex) {
        if (this.value.length == 0) {
            throw new Error("没有数据无法进行排序")
        }
        if (numberindex == undefined || numberindex == null || numberindex == 0) {
            throw new error('入参不合法');
        }
        try {
            for (let i = 0; i < this.value.length; i++) {
                if (numberindex === this.value[i]) {
                    return this.value[i - 1];
                }
            }
        } catch (error) {
            console.log(error)
        }
        return -1;
    };



}

let lArray = new LArray();

lArray.push(1, 2, 3, 4, 5);
console.log(`before: `, lArray);


// let ValueArr = lArray.valueof();
// console.log(`after: `, lArray);
// console.log(`after: ValueArr = `, ValueArr);


// let stringResult = lArray.toString();
// console.log(`after: `, lArray);
// console.log(`after: stringResult = `, stringResult);


// let popArray = lArray.pop();
// console.log(`after: `, lArray);
// console.log(`after: popArray = `, popArray);


// let shiftArray = lArray.shift();
// console.log(`after: `, lArray);
// console.log(`after: shiftArray = `, shiftArray);


// let UNshift = lArray.unshift('a', 'b')
// console.log(`after: `, lArray);
// console.log(`after:  UNshift = `, UNshift);


let joinStr = lArray.join('|');
console.log(`after: `, lArray);
console.log(`after: joinStr = `, joinStr);


// let ConcatArr = lArray.concat('[5,6],[8,9]');
// console.log(`after: `, lArray);
// console.log(`after: ConcatArr = `, ConcatArr);


// let reverseArr = lArray.reverse();
// console.log(`after: `, lArray);
// console.log(`after: reverseArr = `, reverseArr);


// let sliceArray = lArray.slice(1, 2);
// console.log('after:', lArray);
// console.log("after : sliceArray = ", sliceArray)


// lArray.push(2, 1, 4, 3, 6, 5, 7, 9, 8);
// console.log(`before: `, lArray);
// let sortArr = lArray.sort();
// console.log('after:', lArray);
// console.log('after: sortArr = ', sortArr);


// let weicallback = function (x) {
//     return x + 1;
// }
// let mapArray = lArray.map(weicallback);
// console.log(`after: `, lArray);
// console.log(`after: mapArray = `, mapArray);

//forEach字符串
// let out4 = '893ojejfkljio';
// out4.charAt(1);
// let wlog4 = function (idx) {
//     return this.charAt(idx);
// }
// lArray.forEach2(wlog4, out4);
// console.log('after:', lArray);

// //forEach数组
// let out = [];// new Array<Object>(); out 此时不仅仅是数组，out也是对象
// out.name = 'weige';   //既然是对象就可以自定义 属性与属性值。
// let wlog3 = function (element) {
//     console.log(this.name);
//     return element * element;
// }
// // wlog3()  直接调用时，wlog3是一个 普通函数

// //此时 wlog3 作为一个是 回调函数
// let forlog3 = lArray.forEach2(wlog3, out);
// console.log('after:', lArray);
// console.log('after: forlog3 = ', forlog3);


// let filterVal = function (element, index, Array) {
//     if (!(index % 2 === 0)) {
//         return index;
//     }
// }
// let out1 = [];
// let filterArr = lArray.filter(filterVal, out1);
// console.log('after:', lArray);
// console.log('after: out1 = ', out1);


// let somefun = function (element, index, arr) {
//     return element >= 3;
// }
// let someboolean = lArray.some(somefun);
// console.log('after:', lArray);
// console.log('after: someboolean = ', someboolean);


// let everyfun = function (element, index, arr) {
//     false == !(element >= 3);
//     return false;
// }
// let everyboolean = lArray.some(everyfun);
// console.log('after:', lArray);
// console.log('after: everyboolean = ', everyboolean);

// let number1 = 10;
// let reduceTotal = lArray.reduce(number1);
// console.log('after:', lArray);
// console.log('after: reduceTotal = ', reduceTotal);

// let indexVal = 2;
// let index = lArray.indexOf(indexVal);
// console.log('after:', lArray);
// console.log('after: index = ', index);
