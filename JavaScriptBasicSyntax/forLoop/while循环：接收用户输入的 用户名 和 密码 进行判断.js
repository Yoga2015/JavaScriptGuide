/**  while循环：接收用户输入的 用户名 和 密码 
 *  若用户名 为 admin ,密码 为 123456,则提示用户登录成功；
 *  否则，让用户一直输入。
 * 
 *  使用 while 循环
 *  1、使用 prompt()  弹出 ‘请输入 用户名’ 并保存到 username 变量
 *  2、使用 prompt()  弹出 ‘请输入 密码’ 并保存到 password 变量
 *  3、如果 username ===  'admin'  && password === 123456  
 *  弹出 alert(‘用户登录成功’)，否则弹出 alert(‘请输入正确的用户名和密码！’)
 */
while (true) {
    var username = prompt('请输入 用户名');
    var password = prompt('请输入 密码');
    if (username === 'admin' && password === 123456) {
        alert('用户登录成功');
        break;
    } else {
        alert('请输入正确的用户名和密码！');

    }
}