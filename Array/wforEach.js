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


    // this.forEach = function (fcallback) {
    //     if (typeof fcallback != 'function') {
    //         throw new Error("fcallback 不是一个 function")
    //     }

    //     //下标从零开始，这里 i 一开始就是 0，
    //     for (let i = 0; i < this.value.length; i++) {
    //         fcallback(this.value[i], i, this);
    //     }
    // };
    
    // this.forEach2 = function (fcallback, out) {
    //     if (typeof fcallback != 'function') {
    //         throw new Error("fcallback 不是一个 function")
    //     }
    //     if (out == undefined || out == null) {
    //         throw new Error('out 不是一个数组')
    //     }
    //     out = this.value;
    //     let foreachval = [];
    //     //下标从零开始，这里 i 一开始就是 0，
    //     for (let i = out.length, j = 0; j < this.value.length; i++, j++) {
    //         // foreachval = this.value[j] * out[i];
    //         foreachval = out[i] * this.value[j];
    //     }
    //     return foreachval;
    // }

    // this.forEach2 = function (fcallback, out) {
    //     if (typeof fcallback != 'function') {
    //         throw new Error("fcallback 不是一个 function")
    //     }
    //     if (out == undefined || out == null) {
    //         throw new Error('out 不是一个数组')
    //     }
    //     let foreachval = [];

    //     for (let j = 0; j < this.value.length; j++) {
    //         foreachval += fcallback(this.value[j]);
    //     }
    //     out = foreachval
    //     return out;
    // }

    /**
    *空数组out是forEach方法的第二个参数，
    * 结果，回调函数内部的this关键字就指向out。
    * @param {*} fcallback 
    * @param {*} out 
    * @returns 
    */
    this.forEach3 = function (fcallback, out) {
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

    this.forEach4 = function (fcallback, out) {
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



}

let wArray = new WArray();
wArray.push(1, 2, 3, 4, 5, 6);
console.log(`before: `, wArray);

//forEach字符串
let out4 = '893ojejfkljio';
out4.charAt(1);
let wlog4 = function (idx) {
    return this.charAt(idx);
}
lArray.forEach4(wlog4, out4);
console.log('after:', lArray);

// //forEach数组
// let out = [];// new Array<Object>(); out 此时不仅仅是数组，out也是对象
// out.name = 'weige';   //既然是对象就可以自定义 属性与属性值。
// let wlog3 = function (element) {
//     console.log(this.name);
//     return element * element;
// }
// wlog3()  直接调用时，wlog3是一个 普通函数

// //此时 wlog3 作为一个是 回调函数
// let forlog3 = lArray.forEach3(wlog3, out);
// console.log('after:', lArray);
// console.log('after: forlog3 = ', forlog3);

// let wlog2 = function (element) {
//     out.push(element * element)
// }
// let out = [];
// let forlog2 = wArray.forEach2(wlog2, out);

// console.log('after:', wArray);
// console.log('after: out = ', out);

// let wlog1 = function (element, index, array) {
//     console.log('[' + index + '] =' + element);
// }
// let forlog = wArray.forEach(wlog);
// console.log('after:', wArray);


