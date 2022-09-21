let student = { name: 'weige', birthday: '1999-09-19 12:23:11' };

// 达到效果：
// 1. 新增秒龄age存取器，age的修改只能通过“修正birthday时同步修正”.
// 2. 当访问student.age时，返回出生到当前的总秒数

let birthdayVal = null;
let ageVal = null;

student = {
    get age() {
        return birthdayVal / (24 * 60 * 60 * 1000 * 365);
    },
    set age(Val) {

    },
    get birthday() {
        return birthdayVal;
    },
    set birthday(dayVal) {
        console.log(dayVal);
        let current = new Date().getTime();
        let birthday = new Date(dayVal).getTime();
        birthdayVal = current - birthday;

    }
}

student.birthday = '2000-09-19 12:23:11'

console.log(student.birthday);

console.log(student.age);