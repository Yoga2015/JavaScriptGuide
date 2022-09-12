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

    /**
    * slice（）方法用于提取目标数组的一部分，
    * 返回一个由start 和 end 决定的原数组的浅拷贝（包括start，不包括end），
    * 原数组不变。
    * @param  {...any} reverseArr 
    */
    this.slice = function (sliceArr) {
        if (sliceArr == undefined || sliceArr == null || sliceArr == 0) {
            return this.value;
        }

    }
    this.slice1 = function (start, end) {
        if (start === undefined && end === undefined || start === null && end === null || start === 0 && end === 0) {
            return this.value;
        }

    }
    this.slice2 = function (start, end) {
        let sliceArr = [];

        start = start === undefined ? 0 : start;
        end = end === undefined ? this.value.length : end;

        start = start === null ? 0 : start;
        end = end === null ? this.value.length : end;

        start = start === 0 ? 0 : start;
        end = end === 0 ? this.value.length : end;

        start = start > this.value.length ? [] : start;
        end = end < start ? [] : end;


        for (let i = start; i < end; i++) {
            sliceArr.push(this.value[i]);
        }

        return sliceArr;

    }
    this.slice3 = function (start, end) {
        let sliceArr = [];
        if (start === undefined || null || 0) {
            return start = 0;
        }

        if (end === undefined || null || 0) {
            return end = this.value.length;
        }

        start = start > this.value.length ? [] : start;
        end = end < start ? [] : end;


        for (let i = start; i < end; i++) {
            sliceArr.push(this.value[i]);
        }

        return sliceArr;

    }
    this.slice4 = function (start, end) {
        let sliceArr1 = [];
        let sliceArr2 = [];
        if (start === undefined || null || 0) {
            return start = 0;
        }

        if (end === undefined || null || 0) {
            return end = this.value.length;
        }
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
    }
}

let wArray = new WArray();
wArray.push(1, 2, 3, 4, 5, 6);
console.log(`before: `, wArray);

let sliceArray = wArray.slice4(-2, -1);
console.log('after:', wArray);
console.log("after : sliceArray = ", sliceArray)

// let sliceArray = wArray.slice();
// let sliceArray = wArray.slice(0);

// let sliceArray = wArray.slice1(0, 0);
// console.log('after:', wArray);
// console.log("after : sliceArray = ", sliceArray)

// let sliceArray = wArray.slice2(1, 2);
// console.log('after:', wArray);
// console.log("after : sliceArray = ", sliceArray)

// let sliceArray = wArray.slice3(1, 2);
// console.log('after:', wArray);
// console.log("after : sliceArray = ", sliceArray)



