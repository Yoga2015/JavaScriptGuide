function WString() {
    this.value = []; //  初始化  wString对象 时，里面定义 一个空数组，将来用来装数据的容器
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
     * slice方法用于从原字符串取出子字符串并返回，不改变原字符串。
     * 它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。
     * @param {*} start 
     * @param {*} end 
     * @returns 
     */
    this.slice = function (start, end) {
        let sliceArr1 = [];
        if (start === undefined || null || 0) {
            return start = 0;
        }

        if (end === undefined || null || 0) {
            return end = this.value.length;
        }
        start = start > this.value.length ? '' : start;
        end = start > end ? '' : end;


        for (let i = start; i < end; i++) {
            sliceArr1.push(this.value[i]);
        }

        return String(sliceArr1);
    }


}

let wString = new WString();
wString.push('A', 'javascript', 'B', 'C', 'D');
wString.push('javascript');
console.log('before: ', wString)

let sslice = wString.slice(0, 1);
console.log('sslice = ', sslice)
