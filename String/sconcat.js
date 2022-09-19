function WString() {
    this.value = []; // 初始化 wString对象 时，里面定义 一个空数组，将来用来装数据的容器
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

        return new String(this.value).toString();
        // return this.length;
    };
    /**
     * concat() 方法用于 连接 两个字符串，返回一个新字符串，不改变原字符串
     */
    this.concat = function (...concatStr) {
        let concatVal = this.value;
        for (let i = 0; i < concatStr.length; i++) {
            concatVal.push(concatStr[i])
        }
        let val = String(concatVal);
        console.log(val.length);  //查看真实的长度
        return val;

    }
    this.concat1 = function (...concatStr) {
        let concatVal = this.value;
        for (let i = 0; i < concatStr.length; i++) {
            concatVal.push(concatStr[i])
        }
        let val = concatVal.toString();
        let result = '';
        for (let j = 0; j < val.length; j++) {
            if (',' != val[j]) {
                result += val[j]
            }
        }
        return result;

    }

}

let wString = new WString();
wString.push('A', 'B', 'C', 'D');
console.log('before: ', wString);

let concatValueof1 = wString.concat1('e', 'f', 1);
console.log(' concatValueof = ', concatValueof1)

// let concatValueof = wString.concat('e', 'f');
// console.log(' concatValueof = ', concatValueof)