// let student = { name: 'weige', age: 22, birthday: '1999-09-19 12:23:11' };

// // 问题：当访问student.age时，返回出生到当前的总秒数

// let today = new Date();
// let onceTime = new Date(student.birthday);
// let second = Math.round((today.getTime() - onceTime.getTime()));
// console.log(second);   //725841244275

// 725841244275 / (24 * 60 * 60 * 1000 * 365);   // 23.016274869197108
// student.age = second;

// student.age; //725841244275 



// let student = {
//     get age() {
//         let today = new Date();
//         let onceTime = new Date(this.birthday);
//         let second = Math.round((today.getTime() - onceTime.getTime()));
//         return second;
//     },

// };




let student = { name: 'weige', age: 22, birthday: '1999-09-19 12:23:11' };
let secondday = student.age;
let bday = student.birthday;

// 问题：当访问student.age时，返回出生到当前的总秒数

// 问题：age的修改只能通过“修正birthday时同步修正”.

Object.defineProperty(student, 'age', {

    set: function (Seconds) {
        let today = new Date();
        let onceTime = new Date(bday);
        let Secondval = Math.round((today.getTime() - onceTime.getTime()));
        let Secondvals = Secondval / (24 * 60 * 60 * 1000 * 365);
        Seconds = Secondvals;
    },

    get: function () {
        let current = new Date().getTime();
        let birthday1 = new Date('1999-09-19 12:23:11').getTime();
        // console.log((current - birthday1) / (24 * 60 * 60 * 1000 * 365));
        return current - birthday1;
    },

});
console.log(student.age);