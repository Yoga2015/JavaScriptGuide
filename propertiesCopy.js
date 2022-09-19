let student = { name: 'weige', birthday: '1999-09-19 12:23:11' }

// 达到效果：
// 1. 新增秒龄age存取器，age的修改只能通过“修正birthday时同步修正”.
// 2. 当访问student.age时，返回出生到当前的总秒数

student = {
    get age() {
        let current = new Date().getTime();
        let birthday = new Date('1999-09-19 12:23:11').getTime();
        return current - birthday
    },
    set age(value) {
        value: 22;
        writable: true;
        enumerable: true;
        configurable: true;
    }
}

console.log(student.age);

student = {
    get birthday() {
        let current = new Date().getTime();
        let birthday = new Date('2020-09-19 12:23:11').getTime();
        student.age = (current - birthday) / (24 * 60 * 60 * 1000 * 365);
        return current - birthday;

    },
    set birthday(value) {
        value: '2020-09-19 12:23:11';
        writable: true;
        enumerable: true;
        configurable: true;
    }
}


console.log(student.birthday);
console.log(student.age);









