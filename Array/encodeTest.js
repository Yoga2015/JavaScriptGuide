const fs = require('fs')
fs.readFile('./file/1.txt', 'utf-8', function (err, dataStr) {
    //打印错误结果，文件读取成功err值等于null
    console.log(err)
    console.log('----------------------')
    //打印成功的结果
    console.log(dataStr)
})