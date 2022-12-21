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
        // console.log(' item1.length: ', item1.length);  //提前查看 入参的长度 提前判断 

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
     * join()方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。
     * 如果不提供参数，默认用逗号分隔。
     * @param {*} item5  //入参名字不够规范
     * @returns 
     */
    this.join1 = function (item5) {   // 当传入多个参数入来时 可用 ...形参名 表示
        /**这里刚开始仅考虑到判断入参的是否为 undefined 或者 null 就抛出异常，
         * 缺少判断入参的长度，以及当入参为 undefined 、null、长度为 0时 ，
         * 就 默认设置为 ， 逗号 。因为我们当前要实现的是将入参作为分隔符，
        */
        if (item5 == undefined || item5 == null || item5.length == 0) {
            item5 = ',';  // 当undefined/null/空字符串时，默认是逗号
        }

        /**错误思维1： 擅自修改 原数组 ，会导致后期无法恢复 ，
         * 应该新建一个容器 来装 原数组 ，实际是容器是指向原数组在堆内存中的地址
         * */
        for (let j = 0; j < this.value.length; j++) {
            this.value[j] += item5
        }
        //只会返回两个数组的长度相加后的总长度。所以不对！
        this.length += item5.length;
        return this.value.toString();
    }
    this.join2 = function (item6) {   // 当传入多个参数入来时 可用 ...形参名 表示
        if (item6 == undefined || item6 == null || item6.length == 0) {
            item6 = ',';// 当undefined/null/空字符串时，默认是逗号
        }
        // 错误思维2：
        let val = this.value;
        let arr = val.toString();
        for (let j = 0; j < arr.length; j++) {
            arr[j] += item6
        }
        //只会返回两个数组的长度相加后的总长度。所以不对！
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
        //substring方法，它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）。
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
        //通过result的长度来判断最后一个元素是不准确的
        if (result[result.length - 1] == joinStr) {
            //substring方法，它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）。不对！
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
                //1、换成在for 循环中做判断，通过result的长度来判断最后一个元素是不准确的，
                // if (!(result[result.length - 1] == joinStr)) {
                //     result += joinStr;
                // } else {
                //     break;
                // }

            }
            return result;

        },

        // 方式四
        /**
         * join 方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。
         * 如果不提供参数，默认用逗号分隔。
         * @param  {...any} joinStr 
         * @returns 
         */
        this.join6 = function (...joinStr) {
            if (joinStr == undefined || joinStr == null || joinStr.length == 0) {
                joinStr = ',';// 当undefined/null/空字符串时，默认是逗号
            }

            let result = "";
            for (let j = 0; j < this.value.length; j++) {
                let item = this.value[j];
                result += item;
                //1、通过result的长度来判断最后一个元素是不准确的，
                //2、result[result.length - 1]  ===  result.charAt(result.length - 1) 等价的
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
                //通过下标判断最后一个元素是最准确的
                if (j != this.value.length - 1) {// 如果不是最后一个item, 就拼接。
                    // if ( item != this.value[this.value.length - 1] )
                    result += joinStr;
                } else {
                    break;
                }
            }
            return result;
        }
    /**
     * join 方法以指定的参数作为分隔符，将所有数组成员连接成一个字符串返回。
     * 如果不提供参数，默认用逗号分隔。
     * @param  {...any} joinStr 
     */
    this.join8 = function (...joinStr) {
        //判断入参 joinStr，并且如果不提供参数，默认用逗号分隔。
        if (joinStr == undefined || joinStr == null || joinStr == 0) {
            joinStr = ','
        }
        let result = '';
        for (let i = 0; i < this.value.length; i++) {
            result += this.value[i];

            // result += joinStr;  //但是最后一位元素后面是不能加 有分隔符的

            //通过下标判断最后一个元素是最准确的，这里通过下标来判断数组中最后一位元素
            if (i != this.value.length - 1) {  // 如果不是最后一个item, 就拼接。
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
// console.log(`after: item6 = `, item6);

// let joinStr = wArray.join3(' | ');
// console.log(`after: `, wArray);
// console.log(`after: item5 = `, joinStr);


// let joinStr = wArray.join5('hello world');
// console.log(`after: `, wArray);
// console.log(`after: joinStr = `, joinStr);

// let joinStr = wArray.join6('hello world');
// console.log(`after: `, wArray);
// console.log(`after: item5 = `, joinStr);

// let joinStr = wArray.join7('hello world');
// console.log(`after: `, wArray);
// console.log(`after: item5 = `, joinStr);

let joinStr = wArray.join8('|');
console.log(`after: `, wArray);
console.log(`after: joinStr = `, joinStr);