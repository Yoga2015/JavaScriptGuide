//新建obj 对象，并在其内部定义一个 a 属性，
let obj = {
    a: 1,
}


//数据属性    为什么说是数据属性？因为它的值是属性
Object.defineProperty(obj, 'b', {
    value: 2
})

/* 通过 Object.defineProperty() 和  Object.defineProperties() 定义的属性，属性里的属性描述对象 ，
writable、configurable、enumerable 这三个属性的默认值都为false，不可修改、删除、遍历*/

//访问器属性：  访问器属性就是 value、writable、configurable、enumerable
Object.getOwnPropertyDescriptor(obj, 'a');
//{value: 1, writable: true, enumerable: true, configurable: true}

Object.getOwnPropertyDescriptor(obj, 'b');
//{value: 2, writable: false, enumerable: false, configurable: false}


//新建obj 对象，并在其内部定义一个 a 属性，
let obj = {
    a: 1,
    c: 3,
}
//此时直接新增一个 c 属性，实际底层实现是通过 get 函数 和 set 函数来定义的
//你所看到的get 函数 和 set 函数 ，它俩实际上也是定义一个属性的值的设置 和 获取 操作

let obj = {
    a: 1,
    //get 函数 也就是 取值操作
    get c() {
        console.log('getter');
        return this.a;
    },
    // set 函数  也就是 设置操作
    set c(val) {
        console.log('setter', val);
        this.a = val * 2;
    }
}


//你设置值，是通过什么设置的呢？
obj.c = 10;   //实际上这个 obj.c = 10  就是 对应着  set c(10)
console.log(obj.c)

/* 控制台输出 setter 10
             getter
             20 
*/

Object.getOwnPropertyDescriptor(obj, 'c');
//{enumerable: true, configurable: true, get: ƒ, set: ƒ}




/* 和写JAVA时一样， set、 get 函数方法自己写的时候是先写set ，才写get
其实 这里 先写 get 后写set ,这个顺序不影响代码效果，没有规范不规范的说法 都是用的时候调用的 没有逻辑联系 */

//set 、get最好是成对出现