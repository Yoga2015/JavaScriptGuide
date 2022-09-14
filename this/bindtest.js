function Dog() {
    this.name = 'wc';
    this.eat = function () {
        console.log(this.name, ' eat...');
    }
}

let dogx = new Dog();

let Dog1 = Dog.bind(dogx);   //Dog 绑死 dogx 后返回一个新的函数，

//Dog1的真实模样
// function Dog1() {
//     dogx.name = 'wc';     //this 替换为 dogx  ， dogx 是堆内存地址
//     dogx.eat = function () {
//         console.log( dogx.name, ' eat...');
//     }
// }

// apply() 、call() 起到的作用不仅仅是 临时绑定 对象（被绑定） ，
//同时 可以改变 绑定者中的this指向为  被绑定的对象。
let dogy = { name: 'dogy' };
Dog1.apply(dogy);

dogy.eat(); //直接报错
//虽然Dog1临时绑定了dogy ,但此时Dog1中没有this，所以dogy用不了Dog1中eat方法，直接报错 ，

// 自己输出 24行的结果给我看看        wc ，eat...













