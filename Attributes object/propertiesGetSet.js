//ES5以及以往的版本
Object.defineProperty(obj, 'a', {
    get: function () {
        return 2;
    }
})

//同上

// ES6 写法
/* 只定义 get 函数   ： 静默失败，严格模式会 报错。
外界仅可以获取的属性的值，因为没有定义 set 函数，意味着无法赋值 */
let obj = {
    get a() {
        return 2;
    }
}

console.log(obj.a);

//这里现在设置 a 属性的值为10 ,看看有没有修改成功，输出是2还是10？
obj.a = 10;    //运行结果是 静默失败
console.log(obj.a);  //输出 2

// 以上代码居然没有报错, 但是在顶部 使用 “use strict” 就会报错了
//Uncaught TypeError: Cannot set property a of #<Object> which has only a getter



//只定义set 函数 ，获取属性值 为 undefined
let obj = {
    // get a() {
    //     return 2;
    // },

    // set a() 需要接受一个参数（即属性的值）,名称可以自定义
    set a(val) {
        console.log(val);   //输出undefined
        return 2;   //这里设置 return 2 没有意义
    }
}

console.log(obj.a);  //  输出undefined
obj.a = 20;
console.log(obj.a);   //是能输出20




//只定义 get 函数   ： 静默失败，严格模式会 报错。
//只定义set 函数 ，获取属性值 为 undefined
// set 、get最好是成对出现