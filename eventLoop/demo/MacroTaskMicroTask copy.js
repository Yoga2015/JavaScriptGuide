console.log("a");

let promise00 = new Promise((resolve, rj) => {
    console.log("c");
    resolve();
});
console.log("promise00->", promise00);

let promise01 = promise00.then(function () {
    console.log("d");
});
console.log("promise01->", promise01);

let promise02 = promise01.then(function () {
    console.log("e");
});
console.log("promise02->", promise02);


let promise001 = new Promise((resolve) => {
    console.log("c1");
    resolve();
});
let promise011 = promise001.then(function () {
    console.log("d1");
});
let promise021 = promise011.then(function () {
    console.log("e1");
});
console.log("o");

/**
* 输出结果：a c f d e b
*/