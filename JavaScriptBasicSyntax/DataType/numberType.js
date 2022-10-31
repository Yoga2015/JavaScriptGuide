//isNaN（） 用来判断非数字 ，并且返回一个值，如果是数字，返回false，否则 true
console.log(isNaN(123));   //false
console.log(isNaN('我'));  //true
console.log(isNaN([]));  //false
console.log(isNaN({}));  //true
console.log(isNaN(undefined));   //true
console.log(isNaN(null));  //false

// parseInt 将String类型转成整数数值型
var age = '18';
console.log(parseInt(age) + 12);

//parseFloat() 将String类型转成浮点数数值型
var age = '18.91';
console.log(parseFloat(age) + 12);
console.log(typeof age)
console.log(typeof Number(age));