function FuncA() { };
FuncA.prototype.x = 2;
FuncA.prototype.arr = [0, 1];
FuncA.prototype.arr1 = [4, 5];

let obj1 = new FuncA();
let obj2 = new FuncA();

console.log(obj1.arr[0]);
console.log(obj2.arr[0]);

// obj1.arr[0] = 3;

obj1.arr = obj1.arr1;

console.log(obj1.arr[0]);
console.log(obj2.arr[0]);

//为什么某个实例对象修改了原型对象中的数组的值后，  一修改，就同步更新
