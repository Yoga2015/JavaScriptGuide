// function Muqin() { };
// let child = new Muqin();
// child.constructor === Muqin;
// Object.getPrototypeOf(child) === Muqin.prototype;

// function Nana() { };
// let father = new Nana();
// father.constructor === Nana;
// Object.getPrototypeOf(father) === Nana.prototype;



function Grandma() { };
let father = new Object();
Grandma.apply(father);
Object.setPrototypeOf(father, Grandma.prototype);
console.log(Object.getPrototypeOf(father) === Grandma.prototype);

function Mother() { };
Mother.prototype = father;

let child = new Object();
Mother.apply(child);
Object.setPrototypeOf(child, Mother.prototype);
//将child对象的原型对象指向Mother.prototype，但 JavaScript 引擎会一级级向上查找 ，Mother.prototype的指向是father
console.log(Object.getPrototypeOf(child) === Mother.prototype);
console.log(Object.getPrototypeOf(child));

// Object.setPrototypeOf(Mother.prototype, father);
//错误原因: 这里是将 mother 的 原型对象 的 原型 指向 father，多了一层。

// Mother.prototype = father;
//写在这一行，此时 仅仅是将 Mother.prototype指向 father , child的原型 仍然指向 Mother.prototype

console.log(Object.getPrototypeOf(child));
console.log(Object.getPrototypeOf(child) === father);

// 构造函数 的 原型对象 写法：  Mother.prototype
// 实例对象 的 原型对象 写法：  child._proto_





