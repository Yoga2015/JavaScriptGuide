let student = { name: 'weige', birthday: '1999-09-19 12:23:11' }

// 达到效果：
// 1. 新增秒龄age存取器，age的修改只能通过“修正birthday时同步修正”.
// 2. 当访问student.age时，返回出生到当前的总秒数

student = {
    get age() {
        let current = new Date().getTime();
        let birthday = new Date().getTime();
        return current - birthday;
    },
    set age(value) {
        value: 22;
        writable: true;
        enumerable: true;
        configurable: true;
    }
}

student = {
    get birthday() {

    },
    set birthday(value) {
        value: '2019-09-19 12:23:11';
        writable: true;
        enumerable: true;
        configurable: true;
    }
}

for (let i in student) {
    console.log(i)
}

console.log(student.birthday);







