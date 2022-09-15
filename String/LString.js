function WString() {
    this.value = []; // 初始化  wString对象 时，里面定义 一个空数组，将来用来装数据的容器
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
            return this.length;

        } catch (error) {
            console.log(error)
        }
    };

    /**
     * charAt() 方法返回指定位置的字符，参数是从0开始编号的位置。
     * @param {*} item 
     * @returns 
     */
    this.chartAt = function (item) {
        if (item == undefined || item == null || item > this.value.length || item < 0) {
            return this.value[0];
        }
        try {
            for (let i = 0; i < this.value.length; i++) {
                if (i === item) {
                    return this.value[i];
                }
            }
        } catch (error) {
            console.log(error)
        }

    };
    /**
     * concat() 方法用于 连接 两个字符串，返回一个新字符串，不改变原字符串
     * 如果参数不是字符串，concat() 方法会将其转为字符串，然后再连接
     * @param  {...any} concatStr 
     * @returns 
     */
    this.concat = function (...concatStr) {
        if (concatStr == undefined) {
            concatStr = undefined
        }
        if (concatStr == null) {
            concatStr = null
        }
        try {
            let concatVal = this.value;
            for (let i = 0; i < concatStr.length; i++) {
                concatVal.push(concatStr[i]);
            };
            let val = concatVal.toString();
            let result = '';
            for (let j = 0; j < val.length; j++) {
                if (',' != val[j]) {
                    result += val[j]
                };
            };
            return result;
        } catch (error) {
            console.log(error);
        }

    };

}

let wString = new WString();
wString.push('A', 'B', 'C', 'D');
console.log('before: ', wString)

let charAtString = wString.chartAt(3);
console.log('charAtString = ', charAtString);

let concatValueof = wString.concat('e', 'f', 1, undefined, null, 3, 0);
console.log(' concatValueof = ', concatValueof)

