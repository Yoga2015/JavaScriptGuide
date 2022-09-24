['one', 'two', 'three']
// (3)['one', 'two', 'three']
// 0: "one"
// 1: "two"
// 2: "three"
// length: 3
// [[Prototype]]: Array(0)

{ "one": 1, "two": 2, "three": 3 }
// { one: 1, two: 2, three: 3 }
// one: 1
// three: 3
// two: 2
// [[Prototype]]: Object

{ "name": ["zhangsan", "lisi"] }
// { name: Array(2) }
// name: (2)['zhangsan', 'lisi']
// [[Prototype]]: Object

[{ "name": "zhangsan" }, { "name": "lisi" }]
// (2)[{… }, {… }]
// 0: { name: 'zhangsan' }
// 1: { name: 'lisi' } length: 2
// [[Prototype]]: Array(0)