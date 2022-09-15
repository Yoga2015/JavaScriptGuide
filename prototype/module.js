function m1() {
    //...
}

function m2() {
    //...
}
//”污染”了全局变量，无法保证不与其他模块发生变量名冲突，而且模块成员之间看不出直接关系。

var module1 = new Object({
    _count: 0,
    m1: function () {
        //...
    },
    m2: function () {
        //...
    }
});
//上面是模块写成一个对象，所有的模块成员都放到这个对象里面。
//这样的写法会暴露所有模块成员，内部状态可以被外部改写。


function StringBuilder() { 
    let buffer = [];
    this.add = function (str) {
        buffer.push(str)
    };
    this.toString = function () {
        return buffer.join('')
    };
}
//这种方法将私有变量封装在构造函数中，违反了构造函数与实例对象相分离的原则。
//并且，非常耗费内存。