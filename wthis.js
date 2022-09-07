// function Dog(name, color) { 
//     this.name = name;
//     this.color = color;
//     console.log(this)
// }

// dog('新新', '黄色');

// let dog1 = new Dog('新新', '黄色');


// function print() {
//     console.log('name ；' + this.name)
//     console.log(arguments)  //输出传入的参数
// }
// //对象
// var obj1 = {
//     name: 'xiaohua',
//     age:21
// }

// //调用call
// print.apply(obj1, [1, 2, 3]);

// print.call(obj1, 1, 2, 3);



// //箭头函数
// var obj = {
//     a: () => { 
//         console.log(this)
//     }
// }

// obj.a()    //window


function a() {
    console.log("function a:", this)
        ; (() => {
            console.log("arrow function: ", this)
        })()
}

a()

a.bind(null)()

a.bind(undefined)()

a.bind().bind(2)()

a.apply()

