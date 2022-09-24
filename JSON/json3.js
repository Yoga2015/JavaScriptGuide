let user = {
    firstName: "san",
    lastName: "zhang",
    get fullName() {
        return this.lastName + this.firstName
    },
}

console.log(JSON.stringify(user));
//{"firstName":"san","lastName":"zhang","fullName":"zhangsan"}


/* JSON.stringify 发现参数对象有 toJSON 方法，
就直接使用这个方法的返回值作为参数，而忽略原对象的其他参数 */
let user2 = {
    firstName: "san",
    lastName: "zhang",
    get fullName() {
        return this.lastName + this.firstName
    },
    toJSON: function () {
        return {
            name: this.lastName + this.firstName
        }
    }

}
console.log(JSON.stringify(user2));  //{"name":"zhangsan"}


let date = new Date('2022-09-23');
console.log(date.toJSON());
console.log(JSON.stringify(date));


let obj3 = {
    reg: /foo/
};
console.log(JSON.stringify(obj3));

RegExp.prototype.toJSON = RegExp.prototype.toString;

console.log(JSON.stringify(/foo/));

JSON.parse(1);
JSON.parse("bar");