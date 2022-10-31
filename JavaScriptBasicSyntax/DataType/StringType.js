// 字符串类型
var str1 = '他不仅"英俊潇洒"而且还玉树临风';
var str2 = "他不仅'英俊潇洒'而且还玉树临风";
console.log(str1);
console.log(str2);
//字符串转义字符 都是用 / 开头  但是这些 转义字符 必须写在引号里面
var str3 = "他不仅'英俊潇洒'\n而且还玉树临风";
console.log(str3);

alert('由于 HTML 语言的属性值使用双引号，\n 所以约定 JavaScript 语言的字符串只使用单引号，\n "转义符必须要在引号里面使用"')

//字符串拼接
console.log('小兵' + '张嘎');  //小兵张嘎
console.log('小兵' + 18);  //小兵18
console.log(12 + 12);  //24
console.log('12' + 12);  //1212

//字符串拼接加强
console.log('我' + 18 + '岁了');  //我18岁了
var age = 20;
console.log('我' + age + '岁了');  //我18岁了


//btoa() :任何值转为 Base64编码 ； atob（）： Base64编码转为原来的值
var str4 = 'hello';
console.log(btoa(str4)); //aGVsbG8 =
atob('aGVsbG8 =');



