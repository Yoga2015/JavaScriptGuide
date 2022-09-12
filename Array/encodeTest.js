/**
 * -fs.readFile()

  -用来读取指定文件的内容

  -语法：fs.readFile(path,options,callback)

    -path：必选参数，要读取的文件路径

    -options：可选参数，以什么编码格式来读取文件

    -callback：必选参数，读取文件后，通过回调函数拿到读取的结果
 */

const fs = require('fs')

fs.readFile('./file/1.txt', 'utf-8', function (err, dataStr) {
    //打印错误结果，文件读取成功err值等于null
    console.log(err)
    console.log('----------------------')
    //打印成功的结果
    console.log(dataStr)
})

/**
 * -fs.writeFile()

  -用来向指定文件写入内容

  -语法：fs.readFile(path,data,options,callback)

    -path：必选参数，要读取的文件路径

    -data：要写入的内容

    -options：可选参数，以什么编码格式来写入内容

    -callback：必选参数，读取文件后，通过回调函数拿到读取的结果

  -示例代码：
 */

fs.writeFile('./file/1.txt', '写入文件的内容', 'utf-8', function (err) {
    //如果文件写入成功，err等于null
    console.log('err :>> ', err);
})