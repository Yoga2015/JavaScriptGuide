function Dog(name) {
    this.name = name;
    this.eat = function () {
        console.log('func..eat gutou...');
    }
}

// let dogx = new Dog('wangcai');

//new 的底层原理
let dogx = {};
Dog.apply(dogx, 'wangcai');

//新建后的dogx实例对象的样貌
dogx = {
    name: 'wangcai',
    eat: function () {
        console.log('func..eat gutou...');
    }
};


// bind

// let Dog2 = Dog.bind(dogx);

function Dog2(name) {
    dogx.name = name;
    dogx.eat = function () {
        console.log('func..eat gutou...');
    }
}
