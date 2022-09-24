JSON.stringify("abc");

JSON.stringify(1);

JSON.stringify(false);

JSON.stringify([]);

JSON.stringify({});

JSON.stringify(null);

//如果对象的属性是undefined、函数或 XML 对象，该属性会被JSON.stringify过滤。
let obj = {
    a: undefined,
    b: function () {

    }
}
console.log(JSON.stringify(obj));  //{}

//如果数组的成员是undefined、函数或 XML 对象，则这些值被转成null。
let arr = [undefined, undefined, function () { }];
console.log(JSON.stringify(arr));  //[null,null,null]

//正则对象会被转成空对象。
console.log(JSON.stringify(/foo/));  // "{}"


//JSON.stringify方法会忽略对象的不可遍历属性。
let obj1 = {};
Object.defineProperties(obj1, {
    'f1': {
        value: 1,
        enumerable: true
    },
    //f2是obj对象的不可遍历属性，JSON.stringify方法会忽略这个属性。
    'f2': {
        value: 2,
        enumerable: false,
    }
})
console.log(JSON.stringify(obj1)); //'{"f1":1}'