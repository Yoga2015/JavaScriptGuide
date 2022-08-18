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

    this.join1 = function (item5) {
        if (item5 == undefined || item5 == null || item5.length == 0) {
            item5 = ',';// 当undefined/null/空字符串时，默认是逗号
        }

        // 错误思维1：
        for (let j = 0; j < this.value.length; j++) {
            this.value[j] += item5
        }
        this.length += item5.length;
        return this.value.toString();
    }
    this.join2 = function (item6) {
        if (item6 == undefined || item6 == null || item6.length == 0) {
            item6 = ',';// 当undefined/null/空字符串时，默认是逗号
        }
        // 错误思维2：
        let val = this.value;
        let arr = val.toString();
        for (let j = 0; j < arr.length; j++) {
            arr[j] += item6
        }
        this.length += item6.length;
        return arr;

    }
    /**
     * 方式一
     * join 方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。
     * 如果不提供参数，默认用逗号分隔。
     * @param {*} joinStr 
     * @returns 
     */
    this.join3 = function (joinStr) {
        if (joinStr == undefined || joinStr == null || joinStr.length == 0) {
            joinStr = ',';// 当undefined/null/空字符串时，默认是逗号
        }

        let result = "";

        for (let j = 0; j < this.value.length; j++) {
            let item = this.value[j];

            result += item;
            result += joinStr;

        }
        result = result.substring(0, result.length - 2);

        return result;
    }

    //方式二
    this.join4 = function (joinStr) {
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
    },
        // 方式三
        this.join5 = function (...joinStr) {
            if (joinStr == undefined || joinStr == null || joinStr.length == 0) {
                joinStr = ',';// 当undefined/null/空字符串时，默认是逗号
            }

            let result = "";
            for (let j = 0; j < this.value.length; j++) {
                let item = this.value[j];
                result += item;
                // result += joinStr;
                // if (!(result[result.length - 1] == joinStr)) {
                //     result += joinStr;
                // } else {
                //     break;
                // }




            }
            return result;

        },

        // 方式四
        this.join6 = function (...joinStr) {
            if (joinStr == undefined || joinStr == null || joinStr.length == 0) {
                joinStr = ',';// 当undefined/null/空字符串时，默认是逗号
            }

            let result = "";
            for (let j = 0; j < this.value.length; j++) {
                let item = this.value[j];
                result += item;
                if (!(result.charAt(result.length - 1) == joinStr)) {
                    result += joinStr;
                } else {
                    break;
                }
            }
            return result;
        },

        
        // [1, 1, 1]
        // [HELLO, HELLO , HELLO]
        this.join7 = function (...joinStr) {
            if (joinStr == undefined || joinStr == null || joinStr.length == 0) {
                joinStr = ',';// 当undefined/null/空字符串时，默认是逗号
            }

            let result = "";
            for (let j = 0; j < this.value.length; j++) {
                let item = this.value[j];
                result += item;
                if (j != this.value.length - 1) {// 如果不是最后一个item, 就拼接。
             // if ( item != this.value[this.value.length - 1] )
                    result += joinStr;
                } else {
                    break;
                }
            }
            return result;
        }

}


let wArray = new WArray();
wArray.push('1', '2', '3', '4',);
console.log(`before: `, wArray);

// let item5 = wArray.join1(' | ');
// console.log(`after: `, wArray);
// console.log(`after: item5 = `, item5);

// let item6 = wArray.join2(' | ');
// console.log(`after: `, wArray);
// console.log(`after: item5 = `, item6);

// let joinStr = wArray.join3(' | ');
// console.log(`after: `, wArray);
// console.log(`after: item5 = `, joinStr);


// let joinStr = wArray.join5('hello world');
// console.log(`after: `, wArray);
// console.log(`after: joinStr = `, joinStr);


let joinStr = wArray.join7('hello world');
console.log(`after: `, wArray);
console.log(`after: item5 = `, joinStr);