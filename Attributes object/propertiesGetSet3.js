// let student = { name: 'weige', birthday: '1999-09-19 12:23:11' };
// 达到效果：
// 1. 新增秒龄age存取器，age的修改只能通过“修正birthday时同步修正”.
// 2. 当访问student.age时，返回出生到当前的总秒数

let student = {
    name: 'weige',
    get age() {
        let current = new Date().getTime();
        let birthday = new Date(this.birthday).getTime();  
        return (current - birthday) / (24 * 60 * 60 * 1000 * 365);
    },
    //由于 age 的值是通过 birthday的修改而变更的，所以这里不需要 set设置函数

    get birthday() {
        return this._birthday;
    },
    set birthday(dayVal) {
        this._birthday = dayVal;   //这个 _birthday 变量 是 在运行时新建的。
    }
}

student.birthday = '2010-09-19 12:23:11'

console.log(student.birthday);

console.log(student.age);

console.log(student);


