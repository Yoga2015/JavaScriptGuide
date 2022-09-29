console.log("a");

setTimeout(function () {
    console.log("b");
}, 0);

new Promise((resolve) => {
    console.log("c");
    resolve();
})
    .then(function () {
        console.log("d");
    })
    .then(function () {
        console.log("e");
    })
    .then(function () {
        console.log("f");
    })
    .then(function () {
        console.log("g");
        throw new Error("异常")
    }).catch(err => {
        console.log('catch error')
    })

console.log("h");

setTimeout(function () {
    console.log("i");
}, 0);

new Promise((resolve) => {
    console.log("j");
    resolve();
})
    .then(function () {
        console.log("k");
    })
    .then(function () {
        console.log("l");
    })
    .then(function () {
        console.log("m");
    })
    .then(function () {
        console.log("n");
        throw new Error("异常")
    }).catch(err => {
        console.log('第二个setTimeOutcatch error')
    })

console.log("o");

/**
* 输出结果：a c f d e b
*/